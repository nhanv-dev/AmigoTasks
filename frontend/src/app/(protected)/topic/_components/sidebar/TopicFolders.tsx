"use client";

import HeaderSidebarCard from '@app/(protected)/_components/card/HeaderSidebarCard';
import { TopicSelectors } from '@redux/features/topic/topicSelectors';
import { useAppSelector } from '@redux/hook';
import Link from 'next/link';
import TopicDropdown from './TopicDropdown';
import TreeItem from './TopicFolder';

const TopicFolders = () => {
    const { tree } = useAppSelector(TopicSelectors.getTree());
    return (
        <div className='p-4'>
            <HeaderSidebarCard title={
                <Link href={'/topic'}>
                    My list
                </Link>
            }>
                <TopicDropdown />
            </HeaderSidebarCard>
            {tree.map(item => {
                if (item.root.parent) return;
                return <TreeItem key={item.root.id} item={item} />
            })}
        </div>
    )
}

export default TopicFolders;