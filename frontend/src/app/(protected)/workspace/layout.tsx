"use client";
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import TaskLists from './_components/task-list/TaskLists';
import { useAppDispatch, useAppSelector } from '@redux/hook';
import { TaskThunks } from '@redux/features/task/taskThunks';
import { WorkspaceSelectors } from '@redux/features/workspace/workspaceSelectors';
import { TaskActions } from '@redux/features/task/taskSlice';

export default function WorkspaceLayout({ children }: { children: React.ReactNode }) {
    const { workspace } = useAppSelector(WorkspaceSelectors.getWorkspace());

    const searchParams = useSearchParams();
    const t = searchParams?.get('t');
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!workspace) return;
        dispatch(TaskThunks.getTaskListsByWorkspaceId(workspace.id))
        dispatch(TaskActions.setFormTaskList({ selectedTaskList: null }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [workspace])


    return (
        <main>
            <div className='flex items-start gap-4 px-4 py-4'>
                <div className='w-[250px]'>
                    <TaskLists workspaceId={workspace?.id} />
                </div>
                <div className='flex-1'>
                    {children}
                </div>
            </div>
        </main>
    )
}
