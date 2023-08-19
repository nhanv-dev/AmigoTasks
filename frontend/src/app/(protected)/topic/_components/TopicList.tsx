import { topics } from '@/config/mock'
import React from 'react'
import TopicCard from '../../_components/card/TopicCard'

interface Props {
    status: string | null;
}

const TopicList = ({ status }: Props) => {

    return (
        <div>
            <div className='grid grid-cols-4 gap-4 mb-5 pt-1.5'>
                {[...topics].filter(topic => !status || topic.status === status).map(topic => (
                    <div key={topic.id}>
                        <TopicCard topic={topic} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopicList