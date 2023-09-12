"use client"

import { dashboardRoutes } from '@/config/routes';
import { ScrollShadow } from '@nextui-org/react';
import { useLayoutContext } from '@provider/LayoutProvider';
import { WorkspaceSelectors } from '@redux/features/workspace/workspaceSelectors';
import { WorkspaceThunks } from '@redux/features/workspace/workspaceThunks';
import { useAppDispatch, useAppSelector } from '@redux/hook';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BsFillCaretRightFill } from 'react-icons/bs';
import tw from "tailwind-styled-components";
import TopicList from '../sidebar/topic-list/TopicList';
import WorkspaceList from '../sidebar/workspace/WorkspaceList';

const handleActive = (pathname: string | null) => {
  if (!pathname) return -1;
  return dashboardRoutes.findIndex(route => pathname.includes(route.href))
}

const Sidebar = () => {

  const dispatch = useAppDispatch();
  const { isOpenSidebar, setLayout } = useLayoutContext();
  const { workspaces } = useAppSelector(WorkspaceSelectors.getWorkspaces());
  const pathname = usePathname();
  const [active, setActive] = useState(() => handleActive(pathname))

  useEffect(() => {
    setActive(handleActive(pathname));
    dispatch(WorkspaceThunks.getAll());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <div className=''>
      <div className={`${isOpenSidebar ? `w-[250px]` : `w-[80px]`} border-r border-border dark:border-dark-border z-[3] h-[100vh] fixed top-0 left-0 bottom-0 transition-all`}>
        <div className='w-full h-full bg-background-50 dark:bg-dark-background transition-theme'>
          <div className={`px-4 h-full flex flex-col`}>
            <div className='h-[58px] mb-3 flex items-center justify-center border-b border-border dark:border-dark-border w-full transition'>
              <Link
                href={'/'}
                className={`${isOpenSidebar ? 'visible flex-1' : 'invisible w-[0px]'} transition-all transition-theme overflow-hidden flex items-center gap-2`}>
                <p className='font-bold text-[0.9rem]'>
                  <span className='text-text dark:text-dark-text transition-theme'>Amigo</span>
                  <span className='text-text-50 dark:text-dark-text-50 transition-theme'>Tasks</span>
                </p>
              </Link>
              <button
                onClick={() => { setLayout({ isOpenSidebar: !isOpenSidebar }) }}
                className={`${isOpenSidebar ? 'rotate-[180deg]' : 'rotate-0'} transition-all duration-[1000] min-w-[26px] min-h-[26px] flex items-center justify-center rounded-full text-lg bg-white text-black`}>
                <BsFillCaretRightFill className='relative top-[0.-15px]' />
              </button>
            </div>
            <ScrollShadow hideScrollBar className='bg-background-50 dark:bg-dark-background transition-theme flex-1'>
              <WorkspaceList />
              {/* <TaskLists /> */}
              <TopicList />
            </ScrollShadow>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Sidebar;

interface LinkWrapperProps {
  $active: boolean
}

const LinkWrapper = tw.div<LinkWrapperProps>`
  w-full 
  flex
  items-center
  justify-start
  rounded-md
  transition-all
  h-[40px]
  max-h-[40px]

  relative
  before:absolute
  before:left-0
  before:top-[6px]
  before:bottom-[6px]
  before:bg-primary
  before:w-[4px]
  before:rounded-full
  before:transition-all
  before:opacity-0
 
  hover:shadow-sm
  hover:bg-background
  dark:hover:bg-primary/20

 ${(p) => (p.$active ?
    "shadow-sm bg-primary/20 dark:bg-primary/20 before:bg-primary before:opacity-100 text-primary hover:text-primary-hover" :
    "text-text-50 hover:text-text dark:text-dark-text-50 dark:hover:text-dark-text"
  )}
`