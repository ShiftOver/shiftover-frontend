// app/dashboard/layout.tsx or pages/dashboard/layout.tsx
import Navbar from '../../components/Navbar';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='flex'>
            <Navbar />
            <main className='flex-1'>{children}</main>
        </div>
    );
}
