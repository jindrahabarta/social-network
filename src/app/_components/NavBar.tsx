'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import HomeIcon from '../icons/HomeIcon'
import MarketplaceIcon from '../icons/MarketplaceIcon'
import BellIcon from '../icons/BellIcon'
import ArrowIcon from '../icons/ArrowIcon'
import FriendsIcon from '../icons/FriendsIcon'
import { usePathname } from 'next/navigation'
import JbookLogo from '../icons/JbookLogo'
import ProfileCardNav from './ProfileCardNav'
import ThemeModeIcon from '../icons/ThemeModeIcon'

const NavBar = () => {
    const path = usePathname()
    const links = [
        {
            href: '/',
            icon: <HomeIcon></HomeIcon>,
        },
        {
            href: '/marketplace',
            icon: <MarketplaceIcon></MarketplaceIcon>,
        },
        {
            href: '/friends',
            icon: <FriendsIcon></FriendsIcon>,
        },
    ]

    const [hamburger, setHamburger] = useState(false)
    const switchBurger = () => {
        !hamburger ? setHamburger(true) : setHamburger(false)
    }

    const [showProfileSwitcher, setShowProfileSwitcher] = useState<any>(false)
    const showProfile = () => {
        showProfileSwitcher
            ? setShowProfileSwitcher(false)
            : setShowProfileSwitcher(true)
    }

    useEffect(() => {
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            setDarkMode(true)
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
            setDarkMode(true)
        }
    }, [])

    const [darkMode, setDarkMode] = useState(true)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        document.documentElement.classList.toggle('dark')
    }

    return (
        <nav className="fixed md:relative px-4 w-full flex justify-between items-center align-middle bg-white dark:bg-darkGray border-b border-b-lightGray dark:border-midGray z-50">
            <div className="flex gap-2 py-2">
                <Link href="/">
                    <JbookLogo className="w-10 h-10"></JbookLogo>
                </Link>
                <input
                    type="text"
                    placeholder="Search posts here..."
                    className="px-3 sm:w-64 sm:block hidden outline-none rounded-3xl input"
                />
            </div>

            <div className="md:flex gap-4 sm:self-end hidden ">
                {links.map((link) => (
                    <Link
                        href={link.href}
                        key={link.href}
                        className={`${
                            link.href == path
                                ? 'group px-5 py-1  border-b-2 border-facebookBlue'
                                : 'group px-5 py-1 mb-1 rounded-md dark:hover:bg-opacity-10 hover:bg-lightGray hover:bg-opacity-50 '
                        }`}
                    >
                        {link.icon}
                    </Link>
                ))}
            </div>
            <div className="flex flex-row-reverse gap-2">
                <div
                    onClick={showProfile}
                    className=" w-10 h-10 bg-lightGray  rounded-full flex justify-end hover:cursor-pointer"
                >
                    <div className=" self-end w-3 h-3 flex justify-center items-center bg-mezoGray dark:bg-midGray border border-mezoGray dark:border-midGray rounded-full">
                        <ArrowIcon className="w-2"></ArrowIcon>
                    </div>
                </div>
                <div
                    onClick={toggleDarkMode}
                    className=" w-10 h-10 bg-lightGray dark:bg-opacity-10 hover:bg-opacity-80 rounded-full flex items-center justify-center hover:cursor-pointer dark:hover:bg-opacity-20 duration-200"
                >
                    <ThemeModeIcon></ThemeModeIcon>
                </div>
                <div className=" w-10 h-10 bg-lightGray dark:bg-opacity-10 hover:bg-opacity-80 rounded-full flex items-center justify-center hover:cursor-pointer dark:hover:bg-opacity-20 duration-200">
                    <BellIcon></BellIcon>
                </div>

                {/* Nav Profile Card */}

                <></>

                <ProfileCardNav switch={showProfileSwitcher}></ProfileCardNav>

                {/*Sidebar */}

                <div
                    className={`${
                        hamburger
                            ? 'w-24 px-4'
                            : 'w-0 border-none px-0 overflow-hidden '
                    } py-4 transition-all md:border-none md:hidden fixed dark:bg-darkGray bg-white bg-opacity-70 backdrop-blur-sm border-r border-t border-b border-lightGray dark:border-midGray  h-screen left-0 top-14 rounded-tl rounded-br-lg rounded-2xl duration-200 flex flex-col items-center gap-4 `}
                >
                    {links.map((link) => (
                        <Link
                            onClick={switchBurger}
                            href={link.href}
                            key={link.href}
                            className={`${
                                link.href == path
                                    ? 'group p-3  border-b-2 border-facebookBlue'
                                    : 'group p-3'
                            }`}
                        >
                            {link.icon}
                        </Link>
                    ))}
                </div>

                {/* Hamburger ICON */}

                <div
                    onClick={switchBurger}
                    className="md:hidden w-10 h-10  flex  items-center justify-center hover:cursor-pointer hover:bg-opacity-20"
                >
                    <div
                        className={`${
                            hamburger ? '' : ''
                        } w-6 h-5 flex flex-col items-center justify-center gap-1.5`}
                    >
                        <div
                            className={`${
                                hamburger
                                    ? ' -rotate-45 absolute'
                                    : 'relative rotate-0 '
                            } dark:bg-lightGray bg-black bg-opacity-80 h-0.5 w-6 rounded-full  duration-200 transition-all`}
                        ></div>

                        <div
                            className={`${
                                !hamburger
                                    ? ' bg-opacity-80  w-full h-0.5'
                                    : '  bg-opacity-0  w-0 h-0.5'
                            } dark:bg-lightGray bg-black rounded-full duration-200 transition-all`}
                        ></div>

                        <div
                            className={`${
                                hamburger
                                    ? ' rotate-45 absolute'
                                    : 'relative rotate-0 '
                            } dark:bg-lightGray bg-black bg-opacity-80 h-0.5 w-6 rounded-full  duration-200 transition-all`}
                        ></div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
