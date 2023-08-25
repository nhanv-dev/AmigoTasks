import { useLayoutContext } from '@/provider/LayoutProvider';
import { TopicSelectors } from '@redux/features/topic/topicSelectors';
import { TopicThunks } from '@redux/features/topic/topicThunks';
import { useAppDispatch, useAppSelector } from '@redux/hook';
import { TopicStatus } from '@services/topic/types';
import { useEffect } from 'react';
import TopicCard from './TopicCard';

interface Props {
    status: TopicStatus | null;
}

const TopicList = ({ status }: Props) => {
    const dispatch = useAppDispatch();
    const { isOpenSidebar } = useLayoutContext();
    const { topics } = useAppSelector(TopicSelectors.getTopics());

    useEffect(() => {
        if (status) dispatch(TopicThunks.getByStatus(status))
        else dispatch(TopicThunks.getAll())
    }, [ ])

    return (
        <div>
            <div className={`${isOpenSidebar ? 'xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-2' : 'xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2'} grid gap-4 mb-5 pt-1.5 px-0 transition-all`}>
                {topics.map(topic => (
                    <div key={topic.id} className='transition-all'>
                        <TopicCard topic={topic} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopicList