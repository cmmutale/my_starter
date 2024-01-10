import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import AppBar from '@/components/App/AppBar';

type Props = {
    children: React.ReactNode;
}

function AppLayout({ children }: Props) {
    return (
        <ClerkProvider>
            <AppBar />
            <main className='App app-width pt-[60px] h-full'>{children}</main>
        </ClerkProvider>
    )
}

export default AppLayout