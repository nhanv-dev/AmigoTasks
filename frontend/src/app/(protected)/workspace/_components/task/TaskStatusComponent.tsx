import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { TaskSelectors } from "@redux/features/task/taskSelectors";
import { TaskThunks } from "@redux/features/task/taskThunks";
import { useAppDispatch, useAppSelector } from "@redux/hook";
import { useEffect, useMemo, useState } from "react";
import { FaDotCircle } from "react-icons/fa";

const TaskStatusComponent = () => {
    const dispatch = useAppDispatch();
    const { selectedTask, isOpen } = useAppSelector(TaskSelectors.getFormTask());
    const { selectedTaskList } = useAppSelector(TaskSelectors.getFormTaskList());
    const [selectedKeys, setSelectedKeys] = useState<string | undefined>(selectedTask?.status);

    useEffect(() => {
        if (!selectedTask) return;
        setSelectedKeys(selectedTask?.status)
    }, [selectedTask])

    const selectedValue = useMemo(() => {
        return selectedKeys?.toLowerCase()
    }, [selectedKeys]);

    if (!selectedTaskList) return null;

    return (
        <div className='flex items-center gap-3'>
            <p className='font-semibold text-md'>
                Status:
            </p>
            <Dropdown
                className='w-[120px]'
                classNames={{
                    base: "rounded-md min-w-[150px]"
                }}
            >
                <DropdownTrigger>
                    <Button variant="flat" className='capitalize rounded-full max-w-[100px] text-[0.8rem] font-semibold py-1 h-auto'>
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
                            dispatch(TaskThunks.updateTask({ ...selectedTask, status: value }))
                            setSelectedKeys(value)
                        }
                    }}
                    itemClasses={{
                        base: "rounded-sm",
                        title: "font-semibold text-[0.85rem]",
                        description: "font-semibold text-xs",
                    }}
                >
                    {selectedTaskList?.statuses?.map(status => (
                        <DropdownItem key={status} className='text-sm font-bold text-warning-700'>
                            <p className='flex items-center gap-2'>
                                <span className='text-warning-700'>
                                    <FaDotCircle />
                                </span>
                                {status}
                            </p>
                        </DropdownItem>

                    ))}
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}
export default TaskStatusComponent;