import UploadForm from '@/app/components/home/upload/UploadForm'
import UploadHeader from '@/app/components/home/upload/UploadHeader'
import React from 'react'

export default function page() {
    return (
        <div className='min-h-screen'>
            <div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8'>
                <div className='flex flex-col justify-center items-center gap-6'>
                    <UploadHeader />
                    <UploadForm />
                </div>
            </div>
        </div>
    )
}
