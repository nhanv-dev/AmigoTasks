"use client";

import { TopicThunks } from '@redux/features/topic/topicThunks';
import React from 'react';
import TopicFolders from './_components/sidebar/TopicFolders';
import { useAppDispatch } from '@redux/hook';
import { backgroundImages } from './_components/topic/TopicImages';

export default function WorkSpaceLayout({ children }: { children: React.ReactNode }) {
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        const fetch = async () => {
            Promise.all([
                dispatch(TopicThunks.getByRoot()),
            ])
        }
        fetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <main>
            <div className='flex relative'>
                <div
                    style={{ backgroundImage: `url(${backgroundImages[0]})` }}
                    className='z-0 absolute left-0 right-0 w-full h-[450px] bg-fixed bg-cover bg-center bg-no-repeat'
                >
                    <div className='z-0 absolute top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.4)]' />
                </div>
                <div className='h-[calc(100vh-58px-32px)] min-w-[280px] w-[280px] sticky top-0 p-4 pr-0'>
                    <TopicFolders />
                </div>
                <div className='flex-1'>
                    {children}
                </div>
            </div>
        </main>
    )
}

