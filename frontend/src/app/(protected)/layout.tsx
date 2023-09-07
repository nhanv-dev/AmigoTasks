"use client";

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import AuthGuard from './_components/guard/AuthGuard';
import Layout from './_components/layout';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const { data, status } = useSession();
    const [authenticated, setAnthenticated] = useState<boolean>(false);
    return (
        <AuthGuard authenticated={authenticated} setAnthenticated={setAnthenticated}>
            <Layout>
                {children}
            </Layout>
        </AuthGuard>
    )
}
