"use client";

import ContainerCard from '@app/(protected)/_components/card/ContainerCard';
import Helmet from '@app/(protected)/_components/helmet';
import AutoSaveInput from '@app/(protected)/topic/_components/editor/AutoSaveInput';
import { Button, ScrollShadow } from '@nextui-org/react';
import { TopicSelectors } from '@redux/features/topic/topicSelectors';
import { TopicActions } from '@redux/features/topic/topicSlice';
import { TopicThunks } from '@redux/features/topic/topicThunks';
import { useAppDispatch, useAppSelector } from '@redux/hook';
import { DetailTopic, UpdateTopic } from '@services/topic/types';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AiTwotoneEdit } from 'react-icons/ai';
import AutoSaveTextarea from '../_components/editor/AutoSaveTextarea';
import Editor from '../_components/editor/Editor';
import TopicDetail from '../_components/topic/TopicDetail';
import TopicPath from '../_components/topic/TopicPath';
import { backgroundImages } from '../_components/topic/TopicImages';


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
    <Helmet title={`${topic?.title || 'Untitled'}`}>
      <div className='relative z-[1]'>
        <div
          style={{ backgroundImage: `url(${topic?.background || backgroundImages[0]})` }}
          className='z-0 absolute w-full h-[450px] bg-fixed bg-cover bg-center bg-no-repeat'
        >
          <div className='z-0 absolute top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.4)]' />
          <div className='z-0 absolute top-4 lg:left-[60px] left-4 lg:right-[60px] right-4 flex gap-4 justify-between'>
            <div className='flex-1 text-dark-text p-4 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm rounded-md'>
              Workspace
              <div>

              </div>
            </div>
            <div className='min-w-[320px] max-w-[320px] flex justify-end'>
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
        </div>
        <div className='lg:px-[60px] px-4 pt-[300px]'>
          <div className='flex flex-wrap items-start gap-4 justify-between h-full'>
            {/* <div className='sticky top-4 min-w-[280px] max-w-[280px]'>
              <ContainerCard classNames='h-full'>
                <ScrollShadow className='h-[calc(100vh-58px-32px-32px)]' hideScrollBar={true}>

                </ScrollShadow>
              </ContainerCard>
            </div> */}
            <div className='relative flex-1 min-w-[650px]'>
              <TopicPath />
              <ContainerCard>
                <div className='max-w-[650px] mx-auto'>
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
            <div className='sticky top-4 min-w-[320px] max-w-[320px]'>
              <ContainerCard classNames='h-full'>
                <ScrollShadow className='h-[calc(100vh-58px-32px-32px)]' hideScrollBar={true}>
                  <TopicDetail />
                </ScrollShadow>
              </ContainerCard>
            </div>
          </div>
          <div>
            <ContainerCard>
              asd
            </ContainerCard>
          </div>
        </div>
      </div>
    </Helmet >
  )
}

export default Page;

