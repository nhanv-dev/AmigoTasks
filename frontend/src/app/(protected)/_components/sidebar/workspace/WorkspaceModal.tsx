"use client";

import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea } from '@nextui-org/react'
import { WorkspaceSelectors } from '@redux/features/workspace/workspaceSelectors';
import { WorkspaceThunks } from '@redux/features/workspace/workspaceThunks';
import { useAppDispatch, useAppSelector } from '@redux/hook';
import { CreateWorkspace } from '@services/workspace/types';
import { useState } from 'react'
import { LiaTimesSolid } from 'react-icons/lia';

const WorkspaceModal = ({ onOpenChange }) => {
    const dispatch = useAppDispatch();
    const { isOpen, loading, selectedWorkspace } = useAppSelector(WorkspaceSelectors.getForm());
    const [tags, setTags] = useState<string[]>([]);

    const handleSubmit = (e: any, onClose: any) => {
        e.preventDefault();
        e.stopPropagation();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const data: CreateWorkspace = {
            title: title,
            description: description,
            tags: tags,
            isPriority: false,
        }
        if (selectedWorkspace) {
            dispatch(WorkspaceThunks.update({ ...selectedWorkspace, ...data }))
        } else {
            dispatch(WorkspaceThunks.create(data));
        }
        onClose();
    }

    return (
        <div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='3xl'>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                {!selectedWorkspace ? 'Create new workspace' : 'Edit workspace'}
                            </ModalHeader>
                            <ModalBody>
                                <div>
                                    <form id="saveForm" onSubmit={(e) => handleSubmit(e, onClose)}>
                                        <Input
                                            type="text"
                                            label="Title"
                                            name='title'
                                            defaultValue={selectedWorkspace?.title || ''}
                                            placeholder="Enter your workspace"
                                            classNames={{
                                                base: 'mb-3',
                                                label: 'text-md font-semibold text-text dark:text-dark-text transition-theme',
                                                inputWrapper: 'rounded-md',
                                                input: 'text-md font-semibold text-text dark:text-dark-text transition-theme',
                                            }}
                                        />
                                        <Textarea
                                            minRows={1}
                                            label="Description"
                                            name='description'
                                            defaultValue={selectedWorkspace?.description || ''}
                                            placeholder="Enter your description"
                                            classNames={{
                                                base: 'mb-3',
                                                label: 'text-md font-semibold text-text dark:text-dark-text transition-theme',
                                                inputWrapper: 'rounded-md',
                                                input: 'text-md font-semibold text-text dark:text-dark-text transition-theme',
                                            }}
                                        />
                                    </form>
                                    <WorkspaceTags tags={tags} setTags={setTags} />
                                    <div className='flex items-end justify-end gap-2'>
                                        <Button color="danger" variant="light" onPress={onClose} className='rounded-md font-semibold text-md'>
                                            Close
                                        </Button>
                                        <Button color="primary" type="submit" form="saveForm" className='rounded-md font-semibold text-md'>
                                            Save
                                        </Button>
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}

export default WorkspaceModal;


const WorkspaceTags = ({ tags, setTags }) => {

    const handleSubmit = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        const tag = e.target.tag.value;
        if (tag && tags.length < 6) {
            setTags([...tags, tag])
        }
        e.target.reset();
    }

    const handleRemoveTag = (e: any, index: number) => {
        e.preventDefault();
        e.stopPropagation();
        setTags((prev: string[]) => (prev.filter((tag, i) => i !== index)));
    }
    console.log(tags)

    return (
        <div className='mb-5'>
            <form
                onSubmit={handleSubmit}
                className='p-3 bg-default-100 hover:bg-default-200 rounded-md flex flex-col'>
                <label
                    htmlFor='tag'
                    className='cursor-text text-md font-semibold text-text dark:text-dark-text transition-theme'
                >
                    Tags
                </label>
                <div className='flex flex-wrap items-center justify-start gap-3 mt-2'>
                    {tags.length > 0 &&
                        <>
                            {tags.map((tag: string, index: number) => (
                                <Tag key={index} tag={tag} index={index} handleRemoveTag={handleRemoveTag} />
                            ))}
                        </>
                    }
                    <input id='tag' name='tag' type='text'
                        autoComplete='false'
                        className='font-semibold text-md flex-1 min-w-[150px] p-0 bg-[transparent] outline-none border-none'
                        placeholder='Add your tag' />
                </div>
            </form>
        </div>
    )
}


const Tag = ({ index, tag, handleRemoveTag }: { index: number, tag: string, handleRemoveTag: any }) => {
    let color = 'bg-orange-50 text-orange-600'
    if (index % 3 === 0) color = ' bg-blue-50 text-blue-600'
    else if (index % 2 === 0) color = ' bg-indigo-50 text-indigo-600'

    return (
        <div
            className={`${color} inline-flex gap-2 items-center min-w-max rounded-sm px-2 py-1 text-xs font-bold`}
        >
            {tag}
            <button type="button" onClick={(e) => handleRemoveTag(e, index)}>
                <LiaTimesSolid />
            </button>
        </div>
    )
}