import React from 'react'

type Props = {
    children: React.ReactNode;
}

function AuthLayout({ children }: Props) {
    return (
        <main className='App app-width pt-[60px] h-full'>{children}</main>
    )
}

export default AuthLayout