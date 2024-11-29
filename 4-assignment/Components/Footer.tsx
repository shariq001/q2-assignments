import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex justify-between items-center px-[150px] py-[100px]'>
        <h2 className='text-[21px] font-[500] dm-sans text-[#2429AF]'>Mehmet Akif Karasu -- 2020 </h2>
        <nav className='flex gap-5 items-center text-[21px] dm-sans font-[500]'>
            <Link href=''>Artstation</Link>
            <Link href=''>Linkedin</Link>
            <Link href=''>Twitter</Link>
        </nav>
    </footer>
  )
}

export default Footer