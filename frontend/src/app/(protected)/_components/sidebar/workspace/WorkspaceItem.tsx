"use client";

import StarButton from '@app/(protected)/_components/buttons/StarButton';
import CustomDropdown from '@app/(protected)/_components/dropdown/CustomDropdown';
import { DropdownItem } from '@nextui-org/react';
import { WorkspaceSelectors } from '@redux/features/workspace/workspaceSelectors';
import { WorkspaceActions } from '@redux/features/workspace/workspaceSlice';
import { WorkspaceThunks } from '@redux/features/workspace/workspaceThunks';
import { useAppDispatch, useAppSelector } from '@redux/hook';
import { Workspace } from '@services/workspace/types';
import Link from 'next/link';
import { BsThreeDots } from 'react-icons/bs';

interface Props {
  workspace: Workspace;
}

const WorkspaceItem = ({ workspace }: Props) => {
  const dispatch = useAppDispatch();
  const { workspace: selectedWorkspace } = useAppSelector(WorkspaceSelectors.getWorkspace());

  const handleSetPriority = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    await dispatch(WorkspaceThunks.update({ ...workspace, isPriority: !workspace.isPriority }))
  }

  const handleOpenMenu = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  }
  const handleEditWorkspace = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(WorkspaceActions.setForm({ isOpen: true, loading: false, selectedWorkspace: workspace }))
  }

  const handleDeleteWorkspace = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    await dispatch(WorkspaceThunks.delete(workspace.id))

  }

  return (
    <div className='w-full group'>
      <div
        className={` ${selectedWorkspace?.id === workspace.id ? 'bg-primary/20 text-primary' : 'dark:text-dark-text-50 text-text-50'} max-w-full overflow-hidden flex items-center gap-4 font-semibold px-3 py-1 hover:bg-primary/20 rounded-md transition-theme`}>
        <Link
          tabIndex={-1}
          href={`/workspace/${workspace.id}`}
          onContextMenu={handleOpenMenu}
          className='w-[160px] flex-1 flex items-center gap-2'
        >
          <p className='relative top-[1px]'>
            <StarButton checked={workspace.isPriority} onClick={handleSetPriority} />
          </p>
          <p className='text-ellipsis text-[0.775rem] overflow-hidden whitespace-nowrap'>
            {workspace.title}
          </p>
          {/* <ProgressItem workspace={workspace} /> */}
        </Link>
        <div className='opacity-0 group-hover:opacity-100 transition-all relative w-[24px] h-[24px]'>
          <CustomDropdown icon={<BsThreeDots />}>
            <DropdownItem
              key="edit"
              title='Edit'
              onClick={handleEditWorkspace}
            />
            <DropdownItem
              key="delete"
              color="danger"
              title='Delete'
              className='text-danger'
              onClick={handleDeleteWorkspace}
            />
          </CustomDropdown>
        </div>
      </div>
    </div>
  )
}

export default WorkspaceItem;

const ProgressItem = ({ workspace }) => {
  return (
    <p className='flex items-center gap-[1.5px] px-2 h-[15px] rounded-full bg-default-200 font-bold text-xs'>
      {workspace.completedTaskCount || 0}
      <span>/</span>
      {(workspace.completedTaskCount + workspace.pendingTaskCount + workspace.inProgressTaskCount) || 0}
    </p>
  )
}