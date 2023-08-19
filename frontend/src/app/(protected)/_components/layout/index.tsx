"use client"

import React, { useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import ExpandedSidebar from './ExpandedSidebar';

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    const [showExpanded, setShowExpanded] = useState(false);

    return (
        <div className='flex bg-background-50 dark:bg-dark-background-50 transition-all'>
            <Sidebar />
            <Header />
            <div className='h-[100vh] w-full'>
                <div className='pt-[74px] px-3 h-full overflow-y-auto'>
                    <div className='h-full flex flex-col flex-1 ml-sidebar '>
                        <div className='flex-1 mt-5'>
                            {children}
                        </div>
                        <div className='pb-4'>
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout