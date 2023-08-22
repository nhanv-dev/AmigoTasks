"use client";

import React from 'react'
import Link from 'next/link';
import { WorkSpace } from '@services/task/types';

interface Props {
  workSpace: WorkSpace;
}

const WorkSpaceItem = ({ workSpace }: Props) => {

  return (
    <div className='mb-3 p-3 bg-background-50 dark:bg-dark-background-50 rounded-md transition-theme'>
      <Link href={`/tasks/${workSpace.id}`} className='flex items-start text-md font-semibold dark:text-dark-text text-text transition-theme'>
        {workSpace.name}
      </Link>
    </div>
  )
}

export default WorkSpaceItem;