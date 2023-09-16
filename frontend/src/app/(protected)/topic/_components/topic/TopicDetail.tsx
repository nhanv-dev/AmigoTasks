import InnerLoading from '@app/(protected)/_components/loading/InnerLoading';
import { TopicSelectors } from '@redux/features/topic/topicSelectors';
import { useAppDispatch, useAppSelector } from '@redux/hook';
import DataFormatter from '@util/DataFormatter';
import Link from 'next/link';
import { AiFillTags } from 'react-icons/ai';
import { FiClock } from 'react-icons/fi';
import { MdOutlineStyle } from 'react-icons/md';
import { TbCategory } from 'react-icons/tb';
import TopicComments from './TopicComments';
import TopicStatus from './TopicStatus';
import TopicTags from './TopicTags';

const TopicDetail = () => {
    const { topic } = useAppSelector(TopicSelectors.getTopic());
    const { topicLoading } = useAppSelector(TopicSelectors.getLoading());

    if (!topic || topicLoading)
        return (
            <div className='min-h-[180px] flex items-center justify-center'>
                <InnerLoading loading={topicLoading} />
            </div>
        )

    return (
        <div className=''>
            <div className='flex justify-between items-center mb-5'>
                <div className='flex items-center gap-2 min-w-[140px]'>
                    <p>
                        <MdOutlineStyle />
                    </p>
                    <label className='text-[0.825rem] font-semibold'>
                        Status
                    </label>
                </div>
                <div className='flex-1 text-sm font-semibold text-text-50 dark:text-dark-text-50 transition-theme'>
                    <TopicStatus />
                </div>
            </div>
            <div className='flex justify-between items-center mb-5'>
                <div className='flex items-center gap-2 min-w-[140px]'>
                    <p>
                        <FiClock />
                    </p>
                    <label className='text-[0.825rem] font-semibold'>
                        Created time
                    </label>
                </div>
                <div className='flex-1 text-sm font-semibold text-text-50 dark:text-dark-text-50 transition-theme'>
                    {DataFormatter.formatDate(topic.createdAt)}
                </div>
            </div>
            <div className='flex justify-between items-center mb-5'>
                <div className='flex items-center gap-2 min-w-[140px]'>
                    <p>
                        <FiClock />
                    </p>
                    <label className='text-[0.825rem] font-semibold'>
                        Last edited time
                    </label>
                </div>
                <div className='flex-1 text-sm font-semibold text-text-50 dark:text-dark-text-50 transition-theme'>
                    {DataFormatter.formatDate(topic.updatedAt)}
                </div>
            </div>
            <div className='flex justify-between items-start mb-5'>
                <div className='flex items-center gap-2 min-w-[140px]'>
                    <p>
                        <AiFillTags />
                    </p>
                    <label className='text-[0.825rem] font-semibold'>
                        Tags
                    </label>
                </div>
                <div className='flex-1 text-sm font-semibold text-text-50 dark:text-dark-text-50 transition-theme'>
                    <TopicTags />
                </div>
            </div>

            <div className='flex justify-between pb-5 mb-3 border-b border-border dark:border-dark-border transition-theme'>
                <div className='flex items-center gap-2 min-w-[140px]'>
                    <p>
                        <TbCategory />
                    </p>
                    <label className='text-[0.825rem] font-semibold'>
                        Related topics
                    </label>
                </div>
                <div className='flex-1 flex items-center gap-1 justify-start'>
                    <Link
                        href={`/topic/${topic.id}/items`} className='w-max px-3 h-[24px] flex items-center justify-center rounded-full bg-primary/20 text-sm font-semibold text-primary dark:text-primary transition-theme'>
                        {topic.numberOfChildren} topics
                    </Link>
                </div>
            </div>
            <TopicComments />
        </div>
    )
}

export default TopicDetail;


