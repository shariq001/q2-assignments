import React from 'react'

const Login = () => {
  return (
    <div className='flex justify-center items-center bg-gradient-to-r from-[#050A24] via-[#2D55FB] to-[#050A24]'>
        <div className='w-[540px] h-[456px] bg-white m-[119.5px] flex flex-col justify-center items-center rounded-[20px]'>
            <h1 className='poppins text-[28px] font-semibold'>Login to your account</h1>
            <br />
            <form action="" className='flex justify-center items-center flex-col'>
            <p className='text-[16px] mb-[10px]'>Email</p>
            <input type="email" required placeholder='Enter your email' className='w-[70%]  border-[#d0d5dd] border-[1px] py-[8px] px-[10px] rounded-[10px] mb-[10px]'/>

            <p className='text-[16px] mb-[10px]'>Password</p>
            <input type="password" required placeholder='Enter your password' className='w-[70%]  border-[#d0d5dd] border-[1px] py-[8px] px-[10px] rounded-[10px]'/>

            <button type='submit' className='bg-[#1570EF] text-white py-[15px] px-[80px] m-[30px] rounded-[10px] font-semibold duration-700 hover:px-[110px] hover:duration-700'>Login now</button>
            </form>

            <div className='flex gap-5'>
                <p className='text-[16px] text-[#98A2B3]'>Don&apos;t Have An Account?</p>
                <a href="/Signup" className='text-[#1570EF] text-[16px] underline'>Sign up</a>
            </div>
        </div>
    </div>
  )
}

export default Login