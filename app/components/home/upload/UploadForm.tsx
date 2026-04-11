'use client'
import React from 'react'
import FormInput from '@/app/components/home/upload/FormInput'
import fileSchema from '@/lib/zod-schema';
import { useUploadThing } from '@/utils/uploadthing';
import { toast } from 'sonner';
import { generatePdfSummary, storePdfSummaryAction } from '@/actions/upload-action';
import { useRouter } from 'next/navigation';

export default function UploadForm() {
    const formRef = React.useRef<HTMLFormElement>(null);
    const [title, setTitle] = React.useState('');
    const router = useRouter()
    const { startUpload } = useUploadThing("pdfUploader", {
        onClientUploadComplete: () => {
            console.log("uploaded successfully!");
        },
        onUploadError: (err) => {
            console.log("error occurred while uploading", err);
            toast.error("Error occurred while uploading", {
                description: err.message,
            })
        },
        onUploadBegin: (fileName) => {
            console.log("upload has begun for", fileName);
        },
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Submitted');
        const formData = new FormData(e.currentTarget);
        const file = formData.get('file') as File;
        console.log(file);

        // validating the fields
        const validatedFields = fileSchema.safeParse({ file });
        if (!validatedFields.success) {
            console.log(
                validatedFields.error.flatten().fieldErrors.file?.[0] ?? 'Invalid file'
            );
            toast.error("Something went wrong", {
                description:
                    validatedFields.error.flatten().fieldErrors.file?.[0] ??
                    "Invalid file",
            });
            return;
        }

        toast.success("Uploading PDF...", {
            description: (
                <span style={{ color: "#335C67" }}>
                    We are uploading your PDF!
                </span>
            ),
        })

        //upload the file to uploading
        const response = await startUpload([file]);
        console.log("UPLOAD RESPONSE:", response);
        if (!response) {
            toast.error("Something went wrong", {
                description: 'Please use a different file',
            })
            return;
        }

        toast.success("Processing PDF", {
            description: (
                <span style={{ color: "#335C67" }}>
                    Hang tight! Our AI is reading through your PDF!
                </span>
            ),
        });


        // parse the pdf using lang chain
        const result = await generatePdfSummary(response);
        console.log('summary is:- ', { result });
        const { data = null, message = null, success = false } = result || {};

        if (!success || !data) {
            toast.error("Failed to generate summary", {
                description: message ?? "Please try again.",
            });
            return;
        }

        setTitle(data.title ?? '');
        toast.success('Saving PDF...', {
            description: 'Hang tight! We are saving your summary!'
        })

        if (data.summary) {
            const storeResult = await storePdfSummaryAction({
                summary: data.summary,
                fileUrl: response[0].serverData.file.ufsUrl,
                title: data.title,
                fileName: file.name,
            });

            if (!storeResult.success) {
                toast.error("Failed to save summary", {
                    description: storeResult.message,
                });
                return;
            }

            const savedId = storeResult.data?.id;
            if (!savedId) {
                toast.error("Saved, but no summary id returned", {
                    description: "You can open your summaries list from the menu.",
                });
                return;
            }

            toast.success("Summary Generated!", {
                description: 'Your PDF has been successfully summarized and saved!',
            });
            formRef.current?.reset();
            router.push(`/summaries/${savedId}`);
        }
    }



    return (
        <div className='flex flex-col gap-8 w-full max-w-2xl mx-auto'>
            <FormInput onSubmit={handleSubmit} formRef={formRef} title={title} />
        </div>
    )
}
