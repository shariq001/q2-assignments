import React from 'react'
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleRight, faCheck, faMagnifyingGlass, faMobile, faStar } from '@fortawesome/free-solid-svg-icons'
import { faApple, faFacebookF, faGooglePlay, faInstagram, faIntercom, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
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
      <div className='bg-gradient-to-b from-[#041528] to-[#013674] text-white xl:px-[200px] sm:px-[16px] xl:py-[100px] sm:py-[50px] flex flex-col justify-center items-center text-left sm:text-center'>
        <h1 className='xl:text-[40px] sm:text-[28px]'>Find Used Cars in Pakistan</h1>
        <h2 className='xl:text-[18px]'>With thousands of cars, we have just the right one for you</h2>
        <div className='flex justify-center items-center my-[20px] '>
          <input type="text" placeholder='Car Make or Model' className='bg-white
            p-[15px]  xl:w-[350px] outline-none border-none text-black rounded-l-[5px]'/>
          <Button variant="outline" className='bg-white text-black py-[26.45px] rounded-none font-[400] xl:block sm:hidden'>All Cities <FontAwesomeIcon icon={faAngleDown} className='size-[12px] ml-[100px]' /></Button>
          <Button variant="outline" className='bg-white text-black xl:py-[26.45px] rounded-none font-[400] xl:block sm:hidden'>Price Range <FontAwesomeIcon icon={faAngleDown} className='size-[12px] ml-[100px]' /></Button>
          <Button className='bg-[#3EB549] text-white rounded-none py-[27px] px-[25px] rounded-r-[5px]'><FontAwesomeIcon icon={faMagnifyingGlass} className='size-[25px]' /></Button>
        </div>
        <Link href='' className='border-white border-[1px] rounded-[3px] text-[14px] px-[20px] py-[3px] mt-[15px]'>Advanced Filter <FontAwesomeIcon icon={faAngleRight} className='size-[12px] inline-flex items-center mb-[3px]' /></Link>
      </div>

      {/* Section 2 */}
      <fieldset className='mx-[300px] my-[100px] px-[30px] py-[50px] border-grey-100 border-[2px] xl:flex justify-center sm:hidden'>
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
      <div className='xl:px-[200px] sm:px-[16px] py-[50px] xl:bg-[#F2F3F3] sm:bg-black sm:text-white xl:text-[#434343] flex flex-col gap-[20px]'>
        <h2 className='font-semibold xl:text-[32px] sm:text-[24px] '>Browse Used Cars</h2>
        <nav className='flex justify-start xl:gap-[40px] sm:gap-[10px] items-center font-semibold xl:text-[20px] sm:text-[14px] pb-[10px]'>
          <button type='button' className='active:border-[#4c6acd] active:border-b-[3px] animate-pulse border-b-[3px] border-blue-700 '>Category</button>
          <button type='button'>City</button>
          <button type='button'>Make</button>
          <button type='button'>Model</button>
          <button type='button'>Budget</button>
          <button type='button'>Body Type</button>
        </nav>
        <Carousel opts={{align: "start",loop: true,}}>
          <CarouselContent className='h-[280px] xl:w-[343px]'>
            <CarouselItem>
              <div className='flex xl:flex-row sm:flex-col justify-center xl:gap-[15px] sm:gap-[5px] items-center flex-wrap'>

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
        <div className='flex justify-between items-center w-full mb-[40px]'>
          <h1 className='text-[28px] text-[#434343] font-semibold'>Managed by PakWheels</h1>
          <Link href='' className='text-blue-700 hover:underline'>View all managed by PakWheels cars</Link>
        </div>

        <div>
        <Carousel opts={{align: "start",loop: true,}}>
          <CarouselContent className='h-[280px] w-[1000px]'>
            <CarouselItem>
              <div className='flex justify-center items-center gap-[15px]'>

                {/* 1 */}
                <div className='w-[230px] h-[300px]'>
                  <Image src='/images/honda-brv-2018.webp' width={230} height={150} alt='Managed 1' />
                  <div className='w-[230px] h-[100px] bg-white p-[10px] hover:shadow-sm hover:shadow-gray-400 duration-300 hover:duration-300'>
                    <Link href='' className='text-blue-900 text-[18px] font-semibold'>Honda BR-V 2018</Link>
                    <p className='text-green-400'>PKR 3,900,000</p>
                    <p className='text-gray-400'>Karachi</p>
                  </div>
                </div>

                {/* 2 */}
                <div className='w-[230px] h-[300px]'>
                  <Image src='/images/mercedes-benz-2009.webp' width={230} height={150} alt='Managed 1' />
                  <div className='w-[230px] h-[100px] bg-white p-[10px] hover:shadow-sm hover:shadow-gray-400 duration-300 hover:duration-300'>
                    <Link href='' className='text-blue-900 text-[16px] font-semibold'>Mercedes Benz E Class 2009</Link>
                    <p className='text-green-400'>PKR 7,000,000</p>
                    <p className='text-gray-400'>Lahore</p>
                  </div>
                </div>

                {/* 3 */}
                <div className='w-[230px] h-[300px]'>
                  <Image src='/images/honda-civic-2009.webp' width={230} height={150} alt='Managed 1' />
                  <div className='w-[230px] h-[100px] bg-white p-[10px] hover:shadow-sm hover:shadow-gray-400 duration-300 hover:duration-300'>
                    <Link href='' className='text-blue-900 text-[18px] font-semibold'>Honda Civic 2009</Link>
                    <p className='text-green-400'>PKR 2,650,000</p>
                    <p className='text-gray-400'>Lahore</p>
                  </div>
                </div>

                {/* 4 */}
                <div className='w-[230px] h-[300px]'>
                  <Image src='/images/mitsubishi-wagon-2022.webp' width={230} height={150} alt='Managed 1' />
                  <div className='w-[230px] h-[100px] bg-white p-[10px] hover:shadow-sm hover:shadow-gray-400 duration-300 hover:duration-300'>
                    <Link href='' className='text-blue-900 text-[16px] font-semibold'>Mitsubishi Ek Wagon 2022</Link>
                    <p className='text-green-400'>PKR 3,550,000</p>
                    <p className='text-gray-400'>Karachi</p>
                  </div>
                </div>



              </div>
            </CarouselItem>
            <CarouselItem>
            <div className='flex justify-center items-center gap-[15px]'>

              {/* 1 */}
              <div className='w-[230px] h-[300px]'>
                <Image src='/images/diahatsu-mira-2021.webp' width={230} height={150} alt='Managed 5' />
                <div className='w-[230px] h-[100px] bg-white p-[10px] hover:shadow-sm hover:shadow-gray-400 duration-300 hover:duration-300'>
                  <Link href='' className='text-blue-900 text-[18px] font-semibold'>Daihatsu Mira 2021</Link>
                  <p className='text-green-400'>PKR 3,700,000</p>
                  <p className='text-gray-400'>Lahore</p>
                </div>
              </div>

              {/* 2 */}
              <div className='w-[230px] h-[300px]'>
                <Image src='/images/toyota-prius-2011.webp' width={230} height={150} alt='Managed 6' />
                <div className='w-[230px] h-[100px] bg-white p-[10px] hover:shadow-sm hover:shadow-gray-400 duration-300 hover:duration-300'>
                  <Link href='' className='text-blue-900 text-[16px] font-semibold'>Mercedes Benz E Class 2009</Link>
                  <p className='text-green-400'>PKR 4,000,000</p>
                  <p className='text-gray-400'>Lahore</p>
                </div>
              </div>

              {/* 3 */}
              <div className='w-[230px] h-[300px]'>
                <Image src='/images/suzuki-wagon-2015.webp' width={230} height={150} alt='Managed 7' />
                <div className='w-[230px] h-[100px] bg-white p-[10px] hover:shadow-sm hover:shadow-gray-400 duration-300 hover:duration-300'>
                  <Link href='' className='text-blue-900 text-[18px] font-semibold'>Suzuki Wagon R 2015</Link>
                  <p className='text-green-400'>PKR 2,800,000</p>
                  <p className='text-gray-400'>Islamabad</p>
                </div>
              </div>

              {/* 4 */}
              <div className='w-[230px] h-[300px]'>
                <Image src='/images/hyndai-elantra-2022.webp' width={230} height={150} alt='Managed 8' />
                <div className='w-[230px] h-[100px] bg-white p-[10px] hover:shadow-sm hover:shadow-gray-400 duration-300 hover:duration-300'>
                  <Link href='' className='text-blue-900 text-[16px] font-semibold'>Hyundai Elantra 2022</Link>
                  <p className='text-green-400'>PKR 5,900,000</p>
                  <p className='text-gray-400'>Lahore</p>
                </div>
              </div>



            </div>
            </CarouselItem>
            <CarouselItem>
            <div className='flex justify-center items-center gap-[15px]'>

              {/* 1 */}
              <div className='w-[230px] h-[300px]'>
                <Image src='/images/honda-civic-2015.webp' width={230} height={150} alt='Managed 9' />
                <div className='w-[230px] h-[100px] bg-white p-[10px] hover:shadow-sm hover:shadow-gray-400 duration-300 hover:duration-300'>
                  <Link href='' className='text-blue-900 text-[18px] font-semibold'>Honda Civic 2015</Link>
                  <p className='text-green-400'>PKR 3,400,000</p>
                  <p className='text-gray-400'>Lahore</p>
                </div>
              </div>

              {/* 2 */}
              <div className='w-[230px] h-[300px]'>
                <Image src='/images/honda-civic-2001.webp' width={230} height={150} alt='Managed 10' />
                <div className='w-[230px] h-[100px] bg-white p-[10px] hover:shadow-sm hover:shadow-gray-400 duration-300 hover:duration-300'>
                  <Link href='' className='text-blue-900 text-[16px] font-semibold'>Mercedes Benz E Class 2009</Link>
                  <p className='text-green-400'>PKR 1,300,000</p>
                  <p className='text-gray-400'>Lahore</p>
                </div>
              </div>

              {/* 3 */}
              <div className='w-[230px] h-[300px]'>
                <Image src='/images/honda-civic-2015-2.webp' width={230} height={150} alt='Managed 11' />
                <div className='w-[230px] h-[100px] bg-white p-[10px] hover:shadow-sm hover:shadow-gray-400 duration-300 hover:duration-300'>
                  <Link href='' className='text-blue-900 text-[18px] font-semibold'>Honda Civic 2015</Link>
                  <p className='text-green-400'>PKR 3,450,000</p>
                  <p className='text-gray-400'>Lahore</p>
                </div>
              </div>

              {/* 4 */}
              <div className='w-[230px] h-[300px]'>
                <Image src='/images/suzuki-cultus-2021.webp' width={230} height={150} alt='Managed 12' />
                <div className='w-[230px] h-[100px] bg-white p-[10px] hover:shadow-sm hover:shadow-gray-400 duration-300 hover:duration-300'>
                  <Link href='' className='text-blue-900 text-[16px] font-semibold'>Suzuki Cultus 2021</Link>
                  <p className='text-green-400'>PKR 2,950,000</p>
                  <p className='text-gray-400'>Lahore</p>
                </div>
              </div>



            </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        </div>
      </div>

      {/* Section 6 */}
      <div className='px-[250px] py-[50px] text-[#434343] flex flex-col items-center'>
        <div className='flex justify-between items-center w-full mb-[40px]'>
          <h1 className='text-[28px] text-[#434343] font-semibold'>Featured Used Cars for Sale</h1>
          <Link href='' className='text-blue-700 hover:underline'>View All Featured Used Car</Link>
        </div>

        <Carousel opts={{align: "start",loop: true,}}>
          <CarouselContent className='h-[350px] w-[1000px]'>
            <CarouselItem>
              <div className='flex justify-center items-center gap-[15px]'>

                {/* 1 */}
                <div className='w-[230px] h-[300px] '>
                  <Image src='/images/honda-city-2019.webp' width={230} height={150} alt='Featured 1' className='w-[230px] h-[230px]'/>
                  <div className='w-[230px] h-[100px] bg-white p-[10px] hover:shadow-sm hover:shadow-gray-400 duration-300 hover:duration-300 border-[1px] border-gray-300'>
                    <Link href='' className='text-blue-900 text-[18px] font-semibold'>Honda City 2019</Link>
                    <p className='text-green-400'>PKR 3,625,000</p>
                    <p className='text-gray-400'>Islamabad</p>
                  </div>
                </div>

                {/* 2 */}
                <div className='w-[230px] h-[300px] '>
                  <Image src='/images/daihatsu-mira-2019.webp' width={230} height={150} alt='Featured 1' className='w-[230px] h-[230px]'/>
                  <div className='w-[230px] h-[100px] bg-white p-[10px] hover:shadow-sm hover:shadow-gray-400 duration-300 hover:duration-300 border-[1px] border-gray-300'>
                    <Link href='' className='text-blue-900 text-[18px] font-semibold'>Daihatsu Mira 2019</Link>
                    <p className='text-green-400'>PKR 3,200,000</p>
                    <p className='text-gray-400'>Islamabad</p>
                  </div>
                </div>

                {/* 3 */}
                <div className='w-[230px] h-[300px] '>
                  <Image src='/images/kia-sorento-2022.webp' width={230} height={150} alt='Featured 1' className='w-[230px] h-[230px]'/>
                  <div className='w-[230px] h-[100px] bg-white p-[10px] hover:shadow-sm hover:shadow-gray-400 duration-300 hover:duration-300 border-[1px] border-gray-300'>
                    <Link href='' className='text-blue-900 text-[18px] font-semibold'>Honda City 2019</Link>
                    <p className='text-green-400'>PKR 8,000,000</p>
                    <p className='text-gray-400'>Lahore</p>
                  </div>
                </div>

                {/* 4 */}
                <div className='w-[230px] h-[300px] '>
                  <Image src='/images/toyota-yaris-2021.webp' width={230} height={150} alt='Featured 1' className='w-[230px] h-[230px]'/>
                  <div className='w-[230px] h-[100px] bg-white p-[10px] hover:shadow-sm hover:shadow-gray-400 duration-300 hover:duration-300 border-[1px] border-gray-300'>
                    <Link href='' className='text-blue-900 text-[16px] font-semibold'>Toyota Yaris Hatchback 2021</Link>
                    <p className='text-green-400'>PKR 5,365,000</p>
                    <p className='text-gray-400'>Karachi</p>
                  </div>
                </div>



              </div>
            </CarouselItem>
            <CarouselItem>
            <div className='flex justify-center items-center gap-[15px]'>

                {/* 1 */}
                <div className='w-[230px] h-[300px] '>
                  <Image src='/images/honda-civic-2021.webp' width={230} height={150} alt='Featured 1' className='w-[230px] h-[230px]'/>
                  <div className='w-[230px] h-[100px] bg-white p-[10px] hover:shadow-sm hover:shadow-gray-400 duration-300 hover:duration-300 border-[1px] border-gray-300'>
                    <Link href='' className='text-blue-900 text-[18px] font-semibold'>Honda Civic 2021</Link>
                    <p className='text-green-400'>PKR 6,690,000</p>
                    <p className='text-gray-400'>Lahore</p>
                  </div>
                </div>

                {/* 2 */}
                <div className='w-[230px] h-[300px] '>
                  <Image src='/images/suzuki-alto-2019.webp' width={230} height={150} alt='Featured 1' className='w-[230px] h-[230px]'/>
                  <div className='w-[230px] h-[100px] bg-white p-[10px] hover:shadow-sm hover:shadow-gray-400 duration-300 hover:duration-300 border-[1px] border-gray-300'>
                    <Link href='' className='text-blue-900 text-[18px] font-semibold'>Suzuki Alto 2019</Link>
                    <p className='text-green-400'>PKR 2,995,000</p>
                    <p className='text-gray-400'>Islamabad</p>
                  </div>
                </div>

                {/* 3 */}
                <div className='w-[230px] h-[300px] '>
                  <Image src='/images/honda-accord-2009.webp' width={230} height={150} alt='Featured 1' className='w-[230px] h-[230px]'/>
                  <div className='w-[230px] h-[100px] bg-white p-[10px] hover:shadow-sm hover:shadow-gray-400 duration-300 hover:duration-300 border-[1px] border-gray-300'>
                    <Link href='' className='text-blue-900 text-[18px] font-semibold'>Honda Accord 2009</Link>
                    <p className='text-green-400'>PKR 3,350,000</p>
                    <p className='text-gray-400'>Islamabad</p>
                  </div>
                </div>

                {/* 4 */}
                <div className='w-[230px] h-[300px] '>
                  <Image src='/images/honda-vezel-2016.webp' width={230} height={150} alt='Featured 1' className='w-[230px] h-[230px]'/>
                  <div className='w-[230px] h-[100px] bg-white p-[10px] hover:shadow-sm hover:shadow-gray-400 duration-300 hover:duration-300 border-[1px] border-gray-300'>
                    <Link href='' className='text-blue-900 text-[16px] font-semibold'>Honda Vezel 2016</Link>
                    <p className='text-green-400'>PKR 5,000,000</p>
                    <p className='text-gray-400'>Peshawar</p>
                  </div>
                </div>



              </div>
            </CarouselItem>
            <CarouselItem>
            <div className='flex justify-center items-center gap-[15px]'>

                {/* 1 */}
                <div className='w-[230px] h-[300px] '>
                  <Image src='/images/prince-pearl-2022.webp' width={230} height={150} alt='Featured 1' className='w-[230px] h-[230px]'/>
                  <div className='w-[230px] h-[100px] bg-white p-[10px] hover:shadow-sm hover:shadow-gray-400 duration-300 hover:duration-300 border-[1px] border-gray-300'>
                    <Link href='' className='text-blue-900 text-[18px] font-semibold'>Prince Pearl 2022</Link>
                    <p className='text-green-400'>PKR 1,210,000</p>
                    <p className='text-gray-400'>Karachi</p>
                  </div>
                </div>

                {/* 2 */}
                <div className='w-[230px] h-[300px] '>
                  <Image src='/images/suzuki-alto-2019-2.webp' width={230} height={150} alt='Featured 1' className='w-[230px] h-[230px]'/>
                  <div className='w-[230px] h-[100px] bg-white p-[10px] hover:shadow-sm hover:shadow-gray-400 duration-300 hover:duration-300 border-[1px] border-gray-300'>
                    <Link href='' className='text-blue-900 text-[18px] font-semibold'>Suzuki Alto 2019</Link>
                    <p className='text-green-400'>PKR 2,495,000</p>
                    <p className='text-gray-400'>Karachi</p>
                  </div>
                </div>

                {/* 3 */}
                <div className='w-[230px] h-[300px] '>
                  <Image src='/images/honda-civic-2021-2.webp' width={230} height={150} alt='Featured 1' className='w-[230px] h-[230px]'/>
                  <div className='w-[230px] h-[100px] bg-white p-[10px] hover:shadow-sm hover:shadow-gray-400 duration-300 hover:duration-300 border-[1px] border-gray-300'>
                    <Link href='' className='text-blue-900 text-[18px] font-semibold'>Honda Civic 2021</Link>
                    <p className='text-green-400'>PKR 6,300,000</p>
                    <p className='text-gray-400'>Karachi</p>
                  </div>
                </div>

                {/* 4 */}
                <div className='w-[230px] h-[300px] '>
                  <Image src='/images/honda-civic-2021-3.webp' width={230} height={150} alt='Featured 1' className='w-[230px] h-[230px]'/>
                  <div className='w-[230px] h-[100px] bg-white p-[10px] hover:shadow-sm hover:shadow-gray-400 duration-300 hover:duration-300 border-[1px] border-gray-300'>
                    <Link href='' className='text-blue-900 text-[16px] font-semibold'>Honda Civic 2021</Link>
                    <p className='text-green-400'>PKR 6,400,000</p>
                    <p className='text-gray-400'>Hyderabad</p>
                  </div>
                </div>



              </div>
            </CarouselItem>
            <CarouselItem>
            <div className='flex justify-center items-center gap-[15px]'>

                {/* 1 */}
                <div className='w-[230px] h-[300px] '>
                  <Image src='/images/kia-picanto-2021.webp' width={230} height={150} alt='Featured 1' className='w-[230px] h-[230px]'/>
                  <div className='w-[230px] h-[100px] bg-white p-[10px] hover:shadow-sm hover:shadow-gray-400 duration-300 hover:duration-300 border-[1px] border-gray-300'>
                    <Link href='' className='text-blue-900 text-[18px] font-semibold'>KIA Picanto 2021</Link>
                    <p className='text-green-400'>PKR 2,800,000</p>
                    <p className='text-gray-400'>Hyderabad</p>
                  </div>
                </div>

                {/* 2 */}
                <div className='w-[230px] h-[300px] '>
                  <Image src='/images/honda-vezel-2019.webp' width={230} height={150} alt='Featured 1' className='w-[230px] h-[230px]'/>
                  <div className='w-[230px] h-[100px] bg-white p-[10px] hover:shadow-sm hover:shadow-gray-400 duration-300 hover:duration-300 border-[1px] border-gray-300'>
                    <Link href='' className='text-blue-900 text-[18px] font-semibold'>Honda Vezel 2019</Link>
                    <p className='text-green-400'>PKR 8,100,000</p>
                    <p className='text-gray-400'>Islamabad</p>
                  </div>
                </div>

                {/* 3 */}
                <div className='w-[230px] h-[300px] '>
                  <Image src='/images/suzuki-jimny-2013.webp' width={230} height={150} alt='Featured 1' className='w-[230px] h-[230px]'/>
                  <div className='w-[230px] h-[100px] bg-white p-[10px] hover:shadow-sm hover:shadow-gray-400 duration-300 hover:duration-300 border-[1px] border-gray-300'>
                    <Link href='' className='text-blue-900 text-[18px] font-semibold'>Suzuki Jimny 2013</Link>
                    <p className='text-green-400'>PKR 2,600,000</p>
                    <p className='text-gray-400'>Hyderabad</p>
                  </div>
                </div>

                {/* 4 */}
                <div className='w-[230px] h-[300px] '>
                  <Image src='/images/toyota-yaris-2020.webp' width={230} height={150} alt='Featured 1' className='w-[230px] h-[230px]'/>
                  <div className='w-[230px] h-[100px] bg-white p-[10px] hover:shadow-sm hover:shadow-gray-400 duration-300 hover:duration-300 border-[1px] border-gray-300'>
                    <Link href='' className='text-blue-900 text-[16px] font-semibold'>Toyota Yaris Hatchback 2020</Link>
                    <p className='text-green-400'>PKR 4,150,000</p>
                    <p className='text-gray-400'>Hyderabad</p>
                  </div>
                </div>



              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        
      </div>

      {/* Section 7 */}
      <div className='px-[250px] py-[50px] bg-[#F2F3F3] text-[#434343] flex flex-col'>
        <div className='flex justify-between items-center w-full mb-[20px]'>
          <h1 className='text-[28px] text-[#434343] font-semibold'>Featured New Cars</h1>
          <Link href='' className='text-blue-700 hover:underline'>View All New Car</Link>
        </div>
        <nav className='flex justify-start gap-[40px] items-center text-[#434343] font-semibold text-[20px] pb-[10px]  mb-[40px]'>
          <button type='button' className='active:border-[#4c6acd] active:border-b-[3px] animate-pulse border-b-[3px] border-blue-700 '>Popular</button>
          <button type='button'>Upcoming</button>
          <button type='button'>Newly Launched</button>
        </nav>

        <Carousel opts={{align: "start",loop: true,}} className='scroll-smooth'>
          <CarouselContent className='h-[280px] w-[1000px]'>
            <CarouselItem>
              <div className='flex justify-center items-center gap-[15px]'>

                {/* 1 */}
                <div className='bg-white flex flex-col items-center justify-center p-[15px] w-[250px] h-[250px] duration-300 hover:shadow-md hover:shadow-gray-300 hover:duration-300'>
                  <Image src='/images/toyota-corolla.jpg' width={180} height={150} alt='Toyota Corolla' />
                  <Link href='' className='text-blue-900 text-[18px] font-semibold'>Toyota Corolla</Link>
                  <p className='text-green-400'>PKR 59.7 - 75.5 lacs</p>
                  <div className='flex justify-center gap-[7px] items-center'>
                    <div className='flex justify-center items-center gap-[2px]'>
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                    </div>
                    <p className='text-[14px] text-gray-400'>628 Reviews</p>
                  </div>
                </div>

                {/* 2 */}
                <div className='bg-white flex flex-col items-center justify-center p-[15px] w-[250px] h-[250px] duration-300 hover:shadow-md hover:shadow-gray-300 hover:duration-300'>
                  <Image src='/images/suzuki-alto.png' width={180} height={150} alt='Suzuki Alto' />
                  <Link href='' className='text-blue-900 text-[18px] font-semibold'>Suzuki Alto</Link>
                  <p className='text-green-400'>PKR 23.3 - 30.5 lacs</p>
                  <div className='flex justify-center gap-[7px] items-center'>
                    <div className='flex justify-center items-center gap-[2px]'>
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                    </div>
                    <p className='text-[14px] text-gray-400'>203 Reviews</p>
                  </div>
                </div>

                {/* 3 */}
                <div className='bg-white flex flex-col items-center justify-center p-[15px] w-[250px] h-[250px] duration-300 hover:shadow-md hover:shadow-gray-300 hover:duration-300'>
                  <Image src='/images/honda-city.jpg' width={180} height={150} alt='Honda City' />
                  <Link href='' className='text-blue-900 text-[18px] font-semibold'>Honda City</Link>
                  <p className='text-green-400'>PKR 46.5 - 58.5 lacs</p>
                  <div className='flex justify-center gap-[7px] items-center'>
                    <div className='flex justify-center items-center gap-[2px]'>
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                    </div>
                    <p className='text-[14px] text-gray-400'>458 Reviews</p>
                  </div>
                </div>

                {/* 4 */}
                <div className='bg-white flex flex-col items-center justify-center p-[15px] w-[250px] h-[250px] duration-300 hover:shadow-md hover:shadow-gray-300 hover:duration-300'>
                  <Image src='/images/honda-civic.jpg' width={180} height={150} alt='Honda Civic' />
                  <Link href='' className='text-blue-900 text-[18px] font-semibold'>Honda Civic</Link>
                  <p className='text-green-400'>PKR 46.5 - 58.5 lacs</p>
                  <div className='flex justify-center gap-[7px] items-center'>
                    <div className='flex justify-center items-center gap-[2px]'>
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                    </div>
                    <p className='text-[14px] text-gray-400'>363 Reviews</p>
                  </div>
                </div>



              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='flex justify-center items-center gap-[15px]'>

                {/* 1 */}
                <div className='bg-white flex flex-col items-center justify-center p-[15px] w-[250px] h-[250px] duration-300 hover:shadow-md hover:shadow-gray-300 hover:duration-300'>
                  <Image src='/images/suzuki-cultus.png' width={180} height={150} alt='Suzuki Cultus' />
                  <Link href='' className='text-blue-900 text-[18px] font-semibold'>Suzuki Cultus</Link>
                  <p className='text-green-400'>PKR 38.6 - 45.5 lacs</p>
                  <div className='flex justify-center gap-[7px] items-center'>
                    <div className='flex justify-center items-center gap-[2px]'>
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                    </div>
                    <p className='text-[14px] text-gray-400'>269 Reviews</p>
                  </div>
                </div>

                {/* 2 */}
                <div className='bg-white flex flex-col items-center justify-center p-[15px] w-[250px] h-[250px] duration-300 hover:shadow-md hover:shadow-gray-300 hover:duration-300'>
                  <Image src='/images/suzuki-wagonr.jpg' width={180} height={150} alt='Suzuki Wagon R' />
                  <Link href='' className='text-blue-900 text-[18px] font-semibold'>Suzuki Wagon R</Link>
                  <p className='text-green-400'>PKR 32.1 - 37.4 lacs</p>
                  <div className='flex justify-center gap-[7px] items-center'>
                    <div className='flex justify-center items-center gap-[2px]'>
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                    </div>
                    <p className='text-[14px] text-gray-400'>153 Reviews</p>
                  </div>
                </div>

                {/* 3 */}
                <div className='bg-white flex flex-col items-center justify-center p-[15px] w-[250px] h-[250px] duration-300 hover:shadow-md hover:shadow-gray-300 hover:duration-300'>
                  <Image src='/images/toyota-yaris.png' width={180} height={150} alt='Toyota Yaris' />
                  <Link href='' className='text-blue-900 text-[18px] font-semibold'>Toyota Yaris</Link>
                  <p className='text-green-400'>PKR 44.8 - 63.2 lacs</p>
                  <div className='flex justify-center gap-[7px] items-center'>
                    <div className='flex justify-center items-center gap-[2px]'>
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                    </div>
                    <p className='text-[14px] text-gray-400'>142 Reviews</p>
                  </div>
                </div>

                {/* 4 */}
                <div className='bg-white flex flex-col items-center justify-center p-[15px] w-[250px] h-[250px] duration-300 hover:shadow-md hover:shadow-gray-300 hover:duration-300'>
                  <Image src='/images/suzuki-swift.jpg' width={180} height={150} alt='Suzuki Swift' />
                  <Link href='' className='text-blue-900 text-[18px] font-semibold'>Suzuki Swift</Link>
                  <p className='text-green-400'>PKR 43.4 - 47.2 lacs</p>
                  <div className='flex justify-center gap-[7px] items-center'>
                    <div className='flex justify-center items-center gap-[2px]'>
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                    </div>
                    <p className='text-[14px] text-gray-400'>194 Reviews</p>
                  </div>
                </div>



              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='flex justify-center items-center gap-[15px]'>

                {/* 1 */}
                <div className='bg-white flex flex-col items-center justify-center p-[15px] w-[250px] h-[250px] duration-300 hover:shadow-md hover:shadow-gray-300 hover:duration-300'>
                  <Image src='/images/toyota-fortuner.png' width={180} height={150} alt='Toyota Fortuner' />
                  <Link href='' className='text-blue-900 text-[18px] font-semibold'>Toyota Fortuner</Link>
                  <p className='text-green-400'>PKR 1.45 - 1.99 crore</p>
                  <div className='flex justify-center gap-[7px] items-center'>
                    <div className='flex justify-center items-center gap-[2px]'>
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                    </div>
                    <p className='text-[14px] text-gray-400'>44 Reviews</p>
                  </div>
                </div>

                {/* 2 */}
                <div className='bg-white flex flex-col items-center justify-center p-[15px] w-[250px] h-[250px] duration-300 hover:shadow-md hover:shadow-gray-300 hover:duration-300'>
                  <Image src='/images/kia-sportage.jpeg' width={150} height={130} alt='KIA Sportage' />
                  <Link href='' className='text-blue-900 text-[18px] font-semibold'>KIA Sportage</Link>
                  <p className='text-green-400'>PKR 73.0 - 90.0 lacs</p>
                  <div className='flex justify-center gap-[7px] items-center'>
                    <div className='flex justify-center items-center gap-[2px]'>
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                    </div>
                    <p className='text-[14px] text-gray-400'>52 Reviews</p>
                  </div>
                </div>

                {/* 3 */}
                <div className='bg-white flex flex-col items-center justify-center p-[15px] w-[250px] h-[250px] duration-300 hover:shadow-md hover:shadow-gray-300 hover:duration-300'>
                  <Image src='/images/kia-picanto.png' width={180} height={130} alt='KIA Picanto' />
                  <Link href='' className='text-blue-900 text-[18px] font-semibold'>KIA Picanto</Link>
                  <p className='text-green-400'>PKR 36.0 - 38.5 lacs</p>
                  <div className='flex justify-center gap-[7px] items-center'>
                    <div className='flex justify-center items-center gap-[2px]'>
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                    </div>
                    <p className='text-[14px] text-gray-400'>94 Reviews</p>
                  </div>
                </div>

                {/* 4 */}
                <div className='bg-white flex flex-col items-center justify-center p-[15px] w-[250px] h-[250px] duration-300 hover:shadow-md hover:shadow-gray-300 hover:duration-300'>
                  <Image src='/images/toyota-landcruiser.png' width={180} height={130} alt='Toyota Land Cruiser' />
                  <Link href='' className='text-blue-900 text-[18px] font-semibold'>Toyota Land Cruiser</Link>
                  <p className='text-green-400'>PKR 12.0 crore</p>
                  <div className='flex justify-center gap-[7px] items-center'>
                    <div className='flex justify-center items-center gap-[2px]'>
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                    </div>
                    <p className='text-[14px] text-gray-400'>31 Reviews</p>
                  </div>
                </div>



              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='flex justify-center items-center gap-[15px]'>

                {/* 1 */}
                <div className='bg-white flex flex-col items-center justify-center p-[15px] w-[250px] h-[250px] duration-300 hover:shadow-md hover:shadow-gray-300 hover:duration-300'>
                  <Image src='/images/changan-alsvin.png' width={180} height={130} alt='Changan Alsvin' />
                  <Link href='' className='text-blue-900 text-[18px] font-semibold'>Changan Alsvin</Link>
                  <p className='text-green-400'>PKR 38.0 - 45.7 lacs</p>
                  <div className='flex justify-center gap-[7px] items-center'>
                    <div className='flex justify-center items-center gap-[2px]'>
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                    </div>
                    <p className='text-[14px] text-gray-400'>91 Reviews</p>
                  </div>
                </div>

                {/* 2 */}
                <div className='bg-white flex flex-col items-center justify-center p-[15px] w-[250px] h-[250px] duration-300 hover:shadow-md hover:shadow-gray-300 hover:duration-300'>
                  <Image src='/images/honda-brv.jpg' width={180} height={130} alt='Honda BR-V' />
                  <Link href='' className='text-blue-900 text-[18px] font-semibold'>Honda BR-V</Link>
                  <p className='text-green-400'>PKR 63.0 lacs</p>
                  <div className='flex justify-center gap-[7px] items-center'>
                    <div className='flex justify-center items-center gap-[2px]'>
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                    </div>
                    <p className='text-[14px] text-gray-400'>123 Reviews</p>
                  </div>
                </div>

                {/* 3 */}
                <div className='bg-white flex flex-col items-center justify-center p-[15px] w-[250px] h-[250px] duration-300 hover:shadow-md hover:shadow-gray-300 hover:duration-300'>
                  <Image src='/images/prince-pearl.jpg' width={180} height={130} alt='Prince Pearl' />
                  <Link href='' className='text-blue-900 text-[18px] font-semibold'>Prince Pearl</Link>
                  <p className='text-green-400'>PKR 18.5 lacs</p>
                  <div className='flex justify-center gap-[7px] items-center'>
                    <div className='flex justify-center items-center gap-[2px]'>
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                    </div>
                    <p className='text-[14px] text-gray-400'>42 Reviews</p>
                  </div>
                </div>

                {/* 4 */}
                <div className='bg-white flex flex-col items-center justify-center p-[15px] w-[250px] h-[250px] duration-300 hover:shadow-md hover:shadow-gray-300 hover:duration-300'>
                  <Image src='/images/hyundai-tucson.png' width={180} height={130} alt='Hyundai Tucson' />
                  <Link href='' className='text-blue-900 text-[18px] font-semibold'>Hyundai Tucson</Link>
                  <p className='text-green-400'>PKR 71.2 - 87.1 lacs</p>
                  <div className='flex justify-center gap-[7px] items-center'>
                    <div className='flex justify-center items-center gap-[2px]'>
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                    </div>
                    <p className='text-[14px] text-gray-400'>31 Reviews</p>
                  </div>
                </div>



              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        
      </div>

      {/* Section 8 */}
      <div className='px-[250px] py-[50px] bg-[#F2F3F3] '>
        <h1 className='text-[28px] text-[#434343] font-semibold mb-[20px]'>New Cars by Make</h1>
        <div className='flex justify-between items-center'>

          {/* 1 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center'>
              <Image src='/images/suzuki.png' width={75} height={50} alt='Suzuki' />
            </div>
            <h3 >Suzuki</h3>
          </Link>

          {/* 2 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700'>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center'>
              <Image src='/images/toyota.png' width={80} height={50} alt='Toyota' />
            </div>
            <h3>Toyota</h3>
          </Link>

          {/* 3 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700'>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center'>
              <Image src='/images/honda.png' width={80} height={50} alt='Honda' />
            </div>
            <h3>Honda</h3>
          </Link>

          {/* 4 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center'>
              <Image src='/images/kia.png' width={65} height={50} alt='KIA' />
            </div>
            <h3>KIA</h3>
          </Link>

          {/* 5 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center'>
              <Image src='/images/hyundai.png' width={65} height={50} alt='Hyundai' />
            </div>
            <h3>Hyundai</h3>
          </Link>

          {/* 6 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center'>
              <Image src='/images/mg.png' width={65} height={50} alt='MG' />
            </div>
            <h3>MG</h3>
          </Link>
        </div>

        <div className='flex justify-between items-center my-[30px]'>

          {/* 1 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center'>
              <Image src='/images/changan.jpg' width={80} height={10} alt='Changan' className='rounded-full'/>
            </div>
            <h3>Changan</h3>
          </Link>

          {/* 2 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center'>
              <Image src='/images/byd.png' width={75} height={50} alt='BYD' className='rounded-full'/>
            </div>
            <h3>BYD</h3>
          </Link>

          {/* 3 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700'>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center'>
              <Image src='/images/bmw.png' width={80} height={50} alt='BMW' />
            </div>
            <h3>BMW</h3>
          </Link>

          {/* 4 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center'>
              <Image src='/images/audi.png' width={65} height={50} alt='Audi' />
            </div>
            <h3>Audi</h3>
          </Link>

          {/* 5 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center'>
              <Image src='/images/proton.png' width={85} height={50} alt='Proton' />
            </div>
            <h3>Proton</h3>
          </Link>

          {/* 6 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center'>
              <Image src='/images/united.png' width={65} height={50} alt='United' />
            </div>
            <h3>United</h3>
          </Link>
        </div>

        <div className='flex justify-between items-center my-[30px]'>

          {/* 1 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center'>
              <Image src='/images/porsche.png' width={70} height={10} alt='Porsche' />
            </div>
            <h3>Porsche</h3>
          </Link>

          {/* 2 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center'>
              <Image src='/images/mercedes.png' width={75} height={50} alt='Mercedes Benz' className='rounded-full'/>
            </div>
            <h3>Mercedes Benz</h3>
          </Link>

          {/* 3 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700'>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center'>
              <Image src='/images/prince.png' width={80} height={50} alt='Prince' />
            </div>
            <h3>Prince</h3>
          </Link>

          {/* 4 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center'>
              <Image src='/images/dfsk.png' width={65} height={50} alt='DFSK' />
            </div>
            <h3>DFSK</h3>
          </Link>

          {/* 5 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center'>
              <Image src='/images/isuzu.png' width={85} height={50} alt='Isuzu' />
            </div>
            <h3>Isuzu</h3>
          </Link>

          {/* 6 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center'>
              <Image src='/images/faw.png' width={65} height={50} alt='FAW' />
            </div>
            <h3>FAW</h3>
          </Link>
        </div>

        <div className='flex justify-between items-center my-[30px]'>

          {/* 1 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center'>
              <Image src='/images/haval.png' width={70} height={10} alt='Haval' />
            </div>
            <h3>Haval</h3>
          </Link>

          {/* 2 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center'>
              <Image src='/images/baic.png' width={75} height={50} alt='BAIC' className='rounded-full'/>
            </div>
            <h3>BAIC</h3>
          </Link>

          {/* 3 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700'>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center'>
              <Image src='/images/ora.jpg' width={80} height={50} alt='ORA' className='rounded-full'/>
            </div>
            <h3>ORA</h3>
          </Link>

          {/* 4 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center'>
              <Image src='/images/peugeot.png' width={65} height={50} alt='Peugeot' />
            </div>
            <h3>Peugeot</h3>
          </Link>

          {/* 5 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center'>
              <Image src='/images/jw-forland.png' width={85} height={50} alt='JW Forland' />
            </div>
            <h3>JW Forland</h3>
          </Link>

          {/* 6 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center'>
              <Image src='/images/tank.jpeg' width={65} height={50} alt='Tank' className='rounded-full'/>
            </div>
            <h3>Tank</h3>
          </Link>
        </div>

        <div className='flex justify-between items-center my-[30px]'>

          {/* 1 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center'>
              <Image src='/images/chery.png' width={70} height={10} alt='Chery' />
            </div>
            <h3>Chery</h3>
          </Link>

          {/* 2 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center'>
              <Image src='/images/jmc.png' width={75} height={50} alt='JMC' className='rounded-full'/>
            </div>
            <h3>JMC</h3>
          </Link>

          {/* 3 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700'>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center'>
              <Image src='/images/daehan.png' width={80} height={50} alt='Daehan' className='rounded-full'/>
            </div>
            <h3>Daehan</h3>
          </Link>

          {/* 4 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center'>
              <Image src='/images/deepal.png' width={65} height={50} alt='Deepal' />
            </div>
            <h3>Deepal</h3>
          </Link>

          {/* 5 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center'>
              <Image src='/images/tesla.png' width={85} height={50} alt='Tesla' />
            </div>
            <h3>Tesla</h3>
          </Link>

          {/* 6 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center'>
              <Image src='/images/GUGO.jpg' width={65} height={50} alt='GUGO' className='rounded-full'/>
            </div>
            <h3>GUGO</h3>
          </Link>
        </div>

        <div className='flex justify-start gap-[110px] items-center my-[30px]'>

          {/* 1 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center'>
              <Image src='/images/seres.png' width={70} height={10} alt='Seres' />
            </div>
            <h3>Seres</h3>
          </Link>

          {/* 2 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center'>
              <Image src='/images/honri.png' width={75} height={50} alt='Honri' className='rounded-full'/>
            </div>
            <h3>Honri</h3>
          </Link>

          
        </div>
      </div>

      {/* Section 9 */}
      <div className='px-[250px] py-[50px] flex justify-start flex-col'>

        <div className='flex justify-between items-center w-[800px]'>
          <h1 className='text-[28px] text-[#434343] font-semibold mb-[20px]'>Car Comparisons</h1>
          <Link href='' className='text-blue-700 hover:underline'>All Car Comparisons</Link>
        </div>

        <div className='w-[800px] h-[350px] border-[1px] border-gray-200 flex justify-between items-center px-[40px]'>

          {/* Left */}
          <Link href='' className='text-blue-900 font-semibold hover:text-blue-700 flex flex-col items-center'>
            <div className='flex justify-center items-center py-[20px]'>
              <div className='flex flex-col items-center'>
                <Image src='/images/mg-hs.jpg' width={220} height={100} alt='MG HS' />
                <h3>MG HS</h3>
              </div>

              <div className='bg-red-600 w-[50px] h-[50px] rounded-full flex justify-center items-center text-white'>
                VS
              </div>

              <div className='flex flex-col items-center'>
                <Image src='/images/sportage-white.jpeg' width={180} height={100} alt='KIA Sportage' />
                <h3>KIA Sportage</h3>
              </div>
            </div>
            <button  className='border-[1px] border-blue-900 px-[50px] py-[10px]'>View Comparison</button>
          </Link>

          {/* Right */}
          <div className='flex flex-col items-center justify-center gap-[50px] py-[20px]'>

            {/* 1 */}
            <Link href='' className='flex flex-col justify-center items-center gap-[10px] text-[#434343] hover:text-blue-800 text-[18px] border-b-[1px] border-gray-200 pb-[10px]'>
              <h3>KIA Sportage</h3>
              <div className='bg-red-600 w-[40px] h-[40px] rounded-full flex justify-center items-center text-white'>
                VS
              </div>
              <h3>DFSK Glory 580</h3>
            </Link>

            {/* 2 */}
            <Link href='' className='flex flex-col justify-center items-center gap-[10px] text-[#434343] hover:text-blue-800 text-[18px]'>
              <h3>Toyota Prius</h3>
              <div className='bg-red-600 w-[40px] h-[40px] rounded-full flex justify-center items-center text-white'>
                VS
              </div>
              <h3>Haval Jolion</h3>
            </Link>
          </div>
        </div>

      </div>

      {/* Section 10 */}
      <div className='flex flex-col gap-[20px] px-[250px] py-[50px] bg-[#F2F3F3] '>
        <h1 className='text-[28px] text-[#434343] font-semibold mb-[20px]'>Auto Store Car Parts & Accessories</h1>
        <nav className='flex justify-start gap-[40px] items-center text-[#434343] font-semibold text-[20px] pb-[10px]'>
          <button type='button' className=' animate-pulse border-b-[3px] border-blue-700 '>Sub Category</button>
          <button type='button'>Make</button>
          <button type='button'>Model</button>
          <button type='button'>Brand</button>
        </nav>

        <Carousel opts={{align: "start",loop: true,}}>
          <CarouselContent className='h-[280px] '>
            <CarouselItem>
              <div className='flex justify-center gap-[15px] items-center flex-wrap'>

                {/* 1 */}
                <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[15px]'>
                  <Image src='/images/car-washer.png' width={70} height={50} alt='Car Washer' className='mx-auto'/>
                  <h3 className='text-[18px] mt-[5px] mx-auto'>Car Washer</h3>
                </Link>

                {/* 2 */}
                <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[10px]'>
                  <Image src='/images/tyres.png' width={80} height={50} alt='Tyres' />
                  <h3 className='text-[18px] mt-[5px]'>Tyres</h3>
                </Link>

                {/* 3 */}
                <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[5px]'>
                  <Image src='/images/helmets.png' width={80} height={50} alt='Helmets' />
                  <h3 className='text-[18px] mt-[5px]'>Helmets</h3>
                </Link>

                {/* 4 */}
                <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[8px]'>
                  <Image src='/images/keychains.png' width={65} height={50} alt='Keychains' />
                  <h3 className='text-[18px] mt-[5px]'>Keychains</h3>
                </Link>

                {/* 5 */}
                <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[17px]'>
                  <Image src='/images/car-battery.png' width={70} height={50} alt='Car Battery' />
                  <h3 className='text-[18px] mt-[5px]'>Car Battery</h3>
                </Link>

                {/* 6 */}
                <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[22px]'>
                  <Image src='/images/alloy-rims.png' width={70} height={50} alt='Alloy Rims' />
                  <h3 className='text-[18px] mt-[5px]'>Alloy Rims</h3>
                </Link>

                {/* 7 */}
                <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[15px]'>
                  <Image src='/images/engine-oil.png' width={40} height={50} alt='Enginer Oil' />
                  <h3 className='text-[18px] mt-[5px]'>Enginer Oil</h3>
                </Link>

                {/* 8 */}
                <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[15px]'>
                  <Image src='/images/car-charger.png' width={75} height={50} alt='Car Charger' />
                  <h3 className='text-[18px] mt-[5px]'>Car Charger</h3>
                </Link>

                {/* 9 */}
                <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[13px]'>
                  <Image src='/images/microfiber-cloth.png' width={75} height={50} alt='Microfiber Cloth' />
                  <h3 className='text-[18px] mt-[5px]'>Microfiber Cloth</h3>
                </Link>

                {/* 10 */}
                <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[15px]'>
                  <Image src='/images/gps-tracker.png' width={75} height={50} alt='GPS Tracker' />
                  <h3 className='text-[18px] mt-[5px]'>GPS Tracker</h3>
                </Link>

                {/* 11 */}
                <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[15px]'>
                  <Image src='/images/engines-forsale.png' width={60} height={50} alt='Engines For Sale' />
                  <h3 className='text-[18px] mt-[5px]'>Engines For Sale</h3>
                </Link>

                {/* 12 */}
                <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[15px]'>
                  <Image src='/images/fuel-pump.png' width={75} height={50} alt='Fuel Pump' />
                  <h3 className='text-[18px] mt-[5px]'>Fuel Pump</h3>
                </Link>




              </div>
            </CarouselItem>
            <CarouselItem>
            <div className='flex justify-center gap-[15px] items-center flex-wrap'>

                {/* 1 */}
                <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[15px]'>
                  <Image src='/images/air-freshner.png' width={70} height={50} alt='Air Freshener' className='mx-auto'/>
                  <h3 className='text-[18px] mt-[5px] mx-auto'>Air Freshener</h3>
                </Link>

                {/* 2 */}
                <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[12px]'>
                  <Image src='/images/floor-mats.png' width={75} height={50} alt='Floor Mats' />
                  <h3 className='text-[18px] mt-[5px]'>Floor Mats</h3>
                </Link>

                {/* 3 */}
                <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[10px]'>
                  <Image src='/images/car-shades.png' width={80} height={50} alt='Car Shades' />
                  <h3 className='text-[18px] mt-[5px]'>Car Shades</h3>
                </Link>

                {/* 4 */}
                <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[5px]'>
                  <Image src='/images/car-cover.png' width={80} height={50} alt='Car Cover' />
                  <h3 className='text-[18px] mt-[5px]'>Car Cover</h3>
                </Link>

                {/* 5 */}
                <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[10px]'>
                  <Image src='/images/headlights.png' width={70} height={50} alt='Headlights' />
                  <h3 className='text-[18px] mt-[5px]'>Headlights</h3>
                </Link>

                {/* 6 */}
                <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[22px]'>
                  <Image src='/images/car-stickers.png' width={70} height={50} alt='Car Stickers' />
                  <h3 className='text-[18px] mt-[5px]'>Car Stickers</h3>
                </Link>

                {/* 7 */}
                <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[10px]'>
                  <Image src='/images/car-bumpers.png' width={80} height={50} alt='Car Bumpers' />
                  <h3 className='text-[18px] mt-[5px]'>Car Bumpers</h3>
                </Link>

                {/* 8 */}
                <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[15px]'>
                  <Image src='/images/car-fender.png' width={75} height={50} alt='Car Fender' />
                  <h3 className='text-[18px] mt-[5px]'>Car Fender</h3>
                </Link>

                {/* 9 */}
                <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[13px]'>
                  <Image src='/images/air-filters.png' width={55} height={50} alt='Air Filter' />
                  <h3 className='text-[18px] mt-[5px]'>Air Filter</h3>
                </Link>

                {/* 10 */}
                <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[22px]'>
                  <Image src='/images/coolants.png' width={85} height={50} alt='Coolants' />
                  <h3 className='text-[18px] mt-[5px]'>Coolants</h3>
                </Link>

                {/* 11 */}
                <Link href='' className='w-[150px] h-[130px] bg-white text-gray-500 rounded-[10px]  shadow-md shadow-gray-300 hover:shadow-gray-600 duration-700 hover:duration-700 flex flex-col items-center py-[15px]'>
                  <Image src='/images/hose-pipe.png' width={70} height={50} alt='Hose Pipe' />
                  <h3 className='text-[18px] mt-[5px]'>Hose Pipe</h3>
                </Link>

                




              </div>
            </CarouselItem>
            
            
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Section 11 */}
      <div className='px-[250px] py-[50px] '>
        <h1 className='text-[28px] text-[#434343] font-semibold mb-[20px]'>New Bikes by Make</h1>
        <div className='flex justify-between items-center'>

          {/* 1 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center border-[1px] border-gray-200'>
              <Image src='/images/honda-bike.png' width={75} height={50} alt='Honda' />
            </div>
            <h3 >Honda</h3>
          </Link>

          {/* 2 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700'>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center border-[1px] border-gray-200'>
              <Image src='/images/Yamaha.png' width={80} height={50} alt='Yamaha' />
            </div>
            <h3>Yamaha</h3>
          </Link>

          {/* 3 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700'>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center border-[1px] border-gray-200'>
              <Image src='/images/suzuki-bike.png' width={80} height={50} alt='Suzuki' />
            </div>
            <h3>Suzuki</h3>
          </Link>

          {/* 4 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center border-[1px] border-gray-200'>
              <Image src='/images/unique.png' width={65} height={50} alt='Unique' />
            </div>
            <h3>Unique</h3>
          </Link>

          {/* 5 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center border-[1px] border-gray-200'>
              <Image src='/images/hi-speed.png' width={65} height={50} alt='Hi-Speed' />
            </div>
            <h3>Hi-Speed</h3>
          </Link>

          {/* 6 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center border-[1px] border-gray-200'>
              <Image src='/images/united-bike.png' width={65} height={50} alt='United' />
            </div>
            <h3>United</h3>
          </Link>
        </div>

        <div className='flex justify-between items-center my-[30px]'>

          {/* 1 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center border-[1px] border-gray-200'>
              <Image src='/images/road-prince.png' width={80} height={10} alt='Road Prince' className='rounded-full'/>
            </div>
            <h3>Road Prince</h3>
          </Link>

          {/* 2 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center border-[1px] border-gray-200'>
              <Image src='/images/bmw-bike.png' width={75} height={50} alt='BMW' className='rounded-full'/>
            </div>
            <h3>BMW</h3>
          </Link>

          {/* 3 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700'>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center border-[1px] border-gray-200'>
              <Image src='/images/benelli.png' width={80} height={50} alt='Benelli' />
            </div>
            <h3>Benelli</h3>
          </Link>

          {/* 4 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center border-[1px] border-gray-200'>
              <Image src='/images/bingo-electric.jpg' width={65} height={50} alt='Bingo Electric' className='rounded-full'/>
            </div>
            <h3>Bingo Electric</h3>
          </Link>

          {/* 5 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center border-[1px] border-gray-200'>
              <Image src='/images/evee.png' width={85} height={50} alt='Evee' />
            </div>
            <h3>Evee</h3>
          </Link>

          {/* 6 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center border-[1px] border-gray-200'>
              <Image src='/images/jolta.png' width={70} height={50} alt='Jolta Electric' />
            </div>
            <h3>Jolta Electric</h3>
          </Link>
        </div>

        <div className='flex justify-between items-center my-[30px]'>

          {/* 1 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center border-[1px] border-gray-200'>
              <Image src='/images/keeway.png' width={80} height={10} alt='KEEWAY' className='rounded-full'/>
            </div>
            <h3>KEEWAY</h3>
          </Link>

          {/* 2 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center border-[1px] border-gray-200'>
              <Image src='/images/kawasaki.png' width={75} height={50} alt='Kawasaki' className='rounded-full'/>
            </div>
            <h3>Kawasaki</h3>
          </Link>

          {/* 3 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700'>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center border-[1px] border-gray-200'>
              <Image src='/images/super-power.png' width={80} height={50} alt='Super Power' />
            </div>
            <h3>Super Power</h3>
          </Link>

          {/* 4 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center border-[1px] border-gray-200'>
              <Image src='/images/benlng.png' width={65} height={50} alt='Benling' className='rounded-full'/>
            </div>
            <h3>Benling</h3>
          </Link>

          {/* 5 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center border-[1px] border-gray-200'>
              <Image src='/images/superstar.png' width={85} height={50} alt='Super Star' />
            </div>
            <h3>Super Star</h3>
          </Link>

          {/* 6 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center border-[1px] border-gray-200'>
              <Image src='/images/vlektra.jpeg' width={80} height={40} alt='Vlektra' className='rounded-full'/>
            </div>
            <h3>Vlektra</h3>
          </Link>
        </div>

        <div className='flex justify-between items-center my-[30px]'>

          {/* 1 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center border-[1px] border-gray-200'>
              <Image src='/images/hero.png' width={70} height={10} alt='Hero' />
            </div>
            <h3>Hero</h3>
          </Link>

          {/* 2 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center border-[1px] border-gray-200'>
              <Image src='/images/crown.png' width={75} height={50} alt='Crown' className='rounded-full'/>
            </div>
            <h3>Crown</h3>
          </Link>

          {/* 3 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700'>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center border-[1px] border-gray-200'>
              <Image src='/images/metro.png' width={80} height={50} alt='Metro' className='rounded-full'/>
            </div>
            <h3>Metro</h3>
          </Link>

          {/* 4 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center border-[1px] border-gray-200'>
              <Image src='/images/lifan.png' width={65} height={50} alt='Lifan' />
            </div>
            <h3>Lifan</h3>
          </Link>

          {/* 5 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center border-[1px] border-gray-200'>
              <Image src='/images/ezbike.png' width={85} height={50} alt='Ezbike' className='rounded-full'/>
            </div>
            <h3>Ezbike</h3>
          </Link>

          {/* 6 */}
          <Link href='' className='flex flex-col items-center gap-[15px] text-blue-900 font-semibold hover:text-blue-700 '>
            <div className='bg-white w-[80px] h-[80px] rounded-full flex justify-center border-[1px] border-gray-200'>
              <Image src='/images/zxmco.png' width={65} height={50} alt='ZXMCO' className='rounded-full'/>
            </div>
            <h3>ZXMCO</h3>
          </Link>
        </div>

        

        
      </div>

      {/* Section 12 */}
      <div className='px-[250px] py-[50px] flex flex-col bg-[#f2f2f2]'>

        <div className='flex justify-between items-center w-full mb-[40px]'>
          <h1 className='text-[28px] text-[#434343] font-semibold'>Popular New Bikes</h1>
          <Link href='' className='text-blue-700 hover:underline'>View All New Bikes</Link>
        </div>

        <Carousel opts={{align: "start",loop: true,}} className='scroll-smooth'>
          <CarouselContent className='h-[280px] w-[1050px]'>
            <CarouselItem>
              <div className='flex justify-between items-center'>

                {/* 1 */}
                <div className='bg-white flex flex-col items-center justify-center p-[15px] w-[250px] h-[250px] duration-300 hover:shadow-md hover:shadow-gray-500 hover:duration-300'>
                  <Image src='/images/honda-cd-70.jpg' width={180} height={150} alt='Honda CD 70' />
                  <Link href='' className='text-blue-900 text-[18px] font-semibold'>Honda CD 70</Link>
                  <p className='text-green-400'>PKR 157, 900</p>
                  <div className='flex justify-center gap-[7px] items-center'>
                    <div className='flex justify-center items-center gap-[2px]'>
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                    </div>
                    <p className='text-[14px] text-gray-400'>65 Reviews</p>
                  </div>
                </div>

                {/* 2 */}
                <div className='bg-white flex flex-col items-center justify-center p-[15px] w-[250px] h-[250px] duration-300 hover:shadow-md hover:shadow-gray-500 hover:duration-300'>
                  <Image src='/images/honda-cd-125.jpg' width={180} height={150} alt='Honda CG 125' />
                  <Link href='' className='text-blue-900 text-[18px] font-semibold'>Honda CG 125</Link>
                  <p className='text-green-400'>PKR 234, 900</p>
                  <div className='flex justify-center gap-[7px] items-center'>
                    <div className='flex justify-center items-center gap-[2px]'>
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                    </div>
                    <p className='text-[14px] text-gray-400'>103 Reviews</p>
                  </div>
                </div>

                {/* 3 */}
                <div className='bg-white flex flex-col items-center justify-center p-[15px] w-[250px] h-[250px] duration-300 hover:shadow-md hover:shadow-gray-500 hover:duration-300'>
                  <Image src='/images/suzuki-gs-150.jpg' width={180} height={150} alt='Suzuki GS 150' />
                  <Link href='' className='text-blue-900 text-[18px] font-semibold'>Suzuki GS 150</Link>
                  <p className='text-green-400'>PKR 389,000</p>
                  <div className='flex justify-center gap-[7px] items-center'>
                    <div className='flex justify-center items-center gap-[2px]'>
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                    </div>
                    <p className='text-[14px] text-gray-400'>35 Reviews</p>
                  </div>
                </div>

                {/* 4 */}
                <div className='bg-white flex flex-col items-center justify-center p-[15px] w-[250px] h-[250px] duration-300 hover:shadow-md hover:shadow-gray-500 hover:duration-300'>
                  <Image src='/images/yamaha-ybr-125.jpg' width={180} height={150} alt='Yamaha YBR 125' />
                  <Link href='' className='text-blue-900 text-[18px] font-semibold'>Yamaha YBR 125</Link>
                  <p className='text-green-400'>PKR 466,000</p>
                  <div className='flex justify-center gap-[7px] items-center'>
                    <div className='flex justify-center items-center gap-[2px]'>
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                      <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                    </div>
                    <p className='text-[14px] text-gray-400'>49 Reviews</p>
                  </div>
                </div>




                
              </div>
            </CarouselItem>
            <CarouselItem>
            <div className='flex justify-between items-center'>

              {/* 1 */}
              <div className='bg-white flex flex-col items-center justify-center p-[15px] w-[250px] h-[250px] duration-300 hover:shadow-md hover:shadow-gray-500 hover:duration-300'>
                <Image src='/images/yamaha-ybr-125g.png' width={180} height={150} alt='Yamaha YBR 125G' />
                <Link href='' className='text-blue-900 text-[18px] font-semibold'>Yamaha YBR 125G</Link>
                <p className='text-green-400'>PKR 485,000</p>
                <div className='flex justify-center gap-[7px] items-center'>
                  <div className='flex justify-center items-center gap-[2px]'>
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                  </div>
                  <p className='text-[14px] text-gray-400'>41 Reviews</p>
                </div>
              </div>

              {/* 2 */}
              <div className='bg-white flex flex-col items-center justify-center p-[15px] w-[250px] h-[250px] duration-300 hover:shadow-md hover:shadow-gray-500 hover:duration-300'>
                <Image src='/images/honda-cb-150f.jpg' width={180} height={150} alt='Honda CB 150F' />
                <Link href='' className='text-blue-900 text-[18px] font-semibold'>Honda CB 150F</Link>
                <p className='text-green-400'>PKR 487,900</p>
                <div className='flex justify-center gap-[7px] items-center'>
                  <div className='flex justify-center items-center gap-[2px]'>
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                  </div>
                  <p className='text-[14px] text-gray-400'>37 Reviews</p>
                </div>
              </div>

              {/* 3 */}
              <div className='bg-white flex flex-col items-center justify-center p-[15px] w-[250px] h-[250px] duration-300 hover:shadow-md hover:shadow-gray-500 hover:duration-300'>
                <Image src='/images/suzuki-gr-150.jpg' width={180} height={150} alt='Suzuki GR 150' />
                <Link href='' className='text-blue-900 text-[18px] font-semibold'>Suzuki GR 150</Link>
                <p className='text-green-400'>PKR 547,000</p>
                <div className='flex justify-center gap-[7px] items-center'>
                  <div className='flex justify-center items-center gap-[2px]'>
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                  </div>
                  <p className='text-[14px] text-gray-400'>20 Reviews</p>
                </div>
              </div>

              {/* 4 */}
              <div className='bg-white flex flex-col items-center justify-center p-[15px] w-[250px] h-[250px] duration-300 hover:shadow-md hover:shadow-gray-500 hover:duration-300'>
                <Image src='/images/honda-pridor.jpg' width={180} height={150} alt='Honda Pridor' />
                <Link href='' className='text-blue-900 text-[18px] font-semibold'>Honda Pridor</Link>
                <p className='text-green-400'>PKR 208,900</p>
                <div className='flex justify-center gap-[7px] items-center'>
                  <div className='flex justify-center items-center gap-[2px]'>
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                  </div>
                  <p className='text-[14px] text-gray-400'>57 Reviews</p>
                </div>
              </div>





            </div>
            </CarouselItem>
            <CarouselItem>
            <div className='flex justify-between items-center'>

              {/* 1 */}
              <div className='bg-white flex flex-col items-center justify-center p-[15px] w-[250px] h-[250px] duration-300 hover:shadow-md hover:shadow-gray-500 hover:duration-300'>
                <Image src='/images/honda-cb-125F.jpg' width={180} height={150} alt='Honda CB 125F' />
                <Link href='' className='text-blue-900 text-[18px] font-semibold'>Honda CB 125F</Link>
                <p className='text-green-400'>PKR 390,900</p>
                <div className='flex justify-center gap-[7px] items-center'>
                  <div className='flex justify-center items-center gap-[2px]'>
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                  </div>
                  <p className='text-[14px] text-gray-400'>20 Reviews</p>
                </div>
              </div>

              {/* 2 */}
              <div className='bg-white flex flex-col items-center justify-center p-[15px] w-[250px] h-[250px] duration-300 hover:shadow-md hover:shadow-gray-500 hover:duration-300'>
                <Image src='/images/benelli-trk-502x.jpg' width={180} height={150} alt='Benelli TRK 502X' />
                <Link href='' className='text-blue-900 text-[18px] font-semibold'>Benelli TRK 502X</Link>
                <p className='text-green-400'>PKR 2,950,000</p>
                <div className='flex justify-center gap-[7px] items-center'>
                  <div className='flex justify-center items-center gap-[2px]'>
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000]' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000]' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                  </div>
                  <p className='text-[14px] text-gray-400'>0 Reviews</p>
                </div>
              </div>

              {/* 3 */}
              <div className='bg-white flex flex-col items-center justify-center p-[15px] w-[250px] h-[250px] duration-300 hover:shadow-md hover:shadow-gray-500 hover:duration-300'>
                <Image src='/images/bmw-s1000-rr.jpg' width={180} height={150} alt='BMW S1000RR' />
                <Link href='' className='text-blue-900 text-[18px] font-semibold'>BMW S1000RR</Link>
                <p className='text-green-400'>PKR 12,600,000</p>
                <div className='flex justify-center gap-[7px] items-center'>
                  <div className='flex justify-center items-center gap-[2px]'>
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000]' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                  </div>
                  <p className='text-[14px] text-gray-400'>3 Reviews</p>
                </div>
              </div>

              {/* 4 */}
              <div className='bg-white flex flex-col items-center justify-center p-[15px] w-[250px] h-[250px] duration-300 hover:shadow-md hover:shadow-gray-500 hover:duration-300'>
                <Image src='/images/benelli-tnt-150i.jpg' width={180} height={150} alt='Benelli TNT 150i' />
                <Link href='' className='text-blue-900 text-[18px] font-semibold'>Benelli TNT 150i</Link>
                <p className='text-green-400'>PKR 610,000</p>
                <div className='flex justify-center gap-[7px] items-center'>
                  <div className='flex justify-center items-center gap-[2px]'>
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F] ' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                  </div>
                  <p className='text-[14px] text-gray-400'>9 Reviews</p>
                </div>
              </div>





            </div>
            </CarouselItem>
            <CarouselItem>
            <div className='flex justify-start gap-[20px] items-center'>

              {/* 1 */}
              <div className='bg-white flex flex-col items-center justify-center p-[15px] w-[250px] h-[250px] duration-300 hover:shadow-md hover:shadow-gray-500 hover:duration-300'>
                <Image src='/images/yamaha-yb-125z.jpg' width={180} height={150} alt='Yamaha YB 125Z' />
                <Link href='' className='text-blue-900 text-[18px] font-semibold'>Yamaha YB 125Z</Link>
                <p className='text-green-400'>PKR 424,000</p>
                <div className='flex justify-center gap-[7px] items-center'>
                  <div className='flex justify-center items-center gap-[2px]'>
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F]' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#EF730F] ' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                  </div>
                  <p className='text-[14px] text-gray-400'>53 Reviews</p>
                </div>
              </div>

              {/* 2 */}
              <div className='bg-white flex flex-col items-center justify-center  p-[15px] w-[250px] h-[250px] duration-300 hover:shadow-md hover:shadow-gray-500 hover:duration-300'>
                <Image src='/images/honda-cg-125s-gold.png' width={360} height={150} alt='Honda CG 125S Gold' />
                <Link href='' className='text-blue-900 text-[18px] font-semibold  mt-[20px]'>Honda CG 125S Gold</Link>
                <p className='text-green-400'>PKR 292,900</p>
                <div className='flex justify-center gap-[7px] items-center'>
                  <div className='flex justify-center items-center gap-[2px]'>
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000]' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000]' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                  </div>
                  <p className='text-[14px] text-gray-400'>0 Reviews</p>
                </div>
              </div>

              {/* 3 */}
              <div className='bg-white flex flex-col items-center justify-center p-[15px] w-[250px] h-[250px] duration-300 hover:shadow-md hover:shadow-gray-500 hover:duration-300'>
                <Image src='/images/honda-cg-125s.png' width={180} height={150} alt='Honda CG 125S' />
                <Link href='' className='text-blue-900 text-[18px] font-semibold'>Honda CG 125S</Link>
                <p className='text-green-400'>PKR 282,900</p>
                <div className='flex justify-center gap-[7px] items-center'>
                  <div className='flex justify-center items-center gap-[2px]'>
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000]' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000]' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000]' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000]' />
                    <FontAwesomeIcon icon={faStar} className='size-[12px] text-[#000] ' />
                  </div>
                  <p className='text-[14px] text-gray-400'>0 Reviews</p>
                </div>
              </div>

              





            </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Section 13 */}
      <div className='flex flex-col gap-[30px] px-[250px] py-[50px]'>
        <div className='flex justify-between items-center w-full'>
          <h1 className='text-[28px] text-[#434343] font-semibold'>Browse Our Videos</h1>
          <Link href='' className='text-blue-700 hover:underline'>View All Videos</Link>
        </div>

        <div id='grid-container'>
          <div className='row-start-1 row-end-2 col-start-1 col-end-2  border-[1px] border-gray-200 hover:shadow-md hover:shadow-gray-300 duration-300 hover:duration-300 w-[500px] h-[425px]' >
            <iframe width="500" height="390" src="https://www.youtube.com/embed/krCzyT_XUbY?si=6TrwNdmDjW__I5KK" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            <p className='text-blue-800 font-semibold'>Hyundai Elantra Hybrid Review</p>
          </div>

          <div className='row-start-1 row-end-1 col-start-3 col-end-3  border-[1px] border-gray-200 hover:shadow-md hover:shadow-gray-300 duration-300 hover:duration-300 w-[250px] h-[210px]' >
            <iframe width="250" height="180" src="https://www.youtube.com/embed/SBPWUDXiWt4?si=vaosWl4xDhcDHOka" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <p className='text-blue-800 font-semibold'>Looks Better? Toyota Yaris</p>
          </div>

          <div className='row-start-1 row-end-2 col-start-4 col-end-4  border-[1px] border-gray-200 hover:shadow-md hover:shadow-gray-300 duration-300 hover:duration-300 w-[250px] h-[210px]' >
            <iframe width="250" height="180" src="https://www.youtube.com/embed/_D3a5dxyNyA?si=v0PisIzIxlufVGcV" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            <p className='text-blue-800 font-semibold'>Which is Better?</p>
          </div>

          <div className='row-start-2 row-end-2 col-start-3 col-end-3  border-[1px] border-gray-200 hover:shadow-md hover:shadow-gray-300 duration-300 hover:duration-300 w-[250px] h-[210px]' >
            <iframe width="250" height="180" src="https://www.youtube.com/embed/Ro5pwGhhsds?si=jJrpDZke_wISctSD" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            <p className='text-blue-800 font-semibold'>Oshan X7 Facelift Review</p>
          </div>

          <div className='row-start-2 row-end-2 col-start-4 col-end-4  border-[1px] border-gray-200 hover:shadow-md hover:shadow-gray-300 duration-300 hover:duration-300 w-[250px] h-[210px]' >
            <iframe width="250" height="180" src="https://www.youtube.com/embed/GhARr623508?si=f8pjc9cYa3V-E9ZM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            <p className='text-blue-800 font-semibold'>Best Fuel Average</p>
          </div>
        </div>
      </div>

      {/* Section 14 */}
      <div className='flex flex-col gap-[20px] px-[250px] py-[50px] bg-[#f2f2f2] text-[#434343]'>
        <div className='flex justify-between items-center w-[800px]'>
          <h1 className='text-[28px] text-[#434343] font-semibold'>News, Reviews & Discussions</h1>
          <Link href='' className='text-blue-700 hover:underline'>Read All Recent News</Link>
        </div>
        <nav className='flex justify-start gap-[40px] items-center text-[#434343] font-semibold text-[20px] pb-[10px]'>
          <button type='button' className=' animate-pulse border-b-[3px] border-blue-700 '>Automotive News</button>
          <button type='button'>Car Reviews</button>
          <button type='button'>Discussions</button>
        </nav>

        <div className='flex flex-col gap-[10px]'>

          {/* 1 */}
          <div className='flex justify-start gap-[15px] items-center h-[150px] w-[800px]'>
            <Image src='/images/petrol-hybrid-cars.jpg' width={180} height={150} alt='Petrol & Hybrid Cars' className='border-[10px] border-y-black  '/>
            <div>
              <Link href='' className='text-[18px] text-blue-800 font-semibold hover:text-blue-600'>Petrol & Hybrid Cars Launched in 2024</Link>
              <p className='text-[12px] text-gray-500'>December 27,2024</p>
              <p className='text-[14px]'>As 2024 draws to a close, it&apos;s notable that this year was relatively stable compared to the upheavals of 2023, which saw frequent price hikes and significant disruptions in local car production. In contrast, local automakers embraced stability.</p>
            </div>
          </div>

          {/* 2 */}
          <div className='flex justify-start gap-[15px] items-center h-[150px] w-[800px]'>
            <Image src='/images/most-searched-cars.jpg' width={180} height={150} alt='Petrol & Hybrid Cars' className='border-[10px] border-y-black  '/>
            <div>
              <Link href='' className='text-[18px] text-blue-800 font-semibold hover:text-blue-600'>PakWheels Wrap – Most Searched Used Cars in 2024</Link>
              <p className='text-[12px] text-gray-500'>December 27,2024</p>
              <p className='text-[14px]'>Pakistan&apos;s online automotive search trends have once again highlighted the cars that draw the most attention from used car buyers, enthusiasts, and casual browsers alike. The data from PakWheels shows a total of 338,450,979 searches.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 15 */}
      <div className='px-[250px] py-[50px] flex justify-between items-center'>

        {/* 1 */}
        <div className='flex flex-col gap-[20px]'>
          <h2 className='text-blue-900 text-[28px] font-semibold'>Get The PakWheels App</h2>
          <p className='w-[400px]'>Buy & Sell Cars, Bikes and Auto Parts faster and better using our App</p>
          <div className='flex justify-start items-center gap-[10px]'>

            {/* 1.1 */}
            <Link href='' className='flex justify-start items-center gap-[5px] bg-black text-white px-[10px] py-[5px] rounded-[10px]'>
              <FontAwesomeIcon icon={faGooglePlay} className='size-[30px]'/>
              <div>
                <p className='text-[10px]'>GET IT ON</p>
                <p className='text-[14px]'>Google Play</p>
              </div>
            </Link>

            {/* 1.2 */}
            <Link href='' className='flex justify-start items-center gap-[5px] bg-black text-white px-[10px] py-[5px] rounded-[10px]'>
              <FontAwesomeIcon icon={faApple} className='size-[30px]'/>
              <div>
                <p className='text-[10px]'>Download on the</p>
                <p className='text-[14px]'>App Store</p>
              </div>
            </Link>

            {/* 1.3 */}
            <Link href='' className='flex justify-start items-center gap-[5px] bg-black text-white px-[10px] py-[5px] rounded-[10px]'>
              <FontAwesomeIcon icon={faIntercom} className='size-[30px] text-red-900 bg-white'/>
              <div>
                <p className='text-[10px]'>EXPLORE IT ON</p>
                <p className='text-[14px]'>AppGallery</p>
              </div>
            </Link>
          </div>
        </div>

        {/* 2 */}
        <div className='flex justify-center gap-[15px] items-center'>
          <Image src='/images/qr-code.svg' width={100} height={100} alt='QR Code' />
          <p>Scan the QR <br />
          to get the App</p>
        </div>

        {/* 3 */}
        <FontAwesomeIcon icon={faMobile} className='size-[150px] text-red-900' />
      </div>

      {/* Section 16 */}
      <div className='px-[250px] py-[50px] bg-[#23292F] text-white'>
        <div className='flex justify-between w-full'>

          {/* 1 */}
          <div className='flex flex-col'>
            <h3 className='text-[18px] mb-[10px]'>Cars By Make</h3>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Toyota Cars for Sale</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Suzuki Cars for Sale</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Honda Cars for Sale</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Daihatsu Cars for Sale</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Mitsubishi Cars for Sale</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Nissan Cars for Sale</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Mercedes Cars for Sale</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Hyundai Cars for Sale</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>BMW Cars for Sale</Link>
          </div>

          {/* 2 */}
          <div className='flex flex-col'>
            <h3 className='text-[18px] mb-[10px]'>Cars By City</h3>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Cars in Karachi </Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Cars in Lahore</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Cars in Islamabad</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Cars in Rawalpindi</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Cars in Peshawar</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Cars in Faisalabad</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Cars in Multan</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Cars in Gujranwala</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Cars in Sialkot</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Cars in Sargodha</Link>
          </div>

          {/* 3 */}
          <div className='flex flex-col'>
            <h3 className='text-[18px] mb-[10px]'>Explore PakWheels</h3>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Used Cars</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Used Bikes</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>New Cars</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Auto Parts & Accessories</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Cool Rides</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Forums</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Autoshow</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Sitemap</Link>
          </div>

          {/* 4 */}
          <div className='flex flex-col'>
            <h3 className='text-[18px] mb-[10px]'>PakWheels.com</h3>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>About PakWheels.com</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Our Products</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Advertise With Us</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>How To Pay</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>FAQs</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Refunds & Returns</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Careers</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Contact Us</Link>
          </div>

          {/* 5 */}
          <div className='flex flex-col'>
            <h3 className='text-[18px] mb-[10px]'>Sell On PakWheels</h3>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Sell Your Car</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Sell Your Bike</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Sell Accessory</Link>
            <h3 className='text-[18px] mt-[10px]'>Sell On PakWheels</h3>
            <div className='flex justify-center items-center'>
              <input type="email" placeholder='name@email.com' className='bg-white p-[10px] border-none outline-none text-black'/>
              <button type='button' className='p-[10px] font-semibold bg-green-500 hover:bg-green-700 duration-300 hover:duration-300'>Subscribe</button>
            </div>
            <h3 className='text-[18px] mt-[10px]'>Follow Us</h3>
            <div className='flex justify-start items-center gap-[10px]'>

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
        </div>
      </div>

      {/* Section 17 */}
      <div className='px-[250px] py-[50px] bg-[#23292F] text-white border-b-[1px] border-gray-600'>
        <div className='flex justify-between w-full'>

          {/* 1 */}
          <div className='flex flex-col'>
            <h3 className='text-[18px] mb-[10px]'>Cars By Category</h3>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Jeep</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Japanese Cars</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Imported Cars</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Automatic Cars</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Low Priced Cars</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>4x4 Cars</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>660cc Cars</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>1000cc Cars</Link>
          </div>

          {/* 2 */}
          <div className='flex flex-col'>
            <h3 className='text-[18px] mb-[10px]'>Cars By Body Type</h3>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Hatchback</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Sedan</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>SUV</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Crossover</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Mini Van</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Van</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>MPV</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Compact SUV</Link>
          </div>

          {/* 3 */}
          <div className='flex flex-col'>
            <h3 className='text-[18px] mb-[10px]'>Cars by Color</h3>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>White Cars</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Silver Bikes</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Black Cars</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Grey Cars</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Blue Cars</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Red Cars</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Green Cars</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Gold Cars</Link>
          </div>

          {/* 4 */}
          <div className='flex flex-col'>
            <h3 className='text-[18px] mb-[10px]'>Cars by Province</h3>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Cars in Punjab</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Cars in Sindh</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Cars in KPK</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Cars in Balochistan</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Cars in Azad Kashmir</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Cars in Federally Administered</Link>
            <Link href='' className='text-gray-400 text-[13px] hover:underline'>Tribal Areas</Link>
          </div>

          {/* 5 */}
          <div className='flex flex-col'>
            <h3 className='text-[18px] mb-[10px]'>Download Mobile Apps</h3>
            <div className='flex flex-col justify-start items-center gap-[10px] '>

              {/* 1.1 */}
              <Link href='' className='flex justify-start items-center gap-[5px] bg-black text-white px-[10px] py-[5px] rounded-[10px]'>
                <FontAwesomeIcon icon={faGooglePlay} className='size-[30px]'/>
                <div>
                  <p className='text-[10px]'>GET IT ON</p>
                  <p className='text-[14px]'>Google Play</p>
                </div>
              </Link>

              {/* 1.2 */}
              <Link href='' className='flex justify-start items-center gap-[5px] bg-black text-white px-[10px] py-[5px] rounded-[10px]'>
                <FontAwesomeIcon icon={faApple} className='size-[30px]'/>
                <div>
                  <p className='text-[10px]'>Download on the</p>
                  <p className='text-[14px]'>App Store</p>
                </div>
              </Link>

              {/* 1.3 */}
              <Link href='' className='flex justify-start items-center gap-[5px] bg-black text-white px-[15px] py-[5px] rounded-[10px]'>
                <FontAwesomeIcon icon={faIntercom} className='size-[30px] text-red-900 bg-white'/>
                <div>
                  <p className='text-[10px]'>EXPLORE IT ON</p>
                  <p className='text-[14px]'>AppGallery</p>
                </div>
              </Link>
            </div>
          </div>

          
        </div>
      </div>





    </div>
  )
}

export default Home