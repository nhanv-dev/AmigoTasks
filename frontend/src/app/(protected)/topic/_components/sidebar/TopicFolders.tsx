"use client";

import { TopicSelectors } from '@redux/features/topic/topicSelectors';
import { useAppSelector } from '@redux/hook';
import Link from 'next/link';
import TopicDropdown from './TopicDropdown';
import TreeItem from './TopicFolder';

const TopicFolders = () => {
    const { tree } = useAppSelector(TopicSelectors.getTree());
    return (
        <div className='p-4'>
            <div className='flex items-center justify-between gap-3 mb-2 pr-2'>
                <div className='text-[1.1rem] font-bold text-text dark:text-dark-text transition-theme'>
                    <Link href={'/topic'}>
                        My list
                    </Link>
                </div>
                <div>
                    <TopicDropdown />
                </div>
            </div>
            {tree.map(item => {
                if (item.root.parent) return;
                return <TreeItem key={item.root.id} item={item} />
            })}
        </div>
    )
}

export default TopicFolders;