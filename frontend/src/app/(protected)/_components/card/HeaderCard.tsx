import React from 'react'

interface Props {
    title: string;
    children?: React.ReactNode;
}

const HeaderCard = ({ title, children }: Props) => {

    return (
        <div className='flex items-center justify-between gap-4 pb-3 mb-3 border-b'>
            <h3 className='font-bold text-lg'>
                {title}
            </h3>
            {children}
        </div>
    )
}

export default HeaderCard