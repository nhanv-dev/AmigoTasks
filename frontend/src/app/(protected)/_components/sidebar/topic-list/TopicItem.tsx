import { TopicSelectors } from '@redux/features/topic/topicSelectors';
import { TopicActions } from '@redux/features/topic/topicSlice';
import { TopicThunks } from '@redux/features/topic/topicThunks';
import { TreeItem as ITreeItem } from '@redux/features/topic/types';
import { useAppDispatch, useAppSelector } from '@redux/hook';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { GoTriangleRight } from 'react-icons/go';
import TopicItemDropdown from './TopicItemDropdown';

interface Props {
    item: ITreeItem;
}

const TopicItem = ({ item }: Props) => {
    const dispatch = useAppDispatch();
    const { children } = useAppSelector(TopicSelectors.getChildren(item.root.id));
    const { topic } = useAppSelector(TopicSelectors.getTopic());

    const handleOpen = async (e: any) => {
        if (item.open) {
            await dispatch(TopicActions.setOpenTree({ open: false, id: item.root.id }));
        } else {
            await Promise.all([
                dispatch(TopicThunks.getByParent(item.root.id)),
                dispatch(TopicActions.setOpenTree({ open: true, id: item.root.id })),
            ])
        }
    }

    const handleOnDrag = (e: React.DragEvent, item: ITreeItem) => {
        // e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.setData('transfer', item.root.id);
    }

    const hanldeOnDrop = (e: React.DragEvent) => {
        e.stopPropagation();
        const transfer = e.dataTransfer.getData('transfer') as string;
        dispatch(TopicActions.dragItem({ id: item.root.id, transfer }))
    }

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
    }

    return (
        <div className={`relative`}
            draggable
            onDragStart={(e) => handleOnDrag(e, item)}
            onDrop={hanldeOnDrop}
            onDragOver={handleDragOver}
        >
            <div className='w-full flex items-center'>
                <div className={`${topic?.id === item.root.id ? 'bg-primary/20 text-primary' : 'text-text-50 dark:text-dark-text-50'} w-full group flex-1 mb-1 flex items-center justify-between gap-2 px-2 hover:bg-primary/20 rounded-md outline-none transition-all`}>
                    <Link
                        href={`/topic/${item.root.id}`}
                        onClick={handleOpen}
                        className={`w-full flex items-center gap-0.5 text-md font-semibold py-1.5 outline-none border-none`}
                    >
                        <p className={`${item.open ? 'rotate-[90deg]' : 'rotate-0'} w-[18px] text-[1rem] transition-all text-text-50`}>
                            {item.root.numberOfChildren > 0 && <GoTriangleRight />}
                        </p>
                        <div className='flex items-center justify-between gap-1 flex-1'>
                            <LabelTopic item={item} />
                        </div>
                    </Link>
                    <div className='opacity-0 group-hover:opacity-100 transition-all relative w-[24px] h-[24px]'>
                        <TopicItemDropdown topic={item.root} />
                    </div>
                </div>
            </div>
            <div className='ml-3 relative'>
                {item.open &&
                    <div>
                        {children.map(item => (
                            <motion.div
                                key={item.root.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <TopicItem item={item} />
                            </motion.div>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}

export default TopicItem;

const LabelTopic = ({ item }) => {
    return (
        <div className='flex-1 w-full flex flex-col justify-center'>
            <div className='flex-1 flex items-center'>
                <p className='text-[0.775rem] max-w-[140px] whitespace-nowrap text-ellipsis overflow-hidden transition-theme'>
                    {item.root.title}
                </p>
                {item.root.numberOfChildren > 0 &&
                    <p className='ml-1.5 flex items-center justify-center rounded-full text-xs font-bold px-2 h-[15px] bg-default-200 transition-theme'>
                        <span className='relative top-[-0.35px] left-[-0.5px]'>
                            {item.root.numberOfChildren}
                        </span>
                    </p>
                }
            </div>
        </div>
    )
}