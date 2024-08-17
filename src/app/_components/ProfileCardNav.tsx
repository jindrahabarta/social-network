import Link from 'next/link'
import React from 'react'
import SettingsIcon from '../icons/SettingsIcon'

const ProfileCardNav = (props: any) => {
    return (
        <div
            className={`${
                props.switch
                    ? ' opacity-100 h-fit py-4'
                    : 'opacity-0 h-0  overflow-hidden py-0'
            } duration-200 transition-all fixed top-16 min-w-96 p-4 border border-mezoGray border-opacity-50 dark:bg-darkestGray bg-white dark:bg-opacity-80 bg-opacity-50 backdrop-blur-md  shadow-inner dark:shadow-darkGray shadow-lightGray rounded-2xl flex flex-col gap-4`}
        >
            <div
                className={`${
                    props.switch ? '  delay-200 opacity-100' : 'opacity-0'
                } duration-200 flex flex-col gap-4`}
            >
                <div className="flex gap-4">
                    <div className="bg-lightGray w-14 h-14 rounded-xl"></div>
                    <div>
                        <h3>Username</h3>
                        <p>@username</p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="w-full flex gap-2">
                        <p>Posts</p>
                        <p className="font-bold dark:text-lightGray">44</p>
                    </div>
                    <div className="border border-r border-lightGray"></div>
                    <div className="w-full flex justify-end gap-2">
                        <p>Followers</p>
                        <p className="font-bold dark:text-lightGray">24</p>
                    </div>
                </div>
                <Link
                    href="/profile"
                    className="w-full flex justify-center py-2 border dark:border-lightGray border-darkGray rounded-xl hover:bg-lightGray dark:hover:bg-opacity-10 bg-opacity-20 duration-200"
                >
                    <p>Edit profile</p>
                </Link>
                <Link
                    href="/admin"
                    className="flex gap-2 items-center group hover:cursor-pointer w-fit"
                >
                    <SettingsIcon className="w-6" />
                    <p className="group-hover:text-mezoGray duration-100">
                        Settings
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default ProfileCardNav
