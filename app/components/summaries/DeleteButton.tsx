'use client'
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'
import React, { useState, useTransition } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { toast } from 'sonner'
import { deleteSummaryAction } from '@/actions/summary-actions'


type Props = {
    summaryId: string,
}

export default function DeleteButton({ summaryId }: Props) {

    const [isOpen, setIsOpen] = useState(false);
    const [isPending, startTransition] = useTransition();

    const handleDelete = async () => {
        startTransition(async () => {
            const result = await deleteSummaryAction({ summaryId })
            if (!result.success) {
                toast.error('Summary deletion failed', {
                    description: 'Unable to delete sumamry'
                })
            }
            toast.success('Summary deleted', {
                description: 'Summary deleted successfully!'
            })
            setIsOpen(!isOpen)
        })
    }
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant={'ghost'} size={'icon'} className='text-gray-400 bg-gray-50 border border-gray-200 hover:text-rose-500'>
                    <Trash2 className='w-4 h-4' />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you sure you want to delete?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your summary.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button variant={'ghost'} className='border bg-gray-200 hover:text-gray-600 hover:bg-gray-300' onClick={() => setIsOpen(!open)}>Cancel</Button>
                    <Button className=' hover:bg-gray-600' onClick={handleDelete}>{!isPending ? 'Delete' : 'Deleting...'}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    )
}
