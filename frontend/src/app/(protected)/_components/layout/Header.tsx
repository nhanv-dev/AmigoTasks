"use client"

import React from 'react'
import DarkMode from '../dark-mode'
const routes = [
  { title: 'Today' },
  { title: 'Topic' },
  { title: 'Pending' },
  { title: 'Doing' },
]
const Header = () => {
  return (
    <div className='z-50 fixed top-0 right-0 left-[80px] p-4 pb-0 bg-background-50 dark:bg-dark-background-50 transition-all'>
      <div className='h-[58px] flex items-center rounded-md p-3 bg-background dark:bg-dark-background text-text dark:text-dark-text w-full min-w-full shadow-sm transition-all'>
        <div className='flex-1 flex items-center justify-between'>
          <div className='flex-1 flex items-center justify-between'>

          </div>
          <div className='flex items-center justify-end gap-5'>
            <div className='flex items-center justify-end gap-8'>
              {routes.map((route, index) => (
                <button
                  key={index}
                  type='button'
                  tabIndex={-1}
                  className='font-semibold text-md'
                >
                  {route.title}
                </button>
              ))}
            </div>
            <DarkMode />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header