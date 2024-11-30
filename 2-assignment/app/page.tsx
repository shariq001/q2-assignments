import React from 'react'
import Image from 'next/image'


const Home = () => {
  return (
    <div className='relative w-full p-[100px]'>
      
      <div className="bg-[url(/background.jpg)] absolute inset-0 bg-cover bg-center opacity-30">
      </div>

      <div className="relative flex justify-around items-center h-full mx-[150px]">
        <div className='w-[50%] flex flex-col gap-4'>
          <h1 className="text-[60px] font-extrabold text-[#03346E] leading-[55px]">Governor Sindh <br /> <span className='font-normal text-[45px]'>Kamran Khan Tessori</span></h1>
          <h1 className='text-[40px] font-extrabold text-[#3DC2EC] leading-[45px]'>Certified Cloud <br /> Applied Generative <br /> AI Engineer (GenEng)</h1>
          <p className='text-[#03346e] font-extrabold text-[25px]'>Earn up to $5,000 / month</p>
          <p className='text-[#03346e] font-extrabold text-[25px]'>Now admissions are open in Hyderabad</p>
          <div className='flex gap-10 items-center'>
            <button type='button' className='w-[150px] px-[30px] bg-[#03346e] font-bold py-[30px] '>APPLY NOW</button>
            <p className='text-[#03346e] font-extrabold text-[25px] flex flex-col items-center'>562,143 <span className='text-[10px] font-normal'>Accepted Applications</span></p>
          </div>
        </div>

        <div className='w-[50%]'>
          <Image src='/kamran.png' width={900} height={900} alt='Kamran Tessori' />
        </div>
      </div>
    </div>
  )
}

export default Home