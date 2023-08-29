import React from 'react';

interface Props {
    title: React.ReactNode;
    children?: React.ReactNode;
}

const HeaderSidebarCard = ({ title, children }: Props) => {
    return (
        <div className='flex items-center justify-between gap-3 mb-2 pr-1'>
            <div className='text-[1.1rem] font-bold text-text dark:text-dark-text transition-theme'>
                {title}
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default HeaderSidebarCard