"use client";

import React from 'react'
import Helmet from '../../_components/helmet'

const TopicTag = ({ params }: { params: { id: string } }) => {
    console.log(params)
    return (
        <Helmet title='DM - Chủ đề có từ khóa'>

            <div>{params.id}</div>
        </Helmet>
    )
}

export default TopicTag