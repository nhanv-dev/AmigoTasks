import React from 'react'
import TasksContainer from './TasksContainer';
import { Task } from '@services/task/types';

interface Props {
    tasks: Task[];
}

const TableView = ({ tasks }: Props) => {

    return (
        <div className='flex-1 flex items-start gap-4 mb-12'>
            <TasksContainer tasks={tasks} />
        </div>
    )
}

export default TableView;