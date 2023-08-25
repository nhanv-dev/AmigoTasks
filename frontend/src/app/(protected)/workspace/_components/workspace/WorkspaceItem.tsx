"use client";

import StarButton from '@app/(protected)/_components/buttons/StarButton';
import CustomDropdown from '@app/(protected)/_components/dropdown/CustomDropdown';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
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
    <div className='mb-1 group'>
      <div
        className={` ${selectedWorkspace?.id === workspace.id ? 'bg-background-50 dark:bg-dark-background-50' : ''} max-w-full overflow-hidden flex items-center gap-4 text-sm font-semibold dark:text-dark-text text-text px-3 py-2 hover:bg-background-50 dark:hover:bg-dark-background-50 rounded-md transition-theme`}>
        <Link
          tabIndex={-1}
          href={`/workspace/${workspace.id}`}
          onContextMenu={handleOpenMenu}
          className='flex-1 flex items-center gap-2'
        >
          <p className='relative top-[1px]'>
            <StarButton checked={workspace.isPriority} onClick={handleSetPriority} />
          </p>
          <p className='flex-1 max-w-[150px] text-ellipsis overflow-hidden whitespace-nowrap'>
            {workspace.title}
          </p>
        </Link>
        <ProgressItem workspace={workspace} />
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
  )
}

export default WorkspaceItem;

const ProgressItem = ({ workspace }) => {
  return (
    <p className='px-2 py-0.5 rounded-full bg-[#E6E6E6] dark:text-text-50 text-xs'>
      {workspace.completedTaskCount || 0}/{(workspace.completedTaskCount + workspace.pendingTaskCount + workspace.inProgressTaskCount) || 0}
    </p>
  )
}