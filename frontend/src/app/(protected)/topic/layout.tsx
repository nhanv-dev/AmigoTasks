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
                // setLayout({ isOpenSidebar: true, contentSidebar: <TopicFolders /> })
            ])
        }
        fetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <main>
            <div className='flex relative'>
                <div className='h-[calc(100vh-58px-32px)] min-w-[280px] w-[280px] sticky top-0'>
                    <TopicFolders />
                </div>
                <div className='flex-1'>
                    {children}
                </div>
            </div>
        </main>
    )
}

