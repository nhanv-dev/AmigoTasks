"use client"

import { useEffect } from 'react';
import { dashboardRoutes } from '@/config/routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import tw from "tailwind-styled-components"

const handleActive = (pathname: string | null) => {
  if (!pathname) return -1;
  return dashboardRoutes.findIndex(route => pathname.includes(route.href))
}

const Sidebar = () => {
  const pathname = usePathname();
  const [active, setActive] = useState(() => handleActive(pathname))

  useEffect(() => {
    setActive(handleActive(pathname))
  }, [pathname])

  return (
    <div className='w-sidebar h-[100vh] fixed top-0 left-0 bottom-0 border-r border-border dark:border-dark-border bg-background-50 dark:bg-dark-background-50 transition-all'>
      <div className='h-full py-5 flex flex-col justify-between gap-5'>
        <div className='flex-1 flex flex-col items-center gap-3 w-full'>
          {dashboardRoutes.map((route, index) => (
            <LinkWrapper $active={active === index} key={route.href}>
              <Link
                href={route.href}
                tabIndex={-1}
                className={`text-text-50 hover:text-text dark:text-dark-text-50 dark:hover:text-dark-text flex items-center justify-center gap-1 flex-col`}
              >
                <p className='text-[1.3rem]'>
                  {route.icon}
                </p>
                <p className='text-xs font-semibold'>
                  {route.title}
                </p>
              </Link>
            </LinkWrapper>
          ))}
        </div>
        <div className='flex flex-col items-center gap-6'>
          <LinkWrapper $active={false}  >
            <button type='button' tabIndex={-1}
              className='flex items-center justify-center gap-1 flex-col'
            >
              <p className='text-xl'>

              </p>
            </button>
          </LinkWrapper>
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
  w-[66px]
  h-[60px]
  flex
  items-center
  justify-center
  rounded-md
  transition-all

  relative
  before:absolute
  before:left-0
  before:top-3
  before:bottom-3
  before:bg-primary
  before:w-[4px]
  before:rounded-full
  before:transition-all
  before:opacity-0
 
  hover:shadow-sm

  hover:bg-background
  dark:hover:bg-dark-background

 ${(p) => (p.$active ?
    "shadow-sm text- bg-background dark:bg-dark-background before:bg-primary before:opacity-100" :
    ""
  )}
`