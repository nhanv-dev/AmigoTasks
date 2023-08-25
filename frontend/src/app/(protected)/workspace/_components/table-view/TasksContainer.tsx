import { Task } from '@/services/task/types';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';
import DataFormatter from '@util/DataFormatter';

interface Props {
    tasks: Task[];
}

const TasksContainer = ({ tasks }: Props) => {

    return (
        <div className='flex-1 max-w-full transition-theme rounded-md'>

            <Table aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>Title</TableColumn>
                    <TableColumn>Description</TableColumn>
                    <TableColumn>Created at</TableColumn>
                    <TableColumn>Updated at</TableColumn>
                </TableHeader>
                <TableBody>
                    {tasks.map((task, index) => (
                        <TableRow key={task.id}>
                            <TableCell>
                                {task.title}
                            </TableCell>
                            <TableCell>
                                {task.description}
                            </TableCell>
                            <TableCell>
                                {DataFormatter.formatDate(task.createdAt)}
                            </TableCell>
                            <TableCell>
                                {DataFormatter.formatDate(task.updatedAt)}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </div>
    )
}

export default TasksContainer