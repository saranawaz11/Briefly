import SummaryHeader from '@/app/components/summaries/SummaryHeader';
import { getSummaryById } from '@/lib/summary';
import { read } from 'fs';
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
  const { created_at, word_count } = summary;
  const readingTime = Math.ceil((word_count || 0) /200)

  return (
    <div className='min-h-screen py-6 sm:px-6 lg:px-8 sm:py-12 lg:py-24'>
      <SummaryHeader createdAt={created_at} readingTime={readingTime}/>
    </div>
  )
}
