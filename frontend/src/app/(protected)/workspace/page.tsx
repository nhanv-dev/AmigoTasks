"use client";

import { TaskSelectors } from '@redux/features/task/taskSelectors';
import { useAppSelector } from '@redux/hook';
import Helmet from '../_components/helmet';

const Workspace = () => {
    const { loading } = useAppSelector(TaskSelectors.getTasks());


    return (
        <Helmet title='Workspace - AmigoTasks'>
            <div className='flex flex-wrap items-center gap-4 justify-center py-10'>
                {loading ?
                    <div className='font-bold text-lg text-text-50 dark:text-dark-text-50  '>
                        Loading
                    </div> :
                    <div className='font-bold text-lg text-text-50 dark:text-dark-text-50  '>
                        Select your workspace
                    </div>
                }
            </div>
        </Helmet>
    )
}

export default Workspace;
