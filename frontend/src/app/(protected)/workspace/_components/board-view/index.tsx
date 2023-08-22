import React from 'react'
import TasksContainer from './TasksContainer';
import { Task } from '@services/task/types';

interface Props {
    tasks: Task[];
}

const BoardView = ({ tasks }: Props) => {
    
    return (
        <div className='flex-1 flex items-start gap-6 mb-12'>
            <TasksContainer title={'Pending'} type='Pending' tasks={tasks} />
            <TasksContainer title={'In Progress'} type='In Progress' tasks={tasks} />
            <TasksContainer title={'Completed'} type='Completed' tasks={tasks} />
        </div>
    )
}

export default BoardView;