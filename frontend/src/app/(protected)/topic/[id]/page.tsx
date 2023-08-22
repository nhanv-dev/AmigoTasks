"use client"

import ContainerCard from '@app/(protected)/_components/card/ContainerCard';
import Helmet from '@app/(protected)/_components/helmet';
import { Topic } from '@services/topic/types';
import React, { useEffect, useState } from 'react'
import TopicTextField from '../_components/TopicTextField';

interface Props {
    params: { id: string };
}

const Topic = ({ params }: Props) => {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [topic, setTopic] = useState<Topic | null>(null);

    useEffect(() => {
        setTopic(null)
    }, [params])

    return (
        <Helmet title='DM - Topic'>
            <main>
                <div className='flex items-start gap-4'>
                    <div className='w-[300px]'>
                        <ContainerCard>
                            {params.id}
                        </ContainerCard>
                    </div>
                    <div className='flex-1'>
                        <ContainerCard>
                            <TopicTextField />
                        </ContainerCard>
                    </div>
                </div>
            </main>
        </Helmet>
    )
}

export default Topic