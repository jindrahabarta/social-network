import React from 'react'

const JbookLogo = (props: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 508.81 508.81"
            {...props}
        >
            <defs>
                <linearGradient
                    id="a"
                    x1={341.44}
                    x2={167.37}
                    y1={15.28}
                    y2={493.53}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#3fa2da" />
                    <stop offset={1} stopColor="#2e60a8" />
                </linearGradient>
            </defs>
            <circle
                cx={254.4}
                cy={254.4}
                r={254.4}
                style={{
                    fill: 'url(#a)',
                }}
            />
            <path
                d="m252.84 101.99-1.7 274.14c0 23.41-4.53 40.21-13.59 50.41s-23.04 15.29-41.91 15.29c-7.55 0-14.4-.89-20.53-2.69-6.14-1.79-12.98-4.48-20.53-8.07l-19.17 48.22c35.28 18.71 75.48 29.36 118.16 29.5 20.77-5.67 38.1-15.29 51.95-28.87 23.79-23.32 35.68-57.82 35.68-103.51l-.28-274.42h-88.08Z"
                style={{
                    fill: '#fff',
                }}
            />
        </svg>
    )
}

export default JbookLogo
