import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className='px-[150px] '>
      
      {/* Section 1 */}
      <div className='flex justify-around py-[100px]'>

        {/* Left */}
        <div className='w-[50%]'>
          <h1 className='font-[500] text-[60px] dm-sans leading-[58.32px] tracking-[-3%]'>Hello, I&apos;m <br /> Mehmet Akif.</h1>
        </div>

        {/* Right */}
        <div className='w-[50%] mt-[70px]'>
          <p className='text-[32px] font-[400] dm-sans leading-[37.44px]'>A senior-year design student who trying to specialize in 3D modeling & texturing.</p>
        </div>
      </div>

      {/* Arrow */}
      <div className='py-[100px]'>
        <Image src='/images/arrow.png' width={40} height={40} alt='Arrow Down' />
      </div>

      {/* Projects Section */}

      {/* 1 */}
      <div className='flex justify-around gap-[50px] py-[100px] border-black border-b-[3px]'>

        {/* Left */}
        <div className='w-[50%] flex flex-col gap-5 inter'>
          <h2 className='text-[18px] font-[500]'>01/PROJECT NAME</h2>
          <h3 className='leading-[21.87px] text-[18px] font-[400] '>Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.</h3>
          <p className='text-[14px] leading-[17.01px] font-[400]'>Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.</p>
          <a href="" className='mt-[160px] flex items-center gap-3 border-black border-b-[2px] w-[235px]'>More shots from this poject <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='size-[15px]' /></a>
        </div>

        {/* Right */}
        <div className='bg-[#606060] h-[364.68px] w-[640px]'></div>

      </div>

      {/* 2 */}
      <div className='flex justify-around gap-[50px] py-[100px] border-black border-b-[3px]'>

        {/* Left */}
        <div className='w-[50%] flex flex-col gap-5 inter'>
          <h2 className='text-[18px] font-[500]'>02/PROJECT NAME</h2>
          <h3 className='leading-[21.87px] text-[18px] font-[400] '>Subsurface weight, specular roughness, diffuse maps generated with the procedure and manual techniques.</h3>
          <a href="" className='mt-[210px] flex items-center gap-3 border-black border-b-[2px] w-[144px]'>See case study <FontAwesomeIcon icon={faArrowRight} className='size-[15px]' /></a>
        </div>

        {/* Right */}
        <div className='bg-[#606060] h-[364.68px] w-[640px]'></div>

      </div>

      {/* 3 */}
      <div className='flex justify-around gap-[50px] py-[100px] border-black border-b-[3px]'>

        {/* Left */}
        <div className='w-[50%] flex flex-col gap-5 inter'>
          <h2 className='text-[18px] font-[500]'>03/PROJECT NAME</h2>
          <h3 className='leading-[21.87px] text-[18px] font-[400] '>Experimental creature modeling for school project.</h3>
          <p className='mt-[230px] border-[#606060] border-b-[2px] w-[90px]'>Project WIP</p>
        </div>

        {/* Right */}
        <div className='bg-[#606060] h-[364.68px] w-[640px]'></div>

      </div>




    </div>
  )
}

export default Home