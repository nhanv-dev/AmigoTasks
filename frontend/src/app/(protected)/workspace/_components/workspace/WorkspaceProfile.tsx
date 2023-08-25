"use client";

import { WorkspaceSelectors } from '@redux/features/workspace/workspaceSelectors';
import { useAppSelector } from '@redux/hook';
import React from 'react'
import TaskTag from '../task/TaskTag';
import { FiClock } from 'react-icons/fi';
import DataFormatter from '@util/DataFormatter';
import { Button, Skeleton } from '@nextui-org/react';
import { AiTwotoneEdit } from 'react-icons/ai';

const WorkspaceProfile = () => {
    const { workspace, loading: loadingWorkspace } = useAppSelector(WorkspaceSelectors.getWorkspace());

    return (

        <div className='mb-3 rounded-md shadow-sm'>
            <div
                style={{ backgroundImage: `url("/images/bg-wp.jpg")` }}
                className='relative w-full h-[250px] bg-cover bg-center bg-no-repeat rounded-md'
            >
                <div className='flex items-end justify-start p-4 absolute left-0 bottom-0 bg-[rgba(0,0,0,0.4)] rounded-md w-full h-full'>
                    <div className=''>
                        {loadingWorkspace &&
                            <Skeleton className="h-3 w-3/5 rounded-lg" />
                        }
                        <h5 className='mb-1 font-bold text-4xl text-dark-text dark:text-dark-text transition-theme'>
                            {workspace?.title}
                        </h5>
                        {workspace?.tags && workspace?.tags?.length > 0 &&
                            <div className='flex flex-wrap items-center justify-start gap-2'>
                                {workspace.tags.map((tag, index) => (
                                    <TaskTag tag={tag} index={index} key={index} />
                                ))}
                            </div>
                        }
                        <div className='mt-2.5 flex items-center gap-2 justify-start font-semibold text-md text-dark-text dark:text-dark-text transition-theme'>
                            <span className='text-[1.1rem]'>
                                <FiClock />
                            </span>
                            {workspace?.createdAt && DataFormatter.formatDate(workspace?.createdAt)}
                        </div>
                    </div>
                    <div className='absolute top-0 right-0 p-4'>
                        <Button
                            isIconOnly
                            color="default"
                            aria-label="Edit"
                            className='rounded-full text-[1.1rem] text-dark-text min-w-[32px] min-h-[32px] bg-[rgba(255,255,255,0.3)]'
                        >
                            <AiTwotoneEdit />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkspaceProfile