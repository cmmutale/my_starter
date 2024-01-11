import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <>
      <header className='h-[60px]'>
        <div className="app-width wrapper h-full flex items-center justify-between">
          <Link href='/sign-in'>
            <Button>
              Login
            </Button>
          </Link>
        </div>
      </header>
      <main className=''>
        <div className='max-w-3xl mx-auto w-full md:px-0 px-2'>
          {/* Masthead title introducing the app */}
          <section className='py-24'>
            <h1 className='text-[3rem] font-bold px-[5vh]'>
              Welcome to the <span className='text-blue-500'>Nextjs starter</span>
            </h1>
            <p className='px-[5vh]'>
              Click on the login button to continue ↗️
            </p>
          </section>
        </div>
      </main>
    </>
  )
}

export default Home