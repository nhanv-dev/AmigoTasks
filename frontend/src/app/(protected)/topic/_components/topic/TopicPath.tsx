import ContainerCard from '@app/(protected)/_components/card/ContainerCard';
import { TopicSelectors } from '@redux/features/topic/topicSelectors';
import { useAppSelector } from '@redux/hook';
import Link from 'next/link';
import { AiOutlineStar } from 'react-icons/ai';
import { FiHome } from 'react-icons/fi';
import { BiChevronRight } from 'react-icons/bi';

const TopicPath = () => {
    const { topic } = useAppSelector(TopicSelectors.getTopic());

    return (
        <ContainerCard classNames='py-2 \'>
            <div className='flex items-center gap-4 justify-between'>
                <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-2 h-[36px]'>
                        <Link
                            href={`/`}
                            className='relative top-[-0.25px] hover:text-primary text-[1.1rem] font-semibold text-text-50 dark:text-dark-text-50 transition-theme'
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
                <div>
                    <button className='flex items-center gap-2 bg-dark-background text-dark-text py-1.5 px-4 rounded-md'>
                        <p className=' '>
                            {topic?.isFeatured ?
                                <AiOutlineStar /> :
                                <AiOutlineStar />
                            }
                        </p>
                        <p className='font-bold text-md'>
                            Star
                        </p>
                    </button>
                </div>
            </div>
        </ContainerCard>
    )
}

export default TopicPath