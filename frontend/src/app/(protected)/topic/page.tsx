"use client"

import { TopicStatus } from '@/services/topic/types'
import Helmet from '../_components/helmet'
import CustomTabs from '../_components/tabs'
import TopicList from './_components/topic/TopicList'
import TopicFolders from './_components/sidebar/TopicFolders'

const Topic = () => {

    return (
        <Helmet title='Topic - AmigoTasks'>
            <div className='flex relative'>
                <div className='h-[calc(100vh-58px-32px)] min-w-[310px] w-[310px] sticky top-0 p-4 pr-0'>
                    <TopicFolders />
                </div>
                <div className='flex-1 px-4 pt-4'>
                    <CustomTabs
                        tabs={[
                            { label: 'All', panel: <TopicList /> },
                            { label: 'New', panel: <TopicList status={TopicStatus.NEW} /> },
                            { label: 'In Progress', panel: <TopicList status={TopicStatus.IN_PROGRESS} /> },
                            { label: 'Completed', panel: <TopicList status={TopicStatus.COMPLETED} /> },
                            { label: 'Draft', panel: <TopicList status={TopicStatus.DRAFT} /> },
                            { label: 'Archived', panel: <TopicList status={TopicStatus.ARCHIVED} /> },
                        ]}
                    />
                </div>
            </div>
        </Helmet>
    )
}

export default Topic