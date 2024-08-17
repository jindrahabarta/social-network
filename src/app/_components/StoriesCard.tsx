import React from 'react'
import PlusIcon from '../icons/PlusIcon'

const StoriesCard = () => {
    return (
        <div className="p-4 card rounded-2xl flex gap-4 overflow-x-auto">
            <div className="hover:cursor-pointer">
                <div className="bg-lightGray w-14 h-14 rounded-xl flex justify-center items-center">
                    <PlusIcon className="w-10"></PlusIcon>
                </div>
                <p className=" dark:text-lightGray text-sm pt-2">Username</p>
            </div>
            <div className="hover:cursor-pointer">
                <div className="bg-lightGray w-14 h-14 rounded-xl flex justify-center items-center"></div>
                <p className=" dark:text-lightGray text-sm pt-2">Username</p>
            </div>
        </div>
    )
}

export default StoriesCard
