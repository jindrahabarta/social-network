import React from 'react'

const ThemeModeIcon = (props: any) => {
    return (
        <svg
            className="w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            {...props}
        >
            <g data-name="Layer 2">
                <path fill="none" d="M0 0h48v48H0z" />
                <path
                    className=" icon"
                    d="M14 24a10 10 0 0 0 10 10V14a10 10 0 0 0-10 10Z"
                />
                <path
                    className=" icon"
                    d="M24 2a22 22 0 1 0 22 22A21.9 21.9 0 0 0 24 2ZM6 24A18.1 18.1 0 0 1 24 6v8a10 10 0 0 1 0 20v8A18.1 18.1 0 0 1 6 24Z"
                />
            </g>
        </svg>
    )
}

export default ThemeModeIcon
