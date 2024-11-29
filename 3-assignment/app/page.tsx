import React from 'react'

const Home = () => {
  return (
    <div className='bg-gradient-to-r from-[#050A24] via-[#2D55FB] to-[#050A24] flex flex-col justify-center items-center p-[100px] h-screen'>
      <a href="/Login" className='bg-black m-[30px] text-white py-[20px] px-[100px] rounded-[10px] duration-700 hover:px-[150px] hover:duration-700'>Login</a>
      <a href="/Signup" className='bg-black m-[30px] text-white py-[20px] px-[95px] rounded-[10px] duration-700 hover:px-[150px] hover:duration-700'>Signup</a>
    </div>
  )
}

export default Home