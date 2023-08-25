"use client";

import SidebarCard from '@app/(protected)/_components/card/SidebarCard';
import { TopicSelectors } from '@redux/features/topic/topicSelectors';
import { TopicThunks } from '@redux/features/topic/topicThunks';
import { useAppDispatch, useAppSelector } from '@redux/hook';
import { useEffect, useState } from 'react';
import TreeItem from './TopicFolder';
import HeaderSidebarCard from '@app/(protected)/_components/card/HeaderSidebarCard';
import TopicDropdown from './TopicDropdown';
import Link from 'next/link';

const TopicFolders = () => {
    const dispatch = useAppDispatch();
    const { tree } = useAppSelector(TopicSelectors.getTree());
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        dispatch(TopicThunks.getByRoot());
    }, [])

    const onOpenChange = (value: boolean) => {
        setOpen(value)
    }

    return (
        <SidebarCard>
            <HeaderSidebarCard title={
                <Link href={'/topic'}>
                    My list
                </Link>
            }>
                <TopicDropdown onOpenChange={onOpenChange} />
            </HeaderSidebarCard>
            {tree.map(item => {
                if (item.root.parent) return;
                return <TreeItem key={item.root.id} item={item} />
            })}
        </SidebarCard>
    )
}

export default TopicFolders;