import React from 'react'

const Home = () => {
  return (
    <div className='bg-gradient-to-b from-[#050A24] via-[#0B2F9F] to-[#050A24] flex justify-center items-center p-[100px] h-screen'>
      <a href="/Login" className='bg-black m-[30px] text-white py-[20px] px-[100px] rounded-[50px] duration-700 hover:px-[150px] hover:duration-700 yuji'>Login</a>
      <a href="/Signup" className='bg-black m-[30px] text-white py-[20px] px-[95px] rounded-[50px] duration-700 hover:px-[150px] hover:duration-700 yuji'>Signup</a>
    </div>
  )
}

export default Home