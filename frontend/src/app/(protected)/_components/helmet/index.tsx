"use client";

import React from 'react'

interface Props {
    title: string;
    children: React.ReactNode;
}

const Helmet = ({ title, children }: Props) => {

    React.useEffect(() => {
        document.title = title;

        return () => {
            document.title = 'AmigoTasks';
        }
    }, [title])

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}

export default Helmet