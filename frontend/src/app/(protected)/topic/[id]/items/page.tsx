"use client";

import Helmet from '@app/(protected)/_components/helmet';
import CustomTabs from '@app/(protected)/_components/tabs';
import React from 'react'
import TopicList from '../../_components/topic/TopicList';
import { TopicStatus } from '@services/topic/types';

interface Props {
  params: { id: string }
}

const Page = ({ params }: Props) => {

  return (
    <Helmet title='DM - Topic'>
      <div className='px-4 pt-4'>
        <CustomTabs
          tabs={[
            { label: 'All', panel: <TopicList status={null} /> },
            { label: 'New', panel: <TopicList status={TopicStatus.NEW} /> },
            { label: 'In Progress', panel: <TopicList status={TopicStatus.IN_PROGRESS} /> },
            { label: 'Completed', panel: <TopicList status={TopicStatus.COMPLETED} /> },
            { label: 'Draft', panel: <TopicList status={TopicStatus.DRAFT} /> },
            { label: 'Archived', panel: <TopicList status={TopicStatus.ARCHIVED} /> },
          ]}
        />
      </div>
    </Helmet>
  )
}

export default Page