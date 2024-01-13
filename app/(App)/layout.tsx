import React from 'react'
import AppBar from '@/components/App/AppBar';

type Props = {
    children: React.ReactNode;
}

function AppLayout({ children }: Props) {
    return (
        <>
            <AppBar />
            <main className='App app-width pt-[60px] h-full'>{children}</main>
        </>
    )
}

export default AppLayout