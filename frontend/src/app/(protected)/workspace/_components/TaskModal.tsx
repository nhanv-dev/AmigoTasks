"use client";

import { Task } from '@/services/task/types';
import DataFormatter from '@/util/DataFormatter';
import { Button, Divider, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea } from '@nextui-org/react';
import Link from 'next/link';
import { MdOutlineModeComment } from 'react-icons/md';
import TaskCommentContainer from './TaskCommentContainer';
import { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface Props {
    task: Task;
    open: boolean;
    setOpen: (value: boolean) => void;
}

const TaskModal = ({ task, open, setOpen }: Props) => {
    const [isEditComment, setIsEditComment] = useState<number | null>(null);

    const handleAddTag = (e: any) => {
        e.preventDefault();
    }

    return (
        <Modal
            size={"3xl"}
            isOpen={open}
            // backdrop={'blur'}
            onClose={() => setOpen(false)}
        >
            <ModalContent>
                {(onClose) => (
                    <div className='bg-background dark:bg-dark-background'>
                        <ModalHeader className="flex flex-col gap-1">
                            <div className='flex-1 flex items-center gap-3'>
                                <button className='btn btn-circle  text-[yellow] text-[1.4rem]'>
                                    {/* <AiOutlineStar /> */}
                                    <AiFillStar />
                                </button>
                                <h3>
                                    {task.title}
                                </h3>
                                <Dropdown
                                    className='w-[120px]'
                                    classNames={{
                                        base: " ",
                                    }}>
                                    <DropdownTrigger>
                                        <Button variant="flat" className='rounded-full max-w-[100px] text-md font-bold h-auto'>
                                            {task.status}
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu aria-label="Task Status">
                                        <DropdownItem key="pending" className='text-sm font-bold'>Pending</DropdownItem>
                                        <DropdownItem key="in_progress" className='text-sm font-bold'>In Progress</DropdownItem>
                                        <DropdownItem key="completed" className='text-sm font-bold'>Completed</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>   </div>
                        </ModalHeader>
                        <ModalBody className=''>
                            <div className="transition-theme">
                                <p className="text-[0.825rem] font-semibold mb-3 text-text-50 dark:text-dark-text-50 transition-theme">
                                    {task.description}
                                </p>

                                <div className='flex items-center justify-between flex-wrap mb-3'>
                                    <div className="flex gap-2 items-center">
                                        {[...task.tags, ...task.tags, ...task.tags].slice(0, 3).map((tag, index) => (
                                            <TaskTag key={index} index={index} tag={tag} />
                                        ))}
                                        <button
                                            tabIndex={-1}
                                            draggable={false}
                                            onClick={handleAddTag}
                                            className={`  inline-flex items-center min-w-max rounded-sm  px-2 py-1 text-xs font-bold`}
                                        >
                                            Add tag
                                        </button>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between mb-4'>
                                    <p className="text-xs font-semibold text-text-50 dark:text-dark-text-50 transition-theme">
                                        {DataFormatter.formatDate(task.createdAt)}
                                    </p>
                                    <p className='flex items-center gap-1 font-semibold text-sm text-text dark:text-dark-text transition-theme'>
                                        <span>
                                            <MdOutlineModeComment />
                                        </span>
                                        <span className='text-xs relative top-[-0.5px]'>
                                            {task.comments.length}
                                        </span>
                                    </p>
                                </div>
                                <div className='max-h-[300px] overflow-auto'>
                                    {task.comments.map((comment, index) => (
                                        <TaskCommentContainer key={index} comment={comment} isEdit={(!!isEditComment && isEditComment === index)} />
                                    ))}
                                </div>
                                <form className='pb-4'>
                                    <Textarea
                                        tabIndex={-1}
                                        minRows={1}
                                        labelPlacement="outside"
                                        placeholder="Enter your description"
                                        className="rounded-md"
                                    />
                                </form>
                                <Divider />
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onClick={onClose} className='text-sm font-bold rounded-md'>
                                Close
                            </Button>
                            <Button color="primary" onPress={onClose} className='text-sm font-bold rounded-md'>
                                Save
                            </Button>
                        </ModalFooter>
                    </div>
                )}
            </ModalContent>
        </Modal>
    )
}

export default TaskModal;


const TaskTag = ({ index, tag }: { index: number, tag: string }) => {
    let color = 'bg-orange-50 text-orange-600'
    if (index % 3 === 0) color = ' bg-blue-50 text-blue-600'
    else if (index % 2 === 0) color = ' bg-indigo-50 text-indigo-600'

    return (
        <Link
            tabIndex={-1}
            draggable={false}
            href={`/tasks/tag/${tag}`}
            className={`${color} inline-flex items-center min-w-max rounded-sm  px-2 py-1 text-xs font-bold`}
        >
            {tag}
        </Link>
    )
}

