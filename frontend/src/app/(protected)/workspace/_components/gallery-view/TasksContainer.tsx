import { Task } from '@/services/task/types';
import { useState } from 'react';
import { BiChevronDown, BiAddToQueue } from "react-icons/bi";
import { IoIosAdd } from 'react-icons/io';
import { GrAdd } from 'react-icons/gr';
import TaskCard from '../board-view/TaskCard';

interface Props {
    title: string;
    type: string;
    tasks: Task[];
}

const TasksContainer = ({ title, type, tasks }: Props) => {
    const [data, setData] = useState(tasks.filter(task => task.status === type));

    return (
        <div className='flex-1 max-w-[380px] transition-theme rounded-md'>
            <div className='mb-3 flex items-center justify-between gap-4'>

                <h5 className='text-text dark:text-dark-text transition-theme font-bold text-lg'>
                    {title}
                </h5>
                <div className='flex items-center justify-end gap-1.5'>
                    <button tabIndex={-1} className='text-[1.2rem] text-text-50 dark:text-dark-text-50 bg-background dark:bg-dark-background transition-theme rounded-full p-0.5'>
                        <IoIosAdd />
                    </button>
                    <button tabIndex={-1} className='text-[1.3rem] text-text-50 dark:text-dark-text-50 bg-background dark:bg-dark-background transition-theme rounded-full p-0.5'>
                        <BiChevronDown />
                    </button>
                </div>

            </div>
            {data.map((task, index) => (
                <div key={index} className='mb-3'>
                    <TaskCard task={task} />
                </div>
            ))}
            <button type='button' onClick={() => { }}
                className='w-full flex-1 flex items-center justify-center text-text dark:text-dark-text bg-background-50 dark:bg-dark-background-50 transition-theme p-3 rounded-md'>
                <p className='text-xl'>
                    <IoIosAdd />
                </p>
                <p className='font-bold text-md '>
                    Add an item
                </p>
            </button>
        </div>
    )
}

export default TasksContainer