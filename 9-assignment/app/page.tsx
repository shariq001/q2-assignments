import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


const Home = () => {
  return (
    <div>
      {/* Section 1 */}
      <div className='bg-cyan-50 xl:p-[100px] sm:px-[16px] sm:py-[80px] flex xl:flex-row sm:flex-col justify-between sm:justify-center sm:gap-[50px] items-center'>
        {/* Left */}
        <div className='flex flex-col xl:w-[651px] gap-[20px]'>
          <h2 className='xl:text-[24px] sm:text-[18px] text-[#457B9D]'>Hi Everyone, I am</h2>
          <h1 className='xl:text-[48px] sm:text-[28px] font-[700]'>Rizfan Herlaya</h1>
          <p className='xl:text-[20px] leading-[25.2px]'>Lorem ipsum dolor sit amet consectetur. Vitae maecenas pellentesque tellus tempus purus integer nisi cras fermentum.</p>
          <div className='flex xl:flex-row sm:flex-col gap-[30px] xl:items-center' >
            <Button className='bg-[#457b9d] text-[20px] py-[20px] px-[30px] shadow-md shadow-gray-500 hover:bg-cyan-50 duration-300 hover:text-[#457b9d] hover:border-[#457b9d] hover:border-[1px] hover:duration-300'>Download CV <FontAwesomeIcon icon={faCloudArrowDown} className='mt-[-3px] ml-2' /></Button>
            <Button className='text-[#457B9D] bg-cyan-50 border-[#457B9D] border-[1px] py-[20px] px-[50px] hover:bg-[#457b9d] hover:text-white duration-300 hover:duration-300'>Explore More</Button>
          </div>
        </div>

        {/* Right */}
        <div className='xl:w-[470px] sm:w-[343px] h-[390px] bg-[#457b9d] rounded-[40px] shadow-md shadow-gray-500 relative'>
          <Image src='/images/My project-1 (1) 2.png' width={405} height={424.76} className='absolute   sm:w-[343px] sm:h-[400px] sm:top-[-10px] xl:w-[405px] xl:h-[424.76px] xl:top-[-34px] xl:left-[50px]' alt='My Pic'/>
        </div>
      </div>

      {/* Section 2 */}

      <div className='xl:p-[100px] sm:px-[16px] sm:py-[80px] flex xl:flex-row sm:flex-col justify-between gap-[50px] items-center'>
        {/* Left */}
        <div className='xl:w-[500px] xl:h-[500px] '>
          <Image src='/images/Code typing-amico 1.png' width={500} height={500} alt='Person coding on computer' className='xl:w-[500px] xl:h-[500px] sm:w-[343px] sm:h-[400px]'/>
        </div>

        {/* Right */}
        <div className='xl:w-[564px] flex flex-col gap-[20px]'>
          <h2 className='xl:text-[24px] sm:text-[20px] text-[#457B9D] font-bold'>About</h2>
          <h1 className='xl:text-[48px] sm:text-[30px] font-[700]'>About Me?</h1>
          <p className='xl:text-[20px] leading-[25.2px] text-[#455A64]'>Lorem ipsum dolor sit amet consectetur. Iaculis diam augue a adipiscing non aliquet. Leo semper lacus fringilla consectetur cras ac ullamcorper ut. Risus nunc diam accumsan feugiat. Tristique diam consectetur aliquam vitae suspendisse vel leo. Nec quisque senectus laoreet id pulvinar id vulputate. Montes consectetur diam non aliquam nunc maecenas non. Molestie pretium amet id dictum vitae nam vel sit. Rhoncus massa velit ut amet massa morbi eget.</p>
        </div>
      </div>

      {/* Section 3 */}

      <div className='bg-cyan-50 xl:p-[100px] sm:px-[16px] sm:py-[80px] flex flex-col gap-[20px] items-center'>
        <h2 className='xl:text-[24px] sm:text-[20px] text-[#457B9D] font-bold'>Skills</h2>
        <h1 className='xl:text-[48px] sm:text-[30px] font-[700]'>What I am capable of?</h1>
        <ul className='flex xl:flex-row sm:flex-col justify-center gap-[30px] items-center'>
          <li><Image src='/images/logo_html 1.png' width={102} height={107} alt='HTML' /></li>
          <li><Image src='/images/CSS-Logo 1.png' width={102} height={107} alt='HTML' /></li>
          <li><Image src='/images/bootstrap-logo 1.png' width={102} height={107} alt='HTML' /></li>
          <li><Image src='/images/tailwindcss-logo 1.png' width={102} height={107} alt='HTML' /></li>
          <li><Image src='/images/php_PNG31 1.png' width={102} height={107} alt='HTML' /></li>
          <li><Image src='/images/laravel-logo 1.png' width={102} height={107} alt='HTML' /></li>
        </ul>
      </div>

      {/* Section 4 */}

      <div className='xl:py-[100px] xl:px-[180px] sm:px-[16px] sm:py-[80px] flex flex-col gap-[20px] items-center'>
        <h2 className='xl:text-[24px] sm:text-[20px] text-[#457B9D] font-bold'>Projects</h2>
        <h1 className='xl:text-[48px] sm:text-[30px] font-[700]'>What I have made?</h1>
        <div className='flex justify-around gap-[20px] flex-wrap'>

          {/* 1 */}
          <div className='flex flex-col gap-[10px] shadow-md shadow-gray-600 rounded-t-[10px] rounded-b-[10px]'>
            <Image src='/images/image 1.png' width={363} height={196} alt='project1' className='rounded-t-[10px]' />
            <div className='ml-4 p-3'>
              <p className="text-[20px] font-bold">Portfolio Website Design</p>
              <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur.</p>
              <a href="" className='text-[#457b9d]'>Figma</a>
            </div>
          </div>

          {/* 2 */}
          <div className='flex flex-col gap-[10px] shadow-md shadow-gray-600 rounded-t-[10px] rounded-b-[10px]'>
            <Image src='/images/image 1 (1).png' width={363} height={196} alt='project1' className='rounded-t-[10px]' />
            <div className='ml-4 p-3'>
              <p className="text-[20px] font-bold">LitterCycle Exchange</p>
              <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur.</p>
              <ul className='flex text-[#457b9d] gap-2.5'>
                <li>Live View</li>
                <li>Github</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>

          {/* 3 */}
          <div className='flex flex-col gap-[10px] shadow-md shadow-gray-600 rounded-t-[10px] rounded-b-[10px]'>
            <Image src='/images/image 1 (2).png' width={363} height={196} alt='project1' className='rounded-t-[10px]' />
            <div className='ml-4 p-3'>
              <p className="text-[20px] font-bold">Edubix</p>
              <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur.</p>
              <ul className='flex text-[#457b9d] gap-2.5'>
                <li>Live View</li>
                <li>Github</li>
              </ul>
            </div>
          </div>

          {/* 4 */}
          <div className='flex flex-col gap-[10px] shadow-md shadow-gray-600 rounded-t-[10px] rounded-b-[10px]'>
            <Image src='/images/image 1 (3).png' width={363} height={196} alt='project1' className='rounded-t-[10px]' />
            <div className='ml-4 p-3'>
              <p className="text-[20px] font-bold">PPDB SMK Telesandi Bekasi</p>
              <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur.</p>
              <ul className='flex text-[#457b9d] gap-2.5'>
                <li>Live View</li>
              </ul>
            </div>
          </div>

          {/* 5 */}
          <div className='flex flex-col gap-[10px] shadow-md shadow-gray-600 rounded-t-[10px] rounded-b-[10px]'>
            <Image src='/images/image 1 (3).png' width={363} height={196} alt='project1' className='rounded-t-[10px]' />
            <div className='ml-4 p-3'>
              <p className="text-[20px] font-bold">PPDB SMK Telesandi Bekasi</p>
              <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur.</p>
              <ul className='flex text-[#457b9d] gap-2.5'>
                <li>Live View</li>
              </ul>
            </div>
          </div>

          {/* 6 */}
          <div className='flex flex-col gap-[10px] shadow-md shadow-gray-600 rounded-t-[10px] rounded-b-[10px]'>
            <Image src='/images/image 1 (3).png' width={363} height={196} alt='project1' className='rounded-t-[10px]' />
            <div className='ml-4 p-3'>
              <p className="text-[20px] font-bold">PPDB SMK Telesandi Bekasi</p>
              <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur.</p>
              <ul className='flex text-[#457b9d] gap-2.5'>
                <li>Live View</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Section 6 */}
      <div className='bg-cyan-50 xl:p-[100px] sm:px-[16px] sm:py-[80px] flex flex-col gap-[0px] items-start'>
        <h2 className='xl:text-[24px] sm:text-[20px] text-[#457B9D] font-bold'>Contacts</h2>
        <h1 className='xl:text-[48px] sm:text-[30px] font-[700]'>Get in touch</h1>
        <p className='xl:text-[20px]'>rizfanher@gmail.com</p>
        <ul className='flex justify-start mt-2 gap-[10px] items-center'>
          <li><FontAwesomeIcon icon={faLinkedin} size='lg' width={50} height={30} className='text-[#457b9d]'/></li>
          <li><FontAwesomeIcon icon={faGithub} size='lg' width={50} height={30} className='text-[#457b9d]'/></li>
          <li><FontAwesomeIcon icon={faInstagram} size='lg' width={50} height={30} className='text-[#457b9d]'/></li>
        </ul>
      </div>


    </div>
  )
}

export default Home