import React from 'react'

const MarketplaceIcon = (props: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={30}
            fill="none"
            viewBox="-2.4 -2.4 28.8 28.8"
            {...props}
        >
            <g clipPath="url(#a)">
                <path
                    className="icon"
                    fillRule="evenodd"
                    d="M1.793.725A1 1 0 0 1 2.754 0h18.492a1 1 0 0 1 .961.725l1.429 5A1 1 0 0 1 22.674 7H20v7h3a1 1 0 1 1 0 2h-1v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7H1a1 1 0 1 1 0-2h3V7H1.326a1 1 0 0 1-.962-1.275l1.429-5ZM6 7h12v7H6V7Zm2 11a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0v-3Zm5 0a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0v-3Zm4-1a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
                    clipRule="evenodd"
                />
            </g>
            <defs>
                <clipPath id="a">
                    <path fill="#fff" d="M0 0h24v24H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default MarketplaceIcon
