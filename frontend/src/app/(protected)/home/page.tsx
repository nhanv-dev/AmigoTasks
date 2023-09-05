"use client";

import { Avatar, Button } from '@nextui-org/react';
import { Topic } from '@services/topic/types';
import { Workspace } from '@services/workspace/types';
import { useEffect, useState } from 'react';
import { AiTwotoneEdit } from 'react-icons/ai';
import Helmet from '../_components/helmet';
import topicService from '@services/topic/topic.service';
import workspaceService from '@services/workspace/workspace.service';
import TopicCard from '../topic/_components/topic/TopicCard';
import { AuthSelectors } from '@redux/features/auth/authSelectors';
import { useAppSelector } from '@redux/hook';
import { DEFAULT_IMAGE } from '../_components/user/UserAvatar';

const background = 'https://images.unsplash.com/photo-1680631757284-617846a5ef29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1902&q=80'

const Home = () => {
    const user = useAppSelector(AuthSelectors.getUser());
    const [topics, setTopics] = useState<Topic[]>([]);
    const [workspaces, setWorkspaces] = useState<Workspace[]>([]);

    useEffect(() => {
        const fetch = async () => {
            const listTopics = await topicService.getByRoot();
            setTopics(listTopics.map(topic => {
                const _topic: any = { ...topic }
                return _topic
            }));
            const listWorkspace = await workspaceService.getAll();
            setWorkspaces(listWorkspace)
        }

        fetch()
    }, [])

    return (
        <Helmet title='Home - AmigoTasks'>
            <main className='h-full'>
                <div className='mx-4 pt-4 mb-4'>
                    <div className='flex items-start gap-4 flex-wrap'>
                        <div className='flex-1'>
                            <div
                                className='relative w-full h-[250px] mb-[120px] bg-cover bg-center rounded-t-lg'
                                style={{
                                    backgroundImage: `url(${user?.background || background})`
                                }}
                            >
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
                                <div className='w-max absolute z-[1] bottom-[-60px] left-[50%] translate-x-[-50%]'>
                                    <div className='flex flex-col items-center justify-center gap-2'>
                                        <Avatar
                                            isBordered
                                            size='lg'
                                            color='primary'
                                            src={user?.avatar || DEFAULT_IMAGE}
                                            classNames={{
                                                base: 'ring-offset-0 w-[66px] h-[66px]'
                                            }}
                                        />
                                        <h5 className='font-bold text-lg'>
                                            {user?.name}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className='dark:bsg-dark-background relative w-full rounded-b-lg'>
                                <div className='mt-4 grid grid-cols-4 items-start gap-4'>
                                    {topics.map(topic => (
                                        <TopicCard key={topic.id} topic={topic} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='w-[00px]'>

                        </div>
                    </div>
                </div>
            </main>
        </Helmet>
    )
}

export default Home