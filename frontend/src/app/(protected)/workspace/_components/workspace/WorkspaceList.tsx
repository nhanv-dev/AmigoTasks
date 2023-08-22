import HeaderCard from '@app/(protected)/_components/card/HeaderCard';
import SidebarCard from '@app/(protected)/_components/card/SidebarCard';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import { Workspace } from '@services/workspace/types';
import { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import WorkSpaceModal from './WorkspaceModal';
import WorkspaceItem from './WorkspaceItem';
import { useAppDispatch, useAppSelector } from '@redux/hook';
import { WorkspaceActions } from '@redux/features/workspace/workspaceSlice';
import { WorkspaceThunks } from '@redux/features/workspace/workspaceThunks';
import { WorkspaceSelectors } from '@redux/features/workspace/workspaceSelectors';

const WorkspaceList = () => {
    const { isOpen, selectedWorkspace } = useAppSelector(WorkspaceSelectors.getForm());
    const dispatch = useAppDispatch();

    const onOpenChange = (value: boolean) => {
        dispatch(WorkspaceActions.setForm({ isOpen: value }))
    }

    return (
        <SidebarCard header={<HeaderCard title='Workspace' />}>
            <div className='relative'>
                <WorkSpaceModal onOpenChange={onOpenChange} />
                <div className='flex items-center justify-between gap-3 mb-2'>
                    <h5 className='text-[0.95rem] font-bold text-text dark:text-dark-text transition-theme'>
                        Your workspace
                    </h5>
                    <div>
                        <Dropdown>
                            <DropdownTrigger>
                                <button tabIndex={-1}
                                    className='outline-none border-none hover:bg-[#f5f5f5] hover:text-text  p-1 rounded-sm text-text-50 dark:text-dark-text-50 transition-theme'>
                                    <BsThreeDots />
                                </button>
                            </DropdownTrigger>
                            <DropdownMenu className='text-sm'>
                                <DropdownItem
                                    key="new"
                                    startContent={<AddNoteIcon className="text-[1.1rem]" />}
                                    description="Allows you to edit the file"
                                    title='New workspace'
                                    classNames={{
                                        title: 'text-md font-semibold'
                                    }}
                                    onClick={() => { onOpenChange(true) }}
                                />
                                <DropdownItem
                                    key="delete"
                                    color="danger"
                                    title='Clear workspace'
                                    className='text-danger'
                                    startContent={<DeleteDocumentIcon className="text-[1.05rem]" />}
                                    description="Permanently delete the file"
                                />
                            </DropdownMenu>
                        </Dropdown>

                    </div>
                </div>

                {items.map(item => (
                    <div key={item.id}
                        className='relative'
                    >
                        <WorkspaceItem workspace={item} />
                        <div className='absolute top-0 left-[2px] width-[20px] h-[20px] bg-black' />
                    </div>
                ))}
            </div>

        </SidebarCard>
    )
}

export default WorkspaceList;

export const DeleteDocumentIcon = (props) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height="1em"
        role="presentation"
        viewBox="0 0 24 24"
        width="1em"
        {...props}
    >
        <path
            d="M21.07 5.23c-1.61-.16-3.22-.28-4.84-.37v-.01l-.22-1.3c-.15-.92-.37-2.3-2.71-2.3h-2.62c-2.33 0-2.55 1.32-2.71 2.29l-.21 1.28c-.93.06-1.86.12-2.79.21l-2.04.2c-.42.04-.72.41-.68.82.04.41.4.71.82.67l2.04-.2c5.24-.52 10.52-.32 15.82.21h.08c.38 0 .71-.29.75-.68a.766.766 0 0 0-.69-.82Z"
            fill="currentColor"
        />
        <path
            d="M19.23 8.14c-.24-.25-.57-.39-.91-.39H5.68c-.34 0-.68.14-.91.39-.23.25-.36.59-.34.94l.62 10.26c.11 1.52.25 3.42 3.74 3.42h6.42c3.49 0 3.63-1.89 3.74-3.42l.62-10.25c.02-.36-.11-.7-.34-.95Z"
            fill="currentColor"
            opacity={0.399}
        />
        <path
            clipRule="evenodd"
            d="M9.58 17a.75.75 0 0 1 .75-.75h3.33a.75.75 0 0 1 0 1.5h-3.33a.75.75 0 0 1-.75-.75ZM8.75 13a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Z"
            fill="currentColor"
            fillRule="evenodd"
        />
    </svg>
);

export const AddNoteIcon = (props) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height="1em"
        role="presentation"
        viewBox="0 0 24 24"
        width="1em"
        {...props}
    >
        <path
            d="M7.37 22h9.25a4.87 4.87 0 0 0 4.87-4.87V8.37a4.87 4.87 0 0 0-4.87-4.87H7.37A4.87 4.87 0 0 0 2.5 8.37v8.75c0 2.7 2.18 4.88 4.87 4.88Z"
            fill="currentColor"
            opacity={0.4}
        />
        <path
            d="M8.29 6.29c-.42 0-.75-.34-.75-.75V2.75a.749.749 0 1 1 1.5 0v2.78c0 .42-.33.76-.75.76ZM15.71 6.29c-.42 0-.75-.34-.75-.75V2.75a.749.749 0 1 1 1.5 0v2.78c0 .42-.33.76-.75.76ZM12 14.75h-1.69V13c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.75H7c-.41 0-.75.34-.75.75s.34.75.75.75h1.81V18c0 .41.34.75.75.75s.75-.34.75-.75v-1.75H12c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Z"
            fill="currentColor"
        />
    </svg>
);

const items: Workspace[] = [
    {
        id: '1', name: 'Long Text for Item 1', description: 'Lorem ipsum dolor sit amet...', createdAt: '2023-08-20', updatedAt: '2023-08-20', deletedAt: '', isPriority: false, tasks: [],
        inProgressTask: 0, pendingTask: 0, completedTask: 0, tags: []
        ,
    },
    {
        id: '2', name: 'A Lengthy Description for Item 2', description: 'Nulla facilisi...', createdAt: '2023-08-21', updatedAt: '2023-08-21', deletedAt: '', isPriority: true, tasks: [],
        inProgressTask: 0, pendingTask: 0, completedTask: 0, tags: []
        ,
    },
    {
        id: '3', name: 'Item 3 with Extensive Details', description: 'Sed ut perspiciatis...', createdAt: '2023-08-22', updatedAt: '2023-08-22', deletedAt: '', isPriority: false, tasks: [],
        inProgressTask: 0, pendingTask: 0, completedTask: 0, tags: []
        ,
    },
    {
        id: '4', name: 'A Very Long Name for Item 4', description: 'Etiam sit amet...', createdAt: '2023-08-23', updatedAt: '2023-08-23', deletedAt: '', isPriority: false, tasks: [],
        inProgressTask: 0, pendingTask: 0, completedTask: 0, tags: []
        ,
    },
    {
        id: '5', name: 'Item 5 - Elaborate Content', description: 'Magnam aliquam quaerat...', createdAt: '2023-08-24', updatedAt: '2023-08-24', deletedAt: '', isPriority: true, tasks: [],
        inProgressTask: 0, pendingTask: 0, completedTask: 0, tags: []
        ,
    },
    {
        id: '6', name: 'Item 6 - More Than a Few Words', description: 'Proin dignissim...', createdAt: '2023-08-25', updatedAt: '2023-08-25', deletedAt: '', isPriority: false, tasks: [],
        inProgressTask: 0, pendingTask: 0, completedTask: 0, tags: []
        ,
    },
    {
        id: '7', name: 'Description for Item 7', description: 'Donec feugiat...', createdAt: '2023-08-26', updatedAt: '2023-08-26', deletedAt: '', isPriority: false, tasks: [],
        inProgressTask: 0, pendingTask: 0, completedTask: 0, tags: []
        ,
    },
    {
        id: '9', name: 'Item 9 - Text with Additional Information', description: 'Duis autem...', createdAt: '2023-08-28', updatedAt: '2023-08-28', deletedAt: '', isPriority: false, tasks: [],
        inProgressTask: 0, pendingTask: 0, completedTask: 0, tags: []
        ,
    },
    {
        id: '8', name: 'Item 8 - A Comprehensive Name', description: 'Vestibulum ante...', createdAt: '2023-08-27', updatedAt: '2023-08-27', deletedAt: '', isPriority: true, tasks: [],
        inProgressTask: 0, pendingTask: 0, completedTask: 0, tags: []
        ,
    },
    {
        id: '10', name: 'Item 10 - Exploring the Length of Descriptions', description: 'Vivamus eu...', createdAt: '2023-08-29', updatedAt: '2023-08-29', deletedAt: '', isPriority: true, tasks: [],
        inProgressTask: 0, pendingTask: 0, completedTask: 0, tags: []
        ,
    },
];