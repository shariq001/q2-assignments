import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faArrowRight, faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className='bg-[#043873] text-white px-[100px] py-[16px] dm-sans flex justify-between items-center sm:w-[320px] sm:px-[16px] md:w-[768px] lg:w-[1152px]'>
        <div>
            <Image src='/images/Logo.png' width={191} height={34} alt='Logo' className='sm:w-[134px] sm:h-[24px] '/>
        </div>

        <nav className='flex justify-center gap-10 items-center'>
            <div className='flex justify-center gap-7 sm:hidden'>
                <Link href=''>Products <FontAwesomeIcon icon={faAngleDown} className='size-[12px] ml-[10px] inline-flex items-start' /></Link>

                <Link href=''>Solutions <FontAwesomeIcon icon={faAngleDown} className='size-[12px] ml-[10px] inline-flex items-start' /></Link>

                <Link href=''>Resources <FontAwesomeIcon icon={faAngleDown} className='size-[12px] ml-[10px] inline-flex items-start' /></Link>

                <Link href=''>Pricing <FontAwesomeIcon icon={faAngleDown} className='size-[12px] ml-[10px] inline-flex items-start' /></Link>
            </div>

            <div className='flex gap-5'>
              <button type='button' className='bg-[#ffe492] px-[30px] py-[15px] rounded-[8px] text-[#043873] sm:hidden lg:block'>Login</button>
              <button type='button' className='bg-[#4f9cf9] px-[30px] py-[15px] rounded-[8px] sm:hidden lg:block'>Try Whitepace free <FontAwesomeIcon icon={faArrowRight} className='size-[12px] ml-[10px] inline-flex items-start' /></button>
              <button type='button'><FontAwesomeIcon icon={faBars} className='size-[15px]' /></button>
            </div>
        </nav>
    </header>
  )
}

export default Header