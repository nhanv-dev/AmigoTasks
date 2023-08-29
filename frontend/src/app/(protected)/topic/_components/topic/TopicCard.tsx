"use client";

import { Topic } from '@/services/topic/types';
import { Button } from '@nextui-org/react';
import DataFormatter from '@util/DataFormatter';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { AiFillStar, AiOutlineFolder } from 'react-icons/ai';
import { BiFolder, BiSolidFolder, BiSolidStar } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';
import { MdOutlineComment, MdOutlineModeComment } from 'react-icons/md';

interface Props {
    topic: Topic;
}

const TopicCard = ({ topic }: Props) => {

    const randomIndex = Math.floor(Math.random() * images.length);
    const randomItem = images[randomIndex];

    return (
        <div className="group relative h-full flex flex-col bg-white border shadow-sm rounded-md dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] transition-all">
            <Link href={`/topic/${topic.id}`} className='relative'>
                <div className='relative h-[200px] w-full'>
                    <div className='group-hover:h-full absolute h-[200px] rounded-t-md w-full bg-cover bg-center'
                        style={{ backgroundImage: `url(${randomItem})` }}
                    >
                        <div className='absolute left-0 top-0 right-0 bottom-0 bg-[rgba(0,0,0,0.1)] rounded-t-md'>

                        </div>
                    </div>
                </div>
                <div className='absolute left-3 bottom-3'>
                    <p className='flex overflow-hidden items-center justify-start gap-2 mt-2'>
                        {topic.tags.slice(0, 3).map((tag, index) => (
                            <TopicTag key={index} index={index} tag={tag} />
                        ))}
                    </p>
                </div>
                {topic.parent &&
                    <div className='absolute left-3 top-3'>
                        <Link href={`/topic/${topic.parent.id}`}
                            className='max-w-[150px] line-clamp-1 text-ellipsis bg-primary-50 px-3 py-1 text-sm font- text-text-50 dark:text-dark-text-50 transition-theme shadow-md rounded-full'>
                            {topic.parent?.title}
                        </Link>
                    </div>
                }
                <div className='absolute right-3 top-3'>
                    <Button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                        }}
                        isIconOnly color="danger" aria-label="Like"
                        className={`${topic.isFeatured ? 'bg-danger' : 'bg-zinc-500 text-zinc-100'} min-w-[26px] min-h-[26px] max-w-[26px] max-h-[26px] p-0 text-[0.9rem] transition-theme shadow-md rounded-full`}
                    >
                        <FaStar />
                    </Button>
                </div>
            </Link>
            <div className="p-3 pb-3 flex flex-col min-h-[90px]">

                <Link href={`/topic/${topic.id}`}
                    className="mb-0.5 text-lg font-bold text-text dark:text-dark-text transition-all"
                >
                    {topic.title}
                </Link>
                <p className="h-[40px] mb-2 flex-1 text-ellipsis line-clamp-2 transition-all text-[0.825rem] font-semibold text-text-50 dark:text-dark-text-50">
                    {topic.description}
                </p>
                <div className='flex items-center gap-4 justify-between'>
                    <p className='text-[0.75rem] text-text-50 dark:text-dark-text-50 transition-theme'>
                        Last edited: {DataFormatter.formatDateToDaysAgo(topic.createdAt)}
                    </p>
                    <div className='flex items-center justify-end gap-2'>
                        <Link href={`/topic/${topic.id}/items`}
                            className='hover:bg-background text-sm font-semibold rounded-full text-text-50 dark:text-dark-text-50 flex items-center gap-1 z-[1]'
                        >
                            <span className='text-[1rem]'>
                                <BiFolder />
                            </span>
                            <span>
                                {topic.numberOfChildren}
                            </span>
                        </Link>
                        <Link href={`/topic/${topic.id}/items`}
                            className='hover:bg-background text-sm font-semibold rounded-full text-text-50 dark:text-dark-text-50 flex items-center gap-1 z-[1]'
                        >
                            <span className='text-[1rem]'>
                                <MdOutlineModeComment />
                            </span>
                            <span>
                                1
                            </span>
                        </Link>
                    </div>
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

const images = [
    'https://images.unsplash.com/photo-1682687218608-5e2522b04673?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80',
    'https://images.unsplash.com/photo-1693032521214-fb25014ac9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    'https://images.unsplash.com/photo-1692980136992-b45785a6116f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
    'https://images.unsplash.com/photo-1693032521206-7920d3607b81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80',
    'https://images.unsplash.com/photo-1692611901268-8e24ed37ee15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1918&q=80',
    'https://images.unsplash.com/photo-1692455742770-ea1293f97c5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2007&q=80',
    'https://images.unsplash.com/photo-1692023350707-33d901c2c4fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
    'https://plus.unsplash.com/premium_photo-1691591182467-b5ffdf32c1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    'https://images.unsplash.com/photo-1692731614030-f71ab6f6f399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1875&q=80',
    'https://images.unsplash.com/photo-1692675368545-04836af4fd38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
];