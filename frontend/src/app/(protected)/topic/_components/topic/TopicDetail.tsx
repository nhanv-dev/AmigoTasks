import InnerLoading from '@app/(protected)/_components/loading/InnerLoading';
import { TopicSelectors } from '@redux/features/topic/topicSelectors';
import { useAppDispatch, useAppSelector } from '@redux/hook';
import DataFormatter from '@util/DataFormatter';
import Link from 'next/link';
import { AiFillTags, AiOutlineArrowRight, AiOutlineStar } from 'react-icons/ai';
import { FiArrowRight, FiClock } from 'react-icons/fi';
import { MdOutlineStyle } from 'react-icons/md';
import { TbCategory } from 'react-icons/tb';
import TopicComments from './TopicComments';
import { Divider, ScrollShadow } from '@nextui-org/react';
import TopicStatus from './TopicStatus';
import TopicTags from './TopicTags';

const TopicDetail = () => {
    const dispatch = useAppDispatch();
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
            <div className='flex justify-between mb-5'>
                <div className='flex items-center gap-2 min-w-[150px]'>
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
            <div className='flex justify-between mb-5'>
                <div className='flex items-center gap-2 min-w-[150px]'>
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
            <div className='flex justify-between mb-5'>
                <div className='flex items-center gap-2 min-w-[150px]'>
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
            <div className='flex justify-between mb-5'>
                <div className='flex items-center gap-2 min-w-[150px]'>
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

            <div className='flex justify-between pb-5 mb-3 border-b'>
                <div className='flex items-center gap-2 min-w-[150px]'>
                    <p>
                        <TbCategory />
                    </p>
                    <label className='text-[0.825rem] font-semibold'>
                        Related topics
                    </label>
                </div>
                <div className='flex-1 flex items-center gap-1 justify-start'>
                    <div className='w-max px-3 h-[24px] flex items-center justify-center rounded-full bg-primary-50 text-sm font-semibold text-text-50 dark:text-dark-text-50 transition-theme'>
                        {topic.numberOfChildren} topics
                    </div>
                    <Link
                        href={`/topic/${topic.id}/items`}
                        className='bg-primary-50 flex items-center justify-center h-[24px] px-3 py-1 rounded-full gap-1 text-[0.8rem] font-semibold text-text-50 dark:text-dark-text-50 transition-theme'
                    >
                        Explore
                        {/* <span className='text-[1rem] relative top-[0.85px]'>
                            <FiArrowRight />
                        </span> */}
                    </Link>
                </div>
            </div>
            <TopicComments />
        </div>
    )
}

export default TopicDetail;


