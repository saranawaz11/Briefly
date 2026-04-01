'use client'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function HeroSection() {
    return (
        <section className='relative mx-auto  z-0 flex flex-col items-center justify-center py-16 sm:py-20 lg:py-28 transition-all animate-in lg:px-12 max-w-7xl'>
            <div className='group relative overflow-hidden rounded-full p-[2px] bg-linear-to-r from-rose-300 via-[#9E2A2B] to-[#540B0E] bg-size-[200%_100%] animate-gradient-x'>
                <Badge
                    variant={'secondary'}
                    className='relative flex items-center justify-center gap-2 text-base bg-white group-hover:bg-red-50 rounded-full px-6 py-4 font-medium transition-colors duration-200'
                >
                    <div>
                        <Sparkles
                            size={20}
                            className='text-[#540B0E] animate-pulse shrink-0'
                        />
                    </div>
                    <span className='text-[#540B0E]'>
                        Powered By AI
                    </span>
                </Badge>
            </div>
            <h1 className='text-4xl max-w-3xl lg:text-5xl sm:text-2xl font-bold py-6 text-center'>Hours of reading, <span className='relative inline-block'>
                <span className='z-10 relative px-2'>condensed</span>
                <span className='absolute bg-rose-200/50 inset-0 -rotate-2 rounded-lg transform -skew-y-1' aria-hidden='true'></span>
            </span> into moments of clarity.</h1>
            <h2 className='text-lg sm:text-xl lg:text:text-2xl text-center px-4 lg:px-0 lg:max-w-4xl text-gray-600'>Upload any PDF and let Briefly distil hours of reading into precise, intelligent summary - in seconds.</h2>
            <Button variant={'link'} className='text-white mt-6 text-base sm:text-lg lg:text-xl rounded-full px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-6 shadow-lg transition-all duration-300 lg:mt-10 bg-linear-to-r from-slate-900 to-rose-500 hover:from-rose-500 hover:to-slate-900 hover:no-underline'>
                <Link href='/#pricing' className='flex gap-2 items-center'>
                    <span>Try Briefly</span>
                    <ArrowRight size={32} className='h-9 w-9 animate-pulse' />
                </Link>
            </Button>
        </section>
    )
}
