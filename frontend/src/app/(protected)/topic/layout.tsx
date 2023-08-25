"use client";

import { useLayoutContext } from '@provider/LayoutProvider';
import { TopicThunks } from '@redux/features/topic/topicThunks';
import { useAppDispatch } from '@redux/hook';
import React, { useEffect } from 'react';
import TopicFolders from './_components/sidebar/TopicFolders';

export default function WorkSpaceLayout({ children }: { children: React.ReactNode }) {
    const { setLayout } = useLayoutContext();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(TopicThunks.getAll())
        setLayout({ isOpenSidebar: true, contentSidebar: <TopicFolders /> })
    }, [])

    return (
        <main>
            {children}
        </main>
    )
}

