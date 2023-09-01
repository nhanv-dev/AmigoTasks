import { useLayoutContext } from '@/provider/LayoutProvider';
import Message from '@app/(protected)/_components/message/Message';
import { CircularProgress } from '@nextui-org/react';
import { TopicSelectors } from '@redux/features/topic/topicSelectors';
import { TopicThunks } from '@redux/features/topic/topicThunks';
import { useAppDispatch, useAppSelector } from '@redux/hook';
import { TopicStatus } from '@services/topic/types';
import { useEffect } from 'react';
import TopicCard from './TopicCard';

interface Props {
    id?: string;
    status?: TopicStatus;
}

const TopicList = ({ id, status }: Props) => {
    const dispatch = useAppDispatch();
    const { isOpenSidebar } = useLayoutContext();
    const { topics } = useAppSelector(TopicSelectors.getTopics());
    const { loading } = useAppSelector(TopicSelectors.getLoading());

    useEffect(() => {
        if (id) {
            dispatch(TopicThunks.getByConditions({ status, parent: id }));
            console.log(id)
        } else {
            if (status) dispatch(TopicThunks.getByStatus(status))
            else dispatch(TopicThunks.getAll())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='relative w-full'>
            {loading &&
                <div className='absolute top-[50%] left-[50%] translate-[-50%,-50%]'>
                    <CircularProgress size="md" aria-label="Loading..." />
                </div>
            }
            <Message visible={topics.length <= 0} message={' No topics available. Create a new topic.'} />
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