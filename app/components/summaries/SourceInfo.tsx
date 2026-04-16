import { ExternalLink, FileText } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import DownloadSummary from './DownloadSummary'

type Props = {
    fileName: string;
    originalFileUrl: string;
}

export default function SourceInfo(
    { fileName,originalFileUrl } : Props
) {
  return (
    <div className=''>
        <h1 className='text-2xl lg:text-4xl font-bold lg:tracking-tight '>
            <span className='bg-linear-to-r from-rose-800 to-orange-500 bg-clip-text text-transparent'>
                {fileName}
            </span>  
        </h1>
        <div>
            <div className='flex gap-2 justify-center items-center'>
                <FileText className='h-4 w-4 text-rose-400'/>
                Source: {fileName}
            </div>
            <div>
                <Link href={originalFileUrl} className='flex justify-center items-center gap-2'>
                    <ExternalLink className='h-4 w-4 text-rose-400'/>
                    View Original
                </Link>
                <DownloadSummary/>
            </div>
        </div>
    </div>
  )
}
