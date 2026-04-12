import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'
import React from 'react'

export default function DeleteButton() {
  return (
    <div>
        <Button variant={'ghost'} size={'icon'} className='text-gray-400 bg-gray-50 border border-gray-200 hover:bg-rose-500'>
            <Trash2 className='w-4 h-4'/>
        </Button>
    </div>
  )
}
