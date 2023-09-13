import CustomDropdown from '@app/(protected)/_components/dropdown/CustomDropdown'
import { DropdownItem } from '@nextui-org/react'
import { TaskSelectors } from '@redux/features/task/taskSelectors'
import { TaskThunks } from '@redux/features/task/taskThunks'
import { useAppDispatch, useAppSelector } from '@redux/hook'
import { TaskList } from '@services/task/types'
import Link from 'next/link'
import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { IoMdAddCircleOutline } from 'react-icons/io'

interface Props {
  item: TaskList;
  handleSelectTaskList: any;
}
const TaskListItem = ({ item, handleSelectTaskList }: Props) => {
  const dispatch = useAppDispatch();
  const { selectedTaskList } = useAppSelector(TaskSelectors.getFormTaskList());

  return (
    <div className='w-full flex items-center'>
      <div className={`${selectedTaskList?.id === item.id ? 'bg-primary/20 text-primary' : 'text-text-50 dark:text-dark-text-50'} w-full group flex-1 flex items-center justify-between gap-2 px-2 hover:bg-primary/20 rounded-md outline-none transition-all`}>
        <Link
          href={`/workspace/${item.workspace}?t=${item.id}`}
          onClick={() => handleSelectTaskList(item)}
          className={`w-full flex items-center gap-0.5 text-md font-semibold py-1.5 outline-none border-none`}
        >
          <div className='flex items-center justify-between gap-1 flex-1'>
            <p className='text-[0.775rem] whitespace-nowrap text-ellipsis overflow-hidden transition-theme'>
              {item.title}
            </p>
          </div>
        </Link>
        <div className='opacity-0 group-hover:opacity-100 transition-all relative w-[24px] h-[24px]'>
          <CustomDropdown icon={<BsThreeDots />}>
            <DropdownItem
              key="new"
              color='danger'
              title='Delete'
              startContent={<IoMdAddCircleOutline className='text-[1.1rem]' />}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                dispatch(TaskThunks.deleteTaskList(item.id))
              }}
            />
          </CustomDropdown>
        </div>
      </div>
    </div>
  )
}

export default TaskListItem
