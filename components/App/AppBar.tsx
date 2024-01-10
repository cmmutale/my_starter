import React from 'react'
import Logo from '../Logo'
import { UserButton } from '@clerk/nextjs'
import AppDrawer from './AppDrawer'

function AppBar() {
    return (
        <div className='h-[60px] shadow-md bg-secondary text-secondary-foreground fixed w-full top-0 left-0'>
            <div className="app-width wrapper h-full flex items-center justify-between">
                <AppDrawer />
                <div className="AppTitle font-bold text-primary">
                    MyApp
                </div>
                <div className="AppAction">
                    <UserButton 
                    afterSignOutUrl='/'
                    />
                </div>
            </div>
        </div>
    )
}

export default AppBar