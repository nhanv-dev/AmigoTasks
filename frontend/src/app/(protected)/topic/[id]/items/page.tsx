"use client";

import Helmet from '@app/(protected)/_components/helmet';
import CustomTabs from '@app/(protected)/_components/tabs';
import { TopicStatus } from '@services/topic/types';
import TopicList from '../../_components/topic/TopicList';

interface Props {
  params: { id: string }
}

const Page = ({ params }: Props) => {

  return (
    <Helmet title='Topic - AmigoTasks'>
      <div className='px-4 pt-4'>
        <CustomTabs
          tabs={[
            { label: 'All', panel: <TopicList id={params.id} /> },
            { label: 'New', panel: <TopicList id={params.id} status={TopicStatus.NEW} /> },
            { label: 'In Progress', panel: <TopicList id={params.id} status={TopicStatus.IN_PROGRESS} /> },
            { label: 'Completed', panel: <TopicList id={params.id} status={TopicStatus.COMPLETED} /> },
            { label: 'Draft', panel: <TopicList id={params.id} status={TopicStatus.DRAFT} /> },
            { label: 'Archived', panel: <TopicList id={params.id} status={TopicStatus.ARCHIVED} /> },
          ]}
        />
      </div>
    </Helmet>
  )
}

export default Page