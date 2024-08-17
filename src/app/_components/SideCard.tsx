import Link from 'next/link'
import React from 'react'
import ProfileMiniCard from './ProfileMiniCard'

const SideCard = ({ header, children }: any) => {
    return (
        <div className="p-4 card rounded-2xl flex flex-col gap-4">
            <div className="flex justify-between">
                <h4>{header}</h4>
                <Link href="/">
                    <p className=" font-bold dark:hover:text-mezoGray hover:cursor-pointer duration-100">
                        See all
                    </p>
                </Link>
            </div>
            {children}
        </div>
    )
}

export default SideCard
