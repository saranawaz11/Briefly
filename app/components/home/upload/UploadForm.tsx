'use client'
import React from 'react'
import FormInput from '@/app/components/home/upload/FormInput'
import fileSchema from '@/lib/zod-schema';

export default function UploadForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Submitted');
        const formData = new FormData(e.currentTarget);
        const file = formData.get('file') as File;
        console.log(file);
        
        // validating the fields
        const validatedFields = fileSchema.safeParse({file});
        if(!validatedFields.success){
            console.log(
                validatedFields.error.flatten().fieldErrors.file?.[0] ?? 'Invalid file'
            );
            return;
        }
    }


  return (
    <div className='flex flex-col gap-8 w-full max-w-2xl mx-auto'>
        <FormInput onSubmit={handleSubmit}/>
    </div>
  )
}
