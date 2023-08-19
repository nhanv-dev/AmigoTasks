import React from 'react'

interface Props {
    title: string;
    description: string;
    comments: string[];
    status: string;
    tags: string[];
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
}

const TaskCard = ({ }: Props) => {
    return (
        <div>TaskCard</div>
    )
}

export default TaskCard