"use client";

import React from 'react'

interface Props {
    classNames?: string;
    children: React.ReactNode;
}

const ContainerCard = ({ children, classNames }: Props) => {
    return (
        <div className={`mb-4 bg-background dark:bg-dark-background text-text dark:text-dark-text transition-theme rounded-md shadow-sm p-4 ${classNames}`}>
            {children}
        </div>
    )
}

export default ContainerCard