import React from 'react'
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleLeft, faAngleRight, faCheck, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Image from 'next/image'

const Home = () => {
  return (
    <div className='xl:min-w-[1440px]'>
      
      {/* Section 1 */}
      <div className='bg-gradient-to-b from-[#041528] to-[#013674] text-white px-[200px] py-[100px] flex flex-col justify-center items-center '>
        <h1 className='text-[40px] '>Find Used Cars in Pakistan</h1>
        <h2 className='text-[18px]'>With thousands of cars, we have just the right one for you</h2>
        <div className='flex justify-center items-center my-[20px] '>
          <input type="text" placeholder='Car Make or Model' className='bg-white
            p-[15px] w-[350px] outline-none border-none text-black rounded-l-[5px]'/>
          <Button variant="outline" className='bg-white text-black py-[26.45px] rounded-none font-[400]'>All Cities <FontAwesomeIcon icon={faAngleDown} className='size-[12px] ml-[100px]' /></Button>
          <Button variant="outline" className='bg-white text-black py-[26.45px] rounded-none font-[400]'>Price Range <FontAwesomeIcon icon={faAngleDown} className='size-[12px] ml-[100px]' /></Button>
          <Button className='bg-[#3EB549] text-white rounded-none py-[27px] px-[25px] rounded-r-[5px]'><FontAwesomeIcon icon={faMagnifyingGlass} className='size-[25px]' /></Button>
        </div>
        <Link href='' className='border-white border-[1px] rounded-[3px] text-[14px] px-[20px] py-[3px] mt-[15px]'>Advanced Filter <FontAwesomeIcon icon={faAngleRight} className='size-[12px] inline-flex items-center mb-[3px]' /></Link>
      </div>

      {/* Section 2 */}
      <fieldset className='mx-[300px] my-[100px] px-[30px] py-[50px] border-grey-100 border-[2px] flex justify-center'>
        <legend className='text-[28px] font-semibold text-center text-[#434343]'> Sell Your Car on PakWheels and Get the Best Price </legend>
        <div className='flex justify-center gap-[100px] items-center'>

          {/* 1 */}
          <div className='flex flex-col gap-[10px]'>
            <h2 className='text-[20px] font-bold text-[#233D7B]'>Post your Ad on PakWheels</h2>
            <p className='font-[400] text-[14px]'><FontAwesomeIcon icon={faCheck} className='size-[15px] text-[#3EB549] inline-flex items-center mr-[10px]' />Post your Ad for Free in 3 Easy Steps</p>
            <p className='font-[400] text-[14px]'><FontAwesomeIcon icon={faCheck} className='size-[15px] text-[#3EB549] inline-flex items-center mr-[10px]' />Get Genuine offers from Verified Buyers</p>
            <p className='font-[400] text-[14px]'><FontAwesomeIcon icon={faCheck} className='size-[15px] text-[#3EB549] inline-flex items-center mr-[10px]' />Sell your car Fast at the Best Price</p>
            <Button className='bg-red-700 hover:bg-red-800 px-[32px] py-[26px] mt-[10px] animate-pulse '>Post Your Ad</Button>
          </div>

          {/* 2 */}
          <div className='border-grey-100 border-t-[100px] border-b-[100px]'>
            OR
          </div>

          {/* 3 */}
          <div className='flex flex-col gap-[10px]'>
            <h2 className='text-[20px] font-bold text-[#233D7B]'>Try PakWheels Sell It For Me</h2>
            <p className='font-[400] text-[14px]'><FontAwesomeIcon icon={faCheck} className='size-[15px] text-[#3EB549] inline-flex items-center mr-[10px]' />Dedicated Sales Expert to Sell your Car</p>
            <p className='font-[400] text-[14px]'><FontAwesomeIcon icon={faCheck} className='size-[15px] text-[#3EB549] inline-flex items-center mr-[10px]' />We Bargain for you and share the Best Offer</p>
            <p className='font-[400] text-[14px]'><FontAwesomeIcon icon={faCheck} className='size-[15px] text-[#3EB549] inline-flex items-center mr-[10px]' />We ensure Safe & Secure Transaction</p>
            <Button className='bg-blue-400 hover:bg-blue-500 px-[32px] py-[26px] mt-[10px] animate-pulse'>Register Your Car</Button>
          </div>
        </div>
      </fieldset>

      {/* Section 3 */}
      <div className='px-[200px] py-[50px] bg-[#F2F3F3] flex flex-col gap-[20px]'>
        <h2 className='font-semibold text-[32px] text-[#434343]'>Browse Used Cars</h2>
        <nav className='flex justify-start gap-[40px] items-center text-[#434343] font-semibold text-[20px] border-gray-300 border-b-[1px] pb-[10px]'>
          <button type='button' className='active:border-[#4c6acd] active:border-b-[3px] animate-pulse'>Category</button>
          <button type='button'>City</button>
          <button type='button'>Make</button>
          <button type='button'>Model</button>
          <button type='button'>Budget</button>
          <button type='button'>Body Type</button>
        </nav>
        <div className='flex justify-center items-center gap-[17px]'>

          <button type='button' className='bg-white rounded-full p-[15px] hover:bg-blue-600 duration-300 text-gray-400 hover:text-white'><FontAwesomeIcon icon={faAngleLeft} className='size-[20px] ' /></button>

          <div className='flex justify-start items-start gap-[20px] flex-wrap'>

            {/* 1 */}
            <div className='bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[15px] w-[180px] h-[140px] '>
              <Image src='/images/automatic-cars.svg' width={100} height={50} alt='Automatic cars' className='mx-auto'/>
              <h3 className='text-[18px] mt-[5px] mx-auto'>Automatic cars</h3>
            </div>

            {/* 2 */}
            <div className='bg-white text-gray-500 p-[22px] rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[15px] w-[180px] h-[140px]'>
              <Image src='/images/family-cars.svg' width={90} height={50} alt='Automatic cars' />
              <h3 className='text-[18px] mt-[5px]'>Family Cars</h3>
            </div>

            {/* 3 */}
            <div className='bg-white text-gray-500 p-[25px] rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[18px] w-[180px] h-[140px]'>
              <Image src='/images/5-seater.svg' width={90} height={50} alt='Automatic cars' />
              <h3 className='text-[18px] mt-[5px]'>5 Seater</h3>
            </div>

            {/* 4 */}
            <div className='bg-white text-gray-500 p-[25px] rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[12.5px] w-[180px] h-[140px]'>
              <Image src='/images/small-cars.svg' width={80} height={50} alt='Automatic cars' />
              <h3 className='text-[18px] mt-[5px]'>Small Cars</h3>
            </div>

            {/* 5 */}
            <div className='bg-white text-gray-500 p-[25px] rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[20px] w-[180px] h-[140px]'>
              <Image src='/images/big-cars.svg' width={80} height={50} alt='Automatic cars' />
              <h3 className='text-[18px] mt-[5px]'>Big Cars</h3>
            </div>

            {/* 6 */}
            <div className='bg-white text-gray-500 p-[25px] rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[15px] w-[180px] h-[140px]'>
              <Image src='/images/imported-cars.svg' width={80} height={50} alt='Automatic cars' />
              <h3 className='text-[18px] mt-[5px]'>Imported Cars</h3>
            </div>

            {/* 7 */}
            <div className='bg-white text-gray-500 p-[25px] rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[15px] w-[180px] h-[140px]'>
              <Image src='/images/old-cars.svg' width={80} height={50} alt='Automatic cars' />
              <h3 className='text-[18px] mt-[5px]'>Old Cars</h3>
            </div>

            {/* 8 */}
            <div className='bg-white text-gray-500 p-[25px] rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[15px] w-[180px] h-[140px]'>
              <Image src='/images/5-door.svg' width={80} height={50} alt='Automatic cars' />
              <h3 className='text-[18px] mt-[5px]'>5 Door</h3>
            </div>

            {/* 9 */}
            <div className='bg-white text-gray-500 p-[25px] rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[15px] w-[180px] h-[140px]'>
              <Image src='/images/4-door.svg' width={80} height={50} alt='Automatic cars' />
              <h3 className='text-[18px] mt-[5px]'>4 Door</h3>
            </div>

            {/* 10 */}
            <div className='bg-white text-gray-500 p-[25px] rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[15px] w-[180px] h-[140px]'>
              <Image src='/images/1000-cc.svg' width={80} height={50} alt='Automatic cars' />
              <h3 className='text-[18px] mt-[5px]'>1000cc cars</h3>
            </div>
            
          </div>

          <button type='button' className='bg-white rounded-full p-[15px] hover:bg-blue-600 duration-300 text-gray-400 hover:text-white'><FontAwesomeIcon icon={faAngleRight} className='size-[20px] ' /></button>
        </div>
        
      </div>

      {/* Section 4 */}
      <div className='px-[250px] py-[50px] flex flex-col gap-[30px]'>
        <h1 className='text-[28px] text-[#434343] font-semibold'>PakWheels Offerings</h1>

        {/* 1 */}
        <div className='flex justify-between items-center flex-wrap w-full mb-[10px]'>

          {/* 1.1 */}
          <Link href='' className='flex justify-start gap-[15px] items-center border-gray-200 border-[1px] px-[20px] py-[10px] w-[500px] h-[120px] duration-300 hover:shadow-md hover:shadow-gray-400  hover:duration-300  rounded-[3px]'>
            <Image src='/images/off-1.png' width={150} height={70} alt='Offer 1' />
            <div>
              <h3 className='text-blue-800 text-[18px] font-semibold'>PakWheels</h3>
              <h2 className='text-[20px] font-semibold'>SELL IT FOR ME</h2>
            </div>
          </Link>

          {/* 1.2 */}
          <Link href='' className='flex justify-start gap-[15px] items-center border-gray-200 border-[1px] px-[20px] py-[10px] w-[500px] h-[120px] duration-700 hover:shadow-md hover:shadow-gray-400 hover:duration-700 rounded-[3px]'>
            <Image src='/images/off-2.png' width={150} height={70} alt='Offer 1' />
            <div>
              <h3 className='text-blue-800 text-[18px] font-semibold'>PakWheels</h3>
              <h2 className='text-[20px] font-semibold'>AUCTION SHEET VERIFICATION</h2>
            </div>
          </Link>
        </div>

        {/* 2 */}
        <div className='flex justify-between items-center flex-wrap w-full mb-[10px]'>

          {/* 2.1 */}
          <Link href='' className='flex justify-start gap-[15px] items-center border-gray-200 border-[1px] px-[20px] py-[10px] w-[500px] h-[120px] duration-300 hover:shadow-md hover:shadow-gray-400  hover:duration-300  rounded-[3px]'>
            <Image src='/images/off-3.png' width={150} height={70} alt='Offer 1' />
            <div>
              <h3 className='text-blue-800 text-[18px] font-semibold'>PakWheels</h3>
              <h2 className='text-[20px] font-semibold'>CAR INSPECTION</h2>
            </div>
          </Link>

          {/* 2.2 */}
          <Link href='' className='flex justify-start gap-[15px] items-center border-gray-200 border-[1px] px-[20px] py-[10px] w-[500px] h-[120px] duration-700 hover:shadow-md hover:shadow-gray-400 hover:duration-700 rounded-[3px]'>
            <Image src='/images/off-4.png' width={150} height={70} alt='Offer 1' />
            <div>
              <h3 className='text-blue-800 text-[18px] font-semibold'>PakWheels</h3>
              <h2 className='text-[20px] font-semibold'>PARTNER WORKSHOP</h2>
            </div>
          </Link>
        </div>

        {/* 3 */}
        <div className='flex justify-between items-center flex-wrap w-full mb-[10px]'>

          {/* 3.1 */}
          <Link href='' className='flex justify-start gap-[15px] items-center border-gray-200 border-[1px] px-[20px] py-[10px] w-[500px] h-[120px] duration-300 hover:shadow-md hover:shadow-gray-400  hover:duration-300  rounded-[3px]'>
            <Image src='/images/off-5.png' width={150} height={70} alt='Offer 1' />
            <div>
              <h3 className='text-blue-800 text-[18px] font-semibold'>PakWheels</h3>
              <h2 className='text-[20px] font-semibold'>CAR INSURANCE</h2>
            </div>
          </Link>

          {/* 3.2 */}
          <Link href='' className='flex justify-start gap-[15px] items-center border-gray-200 border-[1px] px-[20px] py-[10px] w-[500px] h-[120px] duration-700 hover:shadow-md hover:shadow-gray-400 hover:duration-700 rounded-[3px]'>
            <Image src='/images/off-6.png' width={150} height={70} alt='Offer 1' />
            <div>
              <h3 className='text-blue-800 text-[18px] font-semibold'>PakWheels</h3>
              <h2 className='text-[20px] font-semibold'>CAR FINANCE</h2>
            </div>
          </Link>
        </div>

        {/* 4 */}
        <div className='flex justify-between items-center flex-wrap w-full mb-[10px]'>

          {/* 4.1 */}
          <Link href='' className='flex justify-start gap-[15px] items-center border-gray-200 border-[1px] px-[20px] py-[10px] w-[500px] h-[120px] duration-300 hover:shadow-md hover:shadow-gray-400  hover:duration-300  rounded-[3px]'>
            <Image src='/images/off-7.png' width={150} height={70} alt='Offer 1' />
            <div>
              <h3 className='text-blue-800 text-[18px] font-semibold'>PakWheels</h3>
              <h2 className='text-[20px] font-semibold'>CAR REGISTRATION</h2>
            </div>
          </Link>

          {/* 4.2 */}
          <Link href='' className='flex justify-start gap-[15px] items-center border-gray-200 border-[1px] px-[20px] py-[10px] w-[500px] h-[120px] duration-700 hover:shadow-md hover:shadow-gray-400 hover:duration-700 rounded-[3px]'>
            <Image src='/images/off-8.png' width={150} height={70} alt='Offer 1' />
            <div>
              <h3 className='text-blue-800 text-[18px] font-semibold'>PakWheels</h3>
              <h2 className='text-[20px] font-semibold'>OWNERSHIP TRANSFER</h2>
            </div>
          </Link>
        </div>
      </div>





    </div>
  )
}

export default Home