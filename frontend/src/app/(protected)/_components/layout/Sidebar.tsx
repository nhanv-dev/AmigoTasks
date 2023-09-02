"use client"

import { dashboardRoutes } from '@/config/routes';
import { Button } from '@nextui-org/react';
import { useLayoutContext } from '@provider/LayoutProvider';
import { WorkspaceSelectors } from '@redux/features/workspace/workspaceSelectors';
import { WorkspaceThunks } from '@redux/features/workspace/workspaceThunks';
import { useAppDispatch, useAppSelector } from '@redux/hook';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BiLogOut } from 'react-icons/bi';
import { BsFillCaretRightFill } from 'react-icons/bs';
import { MdLogout } from 'react-icons/md';
import tw from "tailwind-styled-components";

const handleActive = (pathname: string | null) => {
  if (!pathname) return -1;
  return dashboardRoutes.findIndex(route => pathname.includes(route.href))
}

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const { isOpenSidebar, setLayout, contentSidebar } = useLayoutContext();
  const { workspaces } = useAppSelector(WorkspaceSelectors.getWorkspaces());
  const pathname = usePathname();
  const [active, setActive] = useState(() => handleActive(pathname))

  useEffect(() => {
    setActive(handleActive(pathname));
    dispatch(WorkspaceThunks.getAll());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <div className={`${isOpenSidebar ? 'w-[210px]' : 'w-[80px]'} border-r border-border dark:border-dark-border z-[100] h-[100vh] fixed top-0 left-0 bottom-0 transition-all`}>
      <div className='w-full h-full bg-background-50 dark:bg-dark-background transition-theme'>
        <div className='px-4 py-4 h-full flex flex-col'>
          <div className='mb-3 pb-3 flex items-center justify-center border-b border-border dark:border-dark-border w-full'>
            <Link
              href={'/'}
              className={`${isOpenSidebar ? 'visible flex-1' : 'invisible w-[0px]'} transition-all transition-theme overflow-hidden flex items-center gap-2`}>
              {/* <img
                alt='logo'
                src='https://pipedream.com/s.v0/app_XaLh2x/logo/orig'
                className={`h-[30px] transition-all`}
              /> */}
              <p className='font-bold text-[0.9rem]'>
                <span className='text-text dark:text-dark-text transition-theme'>Amigo</span>
                <span className='text-text-50 dark:text-dark-text-50 transition-theme'>Tasks</span>
              </p>
            </Link>
            <button
              onClick={() => { setLayout({ isOpenSidebar: !isOpenSidebar }) }}
              className={`${isOpenSidebar ? 'rotate-[180deg]' : 'rotate-0'} transition-all min-w-[26px] min-h-[26px] flex items-center justify-center rounded-full text-lg bg-white text-black`}>
              <BsFillCaretRightFill className='relative top-[0.25px]' />
            </button>
          </div>
          <div className='flex-1 flex flex-col'>
            <div className='mb-3 pb-3 flex flex-col items-start gap-2 w-full border-b border-border dark:border-dark-border transition-theme'>
              <p className='mb-1 px-2 uppercase text-xs font-bold text-text-50 dark:text-dark-text-50 transition-theme'>
                Menu
              </p>
              {dashboardRoutes.map((route, index) => (
                <LinkWrapper $active={active === index} key={route.href}>
                  <Link
                    href={route.href}
                    tabIndex={-1}
                    className={`py-2.5 w-full flex items-center justify-start`}
                  >
                    <p className='text-[1.2rem] min-w-[47px] flex items-center justify-center'>
                      {route.icon}
                    </p>
                    <p className={`${isOpenSidebar ? 'visible' : 'invisible w-0'} transition-all transition-theme overflow-hidden text-[0.82rem] font-semibold`}>
                      {route.title}
                    </p>
                  </Link>
                </LinkWrapper>
              ))}
            </div>
            <div className={`${isOpenSidebar ? 'visible opacity-100' : 'invisible opacity-0'} transition-all transition-theme pb-3 flex flex-col items-start gap-2 w-full border-b border-border dark:border-dark-border`}>
              <p className='mb-1 px-2 uppercase text-xs font-bold text-text-50 dark:text-dark-text-50 transition-theme'>
                Workspace
              </p>
              <div className='shadow-sm w-full rounded-md p-2 bg-white dark:bg-[#212225]'>
                {workspaces.map(workspace => (
                  <div key={workspace.id}>
                    <LinkWrapper $active={false} >
                      <Link
                        href={`/workspace/${workspace.id}`}
                        tabIndex={-1}
                        className={`px-2 py-1.5 w-full flex items-center justify-start gap-3 `}
                      >
                        <p className='text-[0.825rem] font-semibold'>
                          {workspace.title}
                        </p>
                      </Link>
                    </LinkWrapper>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <Button
              tabIndex={-1}
              type='button'
              className='rounded-md w-full flex items-center justify-center gap-2'
            >
              <BiLogOut className='text-[1.15rem]'/>
              <p className='font-semibold text-md'>
                Log out
              </p>
            </Button>
          </div>
        </div>
      </div>
    </div>
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