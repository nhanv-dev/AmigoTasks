import React from 'react';
import tw from "tailwind-styled-components";
import { Tabs, Tab } from "@nextui-org/react";

interface TabProps {
    label: string;
    panel: React.ReactNode;
    icon?: React.ReactNode;
}

interface Props {
    tabs: TabProps[];
}

const CustomTabs = ({ tabs }: Props) => {
    return (
        <Tabs
            variant={'underlined'}
            aria-label="Tabs variants"
            color='primary'
            className='bg-background dark:bg-dark-background w-full shadow-sm rounded-md transition-all mb-3'
            classNames={{
                tab: 'hover:text-[red]',
                cursor: 'rounded-full',

            }}>
            {tabs.map(tab => (
                <Tab
                    key={tab.label}
                    tabIndex={-1}
                    title={
                        <div className='flex items-center gap-2 '>
                            <div className='text-[1rem]'>
                                {tab.icon}
                            </div>
                            {tab.label}
                        </div>
                    }
                    onClick={() => { console.log(tab) }}
                    className='font-bold text-md border-none transition-all'>
                    {tab.panel}
                </Tab>
            ))}
        </Tabs>
    )
}

export default CustomTabs;
