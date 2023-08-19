"use client"

import { TopicStatus } from '@/services/topic/types'
import Helmet from '../_components/helmet'
import CustomTabs from '../_components/tabs'
import TopicList from './_components/TopicList'
import TopicFolders from './_components/TopicFolders'
import TopicText from './_components/TopicText'

const Topic = () => {

    return (
        <Helmet title='DM - Topic'>
            <main>
                <div className='flex items-start justify-between gap-4'>
                    <div className='w-[300px] min-w-[300px]'>
                        <TopicFolders />
                    </div>
                    <div className='flex-1'>
                        <CustomTabs
                            tabs={[
                                { label: 'All Topic', panel: <TopicList status={null} /> },
                                { label: 'Todo', panel: <TopicList status={TopicStatus.TODO} /> },
                                { label: 'In Progress', panel: <TopicList status={TopicStatus.IN_PROGESS} /> },
                                { label: 'Completed', panel: <TopicList status={TopicStatus.COMPLETED} /> },
                            ]}
                        />
                    </div>
                </div>
                <div className='mb-4'>
                    <TopicText />
                </div>
            </main>
        </Helmet>
    )
}

export default Topic