"use client";

import CustomDropdown from '@app/(protected)/_components/dropdown/CustomDropdown';
import { DropdownItem } from '@nextui-org/react';
import { TopicThunks } from '@redux/features/topic/topicThunks';
import { useAppDispatch } from '@redux/hook';
import { PayloadAction } from '@reduxjs/toolkit';
import { CreateTopic } from '@services/topic/types';
import { useRouter } from 'next/navigation';
import { BsThreeDots } from 'react-icons/bs';

const TopicDropdown = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const handleCreateTopic = async () => {
        try {
            const newTopic: CreateTopic = {
                title: 'Untitled',
                parent: null
            }
            const action: PayloadAction<any> = await dispatch(TopicThunks.create(newTopic))
            router.push(`/topic/${action.payload.id}`)
        } catch (error) {

        }
    }

    return (
        <CustomDropdown icon={<BsThreeDots />}>
            <DropdownItem
                key="new"
                description="Allows you to create a new"
                title='New topic'
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    // onOpenChange(true)
                    handleCreateTopic();
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