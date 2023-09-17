import { Task, TaskList } from '@services/task/types';
import TasksContainer from './TasksContainer';
import { ScrollShadow } from '@nextui-org/react';

interface Props {
    tasks: Task[];
    selectedTaskList: TaskList;
}

const BoardView = ({ tasks, selectedTaskList }: Props) => {

    return (
        <ScrollShadow orientation="horizontal" className='flex-1'>
            <div className='mt-2 flex-1 flex items-start gap-6'>
                {selectedTaskList?.statuses.map((status: any) => (
                    <div
                        key={status.id}
                        className='w-[250px]'
                    >
                        <TasksContainer
                            title={status.title}
                            status={status.id}
                            tasks={tasks}
                        />
                    </div>
                ))}
            </div>
        </ScrollShadow>
    )
}

export default BoardView;