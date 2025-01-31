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
                <main className='z-10 mb-[4px] ml-[var(--navbar-width)] mt-[2px] flex-1 rounded-l-[39px] bg-shiftover-white-2 shadow-[0_2px_4px_0_rgba(0,0,0,0.25)]'>
                    {children}
                </main>
            </RecoilRoot>
        </div>
    );
}
