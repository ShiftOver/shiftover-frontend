'use client';
// app/dashboard/layout.tsx or pages/dashboard/layout.tsx
import Navbar from '../../components/Navbar';
import { RecoilRoot } from 'recoil';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='flex'>
            <RecoilRoot>
                <Navbar />
                <main className='ml-[var(--navbar-width)] flex-1'>
                    {children}
                </main>
            </RecoilRoot>
        </div>
    );
}
