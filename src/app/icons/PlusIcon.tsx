import React from 'react'

const PlusIcon = (props: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                className="icon-stroke"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 12h16m-8-8v16"
            />
        </svg>
    )
}

export default PlusIcon
