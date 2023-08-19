import { Task } from '@/services/task/types';
import DataFormatter from '@/util/DataFormatter';
import { useState } from 'react';

interface Props {
    task: Task;
}

const TaskCard = ({ task }: Props) => {
    const [draggedItem, setDraggedItem] = useState<Task | null>(null);

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        setDraggedItem(task);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        setDraggedItem(null);
    };



    return (
        <div
            draggable
            onDragStart={(e) => handleDragStart(e)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e)}

            >
            <div className="bg-background dark:bg-dark-background shadow-sm p-4 rounded-md transition-all">
                <h3 className="text-md font-semibold mb-2 transition-all">{task.title}</h3>
                <div className="mt-3">
                    {task.tags.map((tag, index) => (
                        <span key={index} className="mr-2 bg-gray-200 px-2 py-1 rounded-lg text-sm">
                            {tag}
                        </span>
                    ))}
                </div>
                <p className="text-sm font-semibold text-gray-500 mt-3">
                    {DataFormatter.formatCreatedAt(task.createdAt)}
                </p>
            </div>
        </div>
    )
}

export default TaskCard;

