import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { TaskSelectors } from "@redux/features/task/taskSelectors";
import { TaskThunks } from "@redux/features/task/taskThunks";
import { useAppDispatch, useAppSelector } from "@redux/hook";
import { TaskPriority } from "@services/task/types";
import { MdLabel } from "react-icons/md";
import { useState, useEffect, useMemo } from "react";

const TaskPriorityComponent = () => {
    const dispatch = useAppDispatch();
    const { selectedTask, isOpen } = useAppSelector(TaskSelectors.getForm());
    const [selectedKeys, setSelectedKeys] = useState<TaskPriority | undefined>(selectedTask?.priority);

    useEffect(() => {
        if (!selectedTask) return;
        setSelectedKeys(selectedTask?.priority)
    }, [selectedTask])

    const selectedValue = useMemo(() => {
        if (!selectedKeys) return TaskPriority.LOW;
        return selectedKeys.toLowerCase()
    }, [selectedKeys]);

    return (
        <div className='flex items-center gap-3'>
            <p className='font-semibold text-md'>
                Priority:
            </p>
            <Dropdown
                className='w-[120px]'
                classNames={{
                    base: "rounded-md min-w-[150px]"
                }}
            >
                <DropdownTrigger>
                    <Button variant="flat" className='capitalize rounded-full max-w-[100px] text-[0.8rem] py-1 font-semibold h-auto'>
                        {selectedValue}
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={new Set(selectedKeys)}
                    onSelectionChange={(keys: any) => {
                        for (const value of keys) {
                            dispatch(TaskThunks.updateTask({ ...selectedTask, priority: value }))
                            setSelectedKeys(value)
                        }
                    }}
                    itemClasses={{
                        base: "rounded-sm",
                        title: "font-semibold text-[0.85rem]",
                        description: "font-semibold text-xs",
                    }}
                >
                    <DropdownItem key={TaskPriority.LOW} className='text-sm font-bold text-[#4CAF50] '>
                        <p className='flex items-center gap-2'>
                            <span className='text-[#4CAF50]'>
                                <MdLabel />
                            </span>
                            Low
                        </p>
                    </DropdownItem>
                    <DropdownItem key={TaskPriority.MEDIUM} className='text-sm font-bold text-[#2196F3]'>
                        <p className='flex items-center gap-2'>
                            <span className='text-[#2196F3]'>
                                <MdLabel />
                            </span>
                            Medium
                        </p>
                    </DropdownItem>
                    <DropdownItem key={TaskPriority.HIGH} className='text-sm font-bold text-[#F44336]'>
                        <p className='flex items-center gap-2'>
                            <span className='text-[#F44336]'>
                                <MdLabel />
                            </span>
                            High
                        </p>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}
export default TaskPriorityComponent;