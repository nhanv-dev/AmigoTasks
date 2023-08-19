"use client"

import React from 'react'

const Topic = ({ params }: { params: { id: string[] } }) => {

    return (
        <div>{params.id}</div>
    )
}

export default Topic