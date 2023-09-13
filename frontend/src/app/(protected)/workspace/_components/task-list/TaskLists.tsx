
import SidebarCard from '@app/(protected)/_components/card/SidebarCard';
import CustomDropdown from '@app/(protected)/_components/dropdown/CustomDropdown';
import { Button, DropdownItem } from '@nextui-org/react';
import { TaskSelectors } from '@redux/features/task/taskSelectors';
import { TaskThunks } from '@redux/features/task/taskThunks';
import { useAppDispatch, useAppSelector } from '@redux/hook';
import { CreateTaskList, TaskList } from '@services/task/types';
import { useEffect } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { IoMdAddCircleOutline } from 'react-icons/io';
import TaskListItem from './TaskListItem';

const TaskLists = ({ workspaceId }) => {
    const dispatch = useAppDispatch();
    const { taskLists, taskListsLoading } = useAppSelector(TaskSelectors.getTaskLists());

    useEffect(() => {
        if (!workspaceId) return;
        dispatch(TaskThunks.getTaskListsByWorkspaceId(workspaceId))
    }, [workspaceId])

    const handleSelectTaskList = async (taskList: TaskList) => {
        dispatch(TaskThunks.getTaskListById(taskList.id))
    }

    return (
        <SidebarCard>
            <div className='flex items-center justify-between gap-4 mb-2'>
                <h5 className='font-semibold text-md'>
                    My Tasks
                </h5>
                <CustomDropdown icon={<BsThreeDots />}>
                    <DropdownItem
                        key="new"
                        title='Create new'
                        startContent={<IoMdAddCircleOutline className='text-[1.1rem]' />}
                        onClick={(e) => {
                            const payload: CreateTaskList = {
                                title: `New list #${taskLists.length + 1}`,
                                workspace: workspaceId,
                                statuses: ['pending', 'in progress', 'completed']

                            }
                            console.log(payload)
                            dispatch(TaskThunks.createTaskList(payload))
                        }}
                    />
                </CustomDropdown>
            </div>
            <div className='ư-full flex flex-col gap-1'>
                {taskLists.length === 0 &&
                    <div>
                        <Button
                            tabIndex={-1}
                            type='button'
                            onClick={() => {
                                const payload: CreateTaskList = {
                                    title: `New list #${taskLists.length + 1}`,
                                    workspace: workspaceId,
                                    statuses: ['pending', 'in progress', 'completed']

                                }
                                console.log(payload)
                                dispatch(TaskThunks.createTaskList(payload))
                            }}
                            className='mt-5 w-full rounded-md text-md font-semibold'
                        >
                            Create new list
                        </Button>
                    </div>
                }
                {taskLists.map(taskList => (
                    <TaskListItem
                        key={taskList.id}
                        item={taskList}
                        handleSelectTaskList={handleSelectTaskList}
                    />
                ))}
            </div>
        </SidebarCard>
    )
}

export default TaskLists