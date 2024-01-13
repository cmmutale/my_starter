import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { auth } from '@clerk/nextjs'

function Navbar() {
    const { userId } = auth()
    return (
        <header className='h-[60px]'>
            <div className="app-width wrapper h-full flex items-center justify-between">
                {
                    userId ? <Link href='/app'>
                        <Button size='lg' className='rounded-full'>Go to app</Button>
                    </Link> : <Link href='/sign-in'>
                        <Button>login</Button>
                    </Link>
                }
            </div>
        </header>

    )
}

export default Navbar