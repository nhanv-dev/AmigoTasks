"use client";

import { WorkspaceThunks } from '@redux/features/workspace/workspaceThunks';
import { useAppDispatch } from '@redux/hook';
import React, { useEffect } from 'react';
import WorkspaceList from './_components/sidebar/WorkspaceList';

export default function WorkSpaceLayout({ children }: { children: React.ReactNode }) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(WorkspaceThunks.getAll())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <main>
            <div className='p-4 flex items-start'>
                <div className='w-[250px]'>
                    <WorkspaceList />
                </div>
                <div className='flex-1'>
                    {children}
                </div>
            </div>
        </main>
    )
}

