"use client";

import { useLayoutContext } from '@provider/LayoutProvider';
import React, { useEffect } from 'react'
import WorkspaceList from './_components/sidebar/WorkspaceList';
import { useAppDispatch } from '@redux/hook';
import { WorkspaceThunks } from '@redux/features/workspace/workspaceThunks';

export default function WorkSpaceLayout({ children }: { children: React.ReactNode }) {
    const { setLayout } = useLayoutContext();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(WorkspaceThunks.getAll())
        setLayout({ isOpenSidebar: true, contentSidebar: <WorkspaceList /> })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <main>
            {children}
        </main>
    )
}

