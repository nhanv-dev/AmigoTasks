import { ScrollShadow } from '@nextui-org/react';
import React from 'react'

interface Props {
    children: React.ReactNode;
}

const SidebarCard = ({ children }: Props) => {
    return (
        <div className='sticky top-4 bottom-4 min-w-full overflow-hidden rounded-md shadow-sm bg-background dark:bg-dark-background transition-theme transition-all '>
            <ScrollShadow className="h-[calc(100vh-58px-32px)] p-4" hideScrollBar>
                {children}
            </ScrollShadow>
        </div>
    )
}

export default SidebarCard