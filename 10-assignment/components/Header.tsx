import {  faAngleDown, faMobileScreen,} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

  

const Header = () => {
  return (
    <div className='bg-gradient-to-b from-black to-[#041528] text-white px-[150px] py-[5px]'>
        <div className='flex justify-between items-center w-full border-[#302F2E] border-b-[1px] pb-[10px]'>
            <h3><FontAwesomeIcon icon={faMobileScreen} className='size-[20px] text-red-500 inline-flex items-end' /> Download App via SMS</h3>
            <div className='flex justify-center gap-[5px] items-center'>
                <p className='text-red-500 border-grey-100 border-r-[1px] px-[10px]'>Urdu</p>
                
                <p className='border-grey-100 border-r-[1px] px-[10px]'>Sign Up</p>
                
                <p>Sign In</p>
            </div>
        </div>

        <div className='flex justify-between items-center w-full pt-[10px]'>
            <Image src='/images/logo.svg' width={160} height={50} alt='Logo' />
            <nav className='flex justify-center items-center'>
                <Link href='' className='text-white bg-transparent hover:bg-white hover:text-red-600 duration-700 hover:duration-700 px-[25px] py-[16px]'>Used Cars <FontAwesomeIcon icon={faAngleDown} className='size-[12px] inline-flex ' /></Link>
                <Link href='' className='text-white bg-transparent hover:bg-white hover:text-red-600 duration-700 hover:duration-700 px-[25px] py-[16px]'>New Cars <FontAwesomeIcon icon={faAngleDown} className='size-[12px] inline-flex ' /></Link>
                <Link href='' className='text-white bg-transparent hover:bg-white hover:text-red-600 duration-700 hover:duration-700 px-[25px] py-[16px]'>Bikes <FontAwesomeIcon icon={faAngleDown} className='size-[12px] inline-flex ' /></Link>
                <Link href='' className='text-white bg-transparent hover:bg-white hover:text-red-600 duration-700 hover:duration-700 px-[25px] py-[16px]'>Auto Store <FontAwesomeIcon icon={faAngleDown} className='size-[12px] inline-flex ' /></Link>
                <Link href='' className='text-white bg-transparent hover:bg-white hover:text-red-600 duration-700 hover:duration-700 px-[25px] py-[16px]'>Videos</Link>
                <Link href='' className='text-white bg-transparent hover:bg-white hover:text-red-600 duration-700 hover:duration-700 px-[25px] py-[16px]'>Forums</Link>
                <Link href='' className='text-white bg-transparent hover:bg-white hover:text-red-600 duration-700 hover:duration-700 px-[25px] py-[16px]'>Blog</Link>
                <Link href='' className='text-white bg-transparent hover:bg-white hover:text-red-600 duration-700 hover:duration-700 px-[25px] py-[16px]'>More <FontAwesomeIcon icon={faAngleDown} className='size-[12px] inline-flex ' /></Link>
                <Link href='' className='text-white bg-transparent font-bold p-[16]'><button type='button' className='bg-red-700 text-white rounded-[5px] px-[20px] py-[10px]'>Post an Ad <FontAwesomeIcon icon={faAngleDown} className='size-[12px] inline-flex ' /></button></Link>
            </nav>
        </div>
    </div>
  )
}

export default Header