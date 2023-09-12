"use client";

import CustomDropdown from '@app/(protected)/_components/dropdown/CustomDropdown';
import { DropdownItem } from '@nextui-org/react';
import { TaskThunks } from '@redux/features/task/taskThunks';
import { useAppDispatch } from '@redux/hook';
import { BsThreeDots } from 'react-icons/bs';


const TaskDropdown = ({ task }) => {
    const dispatch = useAppDispatch();

    return (
        <CustomDropdown icon={<BsThreeDots />}>
            <DropdownItem
                key="new"
                description="Allows you to create a new"
                title='View task'
                onClick={(e) => {

                }}
            />
            <DropdownItem
                key="delete"
                color="danger"
                title='Delete task'
                className='text-danger'
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    dispatch(TaskThunks.deleteTask(task.id))
                }}
            />
        </CustomDropdown>

    )
}

export default TaskDropdown