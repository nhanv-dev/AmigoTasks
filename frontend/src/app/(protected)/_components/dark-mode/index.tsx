"use client";

import React, { useState } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import { Switch } from "@nextui-org/react";

const DarkMode = () => {
    const [selected, setSelected] = useState(false);

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

        <Switch
            tabIndex={-1}
            size="md"
            
            isSelected={selected}
            onValueChange={changeMode}
            thumbIcon={({ isSelected, className }) =>
                isSelected ? (
                    <p className={`${className}`}>
                        <BsMoon />
                    </p>
                ) : (
                    <p className={`${className}`}>
                        <BsSun />
                    </p>
                )
            }
        />
    )
}

export default DarkMode