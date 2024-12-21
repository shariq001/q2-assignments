import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const About = () => {
  return (
    <div className='xl:px-[150px] sm:px-[20px] xl:min-w-[1440px] sm:min-w-[375px]'>
        
        {/* Section 1 */}
        <div className='flex xl:flex-row xl:justify-between xl:items-start py-[100px] sm:flex-col sm:py-[50px] sm:justify-start sm:items-center'>

            {/* Left */}
            <div className='xl:max-w-[400px] dm-sans flex flex-col gap-7 sm:min-w-[343px] sm:max-w-[400px]'>
                <h1 className='xl:text-[60px] sm:text-[47px] font-[500] leading-[58.32px] mb-[10px]'>Hi I&apos;m Mehmet Akif Karasu, 3D artist & sculptor.</h1>
                
                <p className='xl:text-[32px] sm:text-[28px] font-[400] leading-[37.44px]'>My work is mainly focused on third-dimension modeling, texturing and rendering. I like exploring the creatures with a touch of dark surrealism for characters and production.</p>
                <p className='xl:text-[32px] sm:text-[28px] font-[400] leading-[37.44px]'>Now I&apos;m an interactive media design student in Istanbul ⏤ currently freelancing and seeking internship opportunities.</p>
            </div>

            {/* Right */}
            <div className='bg-[#606060] xl:max-w-[421px] xl:h-[590px] sm:min-w-[343px] sm:max-w-[400px]'>
                <Image src='/images/Profile Photo.png' alt='Profile Photo' width={421} height={590} className='xl:max-w-[421px] xl:h-[590px] sm:min-w-[343px] sm:max-w-[400px] '/>
            </div>
        </div>

        {/* Section 2 */}
        <div className='xl:py-[100px] xl:max-w-[58%] sm:min-w-[343px] sm:max-[400px] flex flex-col gap-[70px] sm:py-[50px]'>

           {/* First */}
           <div className='flex xl:flex-row sm:flex-col sm:gap-[30px] justify-between'>
                {/* Left */}
                <div className='xl:w-[20%]'>
                    <h2 className='text-[18px] inter font-[500] underline'>Main Software</h2>
                </div>

                {/* Right */}
                <div className='xl:w-[55%] flex flex-col gap-8'>
                    <h3 className='text-[18px] inter font-[400]'>Pixologic ZBrush, Autodesk Maya, The Foundry Mari, Arnold Renderer, Bleder, Forger</h3>
                    <h3 className='text-[18px] inter font-[400]'>Adobe CC, Figma, Ableton</h3>
                </div>
           </div>

           {/* Second */}
           <div className='flex xl:flex-row sm:flex-col sm:gap-[30px] justify-between'>
                {/* Left */}
                <div className='xl:w-[20%]'>
                    <h2 className='text-[18px] inter font-[500] underline'>Main Skills</h2>
                </div>

                {/* Right */}
                <div className='xl:w-[55%] '>
                    <h3 className='text-[18px] inter font-[400]'>Organic and Polygonal Modeling, UV Layout, Texturing, Retopology, Ilustration, Sound Design</h3>
                </div>
           </div>
        </div>

        {/* Section 3 */}
        <div className='xl:py-[100px] sm:py-[50px] flex xl:flex-row sm:flex-col sm:gap-[30px] justify-between gap-[200px] border-black border-t-[3px]'>
            <h2 className='xl:w-[40%] xl:text-[32px] sm:text-[28px] font-[400] dm-sans '>I am thrilled to answer to your next project <FontAwesomeIcon icon={faArrowRight} className='xl:size-[30px] sm:size-[25px] inline-flex items-center' /></h2>
            <div className='xl:w-[50%] xl:text-[32px] sm:text-[28px] font-[400] dm-sans'>
                <h2>makifkarasu@outlook.com</h2>
                <Link href='' className='text-[18px] inter font-[400]'>View Resume</Link>
            </div>
        </div>
    </div>
  )
}

export default About