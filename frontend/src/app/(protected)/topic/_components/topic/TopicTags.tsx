import { TopicSelectors } from '@redux/features/topic/topicSelectors';
import { useAppSelector } from '@redux/hook';
import Link from 'next/link';

const TopicTags = () => {
    const { topic } = useAppSelector(TopicSelectors.getTopic());

    const handleClick = async () => {

    }

    return (
        <div className='flex items-center gap-2'>
            <div className='flex flex-wrap items-center gap-1'>
                {['Dev', 'Fullstack'].map((item, index) => (
                    <button
                        key={index}
                        // href={`/tags/${item}`}
                        onClick={handleClick}
                        className='bg-primary-100 px-3 py-0.5 rounded-full hover:text-primary text-sm font-semibold text-text-50 dark:text-dark-text-50 transition-theme max-w-[170px] block text-ellipsis overflow-hidden whitespace-nowrap'
                    >
                        {item}
                    </button>
                ))}
                <button
                    // href={`/tags/${item}`}
                    onClick={handleClick}
                    className='bg-primary-100 px-3 py-0.5 rounded-full hover:text-primary text-sm font-semibold text-text-50 dark:text-dark-text-50 transition-theme max-w-[170px] block text-ellipsis overflow-hidden whitespace-nowrap'
                >
                    Add keywords
                </button>
            </div>
        </div>
    )
}

export default TopicTags