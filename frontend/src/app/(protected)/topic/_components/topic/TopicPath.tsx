import ContainerCard from '@app/(protected)/_components/card/ContainerCard';
import { Button } from '@nextui-org/react';
import { TopicSelectors } from '@redux/features/topic/topicSelectors';
import { TopicThunks } from '@redux/features/topic/topicThunks';
import { useAppDispatch, useAppSelector } from '@redux/hook';
import Link from 'next/link';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BiChevronRight } from 'react-icons/bi';
import { FiHome } from 'react-icons/fi';

const TopicPath = () => {
    const { topic } = useAppSelector(TopicSelectors.getTopic());
    const dispatch = useAppDispatch();

    const handleChangeIsFeatured = async () => {
        if (!topic?.id) return;
        dispatch(TopicThunks.update({ id: topic.id, isFeatured: !topic.isFeatured }))
    }

    return (
        <ContainerCard classNames='py-2 mb-[0px]'>
            <div className='flex items-center gap-4 justify-between'>
                <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-2 h-[36px]'>
                        <Link
                            href={`/`}
                            className='relative top-[-0.5px] hover:text-primary text-[1.1rem] font-semibold text-text-50 dark:text-dark-text-50 transition-theme'
                        >
                            <FiHome />
                        </Link>
                        <p className='text-[1.2rem] text-text-50 dark:text-dark-text-50 transition-theme'>
                            <BiChevronRight />
                        </p>
                    </div>
                    <div className='flex items-center gap-2 h-[36px]'>
                        <Link
                            href={`/topic`}
                            className='hover:text-primary text-sm font-bold text-text-50 dark:text-dark-text-50 transition-theme max-w-[170px] block text-ellipsis overflow-hidden whitespace-nowrap'
                        >
                            Topic
                        </Link>
                    </div>
                    {topic?.path?.map((item: any, index: number) => (
                        <div key={item.id} className='flex items-center gap-2 h-[36px]'>
                            <p className='text-[1.2rem] text-text-50 dark:text-dark-text-50 transition-theme'>
                                <BiChevronRight />
                            </p>
                            <Link
                                href={`/topic/${item.id}`}
                                className='hover:text-primary text-sm font-bold text-text-50 dark:text-dark-text-50 transition-theme max-w-[170px] block text-ellipsis overflow-hidden whitespace-nowrap'
                            >
                                {item.title}
                            </Link>

                        </div>
                    ))}
                </div>
                <div className='flex items-center gap-2'>
                    <Button
                        type='button'
                        tabIndex={-1}
                        onClick={handleChangeIsFeatured}
                        className={`${topic?.isFeatured ? 'bg-warning/20' : 'dark:bg-primary/20'} transition-theme rounded-full max-h-[32px] max-w-[60px] min-w-[60px]`}>
                        <p className='text-[1.15rem]'>
                            <AiFillStar className={`${topic?.isFeatured ? 'text-warning' : 'dark:text-dark-text-50'} transition-theme`} />
                        </p>
                    </Button>
                </div>
            </div>
        </ContainerCard>
    )
}

export default TopicPath