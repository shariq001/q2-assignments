
import React from 'react'
import Link from 'next/link'
import { faFacebookF, faInstagram, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <div className='xl:px-[250px] sm:px-[16px] py-[30px] bg-[#23292F] text-gray-400 flex flex-col sm:gap-[10px] xl:gap-0 items-center text-center text-[12px]'>
        <p>Copyright &copy; 2003 - 2024 PakWheels (Pvt) Ltd. - All Rights Reserved.</p>
        <div className='flex justify-center items-center gap-[10px]'>
            <p className='hover:underline border-r-[1px] border-gray-400 pr-[10px] cursor-pointer'>Terms of Service</p>
            <p className='hover:underline pr-[10px] cursor-pointer'>Privacy Policy</p>
        </div>
        <p>Reproduction of material from any PakWheels.com pages without permission is strictly prohibited.</p>

        <h3 className='text-[18px] mt-[10px] sm:block xl:hidden'>Follow Us</h3>
            <div className='sm:flex justify-start items-center gap-[10px] xl:hidden'>

              {/* 1 */}
              <Link href='' className='bg-[#f2f2f2] w-[30px] h-[30px] rounded-full flex justify-center items-center text-gray-500 hover:bg-blue-400 hover:text-white duration-300 hover:duration-300'>
                <FontAwesomeIcon icon={faTwitter} className='size-[15px]'/>
              </Link>

              {/* 2 */}
              <Link href=''  className='bg-[#f2f2f2] w-[30px] h-[30px] rounded-full flex justify-center items-center text-gray-500 hover:bg-blue-800 hover:text-white duration-300 hover:duration-300'>
                <FontAwesomeIcon icon={faFacebookF} className='size-[15px]'/>
              </Link>

              {/* 3 */}
              <Link href='' className='bg-[#f2f2f2] w-[30px] h-[30px] rounded-full flex justify-center items-center text-gray-500 hover:bg-red-800 hover:text-white duration-300 hover:duration-300'>
                <FontAwesomeIcon icon={faPinterest} className='size-[15px]'/>
              </Link>

              {/* 4 */}
              <Link href='' className='bg-[#f2f2f2] w-[30px] h-[30px] rounded-full flex justify-center items-center text-gray-500 hover:bg-blue-700 hover:text-white duration-300 hover:duration-300'>
                <FontAwesomeIcon icon={faInstagram} className='size-[15px]'/>
              </Link>

              {/* 5 */}
              <Link href='' className='bg-[#f2f2f2] w-[30px] h-[30px] rounded-full flex justify-center items-center text-gray-500 hover:bg-red-700 hover:text-white duration-300 hover:duration-300'>
                <FontAwesomeIcon icon={faYoutube} className='size-[15px]'/>
              </Link>
            </div>
    </div>
  )
}

export default Footer