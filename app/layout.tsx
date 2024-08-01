import React from "react";
import "./css/style.css";

import {Amatic_SC, Lexend} from "next/font/google";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

const lexend = Lexend({
    subsets: ["latin"],
    variable: "--font-lexend",
    display: "swap",
});

const amatic = Amatic_SC({
    subsets: ['latin', "hebrew"],
    variable: "--font-amatic",
    display: "swap",
    style: 'normal',
    weight: "700",
});

export const metadata = {
    title: {
        template: 'Phytovolt - %s',
        default: 'Phytovolt',
    },
    description: "Phytovolt is a bioenergy company that uses algae to produce sustainable energy.",
    keywords: ['phytovolt', 'bioenergy', 'algae', 'sustainable energy', 'renewable energy', 'waste-to-energy', 'biofuel', 'wastewater treatment'],
    colorScheme: 'light',
    themeColor: [
        {color: '#f3f4f6', media: '(prefers-color-scheme: light)'},
        {color: '#1a202c', media: '(prefers-color-scheme: dark)'},
    ],
    icons: {
        icon: '/favicon.ico', // Default favicon
        shortcut: '/favicon-16x16.png', // Shortcut icon (optional)
        apple: '/apple-touch-icon.png', // Apple touch icon
        other: [
            {
                rel: 'icon',
                url: '/favicon-32x32.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                rel: 'icon',
                url: '/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                rel: 'icon',
                url: '/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    },
    manifest: '/site.webmanifest',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {

    return (
        <html lang="en" className={`scroll-smooth`}>
        <body
            className={`${lexend.variable} ${amatic.variable} bg-green-50 font-lexend tracking-tight text-gray-900 antialiased`}
        >

        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">

            <Header/>

            <main className="grow">{children}</main>

            <Footer border={true}/>
        </div>
        </body>
        </html>
    );
}
