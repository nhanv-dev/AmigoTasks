import { Task, TaskStatus } from '@services/task/types';
import TasksContainer from './TasksContainer';
import { useAppSelector } from '@redux/hook';
import { TaskSelectors } from '@redux/features/task/taskSelectors';
import { Spinner } from '@nextui-org/react';

interface Props {
    tasks: Task[];
}

const BoardView = ({ tasks }: Props) => {
    const { loading } = useAppSelector(TaskSelectors.getTasks());

    return (
        <div className='flex-1 flex items-start gap-6'>
            <TasksContainer title={'Pending'} type={TaskStatus.PENDING} tasks={tasks} color={"#FFC107"} />
            <TasksContainer title={'In Progress'} type={TaskStatus.IN_PROGRESS} tasks={tasks} color={"#9C27B0"} />
            <TasksContainer title={'Completed'} type={TaskStatus.COMPLETED} tasks={tasks} color={"#4CAF50"} />
            {loading &&
                <div className='flex w-full items-center justify-center'>
                    <Spinner />
                    Loading
                </div>
            }
        </div>
    )
}

export default BoardView;