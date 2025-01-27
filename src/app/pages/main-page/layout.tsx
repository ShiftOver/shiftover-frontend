'use client';

import Navbar from '../../components/Navbar';
import { RecoilRoot } from 'recoil';
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user, loading } = useAuth();
    const router = useRouter();

    // Redirect to login if the user is not authenticated
    if (!loading && !user) {
        router.push('/pages/login-page');
        return null; // Prevent rendering during redirect
    }

    // Show a loading screen while authentication is being resolved
    if (loading) {
        return <div>Loading...</div>;
    }

    // Render the layout only if the user is authenticated
    return (
        <div className='flex'>
            <RecoilRoot>
                <Navbar />
                <main className='z-10 ml-[var(--navbar-width)] flex-1 rounded-l-[39px] bg-shiftover-white-2 shadow-[0_2px_4px_0_rgba(0,0,0,0.25)]'>
                    {children}
                </main>
            </RecoilRoot>
        </div>
    );
}
