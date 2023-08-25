"use client";

import CustomDropdown from '@app/(protected)/_components/dropdown/CustomDropdown';
import { DropdownItem } from '@nextui-org/react';
import { BsThreeDots } from 'react-icons/bs';

const TopicDropdown = ({ onOpenChange }) => {
    return (
        <CustomDropdown icon={<BsThreeDots />}>
            <DropdownItem
                key="new"
                description="Allows you to create a new"
                title='New topic'
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onOpenChange(true)
                }}
            />
            <DropdownItem
                key="delete"
                color="danger"
                title='Clear topic'
                className='text-danger'
            />
        </CustomDropdown>

    )
}

export default TopicDropdown;