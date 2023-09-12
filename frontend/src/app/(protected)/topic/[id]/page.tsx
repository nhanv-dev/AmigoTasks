"use client";

import ContainerCard from '@app/(protected)/_components/card/ContainerCard';
import Helmet from '@app/(protected)/_components/helmet';
import AutoSaveInput from '@app/(protected)/topic/_components/editor/AutoSaveInput';
import { Button, ScrollShadow } from '@nextui-org/react';
import { TopicActions } from '@redux/features/topic/topicSlice';
import { TopicThunks } from '@redux/features/topic/topicThunks';
import { useAppDispatch } from '@redux/hook';
import { DetailTopic } from '@services/topic/types';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AiTwotoneEdit } from 'react-icons/ai';
import AutoSaveTextarea from '../_components/editor/AutoSaveTextarea';
import Editor from '../_components/editor/Editor';
import TopicFolders from '../_components/sidebar/TopicFolders';
import TopicDetail from '../_components/topic/TopicDetail';
import { backgroundImages } from '../_components/topic/TopicImages';
import TopicPath from '../_components/topic/TopicPath';


interface Props {
  params: { id: string }
}

const Page = ({ params }: Props) => {
  const dispatch = useAppDispatch();
  const [topic, setTopic] = useState<DetailTopic | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!params.id) return;
    const fetch = async () => {
      const action: any = await dispatch(TopicThunks.getById(params.id));
      setTopic(action.payload)
      if (action.payload?.id) return;
      router.push('/topic');
    }

    fetch()
    return () => {
      dispatch(TopicActions.setTopic(null))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params])

  const handleSave = async (field: string, value: string) => {
    if (!topic) return;
    const data: any = {
      id: topic.id
    };
    data[field] = value;
    const action: any = await dispatch(TopicThunks.update(data));
    setTopic(action.payload)
  };


  return (
    <Helmet title={topic?.title ? `${topic.title} - AmigoTasks` : 'Untitled - AmigoTasks'}>
      <div className='relative z-[0] pt-4 flex gap-4 items-center justify-between'>
        <div className='flex-1'>
          <TopicPath />
        </div>
        <div className='min-w-max flex justify-end items-center'>
          <Button
            isIconOnly
            color="default"
            aria-label="Edit"
            className='rounded-full text-[1.1rem] text-dark-text min-w-[32px] min-h-[32px] bg-[rgba(0,0,0,0.7)]'
          >
            <AiTwotoneEdit />
          </Button>
        </div>
      </div>
      <div className='w-full pt-4'>
        <div className='w-full flex flex-wrap items-start gap-4 justify-between h-full'>
          <div className='relative flex-1 w-full min-w-[650px]'>
            <ContainerCard>
              <div className='max-w-[650px] mx-auto mt-1'>
                <AutoSaveInput
                  initialValue={topic?.title}
                  onSave={(value: any) => { handleSave('title', value) }}
                />
                <AutoSaveTextarea
                  initialValue={topic?.description}
                  onSave={(value: any) => { handleSave('description', value) }}
                />
              </div>
            </ContainerCard>
            <Editor
              id={params.id}
              topic={topic}
              initialValue={topic?.content}
              onSave={(value: any) => { handleSave('content', value) }}
            />
          </div>
        </div>
      </div>
    </Helmet >
  )
}

export default Page;

