import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex xl:justify-between items-center xl:px-[150px] xl:py-[100px] sm:px-[20px] sm:py-[16px] sm:justify-center'>
        <h2 className='xl:text-[21px] font-[500] dm-sans text-[#2429AF] sm:text-[16px]'>Mehmet Akif Karasu -- 2020 </h2>
        <nav className='xl:flex gap-5 items-center text-[21px] dm-sans font-[500] sm:hidden'>
            <Link href=''>Artstation</Link>
            <Link href=''>Linkedin</Link>
            <Link href=''>Twitter</Link>
        </nav>
    </footer>
  )
}

export default Footer