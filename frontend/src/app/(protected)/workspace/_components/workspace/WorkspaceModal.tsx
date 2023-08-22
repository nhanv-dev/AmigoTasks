"use client";

import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import { WorkspaceSelectors } from '@redux/features/workspace/workspaceSelectors';
import { WorkspaceThunks } from '@redux/features/workspace/workspaceThunks';
import { useAppDispatch, useAppSelector } from '@redux/hook';
import { CreateWorkspace } from '@services/workspace/types';
import React from 'react'

const WorkSpaceModal = ({ onOpenChange }) => {
    const { isOpen, loading, selectedWorkspace } = useAppSelector(WorkspaceSelectors.getForm());
    const dispatch = useAppDispatch();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const data: CreateWorkspace = {
            name: 'demo',
            description: 'demo',
            isPriority: false,
            tags: [],
        }
        dispatch(WorkspaceThunks.create(data))
    }

    return (
        <div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='3xl'>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                            <ModalBody>
                                <form onSubmit={handleSubmit}>

                                </form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}

export default WorkSpaceModal