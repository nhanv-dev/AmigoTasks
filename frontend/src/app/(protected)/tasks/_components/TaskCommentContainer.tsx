import { TaskComment } from '@/services/task/types';
import { Button } from '@nextui-org/react';
import DataFormatter from '@util/DataFormatter';
import React from 'react'
import { MdModeEdit, MdOutlineDelete } from 'react-icons/md';

interface Props {
    comment: TaskComment;
    isEdit: boolean;

}

const TaskCommentContainer = ({ comment, isEdit }: Props) => {

    const handleEdit = () => {

    }

    const handleDelete = () => {

    }

    return (
        <div className=''>
            <div className='flex items-center justify-between gap-4 mb-3'>
                <p className='font-semibold text-xs'>
                    {DataFormatter.formatDate(comment.createdAt)}
                </p>
                <div className='flex items-center justify-end gap-2'>
                    <Button size='sm'  isIconOnly className='text-[1.1rem] p-0 max-w-max rounded-md'>
                        <MdModeEdit />
                    </Button>
                    <Button size='sm'  color="danger" isIconOnly className='text-[1.1rem] p-0 max-w-max rounded-md'>
                        <MdOutlineDelete />
                    </Button>
                </div>
            </div>
            <div className='rounded-md p-3 bg-background-50 dark:bg-dark-background-50 transition-theme mb-3 flex items-start gap-4 justify-between'>
                <div>
                    <p className='font-semibold text-sm text-text-50 dark:text-dark-text-50 transition-theme'>
                        {comment.content}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TaskCommentContainer;