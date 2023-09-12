"use client";

import DataFormatter from '@/util/DataFormatter';
import { Button, Modal, ModalBody, ModalContent, ModalHeader, ScrollShadow, Textarea } from '@nextui-org/react';
import { TaskSelectors } from '@redux/features/task/taskSelectors';
import { TaskActions } from '@redux/features/task/taskSlice';
import { TaskThunks } from '@redux/features/task/taskThunks';
import { WorkspaceSelectors } from '@redux/features/workspace/workspaceSelectors';
import { useAppDispatch, useAppSelector } from '@redux/hook';
import { TaskStatus } from '@services/task/types';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import TaskCommentContainer from './TaskComment';
import TaskPriorityComponent from './TaskPriorityComponent';
import TaskStatusComponent from './TaskStatusComponent';

const TaskModal = () => {
    const dispatch = useAppDispatch();
    const { workspace } = useAppSelector(WorkspaceSelectors.getWorkspace());
    const { selectedTask, isOpen } = useAppSelector(TaskSelectors.getForm());
    const [selectedKeys, setSelectedKeys] = useState<TaskStatus | undefined>(selectedTask?.status);

    useEffect(() => {
        if (!selectedTask) return;
        setSelectedKeys(selectedTask?.status)
    }, [selectedTask])

    const selectedValue = useMemo(() => {
        if (!selectedKeys) return 'Pending';
        return selectedKeys.replaceAll("_", " ")
    }, [selectedKeys]);

    const handleAddTag = (e: any) => {
        e.preventDefault();
    }

    const onClose = () => {
        dispatch(TaskActions.setForm({ isOpen: false, selectedTask: null }))
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        const title = e.target.title.value;
        const description = e.target.description.value;

        const data = {
            ...selectedTask,
            title,
            description,
            tags: [],
        }
        await dispatch(TaskThunks.updateTask({ ...data }))
        dispatch(TaskActions.setForm({ selectedTask: null, isOpen: false }))
    }
    return (
        <Modal
            isOpen={isOpen}

            classNames={{
                backdrop: 'blur-[4px]',
                wrapper: 'rounded-md'
            }}
            onClose={onClose}
        >
            <ModalContent className='lg:min-w-[1200px] rounded-lg'>
                {(onClose) => (
                    <div className='bg-background dark:bg-dark-background'>
                        <ModalHeader className="flex flex-col gap-1 border-b dark:border-dark-border mb-5">
                            <div className='flex-1 flex items-center gap-3'>
                                <div className='flex items-center gap-2'>
                                    <Link
                                        href={'/worksapce'}
                                        className='text-[0.8rem] '
                                    >
                                        Home
                                    </Link>
                                    <p className='text-xs'>
                                        /

                                    </p>
                                    <Link
                                        href={'/worksapce'}
                                        className='text-[0.8rem] '
                                    >
                                        Workspace
                                    </Link>
                                    <p className='text-xs'>
                                        /
                                    </p>
                                    <Link
                                        href={'/worksapce'}
                                        className='text-[0.8rem] '
                                    >
                                        {workspace?.title}
                                    </Link>
                                </div>
                                <div>

                                </div>
                            </div>
                        </ModalHeader>
                        <ModalBody className='h-full p-5 pt-0 rounded-md'>
                            <div className='h-full flex gap-5'>
                                <div className='min-w-[550px]'>
                                    <form onSubmit={handleSubmit}>
                                        <div className='mb-3 flex items-center gap-8'>
                                            {selectedTask?.status && <TaskStatusComponent />}

                                            {selectedTask?.priority && <TaskPriorityComponent />}
                                        </div>
                                        <div className='flex items-center gap-3 justify-start'>
                                            <input
                                                id='title'
                                                name='title'
                                                defaultValue={selectedTask?.title}
                                                placeholder={selectedTask?.title || 'Write your task'}
                                                className='outline-none border-none w-full text-base font-bold p-3 px-2'
                                            />
                                        </div>
                                        <div className='flex items-center justify-between flex-wrap mb-3'>
                                            <div className="flex gap-2 items-center">
                                                {selectedTask?.tags.slice(0, 3).map((tag, index) => (
                                                    <TaskTag key={index} index={index} tag={tag} />
                                                ))}
                                                <button
                                                    tabIndex={-1}
                                                    draggable={false}
                                                    onClick={handleAddTag}
                                                    className={`inline-flex items-center min-w-max rounded-sm  px-2 py-1 text-xs font-bold`}
                                                >
                                                    <IoMdAdd />
                                                    Add tag
                                                </button>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-3 justify-start'>
                                            <Textarea
                                                tabIndex={-1}
                                                minRows={3}
                                                labelPlacement="outside"
                                                name="description"
                                                placeholder={'Write your description'}
                                                classNames={{
                                                    base: 'rounded-md',
                                                    inputWrapper: 'rounded-md',
                                                    input: 'text-md font-semibold text-text-50 dark:text-dark-tet-50',
                                                }}
                                            />
                                        </div>
                                        <div className='flex items-center justify-end gap-3 mt-3'>
                                            <Button color="danger" variant="light" type='button' onClick={onClose} className='text-sm font-bold rounded-md'>
                                                Close
                                            </Button>
                                            <Button color="primary" type='submit' className='text-sm font-bold rounded-md'>
                                                Save
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                                <div className='flex-1 h-full flex flex-col'>
                                    <div className='flex items-start gap-5 mb-3'>
                                        {selectedTask?.createdAt &&
                                            <p className="text-[0.785rem] font-semibold text-text-50 dark:text-dark-text-50 transition-theme">
                                                Created At:   {DataFormatter.formatDate(selectedTask.createdAt)}
                                            </p>
                                        }
                                        {selectedTask?.updatedAt &&
                                            <p className="text-[0.785rem] font-semibold text-text-50 dark:text-dark-text-50 transition-theme">
                                                Last modified: {DataFormatter.formatDate(selectedTask.updatedAt)}
                                            </p>
                                        }
                                    </div>
                                    <div className='p-5 rounded-lg bg-background-50 dark:bg-dark-background-50 transition-theme flex-1 min-h-[300px] max-h-full'>
                                        <ScrollShadow className="max-h-[400px]">
                                            {selectedTask?.comments.map(comment => (
                                                <TaskCommentContainer key={comment.id} comment={comment} />
                                            ))}

                                        </ScrollShadow>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
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
