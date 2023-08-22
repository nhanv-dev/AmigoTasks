"use client"

import LayoutContextProvider, { LayoutContext, useLayoutContext } from '@/provider/LayoutProvider';
import React, { useContext } from 'react';
import ExpandedSidebar from './ExpandedSidebar';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';


interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {

    return (
        <LayoutContextProvider>
            <div className='flex bg-background-50 dark:bg-dark-background-50 transition-all'>
                <Sidebar />
                <Header />
                <ExpandedSidebar />
                <Main >
                    {children}
                </Main>
            </div>
        </LayoutContextProvider>
    )
}

export default Layout;

const Main: React.FC<Props> = ({ children }) => {
    const { layout, setLayout } = useLayoutContext();

    return (
        <div className='h-[100vh] w-full'>
            <div className='pt-[74px] px-4 h-full overflow-y-auto'>
                <div className={`${layout.openSidebar ? 'ml-[430px]' : 'ml-[80px]'} h-full flex flex-col flex-1 transition-all`}>
                    <div className='flex-1 mt-4'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}