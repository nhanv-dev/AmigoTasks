"use client";

import React, { useState } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";

const DarkMode = () => {
    const [selected, setSelected] = useState(false);
    const { theme, setTheme } = useTheme()

    const changeMode = (mode: boolean) => {
        setTheme(mode ? 'dark' : 'light')
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