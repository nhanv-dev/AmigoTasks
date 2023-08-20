import { Task } from '@/services/task/types';
import DataFormatter from '@/util/DataFormatter';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';
import Link from 'next/link';
import { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { MdOutlineModeComment } from 'react-icons/md';

interface Props {
    task: Task;
    open: boolean;
    setOpen: (value: boolean) => void;
}

const TaskModal = ({ task, open, setOpen }: Props) => {



    return (
        <Modal
            size={"3xl"}
            isOpen={open}
            onClose={() => setOpen(false)}
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                        <ModalBody>
                            <div className="cursor-pointer bg-background  dark:bg-dark-background shadow-sm p-4 rounded-md transition-theme">
                                <div className='flex items-center justify-between gap-4 mb-2'>
                                    <h3 className="text-[0.875rem] font-semibold text-text dark:text-dark-text transition-theme">
                                        {task.title}
                                    </h3>
                                    <button>
                                        <BsThreeDots />
                                    </button>
                                </div>
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

                                            className={`  inline-flex items-center min-w-max rounded-sm  px-2 py-1 text-xs font-bold`}
                                        >
                                            Add tag
                                        </button>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p className="text-xs font-semibold text-text-50 dark:text-dark-text-50 transition-theme">
                                        {DataFormatter.formatCreatedAt(task.createdAt)}
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
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onClick={onClose} className='rounded-md'>
                                Close
                            </Button>
                            <Button color="primary" onPress={onClose} className='rounded-md'>
                                Action
                            </Button>
                        </ModalFooter>
                    </>
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

