import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className='bg-[#043873] text-white px-[100px] py-[16px] dm-sans flex justify-between items-center'>
        <div>
            <Image src='/images/Logo.png' width={191} height={34} alt='Logo' />
        </div>

        <nav className='flex justify-center gap-10 items-center'>
            <div className='flex justify-center gap-7'>
                <Link href=''>Products <FontAwesomeIcon icon={faAngleDown} className='size-[12px] ml-[10px] inline-flex items-start' /></Link>

                <Link href=''>Solutions <FontAwesomeIcon icon={faAngleDown} className='size-[12px] ml-[10px] inline-flex items-start' /></Link>

                <Link href=''>Resources <FontAwesomeIcon icon={faAngleDown} className='size-[12px] ml-[10px] inline-flex items-start' /></Link>

                <Link href=''>Pricing <FontAwesomeIcon icon={faAngleDown} className='size-[12px] ml-[10px] inline-flex items-start' /></Link>
            </div>

            <div className='flex gap-5'>
              <button type='button' className='bg-[#ffe492] px-[30px] py-[15px] rounded-[8px] text-[#043873]'>Login</button>
              <button type='button' className='bg-[#4f9cf9] px-[30px] py-[15px] rounded-[8px] '>Try Whitepace free <FontAwesomeIcon icon={faArrowRight} className='size-[12px] ml-[10px] inline-flex items-start' /></button>
            </div>
        </nav>
    </header>
  )
}

export default Header