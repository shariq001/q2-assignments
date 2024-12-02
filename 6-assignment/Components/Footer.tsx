import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe,faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='px-[100px] py-[16px] bg-[#043873] text-white inter flex justify-between items-center sm:w-[320px] sm:flex-col sm:gap-[40px] md:w-[768px]'>
        <nav className='flex gap-8 items-center sm:flex-col sm:gap-4 sm:text-center sm:w-[288px] sm:text-[16px] md:flex-row'>
            <p className='sm:text-[16px]'><FontAwesomeIcon icon={faGlobe} className='size-[20px] mr-[7px] inline-flex sm:size-[18px]'/>English <FontAwesomeIcon icon={faAngleDown} className='size-[20px] inline-flex ml-[7px] sm:size-[16px]' /></p>
            <Link href=''>Terms & privacy</Link>
            <Link href=''>Security</Link>
            <Link href=''>Status</Link>
            <p className='sm:text-[16px]'>&copy; 2021 Whitepace LLC.</p>
        </nav>

        <nav className='flex gap-8 items-center'>
            <Link href=''><FontAwesomeIcon icon={faFacebookF} className='size-[20px] text-white'/></Link>
            <Link href=''><FontAwesomeIcon icon={faTwitter} className='size-[20px] text-white'/></Link>
            <Link href=''><FontAwesomeIcon icon={faLinkedinIn} className='size-[20px] text-white'/></Link>
        </nav>
    </footer>
  )
}

export default Footer