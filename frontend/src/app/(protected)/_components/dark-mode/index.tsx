"use client";

import { Button, Switch } from "@nextui-org/react";
import { useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

const DarkMode = () => {
    const [selected, setSelected] = useState(true);

    const changeMode = (mode: boolean) => {
        if (mode) {
            document.documentElement.classList.add('dark')
        }
        else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.theme = mode;
        setSelected(mode);
    }

    return (
        <>
            <Button
                onClick={() => { changeMode(!selected) }}
                className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-full hover:shadow-sm
                hover:bg-background bg-[transparent] dark:hover:bg-primary/20"
            >
                <span className="text-[1.2rem]">
                    {selected ? <BsMoon /> : <BsSun />}
                </span>
            </Button>
            <Switch
                tabIndex={-1}
                className='hidden'
                isSelected={selected}
                onValueChange={changeMode}
            />
        </>
    )
}

export default DarkMode