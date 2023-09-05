"use client"

import { useLayoutContext } from '@/provider/LayoutProvider';
import { Button } from '@nextui-org/react';
import { BiSearch } from 'react-icons/bi';
import { SiOpenai } from 'react-icons/si';
import DarkMode from '../dark-mode';

const Header = () => {
  const { isOpenSidebar, contentSidebar, setLayout } = useLayoutContext();

  const onSearch = () => { }

  return (
    <div className={`${isOpenSidebar ? 'left-[220px]' : 'left-[73px]'} z-50 fixed top-0 right-0 pb-0 bg-background-50 dark:bg-dark-background-50 transition-all`}>
      <div className='h-[58px] flex items-center py-3 px-4 bg-background border-b  dark:bg-dark-background dark:border-gray-700  text-text dark:text-dark-text w-full min-w-full shadow-sm transition-all'>
        <div className='flex-1 flex items-center justify-between'>
          <div className='flex-1 flex items-center gap-4'>
            <SearchInput onChange={onSearch} />
          </div>
          <div className='flex items-center justify-end gap-5'>
            <Button
              // onClick={() => { changeMode(!selected) }}
              className="text-sm font-bold bg-primary/20 text-primary max-h-[36px] rounded-md hover:shadow-sm
                hover:bg-background 
                dark:hover:bg-primary/20"
            >
              <span className='text-[1rem]'>
                <SiOpenai />
              </span>
              Chat GPT
            </Button>
            <DarkMode />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;

interface SearchInputProps {
  onChange: any;
}

const SearchInput = ({ onChange }: SearchInputProps) => {
  return (
    <div className="flex items-center rounded-md gap-3 border border-none outline-none p-2 h-[36px] bg-default-100 min-w-[300px] transition-theme">
      <BiSearch className="text-gray-500 text-[1.3rem]" />
      <input
        type="text"
        placeholder={'Search'}
        className="transition-theme text-[0.825rem] text-text-50 dark:text-dark-text-50 font-semibold outline-none focus:outline-none w-full bg-transparent"
        onChange={onChange}
      />
    </div>
  );
};
