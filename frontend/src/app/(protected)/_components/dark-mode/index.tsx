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
                className="min-w-[46px] min-h-[44px] max-w-[46px] max-h-[44px] rounded-md text-[1.4rem] hover:shadow-sm
                hover:bg-background bg-[transparent]
                dark:hover:bg-primary/20"
            >
                {selected ? <BsMoon /> : <BsSun />}
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