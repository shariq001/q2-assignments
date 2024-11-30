import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const About = () => {
  return (
    <div className='px-[150px]'>
        
        {/* Section 1 */}
        <div className='flex justify-between py-[100px]'>

            {/* Left */}
            <div className='w-[50%] dm-sans flex flex-col gap-7'>
                <h1 className='text-[60px] font-[500] leading-[58.32px] mb-[10px]'>Hi I&apos;m Mehmet Akif Karasu, 3D artist & sculptor.</h1>
                
                <p className='text-[32px] font-[400] leading-[37.44px]'>My work is mainly focused on third-dimension modeling, texturing and rendering. I like exploring the creatures with a touch of dark surrealism for characters and production.</p>
                <p className='text-[32px] font-[400] leading-[37.44px]'>Now I&apos;m an interactive media design student in Istanbul ⏤ currently freelancing and seeking internship opportunities.</p>
            </div>

            {/* Right */}
            <div className='bg-[#606060] w-[421px] h-[590px]'>
                <Image src='/images/Profile Photo.png' alt='Profile Photo' width={421} height={590} />
            </div>
        </div>

        {/* Section 2 */}
        <div className='py-[100px] w-[58%] flex flex-col gap-[70px] '>

           {/* First */}
           <div className='flex justify-between'>
                {/* Left */}
                <div className='w-[20%]'>
                    <h2 className='text-[18px] inter font-[500] underline'>Main Software</h2>
                </div>

                {/* Right */}
                <div className='w-[55%] flex flex-col gap-8'>
                    <h3 className='text-[18px] inter font-[400]'>Pixologic ZBrush, Autodesk Maya, The Foundry Mari, Arnold Renderer, Bleder, Forger</h3>
                    <h3 className='text-[18px] inter font-[400]'>Adobe CC, Figma, Ableton</h3>
                </div>
           </div>

           {/* Second */}
           <div className='flex justify-between'>
                {/* Left */}
                <div className='w-[20%]'>
                    <h2 className='text-[18px] inter font-[500] underline'>Main Skills</h2>
                </div>

                {/* Right */}
                <div className='w-[55%] '>
                    <h3 className='text-[18px] inter font-[400]'>Organic and Polygonal Modeling, UV Layout, Texturing, Retopology, Ilustration, Sound Design</h3>
                </div>
           </div>
        </div>

        {/* Section 3 */}
        <div className='py-[100px] flex justify-between gap-[200px] border-black border-t-[3px]'>
            <h2 className='w-[50%] text-[32px] font-[400] dm-sans '>I am thrilled to answer to your next project <FontAwesomeIcon icon={faArrowRight} className='size-[30px] inline-flex items-center' /></h2>
            <div className='w-[50%] text-[32px] font-[400] dm-sans'>
                <h2>makifkarasu@outlook.com</h2>
                <Link href='' className='text-[18px] inter font-[400]'>View Resume</Link>
            </div>
        </div>
    </div>
  )
}

export default About