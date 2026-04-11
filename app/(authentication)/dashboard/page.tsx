import { Button } from '@/components/ui/button'
import { ArrowRight, Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <main className='min-h-screen'>
            <div className='container mx-auto flex flex-col gap-4'>
                <div className='px-2 py-12 sm:py-24'>
                    <div className='flex gap-4 mb-8 justify-between'>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-4xl font-bold tracking-tight'>Your Summaries</h1>
                            <p className='text-gray-600'>Transform your PDFs into concise actionable insights</p>

                        </div>
                        <div>
                            <Button className='bg-linear-to-r from-rose-500 to-rose-700 hover:from-rose-600 hover:to-rose-800 hover:no-underline' variant={'link'}>
                                <Link href={'/upload'} className='flex items-center text-white '>
                                    <Plus className='w-5 h-5 mr-2' />
                                    New Summary
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p className='text-sm'>
                                You have reached the limit of 5 uploads on the Basic plan.
                                <Link href={'/#pricing'}>
                                    Click here to upgrade to pro 
                                    <ArrowRight className='h-4 w-4 inline-block'/> for unlimited uploads.
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
