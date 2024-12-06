
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className='bg-[#044E83] px-[50px] py-[16px] flex justify-center gap-[100px] items-center relative'>
      <div className='absolute top-[30%] left-[170px]'>
        <Image src='/images/logo.png' width={70} height={100} alt='Logo' />
      </div>

      <div className=''>
        <h1 className='text-[#B9D8F3] text-[20px] font-bold'>Tuition Free Education Program on Latest Technologies</h1>
      </div>

      <nav className='flex justify-center items-center gap-[30px] text-[15px] text-white'>
        <Link href=''>Home</Link>
        <Link href=''>Apply</Link>
        <Link href=''>Jobs</Link>
        <Link href=''>Result</Link>
        <Link href=''>Courses <FontAwesomeIcon icon={faAngleDown} className='size-[10px] inline-flex items-center ml-[5px]' /></Link>
      </nav>
    </div>
  )
}

export default Header

