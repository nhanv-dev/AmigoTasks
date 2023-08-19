import { topics } from '@/config/mock'
import React from 'react'
import TopicCard from '../../_components/card/TopicCard'
import { useLayoutContext } from '@/provider/LayoutProvider';

interface Props {
    status: string | null;
}

const TopicList = ({ status }: Props) => {
    const { layout } = useLayoutContext();

    return (
        <div>
            <div className={`${layout.openSidebar ? 'grid-cols-2 lg:grid-cols-3 md:grid-cols-2' : 'grid-cols-2 lg:grid-cols-4 md:grid-cols-3'} grid gap-4 mb-5 pt-1.5 transition-all`}>
                {[...topics].filter(topic => !status || topic.status === status).map(topic => (
                    <div key={topic.id} className='transition-all'>
                        <TopicCard topic={topic} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopicList