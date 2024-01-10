import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'

type Props = {
    children: React.ReactNode;
}

function AppLayout({ children }: Props) {
    return (
        <ClerkProvider>
            <main className='App'>{children}</main>
        </ClerkProvider>
    )
}

export default AppLayout