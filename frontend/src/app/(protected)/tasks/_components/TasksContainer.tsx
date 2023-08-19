import React, { useEffect, useState } from 'react'
import ContainerCard from '../../_components/card/ContainerCard'
import { Task } from '@/services/task/types'
import TaskCard from './TaskCard';


interface Props {
    title: string;
    type: string;
    tasks: Task[];
}

const TasksContainer = ({ title, type, tasks }: Props) => {
    const [data, setData] = useState(tasks.filter(task => task.status === type));

    return (
        <div className='flex-1'>
            <div className='mb-3'>
                <h5 className='text-text font-bold text-lg'>
                    {title}
                </h5>
                <div>
                    <button>
                        
                    </button>
                </div>
            </div>

            {data.map((task, index) => (
                <div key={index} className='mb-4'>
                    <TaskCard task={task} />
                </div>
            ))}
            <div className='mt-3'>

                <p>
                    Add task
                </p>
            </div>
        </div>
    )
}

export default TasksContainer