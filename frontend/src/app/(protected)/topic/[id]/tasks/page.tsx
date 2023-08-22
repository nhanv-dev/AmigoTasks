"use client"

import React from 'react'

const TopicTask = ({ params }: { params: { id: string } }) => {

    return (
        <div>topic task: {params.id}</div>
    )
}

export default TopicTask;