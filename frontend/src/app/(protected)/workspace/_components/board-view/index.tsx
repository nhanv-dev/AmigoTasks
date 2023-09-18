import { Task, TaskList } from '@services/task/types';
import TasksContainer from './TasksContainer';
import { ScrollShadow } from '@nextui-org/react';
import { useAppDispatch } from '@redux/hook';
import { TaskThunks } from '@redux/features/task/taskThunks';

interface Props {
    tasks: Task[];
    selectedTaskList: TaskList;
}

const BoardView = ({ tasks, selectedTaskList }: Props) => {
    const dispatch = useAppDispatch();

    const hanldeOnDrop = (e: any) => {
        e.stopPropagation();
        const id = e.dataTransfer.getData('id') as string;
        const status = e.target.getAttribute('data-status');
        dispatch(TaskThunks.updateTask({ id, status }));
    }
    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    }

    return (
        <ScrollShadow orientation="horizontal" className='flex-1'>
            <div className='mt-2 flex-1 flex items-start gap-6'>
                {selectedTaskList?.statuses.map((status: any) => (
                    <div
                        key={status.id}
                        className='w-[250px] h-[300px]'
                        onDrop={hanldeOnDrop}
                        onDragOver={handleDragOver}
                        data-status={status.id}
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