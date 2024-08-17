import type { Metadata } from 'next'

import './globals.css'
import Head from 'next/head'

import NavBar from './_components/NavBar'

export const metadata: Metadata = {
    title: 'The Social',
    description: 'The Next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <Head>
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                ></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <body className="dark:bg-darkestGray bg-mezoGray">
                <NavBar></NavBar>
                <main className="pt-14 md:pt-0">{children}</main>
            </body>
        </html>
    )
}
