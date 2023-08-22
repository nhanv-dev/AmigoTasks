import { Task } from '@services/task/types';
import React from 'react'
import TasksContainer from './TasksContainer';
interface Props {
    tasks: Task[];
}

const ListView = ({ tasks }: Props) => {
    return (
        <div>
            <TasksContainer title={'Pending'} type='Pending' tasks={tasks} />
        </div>
    )
}

export default ListView