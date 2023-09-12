"use client";

import CustomDropdown from '@app/(protected)/_components/dropdown/CustomDropdown';
import { DropdownItem } from '@nextui-org/react';
import { BsThreeDots } from 'react-icons/bs';

const WorkspaceDropdown = ({ onOpenChange }) => {
    return (
        <CustomDropdown icon={<BsThreeDots />}>
            <DropdownItem
                key="new"
                description="Allows you to create a new"
                title='New workspace'
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onOpenChange(true)
                }}
            />
            <DropdownItem
                key="delete"
                color="danger"
                title='Clear workspace'
                className='text-danger'
            />
        </CustomDropdown>

    )
}

export default WorkspaceDropdown