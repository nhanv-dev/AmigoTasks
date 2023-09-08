"use client";

import { Topic } from '@/services/topic/types';
import { Button } from '@nextui-org/react';
import DataFormatter from '@util/DataFormatter';
import Link from 'next/link';
import { BiFolder } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';
import { MdOutlineModeComment } from 'react-icons/md';
import { backgroundImages } from './TopicImages';
import { useAppDispatch } from '@redux/hook';
import { TopicThunks } from '@redux/features/topic/topicThunks';

interface Props {
    topic: Topic;
}

const TopicCard = ({ topic }: Props) => {

    const dispatch = useAppDispatch();

    return (
        <div className=' border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] transition-all'>
            <Link href={`/topic/${topic.id}`}
                style={{ backgroundImage: `url(${topic.background || backgroundImages[0]})` }}
                className="h-[260px] rounded-md w-full bg-cover bg-center overflow-hidden block group relative "
            >
                {topic?.parent?.title &&
                    <div className='absolute left-1.5 top-1.5'>
                        <Link href={`/topic/${topic.parent?.id}`}
                            className='max-w-full line-clamp-1 text-ellipsis bg-primary-50 px-3 py-1 text-[0.75rem] font-semibold text-text-50 dark:text-dark-text-50 transition-theme shadow-md rounded-full'>
                            {topic.parent?.title}
                        </Link>
                    </div>
                }
                <div className='absolute z-[3] right-1.5 top-1.5'>
                    <Button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            if (!topic) return;
                            dispatch(TopicThunks.update({ id: topic.id, isFeatured: !topic.isFeatured }))
                        }}
                        isIconOnly color="danger" aria-label="Like"
                        className={`${topic.isFeatured ? 'bg-warning/40 text-warning' : 'bg-zinc-400 text-zinc-600'} min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] p-0 text-[0.9rem] transition-theme shadow-md rounded-full`}
                    >
                        <FaStar />
                    </Button>
                </div>
                <div className='absolute bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.6)] backdrop-blur-sm transition-all'>
                    <div className='absolute top-[0] translate-y-[-50%] left-3 flex items-center justify-end gap-2'>
                        <p className='flex overflow-hidden items-center justify-start gap-2'>
                            {topic.tags.slice(0, 3).map((tag, index) => (
                                <TopicTag key={index} index={index} tag={tag} />
                            ))}
                        </p>
                    </div>
                    <div className="px-3 pt-5 pb-3 flex flex-col">
                        <Link href={`/topic/${topic.id}`}
                            className="mb-0.5 text-lg font-bold text-dark-text dark:text-dark-text transition-all"
                        >
                            {topic.title}
                        </Link>
                        <div className='flex items-center gap-4 justify-between'>
                            <p className='text-[0.75rem] font-semibold text-dark-text dark:text-dark-text transition-theme'>
                                {DataFormatter.formatDateToDaysAgo(topic.createdAt)}
                            </p>
                            <Link href={`/topic/${topic.id}/items`}
                                className='relative top-[0.5px] hover:bg-background font-semibold text-dark-text dark:text-dark-text flex items-center gap-1'
                            >
                                <span className='text-[0.85rem]'>
                                    <BiFolder />
                                </span>
                                <span className='text-[0.8rem]'>
                                    {topic.numberOfChildren}
                                </span>
                            </Link>
                        </div>
                        <p className="group-hover:mt-1 group-hover:mb-2 my-0 group-hover:max-h-[40px] max-h-[0px] overflow-hidden flex-1 text-ellipsis line-clamp-2 transition-all text-[0.8rem] font-semibold text-dark-text-50 dark:text-dark-text-50">
                            {topic.description}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default TopicCard;

const TopicTag = ({ index, tag }: { index: number, tag: string }) => {
    if (index % 3 === 0)
        return (
            <Link href={`/topic/tag/${tag}`} className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-1.5 y-0.5 text-xs font-bold text-blue-600"> {tag} </Link>
        )
    if (index % 2 === 0)
        return (
            <Link href={`/topic/tag/${tag}`} className="inline-flex items-center gap-1 rounded-full bg-indigo-50 p1.5  py-0.5 text-xs font-bold text-indigo-600"> {tag} </Link>
        )
    return (
        <Link href={`/topic/tag/${tag}`} className="inline-flex items-center gap-1 rounded-full bg-orange-50 p1.5  py-0.5 text-xs font-bold text-orange-600"> {tag} </Link>
    )
}
