"use client";

import { TopicSelectors } from '@redux/features/topic/topicSelectors';
import { TopicThunks } from '@redux/features/topic/topicThunks';
import { useAppDispatch, useAppSelector } from '@redux/hook';
import Link from 'next/link';
import { useEffect } from 'react';
import TopicDropdown from './TopicDropdown';
import TopicItem from './TopicItem';

const TopicList = () => {
    const { tree } = useAppSelector(TopicSelectors.getTree());
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(TopicThunks.getByRoot())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className=''>
            <div className='flex items-center justify-between gap-3'>
                <Link href={'/topic'}
                    className='flex items gap-2 capitalize text-[0.75rem] font-bold text-text-50 dark:text-dark-text-50 transition-theme'>
                    <img
                        className='w-[16px] h-[16px]'
                        src='https://cdn-icons-png.flaticon.com/128/4215/4215246.png' alt='topic' />
                    Topic
                </Link>
                <div className='flex items-center gap-1'>
                    <TopicDropdown />
                </div>
            </div>
            <div className={`mt-2 transition-all overflow-hidden`}>
                {tree.map(item => {
                    if (item.root.parent) return;
                    return <TopicItem key={item.root.id} item={item} />
                })}
            </div>
        </div>
    )
}

export default TopicList;