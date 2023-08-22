"use client";

import { useLayoutContext } from '@provider/LayoutProvider';
import React from 'react'
import WorkSpaceList from './_components/workspace/WorkspaceList';

export default function WorkSpaceLayout({ children }: { children: React.ReactNode }) {
    const { layout } = useLayoutContext();

    return (
        <div>
            <div className={`${layout.openSidebar ? 'w-[350px] opacity-0' : 'w-[350px] opacity-100'} z-10 fixed left-[80px] top-[74px] bg-background-50 dark:bg-dark-background-50 transition-all overflow-hidden bottom-0`}>
                <div className="min-w-[350px] overflow-hidden h-full p-4 pr-0">
                    <WorkSpaceList />
                </div>
            </div>
            <div className={`${layout.openSidebar ? 'ml-0' : 'ml-[350px]'} transition-all`}>
                {children}
            </div>
        </div>
    )
}

