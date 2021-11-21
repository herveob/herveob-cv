import React, { useState } from 'react';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';

const DarkMode = () => {
    // let clickedClass = 'clicked';
    // const body = document.body;
    // const lightTheme = 'light';
    // const darkTheme = 'dark';
    // let theme;

    const localStorageThemeValue = localStorage.getItem('theme') || 'light';
    const [theme, setTheme] = useState(localStorageThemeValue);
    console.log({ localStorageThemeValue })
    console.log({ theme })

    const switchTheme = () => {
        if (!localStorageThemeValue || localStorageThemeValue === 'light') {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
            document.body.classList.add('dark')
        } else if (localStorageThemeValue && localStorageThemeValue === 'dark') {
            setTheme('light');
            localStorage.setItem('theme', 'light');
            document.body.classList.remove('dark')
        }
    }

    return (
        <button className={theme} id="darkMode" onClick={() => switchTheme()}>
            {theme === "light" ? (
                <Brightness2OutlinedIcon />
            ) : (
                <WbSunnyOutlinedIcon />
            )
            }


        </button>
    )
}

export default DarkMode
