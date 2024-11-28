import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='text-white flex items-end justify-center bg-gradient-to-r from-[#050A24] via-[#2D55FB] to-[#050A24] h-[347.5px] w-[100%]'>
        <a href="/Login" className='bg-[#000] text-white py-[20px] px-[100px] m-[30px] rounded-[10px] duration-700 hover:px-[150px] hover:duration-700'>Login</a>
      </div>
<hr />
      <div className='text-white flex items-start justify-center bg-gradient-to-r from-[#000] to-[#fff] h-[347px] w-[100%]'>
        <a href="/Signup" className='bg-[#000] text-white py-[20px] px-[90px] m-[30px] rounded-[10px] duration-700 hover:px-[150px] hover:duration-700'>Register</a>
      </div>
    </div>
  )
}

export default Home