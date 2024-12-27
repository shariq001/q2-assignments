import React from 'react'
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleLeft, faAngleRight, faCheck, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


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
        <nav className='flex justify-start gap-[40px] items-center text-[#434343] font-semibold text-[20px] pb-[10px]'>
          <button type='button' className='active:border-[#4c6acd] active:border-b-[3px] animate-pulse border-b-[3px] border-blue-700 '>Category</button>
          <button type='button'>City</button>
          <button type='button'>Make</button>
          <button type='button'>Model</button>
          <button type='button'>Budget</button>
          <button type='button'>Body Type</button>
        </nav>
        <Carousel>
          <CarouselContent className='h-[280px] '>
            <CarouselItem>
              <div className='flex justify-center gap-[15px] items-center flex-wrap'>

                {/* 1 */}
                <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[15px]'>
                  <Image src='/images/automatic-cars.svg' width={100} height={50} alt='Automatic cars' className='mx-auto'/>
                  <h3 className='text-[18px] mt-[5px] mx-auto'>Automatic cars</h3>
                </Link>

                {/* 2 */}
                <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center p-[15px]'>
                  <Image src='/images/family-cars.svg' width={90} height={50} alt='Family cars' />
                  <h3 className='text-[18px] mt-[5px]'>Family Cars</h3>
                </Link>

                {/* 3 */}
                <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center p-[20px]'>
                  <Image src='/images/5-seater.svg' width={90} height={50} alt='5 Seater cars' />
                  <h3 className='text-[18px] mt-[5px]'>5 Seater</h3>
                </Link>

                {/* 4 */}
                <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center p-[10px]'>
                  <Image src='/images/small-cars.svg' width={80} height={50} alt='Small cars' />
                  <h3 className='text-[18px] mt-[5px]'>Small Cars</h3>
                </Link>

                {/* 5 */}
                <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center p-[17px]'>
                  <Image src='/images/big-cars.svg' width={80} height={50} alt='Big cars' />
                  <h3 className='text-[18px] mt-[5px]'>Big Cars</h3>
                </Link>

                {/* 6 */}
                <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[22px]'>
                  <Image src='/images/imported-cars.svg' width={80} height={50} alt='Imported cars' />
                  <h3 className='text-[18px] mt-[5px]'>Imported Cars</h3>
                </Link>

                {/* 7 */}
                <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[22px]'>
                  <Image src='/images/old-cars.svg' width={80} height={50} alt='Old cars' />
                  <h3 className='text-[18px] mt-[5px]'>Old Cars</h3>
                </Link>

                {/* 8 */}
                <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[22px]'>
                  <Image src='/images/5-door.svg' width={80} height={50} alt='5-door cars' />
                  <h3 className='text-[18px] mt-[5px]'>5 Door</h3>
                </Link>

                {/* 9 */}
                <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[22px]'>
                  <Image src='/images/4-door.svg' width={80} height={50} alt='4-door cars' />
                  <h3 className='text-[18px] mt-[5px]'>4 Door</h3>
                </Link>

                {/* 10 */}
                <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[22px]'>
                  <Image src='/images/1000-cc.svg' width={80} height={50} alt='1000cc cars' />
                  <h3 className='text-[18px] mt-[5px]'>1000cc cars</h3>
                </Link>

                {/* 11 */}
                <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[22px]'>
                  <Image src='/images/1300-cc.svg' width={80} height={50} alt='1300cc cars' />
                  <h3 className='text-[18px] mt-[5px]'>1300cc cars</h3>
                </Link>

                {/* 12 */}
                <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[22px]'>
                  <Image src='/images/japanese.svg' width={80} height={50} alt='Japanese cars' />
                  <h3 className='text-[18px] mt-[5px]'>Japanese cars</h3>
                </Link>




              </div>
            </CarouselItem>
            <CarouselItem>
            <div className='flex justify-center gap-[15px] items-center flex-wrap'>

              {/* 1 */}
              <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[22px]'>
                <Image src='/images/660CC.svg' width={80} height={50} alt='660CC cars' className='mx-auto'/>
                <h3 className='text-[18px] mt-[5px] mx-auto'>660cc cars</h3>
              </Link>

              {/* 2 */}
              <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[22px]'>
                <Image src='/images/low-priced.svg' width={80} height={50} alt='Low Priced cars' />
                <h3 className='text-[18px] mt-[5px]'>Low Priced Cars</h3>
              </Link>

              {/* 3 */}
              <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[17px]'>
                <Image src='/images/low-mileage.svg' width={50} height={50} alt='Low Mileage cars' />
                <h3 className='text-[18px] mt-[5px]'>Low Mileage Cars</h3>
              </Link>

              {/* 4 */}
              <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[22px]'>
                <Image src='/images/jeep.svg' width={80} height={50} alt='Jeep' />
                <h3 className='text-[18px] mt-[5px]'>Jeep</h3>
              </Link>

              {/* 5 */}
              <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[17px]'>
                <Image src='/images/hybrid.svg' width={80} height={50} alt='Hybrid cars' />
                <h3 className='text-[18px] mt-[5px]'>Hybrid Cars</h3>
              </Link>

              {/* 6 */}
              <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[22px]'>
                <Image src='/images/cheap.svg' width={80} height={50} alt='Cheap cars' />
                <h3 className='text-[18px] mt-[5px]'>Cheap Cars</h3>
              </Link>

              {/* 7 */}
              <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[22px]'>
                <Image src='/images/4-seater.svg' width={80} height={50} alt='4 Seater cars' />
                <h3 className='text-[18px] mt-[5px]'>4 Seater</h3>
              </Link>

              {/* 8 */}
              <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[22px]'>
                <Image src='/images/diesel.svg' width={80} height={50} alt='Diesel cars' />
                <h3 className='text-[18px] mt-[5px]'>Diesel cars</h3>
              </Link>

              {/* 9 */}
              <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[30px]'>
                <Image src='/images/4-door.svg' width={80} height={50} alt='4-door cars' />
                <h3 className='text-[18px] mt-[5px]'>4 Door</h3>
              </Link>

              {/* 10 */}
              <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[22px]'>
                <Image src='/images/commercial.svg' width={80} height={50} alt='Commercial cars' />
                <h3 className='text-[18px] mt-[5px]'>Commercial cars</h3>
              </Link>

              {/* 11 */}
              <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[22px]'>
                <Image src='/images/electric.svg' width={80} height={50} alt='Electric cars' />
                <h3 className='text-[18px] mt-[5px]'>Electric cars</h3>
              </Link>

              {/* 12 */}
              <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[22px]'>
                <Image src='/images/8-seater.svg' width={80} height={50} alt='8 Seater cars' />
                <h3 className='text-[18px] mt-[5px]'>8 Seater cars</h3>
              </Link>




            </div>
            </CarouselItem>
            <CarouselItem>
            <div className='flex justify-center gap-[15px] items-center flex-wrap'>

              {/* 1 */}
              <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[22px]'>
                <Image src='/images/2-seater.svg' width={80} height={50} alt='2 Seater cars' className='mx-auto'/>
                <h3 className='text-[18px] mt-[5px] mx-auto'>2 Seater</h3>
              </Link>

              {/* 2 */}
              <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[10px]'>
                <Image src='/images/2-door.svg' width={100} height={50} alt='2 door cars' />
                <h3 className='text-[18px] mt-[5px]'>2 Door</h3>
              </Link>

              {/* 3 */}
              <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[25px]'>
                <Image src='/images/sports.svg' width={100} height={50} alt='sports cars' />
                <h3 className='text-[18px] mt-[5px]'>Sports Cars</h3>
              </Link>

              {/* 4 */}
              <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[28px]'>
                <Image src='/images/modified.svg' width={80} height={50} alt='Modified Cars' />
                <h3 className='text-[18px] mt-[5px]'>Modified Cars</h3>
              </Link>

              {/* 5 */}
              <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[20px]'>
                <Image src='/images/3-door.svg' width={80} height={50} alt='3-door cars' />
                <h3 className='text-[18px] mt-[5px]'>3 Door</h3>
              </Link>

              {/* 6 */}
              <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[24px]'>
                <Image src='/images/custom-auction.svg' width={35} height={50} alt='Custom Auction' />
                <h3 className='text-[18px] mt-[5px]'>Custom Auction</h3>
              </Link>

              {/* 7 */}
              <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[22px]'>
                <Image src='/images/duplicate.svg' width={60} height={50} alt='Duplicate' />
                <h3 className='text-[18px] mt-[5px]'>Duplicate File</h3>
              </Link>

              {/* 8 */}
              <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[23px]'>
                <Image src='/images/urgent.svg' width={80} height={50} alt='Urgent' />
                <h3 className='text-[18px] mt-[5px]'>Urgent</h3>
              </Link>

              {/* 9 */}
              <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[16px]'>
                <Image src='/images/carry-daba.svg' width={80} height={50} alt='Carry-Daba' />
                <h3 className='text-[18px] mt-[5px]'>Carry Daba</h3>
              </Link>

              {/* 10 */}
              <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[29px]'>
                <Image src='/images/duplicate-book.svg' width={35} height={50} alt='Duplicate-Book' />
                <h3 className='text-[16px] mt-[5px]'>Duplicate Book Cars</h3>
              </Link>

              {/* 11 */}
              <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[25px]'>
                <Image src='/images/army-auction.svg' width={70} height={50} alt='Army-Auction' />
                <h3 className='text-[16px] mt-[5px]'>Army Auction Jeeps</h3>
              </Link>

              {/* 12 */}
              <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[29px]'>
                <Image src='/images/amnesty-scheme.svg' width={50} height={50} alt='Amnesty-Scheme' />
                <h3 className='text-[18px] mt-[5px]'>Amnesty-Scheme</h3>
              </Link>




            </div>
            </CarouselItem>
            <CarouselItem>
            <div className='flex justify-start gap-[15px] items-center flex-wrap'>

              {/* 1 */}
              <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[22px]'>
                <Image src='/images/duplicate-number.svg' width={60} height={50} alt='Duplicate Number Plate' className='mx-auto'/>
                <h3 className='text-[16px] text-center mt-[5px] mx-auto'>Duplicate Number Plate</h3>
              </Link>

              {/* 2 */}
              <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[10px]'>
                <Image src='/images/police-auction.svg' width={70} height={50} alt='police-auction' />
                <h3 className='text-[18px] mt-[5px]'>Police Auction</h3>
              </Link>

              {/* 3 */}
              <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[22px]'>
                <Image src='/images/superdari.svg' width={80} height={50} alt='Superdari' />
                <h3 className='text-[18px] mt-[5px]'>Superdari</h3>
              </Link>

              {/* 4 */}
              <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[20px]'>
                <Image src='/images/bank-auction.svg' width={60} height={50} alt='bank-auction' />
                <h3 className='text-[18px] mt-[5px]'>Bank Auction</h3>
              </Link>
              
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        
        
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

      {/* Section 5 */}
      <div className='px-[250px] py-[50px]  text-[#434343] bg-[#F2F3F3] flex flex-col items-center'>
        <div className='flex justify-between items-center w-full'>
          <h1 className='text-[28px] text-[#434343] font-semibold'>Managed by PakWheels</h1>
          <Link href='' className='text-blue-700 hover:underline'>View all managed by PakWheels cars</Link>
        </div>

        <div>
        <Carousel>
          <CarouselContent className='transition-transform'>
            <CarouselItem>...</CarouselItem>
            <CarouselItem>...</CarouselItem>
            <CarouselItem>...</CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        </div>
      </div>

      {/* Section 6 */}
      <div className='px-[250px] py-[50px] text-[#434343] flex flex-col items-center'>
        <div className='flex justify-between items-center w-full'>
          <h1 className='text-[28px] text-[#434343] font-semibold'>Featured Used Cars for Sale</h1>
          <Link href='' className='text-blue-700 hover:underline'>View All Featured Used Car</Link>
        </div>

        <div className='flex justify-center gap-[20px] items-center w-full mt-[20px]'>
          <button type='button' className='bg-gray-500 rounded-full p-[15px] hover:bg-blue-600 duration-300 text-white hover:text-white'><FontAwesomeIcon icon={faAngleLeft} className='size-[20px] ' /></button>
          <div className='flex justify-between items-center w-full'>

            {/* 1 */}
            <div>
              <Image src='/images/car-1.webp' width={300} height={200} alt='Featured Car 1' className='xl:w-[200px] xl:h-[200px]'/>
              <div className='px-[5px] py-[10px] bg-white border-[1px] border-gray-300 hover:shadow-sm hover:shadow-gray-400 duration-700 hover:duration-700'>
                <h3 className='text-[18px] text-blue-700 font-semibold'>Suzuki Cultus 2017</h3>
                <p className='text-green-500'>PKR 2,425,000</p>
                <p className='text-[16px] text-gray-500'>Sargodha</p>
              </div>
            </div>

            {/* 2 */}
            <div>
              <Image src='/images/car-2.webp' width={300} height={200} alt='Featured Car 2' className='xl:w-[200px] xl:h-[200px]'/>
              <div className='px-[5px] py-[10px] bg-white border-[1px] border-gray-300 hover:shadow-sm hover:shadow-gray-400 duration-700 hover:duration-700'>
                <h3 className='text-[18px] text-blue-700 font-semibold'>Suzuki Cultus 2017</h3>
                <p className='text-green-500'>PKR 2,425,000</p>
                <p className='text-[16px] text-gray-500'>Sargodha</p>
              </div>
            </div>

            {/* 3 */}
            <div>
              <Image src='/images/car-3.webp' width={300} height={200} alt='Featured Car 3' className='xl:w-[200px] xl:h-[200px]'/>
              <div className='px-[5px] py-[10px] bg-white border-[1px] border-gray-300 hover:shadow-sm hover:shadow-gray-400 duration-700 hover:duration-700'>
                <h3 className='text-[18px] text-blue-700 font-semibold'>Suzuki Cultus 2017</h3>
                <p className='text-green-500'>PKR 2,425,000</p>
                <p className='text-[16px] text-gray-500'>Sargodha</p>
              </div>
            </div>

            {/* 4 */}
            <div>
              <Image src='/images/car-4.webp' width={300} height={200} alt='Featured Car 4' className='xl:w-[200px] xl:h-[200px]'/>
              <div className='px-[5px] py-[10px] bg-white border-[1px] border-gray-300 hover:shadow-sm hover:shadow-gray-400 duration-700 hover:duration-700'>
                <h3 className='text-[18px] text-blue-700 font-semibold'>Suzuki Cultus 2017</h3>
                <p className='text-green-500'>PKR 2,425,000</p>
                <p className='text-[16px] text-gray-500'>Sargodha</p>
              </div>
            </div>
          </div>
          <button type='button' className='bg-gray-500 rounded-full p-[15px] hover:bg-blue-600 duration-300 text-white hover:text-white'><FontAwesomeIcon icon={faAngleRight} className='size-[20px] ' /></button>
        </div>
      </div>





    </div>
  )
}

export default Home