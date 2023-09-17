import { Task } from '@/services/task/types';
import TaskCard from './TaskCard';

interface Props {
    tasks: Task[];
}

const TasksContainer = ({ tasks }: Props) => {

    return (
        <div className='flex-1 transition-theme rounded-md'>
            {tasks.map((task, index) => (
                <div key={index} className='mb-3'>
                    <TaskCard task={task} />
                </div>
            ))}
        </div>
    )
}

export default TasksContainer