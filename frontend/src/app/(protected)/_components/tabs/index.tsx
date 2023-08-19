import React from 'react';
import tw from "tailwind-styled-components";
import { Tabs, Tab } from "@nextui-org/react";

interface TabProps {
    label: string;
    panel: React.ReactNode;
}

interface Props {
    tabs: TabProps[];
}

const CustomTabs = ({ tabs }: Props) => {
    return (
        <Tabs variant={'underlined'} aria-label="Tabs variants" className='bg-background dark:bg-dark-background w-full rounded-md transition-all'>
            {tabs.map(tab => (
                <Tab onClick={() => { console.log(tab) }} key={tab.label} tabIndex={-1} title={tab.label} className='font-bold text-md border-none transition-all'>
                    {tab.panel}
                </Tab>
            ))}
        </Tabs>
    )
}

export default CustomTabs;
