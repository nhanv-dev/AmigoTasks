"use client";

import { Accordion, AccordionItem, Button } from '@nextui-org/react';
import { TopicSelectors } from '@redux/features/topic/topicSelectors';
import { useAppSelector } from '@redux/hook';
import Link from 'next/link';
import { useState } from 'react';
import { BsFillCaretDownFill } from 'react-icons/bs';
import TopicDropdown from './TopicDropdown';
import TreeItem from './TopicFolder';
import { BiSolidChevronDown } from 'react-icons/bi';

const TopicFolders = () => {
    const [expand, setExpand] = useState<boolean>(true);
    const { tree } = useAppSelector(TopicSelectors.getTree());

    return (
        <div className='dark:bg-dark-background rounded-md p-4'>
            <div className='flex items-center justify-between gap-3'>
                <div className='text-[1.1rem] font-bold text-text dark:text-dark-text transition-theme'>
                    <Link href={'/topic'}>
                        My list
                    </Link>
                </div>
                <div className='flex items-center gap-1'>
                    <TopicDropdown />
                    <Button
                        onClick={() => { setExpand(prev => !prev) }}
                        className={`p-0 w-[24px] h-[24px] min-w-[24px] min-h-[24px] rounded-full bg-[transparent] dark:text-dark-text-50 text-text-50`}
                    >
                        <p className={`${expand ? '' : 'rotate-[180deg]'} transition-all text-[1.1rem]`}>
                            <BiSolidChevronDown />
                        </p>
                    </Button>
                </div>
            </div>
            <div className={`${expand ? 'mt-2 h-full' : 'mt-0 h-[0px]'} transition-all overflow-hidden`}>
                {tree.map(item => {
                    if (item.root.parent) return;
                    return <TreeItem key={item.root.id} item={item} />
                })}
            </div>
        </div>
    )
}

export default TopicFolders;