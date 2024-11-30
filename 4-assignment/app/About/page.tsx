import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='px-[150px]'>
        
        {/* Section 1 */}
        <div className='py-[100px] flex justify-around'>

            {/* Left */}
            <div className='w-[50%] flex flex-col gap-5'>
              <h1 className='text-[60px] font-[500] dm-sans leading-[
              8.32px] '>Hi I&apos;m Mehmet Akif Karasu, 3D artist & sculptor.</h1>
              <p className='leading-[37.44px] dm-sans font-[400] text-[32px]'>My work is mainly focused on third-dimension modeling, texturing and rendering. I like exploring the creatures with a touch of dark surrealism for characters and production.</p>
              <p className='leading-[37.44px] dm-sans font-[400] text-[32px]'>Now I&apos;m an interactive media design student in Istanbul ⏤ currently freelancing and seeking internship opportunities.</p>
            </div>

            {/* Right */}
            <div className='w-[50%]'>
              <Image src='/images/Profile Photo.png' width={421} height={590} alt='Profile Photo' />
            </div>
        </div>
    </div>
  )
}

export default About