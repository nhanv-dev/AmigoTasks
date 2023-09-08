"use client";

import { ScrollShadow } from '@nextui-org/react';
import React from 'react';
import TopicFolders from '../_components/sidebar/TopicFolders';
import ContainerCard from '@app/(protected)/_components/card/ContainerCard';
import TopicDetail from '../_components/topic/TopicDetail';

export default function WorkSpaceLayout({ children }: { children: React.ReactNode }) {

    return (
        <main>
            <div className='flex'>
                <div className=' h-[calc(100vh-58px)] min-w-[310px] w-[310px] sticky top-0 bottom-0 p-4 pr-0'>
                    <ScrollShadow className='h-full' hideScrollBar isEnabled={false}>

                        <TopicFolders />
                        <ContainerCard classNames='mt-4 mb-[0px]'>
                            {/* <ScrollShadow className='h-[calc(100vh-58px-32px-32px)]' hideScrollBar={true}> */}
                            <TopicDetail />
                            {/* </ScrollShadow> */}
                        </ContainerCard>
                    </ScrollShadow>
                </div>
                <div className='flex-1'>
                    {children}
                </div>
            </div>
        </main>
    )
}

