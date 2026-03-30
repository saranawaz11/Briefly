'use client'
import { UserButton } from '@clerk/nextjs'
import React from 'react'
import { ModeToggle } from './ModeToggle'

export default function Profile() {
  return (
    <div className='flex gap-x-2'>
        <UserButton afterSwitchSessionUrl="/" />
        <ModeToggle/>
    </div>
  )
}
