import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                darkestGray: '#18191a',
                darkGray: '#242526',
                midGray: '#3a3b3c',
                mezoGray: '#c9c9c9',
                lightGray: '#e4e6eb',
                facebookBlue: '#1877F2',
            },
        },
    },
    plugins: [],
}
export default config
