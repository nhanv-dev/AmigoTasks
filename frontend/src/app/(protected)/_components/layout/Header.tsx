"use client"

import { useLayoutContext } from '@/provider/LayoutProvider';
import { AiOutlineSearch } from 'react-icons/ai';
import { SiOpenai } from 'react-icons/si';
import DarkMode from '../dark-mode';


const Header = () => {
  const { layout, setLayout } = useLayoutContext();

  const onSearch = () => { }

  return (
    <div className={`${layout.openSidebar ? 'left-[80px]' : 'left-[80px]'} z-50 fixed top-0 right-0 p-4 pb-0 bg-background-50 dark:bg-dark-background-50 transition-all`}>
      <div className='h-[58px] flex items-center rounded-md py-3 px-5 bg-background dark:bg-dark-background text-text dark:text-dark-text w-full min-w-full shadow-sm transition-all'>
        <div className='flex-1 flex items-center justify-between'>
          <div className='flex-1 flex items-center gap-4'>
            <MenuInput
              isOpen={layout.openSidebar === 'sidebar'}
              toggleMenu={() => {
                setLayout((prev: any) => ({ ...prev, openSidebar: !prev.openSidebar }))
              }}
            />

            {/* <SearchInput onChange={onSearch} /> */}
          </div>
          <div className='flex items-center justify-end gap-5'>
            <div className='flex items-center justify-end gap-6'>
              <button
                onClick={() => {
                  setLayout((prev: any) => ({
                    ...prev,
                    openSidebar: true,
                    contentSidebar: 'chatgpt'
                  }))
                }}
                className='flex items-center gap-1 py-1.5 px-3 rounded-md bg-primary-bg text-primary font-bold text-sm'>
                <p className='text-lg'>
                  <SiOpenai />
                </p>
                Chat GPT
              </button>
            </div>
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
    <div className="flex items-center rounded-md border border-gray-300 p-2">
      <AiOutlineSearch className="text-gray-500 mr-2" />
      <input
        type="text"
        placeholder={''}
        className="outline-none focus:outline-none w-full"
        onChange={onChange}
      />
    </div>
  );
};

const MenuInput = ({ isOpen, toggleMenu }: { isOpen: boolean, toggleMenu: () => void }) => {

  return (
    <button onClick={toggleMenu}>
      <span className={`${isOpen ? '' : ''} block rounded-full my-[3px] w-[20px] h-[2.5px] bg-text-50`}></span>
      <span className={`${isOpen ? '' : ''} block rounded-full my-[3px] w-[20px] h-[2.5px] bg-text-50`}></span>
      <span className={`${isOpen ? '' : ''} block rounded-full my-[3px] w-[20px] h-[2.5px] bg-text-50`}></span>
    </button>
  )
}