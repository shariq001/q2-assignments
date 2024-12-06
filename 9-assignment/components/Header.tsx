import React from 'react'

export const Header = () => {
  return (
    <nav className='bg-cyan-50 flex justify-around items-center p-[30px] border-b-[1px] border-gray-400 py-[20px]'>
        <h1 className='text-[30px] font-[700]'>Rizfan</h1>
        <ul className='flex justify-center gap-[50px] text-[25px] text-gray-500'>
            <li>Home</li>
            <li>About</li>
            <li>Skill</li>
            <li>Project</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}
