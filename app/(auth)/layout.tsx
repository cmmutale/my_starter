import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import AppBar from '@/components/App/AppBar';

type Props = {
    children: React.ReactNode;
}

function AuthLayout({ children }: Props) {
    return (
        <ClerkProvider>
            <main className='App app-width pt-[60px] h-full'>{children}</main>
        </ClerkProvider>
    )
}

export default AuthLayout