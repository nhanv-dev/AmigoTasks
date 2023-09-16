import { Task, TaskList } from '@services/task/types';
import TasksContainer from './TasksContainer';

interface Props {
    tasks: Task[];
    selectedTaskList: TaskList;
}

const BoardView = ({ tasks, selectedTaskList }: Props) => {
    console.log(tasks)
    return (
        <div className='mt-2 flex-1 flex items-start gap-6'>
            {selectedTaskList?.statuses.map((status: any) => (
                <TasksContainer key={status.id} title={status.title} type={status} tasks={tasks} />
            ))}
        </div>
    )
}

export default BoardView;