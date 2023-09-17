import { Task, TaskList } from '@services/task/types';
import React from 'react'
import TasksContainer from './TasksContainer';

interface Props {
    tasks: Task[];
    selectedTaskList: TaskList;
}

const ListView = ({ tasks, selectedTaskList }: Props) => {
    return (
        <div>
            <TasksContainer tasks={tasks} />
        </div>
    )
}

export default ListView