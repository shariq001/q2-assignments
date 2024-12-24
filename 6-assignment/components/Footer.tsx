import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faAngleDown, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#043873] text-white 2xl:p-[100px] 2xl:py-[16px] flex 2xl:flex-row justify-between items-center w-full sm:px-[16px] sm:py-[30px] sm:flex-col sm:gap-[20px] lg:flex-row lg:justify-between lg:gap-0 lg:px-[32px]'>
        <div className='flex 2xl:flex-row sm:flex-col justify-center items-center 2xl:gap-[60px] sm:gap-[20px] md:flex-row'>
            <p><FontAwesomeIcon icon={faGlobe} className='size-[20px] mr-2' /> English <FontAwesomeIcon icon={faAngleDown} className='size-[15px] ml-2' /></p>
            <Link href=''>Terms & privacy</Link>
            <Link href=''>Security</Link>
            <Link href=''>Status</Link>
            <p>&copy; 2021 Whitepace LLC.</p>
        </div>

        <div className='flex justify-center gap-[32px] items-center'>
            <Link href=''><FontAwesomeIcon icon={faFacebookF} className='size-[20px]' /></Link>
            <Link href=''><FontAwesomeIcon icon={faTwitter} className='size-[20px]' /></Link>
            <Link href=''><FontAwesomeIcon icon={faLinkedinIn} className='size-[20px]' /></Link>
        </div>
    </div>
  )
}

export default Footer