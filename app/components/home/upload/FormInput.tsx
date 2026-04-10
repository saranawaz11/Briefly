'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

type Props = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    formRef: React.RefObject<HTMLFormElement | null>;
    title: string;
}

export default function FormInput(
    { onSubmit, formRef, title }: Props
) {
    return (
        <div>
            <form action="" className='flex flex-col gap-6' onSubmit={onSubmit} ref={formRef}>
                {title ? (
                    <p className='text-sm text-slate-600'>
                        Title: <span className='font-medium'>{title}</span>
                    </p>
                ) : null}
                <div className='flex justify-end items-center gap-1.5'>
                    <Input type='file' accept='application/pdf' required className='' id='file' name='file' />
                    <Button className='bg-rose-400 text-white'>Upload PDF</Button>
                </div>
            </form>
        </div>
    )
}
