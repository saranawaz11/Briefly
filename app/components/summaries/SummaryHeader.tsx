import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, Sparkles } from 'lucide-react'
import Link from 'next/link';
import React from 'react'

type Props = {
    createdAt: string;
    readingTime: number;
}

export default function SummaryHeader(
    { createdAt, readingTime }: Props
) {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex gap-9'>
            <div className=''>
                <Badge variant={'secondary'} className='hover:bg-black/10'>
                    <Sparkles className='w-4 h-5 text-rose-500 animate-pulse'/>
                    AI Summary
                </Badge>
            </div>

            <div className='flex justify-center items-center gap-2'>
                <Calendar className='h-4 w-4 text-rose-400'/>
                {new Date(createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit'
                })}
            </div>
            <div className='flex justify-center items-center gap-2'>
                <Clock className='h-4 w-4 text-rose-400'/>
                {readingTime} min Time
            </div>
        </div>
        <div className=''>
            <Link href='/dashboard'>
                <Button className='group gap-1 sm:gap-2 py-1.5 rounded-full hover:bg-rose-200 backdrop-blur-xs hover:no-underline shadow-xs hover:shadow-md border-rose-100/30 bg-rose-100 px-2 sm:px-3' variant={'link'} size={'sm'}>
                    <ArrowLeft/>
                    Back to Dashboard
                </Button>
            </Link>
        </div>
    </div>
  )
}
