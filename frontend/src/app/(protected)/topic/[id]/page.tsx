"use client";

import ContainerCard from '@app/(protected)/_components/card/ContainerCard';
import Helmet from '@app/(protected)/_components/helmet';
import { Input, Textarea } from '@nextui-org/react';
import { TopicSelectors } from '@redux/features/topic/topicSelectors';
import { TopicThunks } from '@redux/features/topic/topicThunks';
import { useAppDispatch, useAppSelector } from '@redux/hook'
import React, { useEffect } from 'react'
import Editor from '../_components/editor/Editor';
import TopicDetail from '../_components/topic/TopicDetail';
import TopicPath from '../_components/topic/TopicPath';
import TopicTags from '../_components/topic/TopicTags';


interface Props {
  params: { id: string }
}

const Page = ({ params }: Props) => {
  const dispatch = useAppDispatch();
  const { topic, loading } = useAppSelector(TopicSelectors.getTopic());

  useEffect(() => {
    if (!params.id) return;
    dispatch(TopicThunks.getById(params.id))
  }, [params])

  console.log(topic)

  return (
    <Helmet title={`DM - ${topic?.title}`}>
      <div className='flex items-start gap-4 justify-between'>
        <div className='flex-1'>
          <div className='mb-4 mt-1'>
            <TopicPath topic={topic} />
          </div>
          <div className='mb-4'>
            <TopicTags topic={topic} />
          </div>
          <ContainerCard>
            <div>
              <Input
                type="text"
                defaultValue={topic?.title || ''}
                label="Title"
                labelPlacement='outside'
                className='outline-none border-none w-full'
              />
            </div>
            <Textarea
              defaultValue={topic?.description || ''}
            />
          </ContainerCard>
          <ContainerCard classNames='min-h-[80vh]'>
            <Editor />
          </ContainerCard>
        </div>
        <ContainerCard classNames='min-w-[250px]'>
          {/* <TopicDetail /> */}
        </ContainerCard>
      </div>
    </Helmet>
  )
}

export default Page