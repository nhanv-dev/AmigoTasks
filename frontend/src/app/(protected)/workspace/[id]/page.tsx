"use client";

import { TaskSelectors } from '@redux/features/task/taskSelectors';
import { TaskThunks } from '@redux/features/task/taskThunks';
import { WorkspaceSelectors } from '@redux/features/workspace/workspaceSelectors';
import { WorkspaceActions } from '@redux/features/workspace/workspaceSlice';
import { useAppDispatch, useAppSelector } from '@redux/hook';
import { useEffect } from 'react';
import { BsFillClipboardCheckFill, BsTable } from 'react-icons/bs';
import { FaClipboardList } from 'react-icons/fa';
import { TbLayoutDashboard } from 'react-icons/tb';
import Helmet from '../../_components/helmet';
import CustomTabs from '../../_components/tabs';
import BoardView from '../_components/board-view';
import ListView from '../_components/list-view';
import TableView from '../_components/table-view';
import TaskModal from '../_components/task/TaskModal';
import WorkspaceProfile from '../_components/workspace/WorkspaceProfile';
import GalleryView from './../_components/gallery-view';

interface Props {
    params: { id: string };
}

const WorkSpace = ({ params }: Props) => {
    const { workspace, loading: loadingWorkspace } = useAppSelector(WorkspaceSelectors.getWorkspace());
    const { workspaces } = useAppSelector(WorkspaceSelectors.getWorkspaces());
    const { tasks, loading } = useAppSelector(TaskSelectors.getTasks());

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!params?.id) return;
        dispatch(TaskThunks.getByWorkspaceId(params.id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params])

    useEffect(() => {
        const index = workspaces.findIndex(ws => ws.id === params.id);
        dispatch(WorkspaceActions.setWorkspace(workspaces[index]))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params, workspaces])

    return (
        <Helmet title={workspace?.title ? ` ${workspace.title} | AmigoTasks` : 'Workspace | AmigoTasks'}>
            <div className='px-4 pt-4'>
                <TaskModal />
                <WorkspaceProfile />
                <CustomTabs
                    tabs={[
                        {
                            label: 'Board view', panel: <BoardView tasks={tasks} />,
                            icon: (
                                <p className='relative top-[-1px]'>
                                    <BsFillClipboardCheckFill />
                                </p>
                            )
                        },
                        {
                            label: 'List view', panel: <ListView tasks={tasks} />,
                            icon: (
                                <p className='relative top-[-1px]'>
                                    <FaClipboardList />
                                </p>
                            )
                        },
                        {
                            label: 'Table view', panel: <TableView tasks={tasks} />,
                            icon: (
                                <p className='text-[1rem] relative top-[-1px]'>
                                    <BsTable />
                                </p>
                            )
                        },
                        {
                            label: 'Gallery view', panel: <GalleryView tasks={tasks} />,
                            icon: (
                                <p className='text-[1.2rem] relative top-[-0.5px]'>
                                    <TbLayoutDashboard />
                                </p>
                            )
                        },
                    ]}
                />
            </div>
        </Helmet >
    )
}

export default WorkSpace;

