import { Badge } from '@/components/ui/badge'
import { Sparkles } from 'lucide-react'
import React from 'react'

export default function HeroSection() {
    return (
        <div className='flex items-center justify-center h-full'>
            <div className='group relative overflow-hidden rounded-full p-[2px] bg-linear-to-r from-rose-300 via-[#9E2A2B] to-[#540B0E] bg-size-[200%_100%] animate-gradient-x'>
                <Badge
                    variant={'secondary'}
                    className='relative flex items-center justify-center gap-2 text-base bg-white group-hover:bg-red-50 rounded-full px-6 py-4 font-medium transition-colors duration-200'
                >
                    <div>
                        <Sparkles
                            size={20}
                            className='text-[#540B0E] animate-pulse shrink-0'
                        />
                    </div>
                    <span className='text-[#540B0E]'>
                        Powered By AI
                    </span>
                </Badge>
            </div>
        </div>
    )
}
