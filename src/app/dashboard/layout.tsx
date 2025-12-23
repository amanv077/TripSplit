import Navbar from '@/components/Navbar';
import { ReactNode } from 'react';

export default function DashboardLayout({
    children
}: {
    children: ReactNode;
}) {
    return (
        <section className="min-h-screen bg-gray-50">
            <header className="border-b bg-white p-4">
                <Navbar/>
            </header>

            <div className="p-6">
                {children}
            </div>
        </section>
    );
}
