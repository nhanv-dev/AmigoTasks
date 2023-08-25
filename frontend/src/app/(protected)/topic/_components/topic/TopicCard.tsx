"use client";

import { Topic } from '@/services/topic/types';
import DataFormatter from '@util/DataFormatter';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BiSolidFolder } from 'react-icons/bi';

interface Props {
    topic: Topic;
}
{/* <img className="w-full h-auto rounded-t-md" src="https://th.bing.com/th/id/OIP.9utSsdFThDFb9yjvgt2NsQHaEK?pid=ImgDet&rs=1" alt="Image Description" /> */ }

const TopicCard = ({ topic }: Props) => {

    return (
        <div className="relative h-full flex flex-col bg-white border shadow-sm rounded-md dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] transition-all">
            <Link href={`/topic/${topic.id}`} className='relative'>
                <Image
                    src={"/images/topic-bg.jpg"}
                    alt='Image Description'
                    width="400"
                    height="400" 
                    priority={false}
                    className='w-full h-auto rounded-t-md' />
                <div className='absolute left-3 bottom-3'>
                    <p className='flex overflow-hidden items-center justify-start gap-2 mt-2'>
                        {topic.tags.slice(0, 3).map((tag, index) => (
                            <TopicTag key={index} index={index} tag={tag} />
                        ))}
                    </p>
                </div>

            </Link>
            <div className="p-3 pb-3">
                <Link href={`/topic/${topic.id}`}
                    className="text-lg font-bold text-text dark:text-dark-text transition-all"
                >
                    {topic.title}
                </Link>
                <p className="transition-all text-[0.825rem] font-semibold mt-1 text-text-50 dark:text-dark-text-50 whitespace-nowrap overflow-hidden text-ellipsis">
                    {topic.description}
                </p>
                <div className='mt-3 flex items-center gap-4 justify-between'>
                    <p className='text-xs text-text-50 dark:text-dark-text-50 transition-theme'>
                        {DataFormatter.formatDate(topic.createdAt)}
                    </p>
                    {topic.numberOfChildren > 0 &&
                        <Link href={`/topic/${topic.id}/item`}
                            className='hover:bg-background text-sm font-semibold px-2 py-0.5 rounded-full text-text dark:text-dark-text flex items-center gap-1 z-[1]'
                        >
                            <span>
                                <BiSolidFolder />
                            </span>
                            <span>
                                {topic.numberOfChildren} item
                            </span>
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default TopicCard;

const TopicTag = ({ index, tag }: { index: number, tag: string }) => {
    if (index % 3 === 0)
        return (
            <Link href={`/topic/tag/${tag}`} className="inline-flex items-center gap-1 rounded-sm bg-blue-50 px-2 py-1 text-xs font-bold text-blue-600"> {tag} </Link>
        )
    if (index % 2 === 0)
        return (
            <Link href={`/topic/tag/${tag}`} className="inline-flex items-center gap-1 rounded-sm bg-indigo-50 px-2 py-1 text-xs font-bold text-indigo-600"> {tag} </Link>
        )
    return (
        <Link href={`/topic/tag/${tag}`} className="inline-flex items-center gap-1 rounded-sm bg-orange-50 px-2 py-1 text-xs font-bold text-orange-600"> {tag} </Link>
    )
}