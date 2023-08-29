import { TopicSelectors } from '@redux/features/topic/topicSelectors';
import { TopicActions } from '@redux/features/topic/topicSlice';
import { TopicThunks } from '@redux/features/topic/topicThunks';
import { TreeItem as ITreeItem } from '@redux/features/topic/types';
import { useAppDispatch, useAppSelector } from '@redux/hook';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FcFolder, FcOpenedFolder } from 'react-icons/fc';
import { GoTriangleRight } from 'react-icons/go';
import TopicFolderDropdown from './TopicFolderDropdown';
import DataFormatter from '@util/DataFormatter';

interface Props {
    item: ITreeItem;
}

const TreeItem = ({ item }: Props) => {
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
                // dispatch(TopicThunks.getById(item.root.id)),
            ])
        }
    }

    return (
        <div className={`relative`}>
            <div className='flex items-center'>
                <div className={`${topic?.id === item.root.id ? 'bg-primary-50' : ''} group flex-1 mb-1 flex items-center justify-between gap-2 px-2 hover:bg-primary-50 rounded-sm outline-none transition-all`}>
                    <Link
                        href={`/topic/${item.root.id}`}
                        onClick={handleOpen}
                        className={`flex items-center gap-0.5 w-full text-md text-text dark:text-dark-text font-semibold py-1.5 outline-none  border-none`}
                    >
                        <p className={`${item.open ? 'rotate-[90deg]' : 'rotate-0'} w-[18px] text-[1rem] transition-all text-text-50`}>
                            {item.root.numberOfChildren > 0 && <GoTriangleRight />}
                        </p>
                        <div className='flex items-center justify-between gap-1 flex-1'>
                            <LabelTopic item={item} />
                        </div>
                    </Link>
                    <div className='opacity-0 group-hover:opacity-100 transition-all relative w-[24px] h-[24px]'>
                        <TopicFolderDropdown topic={item.root} />
                    </div>
                </div>
            </div>
            <div className='ml-3 relative'>
                {item.open &&
                    <div>
                        {children.map(item => {
                            return (
                                <motion.div
                                    key={item.root.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <TreeItem item={item} />
                                </motion.div>
                            )
                        })}
                    </div>
                }
            </div>
        </div>
    )
}

export default TreeItem;

const LabelTopic = ({ item }) => {
    return (
        <div className='flex items-center gap-2'>
            <div className='min-w-[34px] min-h-[34px] w-[34px] h-[34px] rounded-sm bg-center bg-cover'
                style={{ backgroundImage: `url(https://images.unsplash.com/photo-1692060234392-aa41b4703065?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80)` }}>
            </div>
            <div className='flex flex-col justify-center'>
                <div className='flex items-center gap-2'>
                    <p className='text-[0.825rem] flex-1 whitespace-nowrap text-ellipsis max-w-[120px] overflow-hidden'>
                        {item.root.title}
                    </p>
                    {item.root.numberOfChildren > 0 &&
                        <p className='flex items-center justify-center rounded-full text-xs font-bold px-3 h-[15px] bg-slate-300'>
                            <span className='relative top-[-0.35px] left-[-0.5px]'>
                                {item.root.numberOfChildren}
                            </span>
                        </p>
                    }
                </div>
                <div className='flex items-center gap-3'>

                    <p className='text-[0.675rem] flex-1 whitespace-nowrap overflow-hidden'>
                        {DataFormatter.formatDateToDaysAgo(item.root.updatedAt)}
                    </p>
                </div>
            </div>
        </div>
    )
}