import React from 'react'

const Home = () => {
  return (
    <div className='bg-[url(/images/back.png)] bg-center bg-cover'>
      <div className='bg-white/70 flex justify-around items-center'>
        
        {/* Left */}
        <div className='p-[100px] w-[50%] flex flex-col gap-[20px]'>
          <h1 className='text-[64px] leading-[65%] text-[#044E83] font-bold tracking-[6px]'>Governor Sindh <br /> <span className='font-normal tracking-[4px] text-[40px]'>Kamran Khan Tessori</span></h1>
          <h2 className='text-[#2EB6E8] text-[40px] font-bold leading-[50px]'>Certified Cloud Applied Generative AI Engineer (GenEng)</h2>
        </div>
      </div>
    </div>
  )
}

export default Home