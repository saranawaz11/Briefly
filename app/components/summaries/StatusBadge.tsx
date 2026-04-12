import React from 'react'

type status = {
    status: string
}

export default function StatusBadge({status} : status) {
  return (
    <div>
        <p className={`w-fit rounded px-1 ${status === 'completed' ? 'bg-green-200 text-green-600' : 'bg-rose-200 text-rose-600'}`}>
            {status}
        </p>
    </div>
  )
}
