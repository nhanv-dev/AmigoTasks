"use client";

import ContainerCard from '@app/(protected)/_components/card/ContainerCard';
import { ScrollShadow } from '@nextui-org/react';
import React from 'react';
import TopicDetail from '../_components/topic/TopicDetail';
import { backgroundImages } from '../_components/topic/TopicImages';

export default function WorkSpaceLayout({ children }: { children: React.ReactNode }) {

    return (
        <main>
            <div className='px-[70px] flex gap-4 relative'>
                <div
                    style={{ backgroundImage: `url(${backgroundImages[0]})` }}
                    className='z-0 absolute left-0 right-0 w-full h-[450px] bg-fixed bg-cover bg-center bg-no-repeat'>
                    <div className='z-0 absolute top-0 left-0 bottom-0 right-0 sbg-[rgba(0,0,0,0.4)]' />
                </div>
                <div className='flex-1'>
                    {children}
                </div>
                {/* <div className='h-[calc(100vh-58px)] min-w-[300px] w-[300px] sticky top-4 bottom-4'>
                    <ContainerCard classNames='mb-[0px]'>
                        <ScrollShadow className='h-[calc(100vh-58px-48px)]' hideScrollBar={true}>
                            <TopicDetail />
                        </ScrollShadow>
                    </ContainerCard>
                </div> */}
            </div>
        </main>
    )
}

