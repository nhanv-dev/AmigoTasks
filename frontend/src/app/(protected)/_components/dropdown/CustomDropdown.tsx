"use client";

import { Dropdown, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import React from 'react'

const CustomDropdown = ({ icon, children }) => {

    return (
        <Dropdown classNames={{
            base: "rounded-md min-w-[150px]",
        }}>
            <DropdownTrigger>
                <button tabIndex={-1}
                    className='w-[24px] h-[24px] flex items-center justify-center text-[0.95rem] outline-none border-none hover:bg-[#f5f5f5] hover:text-text p-1 rounded-sm text-text-50 dark:text-dark-text-50 transition-theme'>
                    {icon}
                </button>
            </DropdownTrigger>
            <DropdownMenu
                aria-labelledby="dropdown-menu-workspace"
                itemClasses={{
                    base: "rounded-sm",
                    title: "font-semibold text-[0.85rem]",
                    description: "font-semibold text-xs",
                }}
            >
                {children}
            </DropdownMenu>
        </Dropdown>
    )
}

export default CustomDropdown