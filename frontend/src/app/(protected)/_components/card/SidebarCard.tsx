import { ScrollShadow } from '@nextui-org/react';
import React from 'react'

interface Props {
    children: React.ReactNode;
}

const SidebarCard = ({ children }: Props) => {
    return (
        <div className='sticky top-4 min-w-full overflow-hidden rounded-md shadow-sm bg-background dark:bg-dark-background transition-theme transition-all p-4 pr-2'>
            <ScrollShadow className=" h-[calc(100vh-74px-64px)] pr-2 pb-8" hideScrollBar={true}>
                {children}
            </ScrollShadow>
        </div>
    )
}

export default SidebarCard