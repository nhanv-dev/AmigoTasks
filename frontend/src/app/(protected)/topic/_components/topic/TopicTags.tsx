import { useState } from 'react';
import { TopicSelectors } from '@redux/features/topic/topicSelectors';
import { TopicThunks } from '@redux/features/topic/topicThunks';
import { useAppDispatch, useAppSelector } from '@redux/hook';
import { FaTimes } from 'react-icons/fa';
import { GrFormAdd } from 'react-icons/gr';
import { IoMdAdd } from 'react-icons/io';

const TopicTags = () => {
    const dispatch = useAppDispatch();
    const { topic } = useAppSelector(TopicSelectors.getTopic());
    const [isAdd, setIsAdd] = useState<boolean>(false);

    const handleAddTags = async (e: any) => {
        e.preventDefault();
        if (!topic) return;
        const tag = e.target.tag.value;
        if (!tag) return;
        const tags = [...topic.tags, tag];
        e.target.reset();
        dispatch(TopicThunks.update({ id: topic.id, tags }))
    }

    const handleDeleteTags = async (position: number) => {
        if (!topic) return;
        const tags = topic.tags.filter((tag, index) => index !== position);
        dispatch(TopicThunks.update({ id: topic.id, tags }))
    }

    return (
        <div className='flex items-center gap-2'>
            <div className='flex flex-wrap items-center gap-2'>
                {topic?.tags?.map((item, index) => (
                    <div key={index}
                        className='flex items-center gap-1 bg-primary/20 px-3 py-0.5 pr-2 rounded-full hover:text-primary text-sm font-semibold text-dark-text-50 transition-theme'
                    >
                        <p className='max-w-[80px] whitespace-nowrap line-clamp-1'>
                            {item}
                        </p>
                        <button
                            type='button'
                            tabIndex={-1}
                            onClick={() => handleDeleteTags(index)}
                            className='text-[0.65rem] relative top-[0.25px] text-text-50 dark:text-dark-text-50 hover:text-danger transition-all transition-theme'
                        >
                            <FaTimes />
                        </button>
                    </div>
                ))}
                <div className={`px-2 flex items-center transition-all relative overflow-hidden rounded-full bg-primary/20  hover:text-primary text-primary dark:text-primary transition-theme`}>
                    <button
                        type='button'
                        tabIndex={-1}
                        onClick={() => setIsAdd(prev => !prev)}
                        className={`${isAdd ? 'w-[0px]' : 'w-[60px]'} overflow-hidden py-1 transition-all text-sm font-semibold flex items-center justify-center gap-1`}
                    >
                        <IoMdAdd className='text-[0.975rem]' />
                        Add
                    </button>
                    <form onSubmit={handleAddTags} className={`${isAdd ? 'w-[120px] visible' : 'w-0 invisible'} h-[24px] transition-all flex items-center justify-between gap-1`}>
                        <label htmlFor='tag' className='hidden' />
                        <input
                            id='tag'
                            autoFocus
                            name='tag'
                            className='bg-transparent outline-none border-none rounded-md text-md font-semibold flex-1 w-[80px]'
                        />
                        <button
                            type='button'
                            tabIndex={-1}
                            onClick={() => setIsAdd(false)}
                            className='flex items-center justify-end text-[0.65rem] h-[20px] text-text-50 dark:text-dark-text-50 hover:text-danger transition-all transition-theme'
                        >
                            <FaTimes />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TopicTags