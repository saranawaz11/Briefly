import { Card } from '@/components/ui/card'
import { Delete, File } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import DeleteButton from './DeleteButton'

export default function SummaryCard() {
    return (
        <div className=''>
            <Card className=' p-4'>
                <div className='grid grid-cols-[auto_1fr_auto] items-center'>
                    <File className='h-8 w-8 text-rose-400' />
                    <div className='flex flex-col justify-start px-3'>
                        <Link href={`summaries/summary.id`} className='text-xl font-bold capitalize'>First title menu</Link>
                        <p className='text-gray-500'>8 minutes ago</p>
                    </div>
                    <DeleteButton/>
                </div>

                <div>
                    <p className='line-clamp-2 text-gray-500 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, dolores totam? Debitis, itaque pariatur fugit sapiente cupiditate exercitationem. Saepe illo quam reiciendis! Pariatur perspiciatis laudantium rerum corporis minus, porro earum.</p>
                </div>
                <p className='bg-green-100 text-green-600 w-fit px-1 rounded'>
                    completed
                </p>
            </Card>
        </div>
    )
}
