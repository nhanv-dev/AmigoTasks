import { Task } from '@services/task/types';
import React from 'react'
interface Props {
    tasks: Task[];
}

const ListView = ({ tasks }: Props) => {
    return (
        <div>ListView</div>
    )
}

export default ListView