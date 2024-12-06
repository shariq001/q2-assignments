"use client"
import React from 'react'
import Image from 'next/image'

import { useState } from 'react'

const Cart = () => {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if(count > 0) {
      setCount(count - 1)
    }
   
  }

  return (
    <div className='flex justify-center items-center h-screen bg-yellow-500'>
      <div className='w-[300px] h-[400px] work p-[30px] bg-white rounded-[15px] flex justify-center gap-[20px] items-center px-[10px] flex-col'>
        <div className='bg-[#CE8F21] w-[250px] h-[144px] flex justify-center items-center rounded-[15px] relative'>
          <Image src='/images/Yellow Shoe.png' width={200.24} height={100.79} alt='Yellow Shoe' />
          <div className='bg-gray-400 absolute w-[40px] h-[40px] rounded-[50px] top-[-15px] right-[-10px] flex justify-center items-center'>
            <p className='text-[20px]'>{count}</p>
          </div>
        </div>
        <h1 className='text-[25px] font-bold'>Air Max 97 <br /> <span className='font-normal'>$20.18</span></h1>
        <div className='border-black border-[1px] rounded-[20px] w-[250px] h-[70px] flex justify-center gap-[20px] items-center'>
          <button type='button' onClick={decrement} className='text-[#cea10d] text-[50px]'>-</button>
          <p className='border-gray-400 rounded-[10px] border-[1px] flex justify-center items-center text-[20px] p-[10px]'>{count}</p>
          <button type='button' onClick={increment} className='text-[#cea10d] text-[50px]'>+</button>
        </div>
      </div>
    </div>
  )
}

export default Cart