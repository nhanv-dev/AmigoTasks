"use client";

import StarButton from '@app/(protected)/_components/buttons/StarButton';
import { Workspace } from '@services/workspace/types';
import Link from 'next/link';
import { BsThreeDots } from 'react-icons/bs';

interface Props {
  workspace: Workspace;
}

const WorkspaceItem = ({ workspace }: Props) => {

  return (
    <div className='mb-1'>
      <Link href={`/workspace/${workspace.id}`}
        tabIndex={-1}
        className='flex items-center gap-4 text-sm font-semibold dark:text-dark-text text-text  px-3 py-2.5 hover:bg-background-50 dark:bg-dark-background-50 rounded-md transition-theme'>
        <p className='flex-1 flex items-start gap-2'>
          <StarButton checked={workspace.isPriority} onClick={() => { }} />
          {workspace.name}
        </p>
        <ProgressItem workspace={workspace} />
        <button className='hover:bg-[#f5f5f5] hover:text-text  p-1 rounded-sm text-text-50 dark:text-dark-text-50 transition-theme'>
          <BsThreeDots />
        </button>
      </Link>
    </div>
  )
}

export default WorkspaceItem;

const ProgressItem = ({ workspace }) => {
  return (
    <p className='px-2 py-0.5 rounded-full bg-[#E6E6E6] dark:text-text-50 text-xs'>
      {workspace.completedTask}/{workspace.completedTask + workspace.pendingTask + workspace.inProgressTask}
    </p>
  )
}