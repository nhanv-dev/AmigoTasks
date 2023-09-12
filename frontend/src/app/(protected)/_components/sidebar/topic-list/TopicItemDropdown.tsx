import CustomDropdown from '@app/(protected)/_components/dropdown/CustomDropdown';
import { backgroundImages } from '@app/(protected)/topic/_components/topic/TopicImages';
import { DropdownItem } from '@nextui-org/react';
import { TopicThunks } from '@redux/features/topic/topicThunks';
import { useAppDispatch } from '@redux/hook';
import { PayloadAction } from '@reduxjs/toolkit';
import { CreateTopic } from '@services/topic/types';
import { useRouter } from 'next/navigation';
import { BsThreeDots } from 'react-icons/bs';
import { MdDelete, MdOpenInNew } from 'react-icons/md';

const TopicItemDropdown = ({ topic }) => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const handleCreateTopic = async (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        try {
            const randomIndex = Math.floor(Math.random() * backgroundImages.length);

            const newTopic: CreateTopic = {
                title: 'Title',
                parent: topic.id,
                content: JSON.stringify(
                    {
                        blocks: [{
                            type: 'header',
                            data: {
                                text: 'Start writing your content here',
                                level: '2'
                            },
                            placeholder: 'Write your content here'
                        }]
                    }
                ),
                background: backgroundImages[randomIndex],
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
                title='Create a new'
                startContent={
                    <span className='text-[1rem]'>
                        <MdOpenInNew />
                    </span>
                }
                onClick={handleCreateTopic}
            />
            <DropdownItem
                key="delete"
                color="danger"
                title='Delete topic'
                className='text-danger'
                startContent={
                    <span className='text-[1rem]'>
                        <MdDelete />
                    </span>
                }
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    dispatch(TopicThunks.delete(topic.id))
                }}
            />
        </CustomDropdown>
    )
}

export default TopicItemDropdown;