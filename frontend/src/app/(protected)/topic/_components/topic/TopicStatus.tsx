import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import { TopicSelectors } from '@redux/features/topic/topicSelectors';
import { useAppSelector } from '@redux/hook';
import React from 'react';

const TopicStatus = () => {
    const { topic } = useAppSelector(TopicSelectors.getTopic());
    const [selectedKeys, setSelectedKeys] = React.useState<any>(new Set([topic?.status]));

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    return (
        <Dropdown
            classNames={{
                base: "rounded-md min-w-[150px]",
            }}
        >
            <DropdownTrigger>
                <Button
                    variant="flat"
                    color='primary'
                    className='text-sm font-semibold text-primary capitalize p-0 h-[24px] w-max px-2 rounded-full'
                >
                    {selectedValue}
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Single selection example"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
                itemClasses={{
                    base: "rounded-sm",
                    title: "font-semibold text-[0.85rem]",
                    description: "font-semibold text-xs",
                }}
            >
                <DropdownItem key="draft">Draft</DropdownItem>
                <DropdownItem key="new">New</DropdownItem>
                <DropdownItem key="in progress">In Progress</DropdownItem>
                <DropdownItem key="completed">Completed</DropdownItem>
                <DropdownItem key="archived">Archived</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

export default TopicStatus;