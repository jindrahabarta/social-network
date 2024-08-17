import React from 'react'

const LikeIcon = (props: any) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <g>
                <path
                    className={`${
                        props.liked ? 'fill-facebookBlue' : 'fill-[#b0b3b8]'
                    } `}
                    d="m20.27 16.265.705-4.08a1.666 1.666 0 0 0-1.64-1.95h-5.181a.833.833 0 0 1-.822-.969l.663-4.045a4.783 4.783 0 0 0-.09-1.973 1.635 1.635 0 0 0-1.092-1.137l-.145-.047a1.346 1.346 0 0 0-.994.068c-.34.164-.588.463-.68.818l-.476 1.834a7.628 7.628 0 0 1-.656 1.679c-.415.777-1.057 1.4-1.725 1.975l-1.439 1.24c-.405.35-.618.873-.572 1.406l.812 9.393A1.666 1.666 0 0 0 8.597 22h4.648c3.482 0 6.453-2.426 7.025-5.735Z"
                />
                <path
                    className={`${
                        props.liked ? 'fill-facebookBlue' : 'fill-[#b0b3b8]'
                    } `}
                    d="M2.968 9.485a.75.75 0 0 1 .78.685l.97 11.236a1.237 1.237 0 1 1-2.468.107V10.234a.75.75 0 0 1 .718-.749Z"
                    clipRule="evenodd"
                />
            </g>
        </svg>
    )
}

export default LikeIcon
