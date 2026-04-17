import SourceInfo from '@/app/components/summaries/SourceInfo';
import SummaryHeader from '@/app/components/summaries/SummaryHeader';
import SummaryViewer from '@/app/components/summaries/SummaryViewer';
import { getSummaryById } from '@/lib/summary';
import { read } from 'fs';
import { FileText } from 'lucide-react';
import { notFound } from 'next/navigation';
import React from 'react'

export default async function page(
  {params} : {
    params: Promise<{id: string}>
  }
) {
  const { id } = await params;
  // console.log('Params is:- ', id);
  const summary = await getSummaryById(id);
  // console.log('Summaries are:- ', summary);

  
  if(!summary){
    notFound();
  }
  const { created_at, word_count, title, original_file_url, summary_text, file_name } = summary;
  const readingTime = Math.ceil((word_count || 0) /200)
  // console.log('Summary from id is:- ', summary);


  return (
    <div className='min-h-screen py-6 sm:px-6 lg:px-8 sm:py-12 lg:py-24'>
      <SummaryHeader createdAt={created_at} readingTime={readingTime}/>
      <div className='mt-9'>
        <SourceInfo fileName={file_name} originalFileUrl={original_file_url} createdAt={created_at} summaryText={summary_text} title={title} />
      </div>
      <div className='my-4 sm:mt-8 lg:mt-16'>
        <div className='p-4 sm:p-6 lg:p-8 bg-gray-100/70 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-xl border border-grey-100/30 transition-all duration-300 hover:shadow-2xl hover:bg-white/90 max-w-4xl mx-auto'>
          <div className='flex items-center justify-end gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground  px-2 sm:px-3 py-1 sm:py-1.5'>
            <FileText className='h-3 w-3 sm:h-4 sm:w-4 text-rose-400' />
            {word_count?.toLocaleString()}words
          </div>
          <div className=''>
            <SummaryViewer summary={summary.summary_text} />
          </div>
        </div>
      </div>
      {/* <div className='h-screen bg-green-300'></div> */}
    </div>
  )
}
