import { CreateTask, Task } from '@/services/task/types';
import { Button } from '@nextui-org/react';
import { TaskThunks } from '@redux/features/task/taskThunks';
import { WorkspaceSelectors } from '@redux/features/workspace/workspaceSelectors';
import { WorkspaceThunks } from '@redux/features/workspace/workspaceThunks';
import { useAppDispatch, useAppSelector } from '@redux/hook';
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { IoIosAdd } from 'react-icons/io';
import TaskCard from './TaskCard';
import { TaskSelectors } from '@redux/features/task/taskSelectors';

interface Props {
    title: string;
    type: string;
    tasks: Task[];
}

const TasksContainer = ({ title, type, tasks }: Props) => {
    const [data, setData] = useState(tasks.filter(task => task.status === type));
    const [task, setTask] = useState<CreateTask | null>(null);
    const { workspace } = useAppSelector(WorkspaceSelectors.getWorkspace());
    const { selectedTaskList } = useAppSelector(TaskSelectors.getFormTaskList());

    useEffect(() => {
        setData(tasks.filter(task => task.status === type))
    }, [tasks, type])

    const handleAddTask = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        if (!workspace || !selectedTaskList) return;
        setTask({
            title: '',
            description: '',
            status: type,
            workspace: workspace.id,
            taskList: selectedTaskList.id
        })
    }

    return (
        <div className='flex-1 max-w-[380px] transition-theme rounded-md'>
            <div className='flex items-center justify-between gap-4 transition-theme rounded-md'>
                <h5 className='capitalize text-text dark:text-dark-text transition-theme font-bold text-[0.95rem]'>
                    {title}
                    <span className='ml-1 text-md text-text-50 dark:text-dark-text-50 transition-theme' >
                        ({data.length})
                    </span>
                </h5>
                <div className='flex items-center justify-end gap-1.5'>
                    <button tabIndex={-1} className='text-[1.2rem] text-text-50 dark:text-dark-text-50 bg-[transparent] transition-theme rounded-sm p-0.5'>
                        <BsThreeDots />
                    </button>
                    <button tabIndex={-1}
                        onClick={handleAddTask}
                        className='text-[1.2rem] text-text-50 dark:text-dark-text-50 bg-[transparent] transition-theme rounded-sm p-0.5'>
                        <IoIosAdd />
                    </button>
                </div>

            </div>

            <div className={`overflow-hidden transition-all`}>
                {task &&
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.25 }}
                        className='mt-3'
                    >
                        <CreateTaskCard task={task} setTask={setTask} />
                    </motion.div>
                }
                {data.map((task, index) => (
                    <div key={index} className='mt-3'>
                        <TaskCard task={task} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TasksContainer;


const CreateTaskCard = ({ task, setTask }) => {
    const dispatch = useAppDispatch();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        const title = e.target.title.value;
        await dispatch(TaskThunks.createTask({ ...task, title }));
        await dispatch(WorkspaceThunks.getById(task.workspace))
        setTask(null)
    }

    return (
        <form onSubmit={handleSubmit} className="cursor-pointer bg-background dark:bg-dark-background shadow-sm p-3 rounded-md transition-theme">
            <div className='flex items-start justify-between gap-4 mb-5'>
                <input
                    name='title'
                    defaultValue={task.title}
                    placeholder='Write your task'
                    className="outline-none border-none w-full text-[0.8rem] font-semibold text-text dark:text-dark-text bg-[transparent] transition-theme"
                />
            </div>
            <div className='flex items-center justify-end gap-2'>
                <Button variant='flat' color='danger' onClick={() => setTask(null)} type='button'
                    className='text-[0.675rem] font-bold rounded-sm min-h-max min-w-max h-max w-max px-4 py-1.5'>
                    Cancel
                </Button>
                <Button variant='flat' color='primary' type='submit'
                    className='text-[0.675rem] font-bold rounded-sm min-h-max min-w-max h-max w-max px-4 py-1.5'>
                    Save
                </Button>
            </div>
        </form>
    )
}