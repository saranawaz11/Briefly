'use client'
import React from 'react'
import FormInput from '@/app/components/home/upload/FormInput'
import fileSchema from '@/lib/zod-schema';
import { useUploadThing } from '@/utils/uploadthing';

export default function UploadForm() {



    const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
        onClientUploadComplete: () => {
            console.log("uploaded successfully!");
        },
        onUploadError: (err) => {
            console.log("error occurred while uploading", err);
        },
        onUploadBegin: ({ file }) => {
            console.log("upload has begun for", file);
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
            return;
        }

        //upload the file to uploading
        const response = await startUpload([file]);
        console.log("UPLOAD RESPONSE:", response);
        if (!response) {
            return;
        }
    }


    return (
        <div className='flex flex-col gap-8 w-full max-w-2xl mx-auto'>
            <FormInput onSubmit={handleSubmit} />
        </div>
    )
}
