"use client"

import { dashboardRoutes } from '@/config/routes';
import { ScrollShadow } from '@nextui-org/react';
import { useLayoutContext } from '@provider/LayoutProvider';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MdGTranslate } from 'react-icons/md';
import { RiBox2Fill } from 'react-icons/ri';
import { SiBlueprint, SiOpenai } from 'react-icons/si';
import tw from "tailwind-styled-components";

const handleActive = (pathname: string | null) => {
  if (!pathname) return -1;
  return dashboardRoutes.findIndex(route => pathname.includes(route.href))
}

const Sidebar = () => {
  const { isOpenSidebar, setLayout, contentSidebar } = useLayoutContext();

  const pathname = usePathname();
  const [active, setActive] = useState(() => handleActive(pathname))

  useEffect(() => {
    setActive(handleActive(pathname))
  }, [pathname])

  return (
    <div className={`w-[360px] h-[100vh] rounded-md fixed top-0 left-0 bottom-0`}>
      <div className='flex h-full rounded-md bg-background-50 dark:bg-dark-background transition-theme'>
        <div className='px-2 border-r border-border dark:border-dark-border h-full py-4 flex flex-col justify-between gap-5'>
          <div className='flex-1 flex flex-col items-center gap-2 w-full'>
            <div className='bg-primary/40 w-[60px] h-[54px] flex items-center justify-center rounded-md' >
              <Link
                href={'/'}
                tabIndex={-1}
                className={` text-text-50 hover:text-text dark:text-dark-text-50 dark:hover:text-dark-text flex items-center justify-center`}
              >
                <p className='text-[2rem]'>
                  <SiBlueprint />
                </p>

              </Link>
            </div>
            {dashboardRoutes.map((route, index) => (
              <LinkWrapper $active={active === index} key={route.href}>
                <Link
                  href={route.href}
                  tabIndex={-1}
                  className={`${active === index ? 'text-primary hover:text-primary-hover' : 'text-text-50 hover:text-text dark:text-dark-text-50 dark:hover:text-dark-text'} flex items-center justify-center gap-1 flex-col`}
                >
                  <p className='text-[1.25rem]'>
                    {route.icon}
                  </p>
                  <p className='text-xs font-semibold'>
                    {route.title}
                  </p>
                </Link>
              </LinkWrapper>
            ))}
          </div>
          <div className='flex flex-col items-center gap-2'>
            <LinkWrapper $active={false}>
              <button
                tabIndex={-1}
                onClick={() => {

                }}
                className={`text-text-50 hover:text-text dark:text-dark-text-50 dark:hover:text-dark-text flex items-center justify-center gap-1 flex-col`}
              >
                <p className={`text-[1.25rem]`}>
                  <MdGTranslate />
                </p>
                <p className='text-xs font-semibold'>
                  Translate
                </p>
              </button>
            </LinkWrapper>
            <LinkWrapper $active={false}>
              <button
                tabIndex={-1}
                onClick={() => {

                }}
                className={`text-text-50 hover:text-text dark:text-dark-text-50 dark:hover:text-dark-text flex items-center justify-center gap-1 flex-col`}
              >
                <p className={`text-[1.25rem]`}>
                  <SiOpenai />
                </p>
                <p className='text-xs font-semibold'>
                  Chat GPT
                </p>
              </button>
            </LinkWrapper>
          </div>
        </div>
        <div className={`${isOpenSidebar ? 'w-full' : 'w-0'} bg-background dark:bg-dark-background z-[11] transition-all`}>
          <div className="min-w-full overflow-hidden h-full">
            <div className='h-full gap-4 rounded-md bg-background dark:bg-dark-background transition-all'>
              <ScrollShadow className='h-full' hideScrollBar>
                {contentSidebar}
              </ScrollShadow>
            </div>
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
  w-[62px]
  h-[54px]
  flex
  items-center
  justify-center
  rounded-md
  transition-all

  relative
  before:absolute
  before:left-0
  before:top-3.5
  before:bottom-3.5
  before:bg-primary
  before:w-[4px]
  before:rounded-full
  before:transition-all
  before:opacity-0
 
  hover:shadow-sm

  hover:bg-background
  dark:hover:bg-dark-background

 ${(p) => (p.$active ?
    "shadow-sm bg-background dark:bg-dark-background before:bg-primary before:opacity-100" :
    ""
  )}
`