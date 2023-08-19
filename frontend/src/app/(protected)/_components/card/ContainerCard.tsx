"use client";

import React from 'react'

const ContainerCard = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='pb-4'>
            <div className='bg-background dark:bg-dark-background transition-all rounded-md shadow-sm p-6'>
                {children}
            </div>
        </div>
    )
}

export default ContainerCard