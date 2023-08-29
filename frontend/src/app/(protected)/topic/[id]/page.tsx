"use client";

import ContainerCard from '@app/(protected)/_components/card/ContainerCard';
import Helmet from '@app/(protected)/_components/helmet';
import AutoSaveInput from '@app/(protected)/topic/_components/editor/AutoSaveInput';
import { Button, ScrollShadow } from '@nextui-org/react';
import { TopicSelectors } from '@redux/features/topic/topicSelectors';
import { TopicThunks } from '@redux/features/topic/topicThunks';
import { useAppDispatch, useAppSelector } from '@redux/hook';
import { DetailTopic, UpdateTopic } from '@services/topic/types';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { AiTwotoneEdit } from 'react-icons/ai';
import AutoSaveTextarea from '../_components/editor/AutoSaveTextarea';
import Editor, { emptyBlock } from '../_components/editor/Editor';
import TopicDetail from '../_components/topic/TopicDetail';
import TopicPath from '../_components/topic/TopicPath';
import { TopicActions } from '@redux/features/topic/topicSlice';


interface Props {
  params: { id: string }
}

const Page = ({ params }: Props) => {
  const dispatch = useAppDispatch();
  const [topic, setTopic] = useState<DetailTopic | null>(null);
  const { topicLoading } = useAppSelector(TopicSelectors.getLoading());

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

  const handleSave = async (field: string, value: string, topic: any) => {
    if (!topic) return;
    const data: UpdateTopic = {
      ...topic,
      parent: topic.parent?.id,
      path: topic.path?.map((p: any) => p.id),
    };
    data[field] = value;
    dispatch(TopicThunks.update(data));
  };


  return (
    <Helmet title={`${topic?.title || 'Untitled'}`}>
      <div className='relative z-[1]'>
        <div
          style={{ backgroundImage: `url("https://images.unsplash.com/photo-1692729624048-3d3a7296fbf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80")` }}
          className='z-0 absolute w-full h-[450px] bg-fixed bg-cover bg-center bg-no-repeat'
        >
          <div className='z-0 absolute top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.4)]' />
          <div className='z-0 absolute top-4 right-4'>
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
        <div className='px-4 pt-[300px]'>
          <div className='flex items-start gap-4 justify-between h-full'>
            <div className='relative flex-1'>
              <TopicPath />
              <ContainerCard>
                <AutoSaveInput
                  initialValue={topic?.title}
                  onSave={(value: any) => { handleSave('title', value, topic) }}
                />
                <AutoSaveTextarea
                  initialValue={topic?.description}
                  onSave={(value: any) => { handleSave('description', value, topic) }}
                />
              </ContainerCard>
              <Editor
                topic={topic}
                initialValue={topic?.content}
                onSave={(value: any) => { handleSave('content', value, topic) }}
              />
            </div>
            <div className='sticky top-4 min-w-[320px] max-w-[320px]'>
              <ContainerCard classNames='h-full'>
                <ScrollShadow className='h-[calc(100vh-58px-32px-32px)]' hideScrollBar={true}>
                  <TopicDetail />
                </ScrollShadow>
              </ContainerCard>
            </div>
          </div>
        </div>
      </div>
    </Helmet >
  )
}

export default Page;

