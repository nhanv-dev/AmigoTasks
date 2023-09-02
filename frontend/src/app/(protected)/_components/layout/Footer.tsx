"use client"

import { Button } from '@nextui-org/react';
import React, { useState, useEffect } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'

const Footer = () => {
  const [isVisible, setIsVisible] = useState(true);

  // const toggleVisibility = () => {
  //   if (window.scrollY > 100) {
  //     setIsVisible(true);
  //   } else {
  //     setIsVisible(false);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener('scroll', toggleVisibility);
  //   return () => {
  //     window.removeEventListener('scroll', toggleVisibility);
  //   };
  // }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <div className='fixed bottom-4 right-4 z-50'>
        <Button
          type='button'
          isIconOnly
          variant='solid'
          color='primary'
          onClick={scrollToTop}
          className={`${isVisible ? 'visible opacity-100' : 'invisible opacity-0'} rounded-full min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] flex items-center justify-center text-[1.1rem]`}>
          <AiOutlineArrowUp />
        </Button>
      </div>
      <div className='mb-4 rounded-md p-3 text-text-50 dark:text-dark-text-50 bg-background dark:bg-dark-background transition-theme w-full min-w-full shadow-sm'>
        <p className='flex items-center justify-center font-semibold text-sm'>
          @2023 Designed by Tran Thanh Nhan
        </p>
      </div>
    </div>
  )
}

export default Footer