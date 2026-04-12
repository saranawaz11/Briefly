import SummaryCard from '@/app/components/summaries/SummaryCard'
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

                    <div className='mb-6'>
                        <div className='bg-rose-50 border border-rose-200 rounded-lg p-4 text-rose-800'>
                            <p className='text-sm'>
                                You have reached the limit of 5 uploads on the Basic plan.{' '}
                                <Link href={'/#pricing'} className='text-rose-800 underline font-medium underline-offset-4 inline-flex items-center'>
                                    {' '}Click here to upgrade to pro
                                    <ArrowRight className='h-4 w-4 inline-block ml-1' /> 
                                </Link>
                                {' '}for unlimited uploads.
                            </p>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 sm:px-0'>
                        {[...Array(5)].map((_, index) => (
                            <SummaryCard key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}
