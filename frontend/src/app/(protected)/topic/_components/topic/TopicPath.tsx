import Link from 'next/link';
import { FiHome } from 'react-icons/fi';
import { RxSlash } from 'react-icons/rx';

const TopicPath = ({ topic }) => {

    return (
        <div className='flex items-center gap-2'>
            <div className='flex items-center gap-2 h-[36px]'>
                <Link
                    href={`/`}
                    className='hover:text-primary text-[1.05rem] font-semibold text-text-50 dark:text-dark-text-50 transition-theme max-w-[170px] block text-ellipsis overflow-hidden whitespace-nowrap'
                >
                    <FiHome />
                </Link>
                <p className='text-sm text-text-50 dark:text-dark-text-50 transition-theme'>
                    <RxSlash />
                </p>
            </div>
            <div className='flex items-center gap-2 h-[36px]'>
                <Link
                    href={`/topic`}
                    className='hover:text-primary text-sm font-semibold text-text-50 dark:text-dark-text-50 transition-theme max-w-[170px] block text-ellipsis overflow-hidden whitespace-nowrap'
                >
                    Topic
                </Link>
                <p className='text-sm text-text-50 dark:text-dark-text-50 transition-theme'>
                    <RxSlash />
                </p>
            </div>
            {topic?.path.map((item, index) => (
                <div key={item.id} className='flex items-center gap-2 h-[36px]'>
                    <Link
                        href={`/topic/${item.id}`}
                        className='hover:text-primary text-sm font-semibold text-text-50 dark:text-dark-text-50 transition-theme max-w-[170px] block text-ellipsis overflow-hidden whitespace-nowrap'
                    >
                        {item.title}
                    </Link>
                    {index < topic.path.length - 1 &&
                        <p className='text-sm text-text-50 dark:text-dark-text-50 transition-theme'>
                            <RxSlash />
                        </p>
                    }
                </div>
            ))}
        </div>
    )
}

export default TopicPath