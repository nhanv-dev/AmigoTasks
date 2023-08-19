"use client";

import { Topic } from '@/services/topic/types';
import Link from 'next/link';
import React from 'react'

interface Props {
    topic: Topic;
}

const TopicCard = ({ topic }: Props) => {

    return (
        <div className="flex flex-col bg-white border shadow-sm rounded-md dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] transition-all">
            <Link href={`${topic.slug}`}>
                <img className="w-full h-auto rounded-t-md" src="https://th.bing.com/th/id/OIP.9utSsdFThDFb9yjvgt2NsQHaEK?pid=ImgDet&rs=1" alt="Image Description" />
            </Link>
            <div className="p-3 pb-5">
                <Link href={`${topic.slug}`}
                    className="text-lg font-bold text-text dark:text-dark-text transition-all"
                >
                    {topic.title}
                </Link>
                <p className="transition-all text-sm font-semibold mt-1 text-text-50 dark:text-dark-text-50 whitespace-nowrap overflow-hidden text-ellipsis">
                    {topic.description}
                </p>
                <p className='flex overflow-hidden items-center justify-start gap-2 mt-2'>
                    {topic.tags.slice(0, 3).map((tag, index) => (
                        <TopicTag key={index} index={index} tag={tag} />
                    ))}
                </p>

            </div>
        </div>
    )
}

export default TopicCard;

const TopicTag = ({ index, tag }: { index: number, tag: string }) => {
    if (index % 3 === 0)
        return (
            <Link href={`/topic/tag/${tag}`} className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-bold text-blue-600"> {tag} </Link>
        )
    if (index % 2 === 0)
        return (
            <Link href={`/topic/tag/${tag}`} className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-bold text-indigo-600"> {tag} </Link>
        )
    return (
        <Link href={`/topic/tag/${tag}`} className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-bold text-orange-600"> {tag} </Link>
    )
}