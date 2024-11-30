import Link from 'next/link'
import React from 'react'


const Header = () => {
  return (
    <div className='px-[150px] py-[30px] flex justify-between items-center'>
        <h1 className='font-semibold text-[50px]'>ma.</h1>
        <nav className='flex gap-5 text-[21px] dm-sans font-semibold'>
            <Link href='/'>Work</Link>
            <Link href='/About'>About</Link>
            <Link href=''>Playground</Link>
            <Link href=''>Contact</Link>
        </nav>
    </div>
  )
}

export default Header