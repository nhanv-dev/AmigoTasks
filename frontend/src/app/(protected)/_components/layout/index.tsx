"use client"

import LayoutContextProvider, { useLayoutContext } from '@/provider/LayoutProvider';
import React from 'react';
import ExpandedSidebar from './ExpandedSidebar';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';


interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {

    return (
        <LayoutContextProvider>
            <div className='flex bg-background-50 dark:bg-dark-background-50 transition-all'>
                <Sidebar />
                <Header />
                <Main>
                    {children}
                </Main>
            </div>
        </LayoutContextProvider>
    )
}

export default Layout;

const Main: React.FC<Props> = ({ children }) => {
    const { isOpenSidebar } = useLayoutContext();

    return (
        <div className='flex-1 max-h-[100vh] h-[100vh] w-full flex flex-col'>
            <div className={`${isOpenSidebar ? 'ml-[220px]' : 'ml-[80px]'} mt-[58px] h-[calc(100vh-58px)] transition-all`}>
                <div className={`h-full flex flex-col flex-1 overflow-y-auto`}>
                    <div className='flex-1'>
                        {children}
                    </div>
                    <div className='px-4'>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}