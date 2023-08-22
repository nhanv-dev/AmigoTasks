import { ScrollShadow } from '@nextui-org/react';
import React from 'react'

interface Props {
    header?: React.ReactNode;
    children: React.ReactNode;
}

const SidebarCard = ({ children, header }: Props) => {
    return (
        <div className='flex flex-col h-full p-4 pr-2 bg-background dark:bg-dark-background rounded-md transition-theme '>
            <div className='pr-2'>
                {header}
            </div>
            <ScrollShadow hideScrollBar className='flex-1 pr-2'>
                {children}
            </ScrollShadow>
        </div>
    )
}

export default SidebarCard