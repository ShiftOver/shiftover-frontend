// app/layout.tsx or wherever your RootLayout is defined
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar'; // Import the Navbar component

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <div className='flex'>
                    <main className='flex-1'>{children}</main>
                </div>
            </body>
        </html>
    );
}
