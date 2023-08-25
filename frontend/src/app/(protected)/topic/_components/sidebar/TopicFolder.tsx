import CustomDropdown from '@app/(protected)/_components/dropdown/CustomDropdown';
import { DropdownItem } from '@nextui-org/react';
import { TopicSelectors } from '@redux/features/topic/topicSelectors';
import { TopicActions } from '@redux/features/topic/topicSlice';
import { TopicThunks } from '@redux/features/topic/topicThunks';
import { Tree } from '@redux/features/topic/types';
import { useAppDispatch, useAppSelector } from '@redux/hook';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { BsDot, BsThreeDots } from 'react-icons/bs';
import { FcFolder, FcOpenedFolder } from 'react-icons/fc';
import { GoTriangleRight } from 'react-icons/go';
import { MdDelete, MdOpenInNew } from 'react-icons/md';

interface Props {
    item: Tree;
}

const TreeItem = ({ item }: Props) => {
    const dispatch = useAppDispatch();
    const { children } = useAppSelector(TopicSelectors.getChildren(item.root.id));

    const handleOpen = async (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        if (item.open) {
            return dispatch(TopicActions.setOpenTree({ open: false, id: item.root.id }));
        }
        await dispatch(TopicThunks.getByParent(item.root.id));
    }

    return (
        <div className={``}>
            <button onClick={handleOpen}
                className={`${item.open ? '' : ''} ${item.root.numberOfChildren <= 0 ? 'pl-4' : 'pl-2'} group relative flex items-center gap-2 w-full text-md text-text dark:text-dark-text font-semibold py-2 hover:bg-primary-50 rounded-md outline-none transition-all border-none`}
            >
                {item.root.numberOfChildren > 0 &&
                    <p className={`${item.open ? 'rotate-[90deg]' : 'rotate-0'} text-[1rem]  transition-all relative top-[-1.5px]`}>
                        <GoTriangleRight />
                    </p>
                }
                <div className='flex items-center gap-1 absolute right-3 top-[50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-all'>
                    <TopicFolderDropdown topic={item.root} />
                </div>
                <p className='flex items-center gap-2'>
                    <span className='text-[1.25rem] flex items-center justify-center relative top-[-2px]'>
                        {item.open ? <FcOpenedFolder /> : <FcFolder />}
                    </span>
                    <span className='flex items-center'>
                        {item.root.title}
                        {item.root.numberOfChildren > 0 &&
                            <span className='flex items-center text-[0.75rem]'>
                                <span className='text-[1.2rem]'>
                                    <BsDot />
                                </span>
                                <span className=''>
                                    {item.root.numberOfChildren} item
                                </span>
                            </span>
                        }
                    </span>
                </p>

            </button>
            <div className='ml-4 relative'>
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

const TopicFolderDropdown = ({ topic }) => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    return (
        <CustomDropdown icon={<BsThreeDots />}>
            <DropdownItem
                key="new"
                title='Show topic'
                startContent={
                    <span className='text-[1rem]'>
                        <MdOpenInNew />
                    </span>
                }
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    router.push(`/topic/${topic.id}`)
                }}
            />
            <DropdownItem
                key="delete"
                color="danger"
                title='Delete topic'
                className='text-danger'
                startContent={
                    <span className='text-[1rem]'>
                        <MdDelete />
                    </span>
                }
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    dispatch(TopicThunks.delete(topic.id))
                }}
            />
        </CustomDropdown>
    )
}