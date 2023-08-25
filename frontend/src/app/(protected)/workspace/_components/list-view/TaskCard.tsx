import { Task } from '@/services/task/types';
import DataFormatter from '@/util/DataFormatter';
import Link from 'next/link';
import { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { IoMdAdd } from 'react-icons/io';
import { MdOutlineModeComment } from 'react-icons/md';
import TaskModal from '../task/TaskModal';

interface Props {
    task: Task;
}

const TaskCard = ({ task }: Props) => {
    const [draggedItem, setDraggedItem] = useState<Task | null>(null);
    const [open, setOpen] = useState<boolean>(false);

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        setDraggedItem(task);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        setDraggedItem(null);
    };

    const handleOpen = () => {
        setOpen(true);
    }

    return (
        <div>
            <TaskModal />
            <div
                draggable
                onDragStart={(e) => handleDragStart(e)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e)}
                onClick={handleOpen}

            >
                <div className="cursor-pointer bg-background  dark:bg-dark-background shadow-sm p-4 rounded-md transition-theme">
                    <div className='flex items-center justify-between gap-4 mb-2'>
                        <h3 onClick={handleOpen} className="text-[0.875rem] font-semibold text-text dark:text-dark-text transition-theme">
                            {task.title}
                        </h3>
                        <button>
                            <BsThreeDots />
                        </button>
                    </div>
                    <p onClick={handleOpen} className="text-[0.825rem] font-semibold mb-3 text-text-50 dark:text-dark-text-50 transition-theme">
                        {task.description}
                    </p>

                    <div className='flex items-center justify-between flex-wrap mb-3'>
                        <div className="flex gap-2 items-center">
                            {[...task.tags, ...task.tags, ...task.tags].slice(0, 3).map((tag, index) => (
                                <TaskTag key={index} index={index} tag={tag} />
                            ))}
                            <button
                                tabIndex={-1}
                                draggable={false}
                                onClick={() => setOpen(true)}
                                className={`gap-1 inline-flex items-center min-w-max rounded-sm px-2 py-1 text-xs font-bold`}
                            >
                                <IoMdAdd />
                                Add tag
                            </button>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className="text-xs font-semibold text-text-50 dark:text-dark-text-50 transition-theme">
                            {DataFormatter.formatDate(task.createdAt)}
                        </p>
                        <p className='flex items-center gap-1 font-semibold text-sm text-text dark:text-dark-text transition-theme'>
                            <span>
                                <MdOutlineModeComment />
                            </span>
                            <span className='text-xs relative top-[-0.5px]'>
                                {task.comments.length}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskCard;


const TaskTag = ({ index, tag }: { index: number, tag: string }) => {
    let color = 'bg-orange-50 text-orange-600'
    if (index % 3 === 0) color = ' bg-blue-50 text-blue-600'
    else if (index % 2 === 0) color = ' bg-indigo-50 text-indigo-600'

    return (
        <Link
            tabIndex={-1}
            draggable={false}
            href={`/tasks/tag/${tag}`}
            className={`${color} inline-flex items-center min-w-max rounded-sm  px-2 py-1 text-xs font-bold`}
        >
            {tag}
        </Link>
    )
}

