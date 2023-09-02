import { ScrollShadow, Textarea } from '@nextui-org/react';
import { TopicSelectors } from '@redux/features/topic/topicSelectors'
import { useAppSelector } from '@redux/hook'
import DataFormatter from '@util/DataFormatter';
import React from 'react'
import { BiTime } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';
import { TbSend } from 'react-icons/tb';

const TopicComments = () => {
    // const { topic } = useAppSelector(TopicSelectors.getTopic());
    const comments = sampleCommentArray;
    return (
        <div className='flex flex-col h-full'>
            <div className='flex items-center gap-4 justify-between mb-3'>
                <h5 className='font-semibold'>
                    Comments
                    <span className='ml-1 text-md'>({comments.length})</span>
                </h5>
                <button>
                    <BsThreeDots />
                </button>
            </div>
            <div className='mb-6'>
                <div className='mb-3'>
                    <form className='rounded-md bg-default-100 hover:bg-default-200 transition-theme'>
                        <Textarea
                            name='content'
                            maxRows={3}
                            minRows={3}
                            placeholder="Write something..."
                            tabIndex={-1}
                            classNames={{
                                base: '',
                                inputWrapper: 'bg-transparent rounded-md',
                            }}
                        />
                        <div className='flex items-center gap-2 justify-end'>
                            <button type='submit' className='w-[30px] h-[30px] bg-background dark:bg-dark-background rounded-md flex items-center justify-center'>
                                <p className='text-[1rem]'>
                                    <TbSend />
                                </p>
                            </button>
                        </div>
                    </form>
                </div>
                {comments.map((comment) => (
                    <TopicComment key={comment.id} comment={comment} />
                ))}
            </div>
        </div>
    )
}

export default TopicComments;


const TopicComment = ({ comment }) => {
    return (
        <div className='mb-3'>
            <div className='flex items-center justify-between gap-2 mb-1'>
                <div>
                    <p className='text-sm font-semibold'>
                        @Me
                    </p>
                </div>
                <div className='min-w-max flex items-center justify-end gap-1 '>
                    <p>
                        <BiTime />
                    </p>
                    <p className='text-xs font-semibold'>
                        {DataFormatter.formatDateToDaysAgo(comment.createdAt)}
                    </p>
                </div>
            </div>
            <p className='text-sm font-semibold bg-slate-200 p-2 rounded-md'>
                {comment.content}
            </p>
        </div>
    )
}

const sampleCommentArray = [
    {
        id: "1",
        content: "Finish writing the report introduction section by today.",
        createdAt: new Date("2023-08-01").toISOString(),
        updatedAt: new Date("2023-08-10").toISOString(),
        deletedAt: null,
    },
    {
        id: "2",
        content: "Review and provide feedback on the design mockups by tomorrow.",
        createdAt: new Date("2023-08-27").toISOString(),
        updatedAt: new Date("2023-08-11").toISOString(),
        deletedAt: null,
    },
    {
        id: "3",
        content: "Implement the user registration functionality with validation.",
        createdAt: new Date("2023-08-03").toISOString(),
        updatedAt: new Date("2023-08-12").toISOString(),
        deletedAt: null,
    },
    {
        id: "4",
        content: "Test the new feature on various devices and browsers.",
        createdAt: new Date("2023-08-04").toISOString(),
        updatedAt: new Date("2023-08-13").toISOString(),
        deletedAt: null,
    },
    {
        id: "5",
        content: "Discuss potential project timelines with the team.",
        createdAt: new Date("2023-08-05").toISOString(),
        updatedAt: new Date("2023-08-14").toISOString(),
        deletedAt: null,
    },
    {
        id: "6",
        content: "Prepare the presentation slides for the client meeting.",
        createdAt: new Date("2023-08-06").toISOString(),
        updatedAt: new Date("2023-08-15").toISOString(),
        deletedAt: null,
    },
    {
        id: "7",
        content: "Refactor the codebase to improve maintainability.",
        createdAt: new Date("2023-08-07").toISOString(),
        updatedAt: new Date("2023-08-16").toISOString(),
        deletedAt: null,
    },
    {
        id: "8",
        content: "Coordinate with the marketing team for campaign launch.",
        createdAt: new Date("2023-08-08").toISOString(),
        updatedAt: new Date("2023-08-17").toISOString(),
        deletedAt: null,
    },
    {
        id: "9",
        content: "Gather user feedback and prioritize feature requests.",
        createdAt: new Date("2023-08-09").toISOString(),
        updatedAt: new Date("2023-08-18").toISOString(),
        deletedAt: null,
    },
    {
        id: "10",
        content: "Update the project documentation with recent changes.",
        createdAt: new Date("2023-08-10").toISOString(),
        updatedAt: new Date("2023-08-19").toISOString(),
        deletedAt: null,
    },
    {
        id: "11",
        content: "Conduct code reviews for the latest pull requests.",
        createdAt: new Date("2023-08-11").toISOString(),
        updatedAt: new Date("2023-08-20").toISOString(),
        deletedAt: null,
    },
    {
        id: "12",
        content: "Test the application's performance under load.",
        createdAt: new Date("2023-08-12").toISOString(),
        updatedAt: new Date("2023-08-21").toISOString(),
        deletedAt: null,
    },
    {
        id: "13",
        content: "Update the UI to match the new brand guidelines.",
        createdAt: new Date("2023-08-13").toISOString(),
        updatedAt: new Date("2023-08-22").toISOString(),
        deletedAt: null,
    },
    {
        id: "14",
        content: "Prepare for the upcoming project demo to stakeholders.",
        createdAt: new Date("2023-08-14").toISOString(),
        updatedAt: new Date("2023-08-23").toISOString(),
        deletedAt: null,
    },
    {
        id: "15",
        content: "Finalize and send out the project status report.",
        createdAt: new Date("2023-08-15").toISOString(),
        updatedAt: new Date("2023-08-24").toISOString(),
        deletedAt: null,
    },
];
