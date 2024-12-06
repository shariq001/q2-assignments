import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <div className='bg-[url(/images/back.png)] bg-center bg-cover'>
      <div className='bg-white/70 flex justify-around items-center'>
        
        {/* Left */}
        <div className='p-[100px] w-[50%] flex flex-col gap-[20px]'>
          <h1 className='text-[60px] leading-[65%] text-[#044E83] font-extrabold tracking-[6px]'>Governor Sindh <br /> <span className='font-normal tracking-[4px] text-[40px]'>Kamran Khan Tessori</span></h1>
          <h2 className='text-[#2EB6E8] text-[40px] font-bold leading-[50px]'>Certified Cloud Applied Generative AI Engineer (GenEng)</h2>
          <p className='text-[#044e83] font-extrabold text-[20px]'>Earn up to $5,000 / month</p>
          <p className='text-[#044e83] font-extrabold text-[20px]'>Now admissions are open in Hyderabad</p>
          <div className='flex justify-start gap-[50px] items-center'>
            <button type='button' className='bg-[#044e83] text-white font-extrabold py-[16px] px-[30px] text-[15px] rounded-[5px]'>APPLY NOW</button>
            <div className='flex flex-col justify-center items-center font-extrabold text-[#044e83] text-[25px]'>
              <p>562,143</p>
              <p className='text-[15px] font-normal'>Accepted Applications</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className='w-[50%]'>
          <Image src='/images/kamran.png' width={700} height={500} alt='Kamran Khan Tessori' />
        </div>
      </div>
    </div>
  )
}

export default Home