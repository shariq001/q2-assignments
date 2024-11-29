import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Signup = () => {
  return (
    <div className='bg-[url(/bg.png)] bg-cover bg-no-repeat bg-center h-[695px] flex justify-center items-center'>
        <div className='backdrop-blur-[100px] w-[540px] h-[564px] rounded-[20px] flex flex-col justify-center items-center border-[#70707B] border-[1px]  text-white'>
            <h1 className='poppins text-[28px] font-semibold mb-[15px]'>Create an account</h1>
            <div className='flex justify-center items-center gap-2'>
              <button type='button' className='flex items-center gap-2 bg-[#26272B] text-[#A0A0AB] font-semibold py-[10px] px-[30px] rounded-[5px]'><FontAwesomeIcon icon={faGoogle} className='size-[15px] text-[#fff]' />Google</button>
              <button type='button' className='flex items-center gap-2 bg-[#26272B] text-[#A0A0AB] font-semibold py-[10px] px-[24px] rounded-[5px]'><FontAwesomeIcon icon={faFacebook} className='size-[15px] text-[#fff]' />Facebook</button>
            </div>
            <p className='text-[#70707B] font-semibold mb-3'>Or</p>

            <form action="" className='flex justify-center items-center flex-col'>
            <p className='text-[16px] mb-[10px]'>Email</p>
            <input type="email" required placeholder='Enter your email' className='bg-transparent w-[70%]  border-[#3F3F46] border-[1px] py-[8px] px-[10px] rounded-[10px] mb-[10px]'/>

            <p className='text-[16px] mb-[10px]'>Password</p>
            <input type="password" required placeholder='Enter your password' className='bg-transparent w-[70%]  border-[#3F3F46] border-[1px] py-[8px] px-[10px] rounded-[10px]'/>

            <button type='submit' className='bg-[#1570EF] text-white py-[15px] px-[80px] m-[30px] rounded-[10px] font-semibold duration-700 hover:px-[110px] hover:duration-700'>Create account</button>
            </form>

            <div className='flex gap-5'>
                <p className='text-[16px] text-[#98A2B3]'>Already Have an Account?</p>
                <a href="/Login" className='text-[#A0A0AB] text-[16px] underline'>Login in</a>
            </div>
        </div>
    </div>
  )
}

export default Signup