
import React from 'react'

const Footer = () => {
  return (
    <div className='px-[250px] py-[30px] bg-[#23292F] text-gray-400 flex flex-col items-center text-center text-[12px]'>
        <p>Copyright &copy; 2003 - 2024 PakWheels (Pvt) Ltd. - All Rights Reserved.</p>
        <div className='flex justify-center items-center gap-[10px]'>
            <p className='hover:underline border-r-[1px] border-gray-400 pr-[10px] cursor-pointer'>Terms of Service</p>
            <p className='hover:underline pr-[10px] cursor-pointer'>Privacy Policy</p>
        </div>
        <p>Reproduction of material from any PakWheels.com pages without permission is strictly prohibited.</p>
    </div>
  )
}

export default Footer