import { Card } from '@/components/ui/card'
import type { Summary } from '@/lib/summaries'
import { File } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import DeleteButton from './DeleteButton'
import StatusBadge from './StatusBadge'
import { formatDistanceToNow } from 'date-fns'
import { formatFileName } from '@/utils/format-utlils'
export default function SummaryCard({ item }: { item: Summary }) {
    return (
        <div className=''>
            <Card className=' p-4'>
                <div className='grid grid-cols-[auto_1fr_auto] items-center'>
                    <File className='h-8 w-8 text-rose-400' />
                    <div className='flex flex-col justify-start px-3'>
                        <Link href={`/summaries/${item.id}`} className='text-xl font-bold capitalize truncate w-4/5'>{item.title || formatFileName(item.fileUrl)}</Link>
                        <p className='text-gray-500'>{formatDistanceToNow(new Date(item.createdAt), {
                            addSuffix: true,
                            includeSeconds: true,
                        })}</p>
                    </div>
                    <DeleteButton summaryId={item.id} />
                </div>

                <div>
                    <p className='line-clamp-2 text-gray-500 mb-4'>{item.content}</p>
                </div>
                <div className=''>
                    <StatusBadge status={item.status} />
                </div>
            </Card>
        </div>
    )
}
