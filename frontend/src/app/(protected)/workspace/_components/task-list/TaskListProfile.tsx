import { Button } from '@nextui-org/react';
import { TaskSelectors } from '@redux/features/task/taskSelectors'
import { useAppSelector } from '@redux/hook'
import React from 'react'
import { AiOutlineEdit, AiTwotoneEdit } from 'react-icons/ai';

const TaskListProfile = () => {
  const { selectedTaskList, loading } = useAppSelector(TaskSelectors.getFormTaskList());

  return (
    <div className='mb-4'>
      <div
        className='relative rounded-md bg-cover bg-center h-[200px] w-full'
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80)` }}
      >
        <div className='absolute left-0 right-0 top-0 bottom-0 bg-[rgba(0,0,0,0.2)]'></div>
        <div className='absolute right-4 top-4'>
          <Button
            isIconOnly
            color="default"
            aria-label="Edit"
            className='rounded-full text-[1.1rem] text-dark-text min-w-[32px] min-h-[32px] bg-[rgba(0,0,0,0.7)]'
          >
            <AiTwotoneEdit />
          </Button>
        </div>
        <div className='absolute left-4 bottom-4 flex items-center justify-start gap-3'>
          <h5 className='font-semibold text-[1.3rem]'>
            {selectedTaskList?.title}
          </h5>
        </div>
      </div>
    </div>
  )
}

export default TaskListProfile