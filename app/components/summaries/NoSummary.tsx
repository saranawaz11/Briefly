import { Button } from '@/components/ui/button'
import { FileText } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function NoSummary() {
  return (
    <div className='flex flex-col justify-center items-center py-12 text-center'>
      <FileText className='w-12 h-12 text-gray-400'/>
      <h1 className='text-xl font-semibold text-gray-600'>No summaries yet</h1>
      <p className='text-gray-500 py-2'>Upload your first PDF to get started with AI-powered summaries.</p>
      <Link href={'/upload'} className='mt-4'>
        <Button className='capitalize text-white bg-linear-to-r from-rose-500 to-rose-700 hover:from-rose-600 hover:to-rose-800 hover:no-underline' variant={'link'}>Create your first summary</Button>
      </Link>
    </div>
  )
}
