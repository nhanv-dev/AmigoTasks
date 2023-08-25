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
                <ExpandedSidebar />
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
            <div className={`${isOpenSidebar ? 'ml-[400px]' : 'ml-[80px]'} mt-[74px] h-[calc(100vh-74px)] transition-all`}>
                <div className={`px-4 h-full flex flex-col flex-1 overflow-y-auto`}>
                    <div className='flex-1 mt-4'>
                        {children}
                    </div>
                        <Footer />
                </div>
            </div>
        </div>
    )
}