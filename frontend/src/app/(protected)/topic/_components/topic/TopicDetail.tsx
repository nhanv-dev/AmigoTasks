import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import { TopicSelectors } from '@redux/features/topic/topicSelectors';
import { useAppDispatch, useAppSelector } from '@redux/hook';
import React from 'react';
import TopicPath from './TopicPath';

const TopicDetail = () => {
    const dispatch = useAppDispatch();
    const { topic, loading } = useAppSelector(TopicSelectors.getTopic());
    if (!topic) return null;

    return (
        <div>
            <div className='mb-3'>
                <TopicPath topic={topic} />
            </div>
            <div className='flex gap-4'>
             
                <div>
                    <TopicStatus />
                </div>
            </div>
        </div>
    )
}

export default TopicDetail;


const TopicStatus = () => {
    const { topic } = useAppSelector(TopicSelectors.getTopic());
    const [selectedKeys, setSelectedKeys] = React.useState<any>(new Set([topic?.status]));

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button
                    variant="bordered"
                    className="capitalize"
                >
                    {selectedValue}
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Single selection example"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
            >
                <DropdownItem key="text">Text</DropdownItem>
                <DropdownItem key="number">Number</DropdownItem>
                <DropdownItem key="date">Date</DropdownItem>
                <DropdownItem key="single_date">Single Date</DropdownItem>
                <DropdownItem key="iteration">Iteration</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
