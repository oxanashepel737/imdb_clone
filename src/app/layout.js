import {Inter} from 'next/font/google'
import './globals.css'
import Header from "@/components/Header";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Imdb clone',
    description: 'This is IMDB clone website',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <Header/>
        <body className={inter.className}>{children}</body>
        </html>
    )
}
