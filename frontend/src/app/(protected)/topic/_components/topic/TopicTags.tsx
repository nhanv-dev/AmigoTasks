import Link from 'next/link';
import { FcFolder } from 'react-icons/fc';

const TopicTags = ({ topic }) => {

    return (
        <div className='flex items-center gap-2'>
            <p className='font-semibold text-md'>
                Keywords:
            </p>
            <div className='flex items-center gap-1'>
                {topic?.tags.map((item) => (
                    <Link
                        href={`/tags/${item}`}
                        key={item.id}
                        className='hover:text-primary text-sm font-semibold text-text-50 dark:text-dark-text-50 transition-theme max-w-[170px] block text-ellipsis overflow-hidden whitespace-nowrap'
                    >
                        {item}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default TopicTags