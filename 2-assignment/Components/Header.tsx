import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className='flex justify-center gap-[100px] items-center relative bg-[#03346E] p-[16px]'>
        <div className='absolute left-[150px] top-[18px]'>
            <Image src='/logo.png' width={70} height={100} alt='Logo' />
        </div>
        <div>
            <h1 className='text-[20px] font-bold text-blue-100'>Tution Free Education Program on Latest Technologies</h1>
        </div>
        <nav className='flex justify-center gap-[20px] text-[15px] text-white'>
            <Link href=''>Home</Link>
            <Link href=''>Apply</Link>
            <Link href=''>Jobs</Link>
            <Link href=''>Result</Link>
            <Link href='' className='flex items-center'>Courses <FontAwesomeIcon icon={faAngleDown} className='size-[13px] ml-[5px]' /></Link>
        </nav>
    </header>
  )
}

export default Header