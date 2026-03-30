'use client'
import { SignUpButton, useUser } from '@clerk/nextjs'
import React from 'react'
import Profile from './Profile'
import { FileText } from 'lucide-react'

export default function Navbar() {
    const { isSignedIn } = useUser()
    return (
        <div className='flex justify-between p-6 items-center bg-amber-100'>
            <div className='flex gap-x-1 items-center'>
                <FileText className='h-5 w-5 hover:scale-105 hover:rotate-12 transition transform ease-in-out duration-200'/>
                <p className='font-bold text-3xl'>Briefly</p>
            </div>
            <div>
                {isSignedIn ? (
                    <Profile/>
                ) : (
                    <SignUpButton>
                        <button className="font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                            Sign Up
                        </button>
                    </SignUpButton>
                )}
            </div>
        </div>
    )
}
