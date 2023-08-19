import { TaskComment } from '@/services/task/types';
import React from 'react'



interface Props {
    comment: TaskComment;
    isEdit: false;

}

const TaskComment = ({ comment, isEdit }: Props) => {
    return (
        <div>

        </div>
    )
}

export default TaskComment