import React from 'react'
import TasksContainer from './TasksContainer';
import { Task } from '@services/task/types';

interface Props {
    tasks: Task[];
}

const GalleryView = ({ tasks }: Props) => {
    return (
        <div className='flex-1 flex items-start gap-4 mb-12'>
            gallery
        </div>
    )
}

export default GalleryView;