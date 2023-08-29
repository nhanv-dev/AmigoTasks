"use client";

import { TopicThunks } from '@redux/features/topic/topicThunks';
import React from 'react';
import TopicFolders from './_components/sidebar/TopicFolders';
import { useAppDispatch } from '@redux/hook';
import { useLayoutContext } from '@provider/LayoutProvider';

export default function WorkSpaceLayout({ children }: { children: React.ReactNode }) {
    const dispatch = useAppDispatch();
    const { setLayout } = useLayoutContext();

    React.useEffect(() => {
        const fetch = async () => {
            Promise.all([
                dispatch(TopicThunks.getByRoot()),
                setLayout({ isOpenSidebar: true, contentSidebar: <TopicFolders /> })
            ])
        }
        fetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <main>
            {children}
        </main>
    )
}

