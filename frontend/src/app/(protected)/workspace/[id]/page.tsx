"use client";

import { TaskSelectors } from '@redux/features/task/taskSelectors';
import { TaskThunks } from '@redux/features/task/taskThunks';
import { WorkspaceSelectors } from '@redux/features/workspace/workspaceSelectors';
import { WorkspaceActions } from '@redux/features/workspace/workspaceSlice';
import { useAppDispatch, useAppSelector } from '@redux/hook';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { BsFillClipboardCheckFill } from 'react-icons/bs';
import Helmet from '../../_components/helmet';
import CustomTabs from '../../_components/tabs';
import BoardView from '../_components/board-view';
import TaskListProfile from '../_components/task-list/TaskListProfile';
import TaskModal from '../_components/task/TaskModal';

interface Props {
    params: { id: string };
}

const WorkSpace = ({ params }: Props) => {
    const dispatch = useAppDispatch();
    const { workspace } = useAppSelector(WorkspaceSelectors.getWorkspace());
    const { workspaces } = useAppSelector(WorkspaceSelectors.getWorkspaces());
    const { selectedTaskList } = useAppSelector(TaskSelectors.getFormTaskList());
    const { tasks } = useAppSelector(TaskSelectors.getTasks());

    const searchParams = useSearchParams();
    const taskListId = searchParams?.get('t');

    useEffect(() => {
        if (!params?.id) return;
        dispatch(TaskThunks.getTaskListsByWorkspaceId(params.id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (!taskListId) return;
        dispatch(TaskThunks.getTasksByTaskListId(taskListId))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [taskListId])

    useEffect(() => {
        const index = workspaces.findIndex(ws => ws.id === params.id);
        dispatch(WorkspaceActions.setWorkspace(workspaces[index]))
        return ()=>{
            dispatch(WorkspaceActions.setWorkspace(null))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [workspaces])

    if (!taskListId || !selectedTaskList) {
        return (
            <div className='flex items-center justify-center h-[200px]'>
                <h5 className='font-bold text-lg'>
                    Select task list
                </h5>
            </div>
        )
    }

    return (
        <Helmet title={workspace?.title ? ` ${workspace.title} - AmigoTasks` : 'Workspace - AmigoTasks'}>
            <TaskModal />
            <TaskListProfile />
            <CustomTabs
                tabs={[
                    {
                        label: 'Board view', panel: <BoardView tasks={tasks} selectedTaskList={selectedTaskList} />,
                        icon: (
                            <p className='relative top-[-1px]'>
                                <BsFillClipboardCheckFill />
                            </p>
                        )
                    },
                    // {
                    //     label: 'List view', panel: <ListView tasks={tasks} />,
                    //     icon: (
                    //         <p className='relative top-[-1px]'>
                    //             <FaClipboardList />
                    //         </p>
                    //     )
                    // },
                    // {
                    //     label: 'Table view', panel: <TableView tasks={tasks} />,
                    //     icon: (
                    //         <p className='text-[1rem] relative top-[-1px]'>
                    //             <BsTable />
                    //         </p>
                    //     )
                    // },
                    // {
                    //     label: 'Gallery view', panel: <GalleryView tasks={tasks} />,
                    //     icon: (
                    //         <p className='text-[1.2rem] relative top-[-0.5px]'>
                    //             <TbLayoutDashboard />
                    //         </p>
                    //     )
                    // },
                ]}
            />
        </Helmet >
    )
}

export default WorkSpace;

