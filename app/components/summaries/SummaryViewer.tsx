import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const parseSection = (section: string) => {
    const [title, content] = section.split('\n')
    return { title, content };
}

export default function SummaryViewer(
    {summary} : { summary: string }
) {

    const sections = summary
        .split('\n#')
        .map((section) => section.trim())
        .filter(Boolean)
        .map(parseSection);
  return (
    <div className='w-full'>
        <Card>
            <CardHeader>
                <CardTitle>Card</CardTitle>
            </CardHeader>
            <CardContent>{JSON.stringify(sections)}</CardContent>
        </Card>
    </div>
  )
}
