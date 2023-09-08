"use client";

import { TopicThunks } from '@redux/features/topic/topicThunks';
import { useAppDispatch } from '@redux/hook';
import React from 'react';

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
            {children}
        </main>
    )
}

