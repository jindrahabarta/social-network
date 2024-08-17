import React from 'react'
import SettingsIcon from '../icons/SettingsIcon'
import Link from 'next/link'

const ProfileCard = () => {
    return (
        <div className={` p-4 card rounded-2xl flex flex-col gap-4`}>
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
                <p className="dark:group-hover:text-mezoGray duration-100">
                    Settings
                </p>
            </Link>
        </div>
    )
}

export default ProfileCard
