import { Task } from '@/services/task/types';
import DataFormatter from '@/util/DataFormatter';
import { TaskActions } from '@redux/features/task/taskSlice';
import { useAppDispatch } from '@redux/hook';
import { useState } from 'react';
import { BsCalendar3 } from 'react-icons/bs';
import { MdOutlineModeComment } from 'react-icons/md';
import TaskDropdown from '../task/TaskDropdown';
import TaskTag from '../task/TaskTag';

interface Props {
    task: Task;
}

const TaskCard = ({ task }: Props) => {
    const dispatch = useAppDispatch();
    const [draggedItem, setDraggedItem] = useState<Task | null>(null);
    const [openDropdown, setOpenDropDown] = useState<boolean>(false);

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
        dispatch(TaskActions.setFormTask({ selectedTask: task, isOpen: true }))
    }

    return (
        <div
            draggable
            onDragStart={(e) => handleDragStart(e)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e)}
            onClick={handleOpen}
        >
            <div className="cursor-pointer bg-background  dark:bg-dark-background shadow-sm p-4 rounded-md transition-theme">
                <div className='flex items-start justify-between gap-4 mb-2'>
                    <h3 onClick={handleOpen} className="text-[0.95rem] font-bold text-text dark:text-dark-text transition-theme">
                        {task.title}
                    </h3>
                    <TaskDropdown task={task} />
                </div>
                <p onClick={handleOpen} className="text-[0.725rem] font-semibold mb-3 text-text-50 dark:text-dark-text-50 transition-theme">
                    {task.description}
                </p>
                {task.tags?.length > 0 &&
                    <div className='flex items-center justify-between flex-wrap mb-3'>
                        <div className="flex gap-2 items-center">
                            {task.tags.slice(0, 3).map((tag, index) => (
                                <TaskTag key={index} index={index} tag={tag} />
                            ))}
                        </div>
                    </div>
                }
                <div className='flex items-center justify-between'>
                    <p className="text-xs flex items-center gap-2 font-semibold text-text-50 dark:text-dark-text-50 transition-theme">
                        <BsCalendar3 /> {DataFormatter.formatDate(task.createdAt)}
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
    )
}

export default TaskCard;

