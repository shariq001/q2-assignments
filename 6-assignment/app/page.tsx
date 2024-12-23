import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import {  faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <div className='2xl:w-[1550px] sm:w-[320px]'>
      
      {/* Section 1 */}
      <div className='2xl:p-[100px] flex 2xl:flex-row justify-between items-center bg-[#043873] text-white sm:px-[16px] sm:py-[80px] sm:flex-col sm:justify-center sm:gap-[50px]'>

        {/* Left */}
        <div className='flex flex-col items-start gap-[20px] sm:items-center inter 2xl:w-[656px]'>
          <h1 className='text-[64px] leading-[77.45px] font-[700] sm:text-[36px] sm:text-center sm:leading-[43.57px]'>Get More Done with whitepace</h1>
          <p className='text-[18px] leading-[30px] sm:text-center'>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
          <button type='button' className='px-[24px] py-[16px] bg-[#4F9CF9] text-[#fff] font-[500] rounded-[8px] w-[221px]'>Try Whitepace free <FontAwesomeIcon icon={faArrowRight} className='size-[12px] inline-flex ml-[10px]' /></button>
        </div>

        {/* Right */}
        <div className='bg-[#C4DEFD] 2xl:w-[824px] 2xl:h-[549px] sm:w-[286px] sm:h-[191px]'></div>
      </div>

      {/* Section 2 */}
      <div className='2xl:p-[100px] flex 2xl:flex-row justify-between items-center bg-[#fff] sm:px-[16px] sm:py-[80px] sm:flex-col sm:justify-center sm:gap-[50px]'>

        {/* Left */}
        <div className='flex flex-col items-start sm:items-center gap-[20px] inter 2xl:w-[656px]'>
          <h1 className='text-[64px] leading-[77.45px] font-[700] sm:text-[36px] sm:text-center sm:leading-[43.57px]'>Project Management</h1>
          <p className='text-[18px] leading-[30px] sm:text-center'>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
          <button type='button' className='px-[24px] py-[16px] bg-[#4F9CF9] text-[#fff] font-[500] rounded-[8px] w-[165px]'>Get Started <FontAwesomeIcon icon={faArrowRight} className='size-[12px] inline-flex ml-[10px]' /></button>
        </div>

        {/* Right */}
        <div className='bg-[#C4DEFD] 2xl:w-[748px] 2xl:h-[547px] sm:w-[286px] sm:h-[177px]'></div>
      </div>

      {/* Section 3 */}
      <div className='2xl:p-[100px] flex 2xl:flex-row justify-between items-center bg-[#fff] sm:px-[16px] sm:py-[80px] sm:flex-col-reverse sm:justify-center sm:gap-[50px]'>

        {/* Left */}
        <Image src='/images/Work Together Image.png' width={650} height={661} alt='Work Together Image' className='2xl:w-[650px] 2xl:h-[661px] sm:w-[279px] sm:h-[259.74px]'/>

        {/* Right */}
        <div className='flex flex-col items-start sm:items-center gap-[20px] inter 2xl:w-[656px]'>
          <h1 className='text-[64px] leading-[77.45px] font-[700] sm:text-[36px] sm:text-center sm:leading-[43.57px]'>Work together</h1>
          <p className='text-[18px] leading-[30px] sm:text-center'>With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.</p>
          <button type='button' className='px-[24px] py-[16px] bg-[#4F9CF9] text-[#fff] font-[500] rounded-[8px] w-[165px]'>Try it now <FontAwesomeIcon icon={faArrowRight} className='size-[12px] inline-flex ml-[10px]' /></button>
        </div>
      </div>

      {/* Section 4 */}
      <div className='2xl:p-[100px] flex 2xl:flex-row justify-between items-center bg-[#043873] text-white sm:px-[16px] sm:py-[80px] sm:flex-col sm:justify-center sm:gap-[50px] '>

        {/* Left */}
        <div className='flex flex-col items-start sm:items-center gap-[20px] inter 2xl:w-[640px]'>
          <h1 className='text-[64px] leading-[77.45px] font-[700] sm:text-[36px] sm:text-center sm:leading-[43.57px]'>Use as Extension</h1>
          <p className='text-[18px] leading-[30px] sm:text-center'>Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
          </p>
          <button type='button' className='px-[24px] py-[16px] bg-[#4F9CF9] text-[#fff] font-[500] rounded-[8px] w-[221px]'>Let&apos;s Go <FontAwesomeIcon icon={faArrowRight} className='size-[12px] inline-flex ml-[10px]' /></button>
        </div>

        {/* Right */}
        <div className='bg-[#C4DEFD] 2xl:w-[686px] 2xl:h-[479px] sm:w-[284.5px] sm:h-[198.65px]'></div>
      </div>

      {/* Section 5 */}
      <div className='2xl:p-[100px] flex 2xl:flex-row justify-between items-center bg-[#fff] sm:px-[16px] sm:py-[80px] sm:flex-col sm:justify-center sm:gap-[50px]'>

        {/* Left */}
        <div className='bg-[#C4DEFD] 2xl:w-[650px] 2xl:h-[532.09px] sm:w-[288px] sm:h-[214.62px]'></div>

        {/* Right */}
        <div className='flex flex-col items-start sm:items-center gap-[20px] inter 2xl:w-[656px]'>
          <h1 className='text-[64px] leading-[77.45px] font-[700] sm:text-[36px] sm:text-center sm:leading-[43.57px]'>Customise it to <br /> your needs</h1>
          <p className='text-[18px] leading-[30px] sm:text-center'>Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
          <button type='button' className='px-[24px] py-[16px] bg-[#4F9CF9] text-[#fff] font-[500] rounded-[8px] w-[165px]'>Let&apos;s Go<FontAwesomeIcon icon={faArrowRight} className='size-[12px] inline-flex ml-[10px]' /></button>
        </div>
      </div>

      {/* Section 6 */}
      <div className='2xl:p-[100px] flex flex-col items-center text-center gap-[30px]'>
        <h1 className='text-[64px] leading-[77.45px] font-[700] sm:text-[36px] sm:text-center sm:leading-[43.57px]'>Choose Your Plan</h1>
        <p className='text-[18px] leading-[30px] 2xl:w-[979px] sm:text-center'>Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</p>
      </div>

      {/* Section 7 */}
      <div className='2xl:p-[100px] flex 2xl:flex-row justify-between items-center sm:px-[16px] sm:py-[80px] sm:flex-col sm:justify-center sm:gap-[40px]'>

        {/* 1 */}
        <div className='2xl:w-[420px] sm:w-[289px] 2xl:py-[40px] 2xl:px-[44px] sm:p-[20px] inter border-[#FFE492] border-[1px] rounded-[10px] flex flex-col gap-[25px]'>
          <h3 className='text-[24px] font-[600]'>Free</h3>
          <h2 className='font-[700] text-[36px]'>$0</h2>
          <p className='font-[500] text-[18px]'>Capture ideas and find them quickly</p>
          <p><FontAwesomeIcon icon={faCircleCheck} className='2xl:size-[15px] mr-[10px]' />Sync unlimited devices</p>
          <p><FontAwesomeIcon icon={faCircleCheck} className='2xl:size-[15px] mr-[10px]' />10 GB monthly uploads</p>
          <p><FontAwesomeIcon icon={faCircleCheck} className='2xl:size-[15px] mr-[10px]' />200 MB max. note size</p>
          <p className='flex items-center'><FontAwesomeIcon icon={faCircleCheck} className='2xl:size-[15px] mr-[10px] ' />Customize Home dashboard and access extra widgets</p>
          <p className='flex items-center'><FontAwesomeIcon icon={faCircleCheck} className='2xl:size-[15px] mr-[10px]' />Connect primary Google Calendar accound</p>
          <p className='flex items-center'><FontAwesomeIcon icon={faCircleCheck} className='2xl:size-[15px] mr-[10px]' />Add due dates, reminders, and notifications to your tasks</p>

          <button type='button' className='border-[#FFE492] border-[1px] rounded-[8px] px-[40px] py-[16px] font-[500] 2xl:w-[171px]'>Get Started</button>

        </div>

        {/* 2 */}
        <div className='bg-[#043873] text-white 2xl:w-[420px] sm:w-[289px] 2xl:py-[80px] 2xl:px-[44px] sm:p-[20px] inter rounded-[10px] flex flex-col gap-[25px]'>
          <h3 className='text-[24px] font-[600]'>Personal</h3>
          <h2 className='font-[700] text-[36px] text-[#FFE492]'>$11.99</h2>
          <p className='font-[500] text-[18px]'>Keep home and family on track</p>
          <p><FontAwesomeIcon icon={faCircleCheck} className='2xl:size-[15px] text-[#ffe492] mr-[10px]' />Sync unlimited devices</p>
          <p><FontAwesomeIcon icon={faCircleCheck} className='2xl:size-[15px] text-[#ffe492] mr-[10px]' />10 GB monthly uploads</p>
          <p><FontAwesomeIcon icon={faCircleCheck} className='2xl:size-[15px] text-[#ffe492] mr-[10px]' />200 MB max. note size</p>
          <p className='flex items-center'><FontAwesomeIcon icon={faCircleCheck} className='2xl:size-[15px] text-[#ffe492] mr-[10px] ' />Customize Home dashboard and access extra widgets</p>
          <p className='flex items-center'><FontAwesomeIcon icon={faCircleCheck} className='2xl:size-[15px] text-[#ffe492] mr-[10px]' />Connect primary Google Calendar accound</p>
          <p className='flex items-center'><FontAwesomeIcon icon={faCircleCheck} className='2xl:size-[15px] text-[#ffe492] mr-[10px]' />Add due dates, reminders, and notifications to your tasks</p>

          <button type='button' className='bg-[#4F9CF9] rounded-[8px] px-[40px] py-[16px] font-[500] 2xl:w-[171px]'>Get Started</button>

        </div>

        {/* 3 */}
        <div className='2xl:w-[420px] sm:w-[289px] 2xl:py-[40px] 2xl:px-[44px] sm:p-[20px] inter border-[#FFE492] border-[1px] rounded-[10px] flex flex-col gap-[25px]'>
          <h3 className='text-[24px] font-[600]'>Organization</h3>
          <h2 className='font-[700] text-[36px]'>$49.99</h2>
          <p className='font-[500] text-[18px]'>Capture ideas and find them quickly</p>
          <p><FontAwesomeIcon icon={faCircleCheck} className='2xl:size-[15px] mr-[10px]' />Sync unlimited devices</p>
          <p><FontAwesomeIcon icon={faCircleCheck} className='2xl:size-[15px] mr-[10px]' />10 GB monthly uploads</p>
          <p><FontAwesomeIcon icon={faCircleCheck} className='2xl:size-[15px] mr-[10px]' />200 MB max. note size</p>
          <p className='flex items-center'><FontAwesomeIcon icon={faCircleCheck} className='2xl:size-[15px] mr-[10px] ' />Customize Home dashboard and access extra widgets</p>
          <p className='flex items-center'><FontAwesomeIcon icon={faCircleCheck} className='2xl:size-[15px] mr-[10px]' />Connect primary Google Calendar accound</p>
          <p className='flex items-center'><FontAwesomeIcon icon={faCircleCheck} className='2xl:size-[15px] mr-[10px]' />Add due dates, reminders, and notifications to your tasks</p>

          <button type='button' className='border-[#FFE492] border-[1px] rounded-[8px] px-[40px] py-[16px] font-[500] 2xl:w-[171px]'>Get Started</button>

        </div>
      </div>

      {/* Section 8 */}
      <div className='bg-[#043873] text-white 2xl:p-[100px] sm:px-[16px] sm:py-[80px] flex flex-col gap-[40px] 2xl:items-center 2xl:text-center inter'>
        <h1 className='text-[64px] leading-[77.45px] font-[700] sm:text-[36px]  sm:leading-[43.57px]'>Your work, everywhere you are</h1>
        <p className='text-[18px] leading-[30px] 2xl:w-[1064px]'>Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
        <button type='button' className='px-[24px] py-[16px] bg-[#4F9CF9] text-[#fff] font-[500] rounded-[8px] w-[165px]'>Try Taskey<FontAwesomeIcon icon={faArrowRight} className='size-[12px] inline-flex ml-[10px]' /></button>
      </div>

      {/* Section 9 */}
      <div className='2xl:p-[100px] sm:px-[16px] sm:py-[80px] flex 2xl:flex-row sm:flex-col-reverse sm:justify-center sm:gap-[50px] justify-between items-center bg-[#fff]'>

        {/* Left */}
        <div className='flex flex-col items-start sm:items-center gap-[20px] inter 2xl:w-[656px]'>
          <h1 className='text-[64px] leading-[77.45px] font-[700] sm:text-[36px]  sm:leading-[43.57px] sm:text-center'>100% your data</h1>
          <p className='text-[18px] leading-[30px] sm:text-center'>The app is open source and your notes are saved to an open format, so you&apos;ll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.</p>
          <button type='button' className='px-[24px] py-[16px] bg-[#4F9CF9] text-[#fff] font-[500] rounded-[8px] w-[165px]'>Read more <FontAwesomeIcon icon={faArrowRight} className='size-[12px] inline-flex ml-[10px]' /></button>
        </div>

        {/* Right */}
        <Image src='/images/Element.png' width={681} height={381} alt='Element' className='2xl:w-[681px] 2xl:h-[381px] sm:w-[290.5px] sm:h-[162.58px]'/>
      </div>

      {/* Section 10 */}
      <div className='flex flex-col 2xl:p-[100px] sm:px-[16px] sm:py-[80px] items-center gap-[70px]'>
        <h1 className='text-[64px] leading-[77.45px] font-[700] sm:text-[36px]  sm:leading-[43.57px] sm:text-center'>Our sponsors</h1>
        <div className='w-full flex 2xl:flex-row sm:flex-col sm:justify-center sm:gap-[50px] justify-between items-center'>
          <Image src='/images/Apple.png' width={55.47} height={68} alt='Apple' />
          <Image src='/images/Microsoft.png' width={287} height={62} alt='Apple' className='2xl:w-[287px] 2xl:h-[62px] sm:w-[213px] sm:h-[46px]'/>
          <Image src='/images/Slack.png' width={280} height={71} alt='Apple' className='2xl:w-[280px] 2xl:h-[71px] sm:w-[192px] sm:h-[49px]'/>
          <Image src='/images/Google.png' width={211} height={69.81} alt='Apple' className='2xl:w-[211px] 2xl:h-[69.81px] sm:w-[139.5px] sm:h-[46.16px]'/>
        </div>
      </div>

      {/* Section 11 */}
      <div className='bg-[#043873] text-white 2xl:p-[100px] flex 2xl:flex-row justify-between items-center sm:px-[16px] sm:py-[80px] sm:flex-col sm:justify-center sm:gap-[50px]'>

        {/* Left */}
        <Image src='/images/Apps.png' width={582} height={470.8} alt='Apps' className='2xl:w-[582px] 2xl:h-[470.8px] sm:w-[286.5px] sm:h-[231.76px]'/>

        {/* Right */}
        <div className='flex flex-col items-start sm:items-center gap-[20px] inter 2xl:w-[656px]'>
          <h1 className='text-[64px] leading-[77.45px] font-[700] sm:text-[36px]  sm:leading-[43.57px] sm:text-center'>Work with Your Favorite Apps Using whitepace</h1>
          <p className='text-[18px] leading-[30px] sm:text-center'>Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.</p>
          <button type='button' className='px-[24px] py-[16px] bg-[#4F9CF9] text-[#fff] font-[500] rounded-[8px] w-[165px]'>Read more <FontAwesomeIcon icon={faArrowRight} className='size-[12px] inline-flex ml-[10px]' /></button>
        </div>
      </div>

      {/* Section 12 */}
      <div className='2xl:p-[100px] sm:px-[16px] sm:py-[80px] flex flex-col items-center gap-[60px]'>
        <h1 className='text-[64px] leading-[77.45px] font-[700] sm:text-[36px]  sm:leading-[43.57px] sm:text-center'>What Our Clients Says</h1>
        <div className='flex 2xl:flex-row sm:flex-col sm:justify-center sm:gap-[40px] justify-between items-center w-full'>

          {/* 1 */}
          <div className='2xl:w-[420px] sm:w-[288px] px-[30px] py-[60px] rounded-[10px] shadow-md shadow-gray-300 flex flex-col gap-[60px]'>

            {/* top */}
            <div className='pb-[40px] flex flex-col gap-[32px] 2xl:w-[370px] sm:w-[248px] border-b-[1px] border-[#212529]'>
              <FontAwesomeIcon icon={faQuoteLeft} className='2xl:size-[86px] sm:size-[56px] text-[#043873]' />
              <p className='text-[18px] leading-[30px]'>Whitepace is designed as a collaboration tool for businesses that is a full project management solution.</p>
            </div>

            {/* bottom */}
            <div className='flex 2xl:flex-row sm:flex-col justify-between 2xl:w-[383px] sm:w-[248px] 2xl:h-[95px] sm:h-[186px] items-center'>
              <div className='2xl:w-[95px] 2xl:h-[95px] sm:w-[65px] sm:h-[65px] bg-[#4F9CF9] rounded-full'></div>
              <div className='flex flex-col gap-[15px] w-[246px]'>
                <h2 className='text-[24px] font-[600]'>Oberon Shaw, MCH</h2>
                <p className='leading-[20px]'>Head of Talent Acquisition, North America</p>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className='bg-[#4F9CF9] text-white 2xl:w-[420px] sm:w-[288px]f px-[30px] py-[60px] rounded-[10px] shadow-md shadow-gray-300 flex flex-col gap-[60px]'>

            {/* top */}
            <div className='pb-[40px] flex flex-col gap-[32px] 2xl:w-[370px] sm:w-[248px] border-b-[1px] border-[#212529]'>
              <FontAwesomeIcon icon={faQuoteLeft} className='2xl:size-[86px] sm:size-[56px] text-[#fff]' />
              <p className='text-[18px] leading-[30px]'>Whitepace is designed as a collaboration tool for businesses that is a full project management solution.</p>
            </div>

            {/* bottom */}
            <div className='flex 2xl:flex-row sm:flex-col justify-between 2xl:w-[383px] sm:w-[248px] 2xl:h-[95px] sm:h-[186px] items-center'>
              <div className='2xl:w-[95px] 2xl:h-[95px] sm:w-[65px] sm:h-[65px] bg-[#fff] rounded-full'></div>
              <div className='flex flex-col gap-[15px] w-[246px]'>
                <h2 className='text-[24px] font-[600]'>Oberon Shaw, MCH</h2>
                <p className='leading-[20px]'>Head of Talent Acquisition, North America</p>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className='bg-[#4F9CF9] text-white 2xl:w-[420px] sm:w-[288px]f px-[30px] py-[60px] rounded-[10px] shadow-md shadow-gray-300 flex flex-col gap-[60px]'>

            {/* top */}
            <div className='pb-[40px] flex flex-col gap-[32px] 2xl:w-[370px] sm:w-[248px] border-b-[1px] border-[#212529]'>
              <FontAwesomeIcon icon={faQuoteLeft} className='2xl:size-[86px] sm:size-[56px] text-[#fff]' />
              <p className='text-[18px] leading-[30px]'>Whitepace is designed as a collaboration tool for businesses that is a full project management solution.</p>
            </div>

            {/* bottom */}
            <div className='flex 2xl:flex-row sm:flex-col justify-between 2xl:w-[383px] sm:w-[248px] 2xl:h-[95px] sm:h-[186px] items-center'>
              <div className='2xl:w-[95px] 2xl:h-[95px] sm:w-[65px] sm:h-[65px] bg-[#fff] rounded-full'></div>
              <div className='flex flex-col gap-[15px] w-[246px]'>
                <h2 className='text-[24px] font-[600]'>Oberon Shaw, MCH</h2>
                <p className='leading-[20px]'>Head of Talent Acquisition, North America</p>
              </div>
            </div>
          </div>
        </div>
        <Image src='/images/Slider.png' width={60} height={12} alt='Slider' className='2xl:block sm:hidden'/>
      </div>

      {/* Section 13 */}
      <div className='bg-[#043873] text-white 2xl:px-[220px] 2xl:pt-[140px] 2xl:pb-[32px] flex justify-center'>
        <div className='w-[608px] flex flex-col gap-[40px] items-center text-center'>
          <h1 className='text-[64px] leading-[77.45px] font-[700] '>Try Whitepace today</h1>
          <p className='text-[24px] leading-[32px]'>Get started for free. <br />Add your whole team as your needs grow.</p>
          <button type='button' className='px-[24px] py-[16px] bg-[#4F9CF9] text-[#fff] font-[500] rounded-[8px] w-[195px]'>Try Taskey free<FontAwesomeIcon icon={faArrowRight} className='size-[12px] inline-flex ml-[10px]' /></button>
          <p className='text-[24px] leading-[32px]'>On a big team? Contact sales</p>
          <div className='w-[260px] flex justify-center items-center gap-[40px]'>
            <Image src='/images/Apple-white.png' width={60} height={60} alt='Apple White' />
            <Image src='/images/window.png' width={60} height={60} alt='Apple White' />
            <Image src='/images/android.png' width={60} height={60} alt='Apple White' />
          </div>
        </div>
      </div>

      {/* Section 14 */}
      <div className='bg-[#043873] text-white 2xl:px-[100px] 2xl:pt-[140px] 2xl:pb-[32px] flex justify-between items-center w-full border-[#2E4E73] border-b-[1px]'>
        
        {/* 1 */}
        <div className='w-[205px]'>
          <Image src='/images/Logo.png' width={191} height={34} alt='Logo' />
          <p className='text-[18px] leading-[30px] mt-5'>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
        </div>

        {/* 2 */}
        <div className='w-[205px] flex flex-col gap-[15px]'>
          <p className='text-[18px] font-[700]'>Product</p>
          <Link href='' className='text-[#FFE492]'>Overview</Link>
          <Link href=''>Pricing</Link>
          <Link href=''>Customer stories</Link>
        </div>

        {/* 3 */}
        <div className='w-[205px] flex flex-col gap-[15px]'>
          <p className='text-[18px] font-[700]'>Resources</p>
          <Link href=''>Blog</Link>
          <Link href=''>Guides & tutorials</Link>
          <Link href=''>Help center</Link>
        </div>

        {/* 4 */}
        <div className='w-[205px] flex flex-col gap-[15px]'>
          <p className='text-[18px] font-[700]'>Company</p>
          <Link href=''>About us</Link>
          <Link href=''>Careers</Link>
          <Link href=''>Media kit</Link>
        </div>

        <div className='w-[259px] flex flex-col gap-[23px]'>
          <h2 className='text-[28px] font-[700]'>Try It Today</h2>
          <p>Get started for free.Add your whole team as your needs grow.</p>
          <button type='button' className='px-[24px] py-[16px] bg-[#4F9CF9] text-[#fff] font-[500] rounded-[8px] w-[165px]'>Start today<FontAwesomeIcon icon={faArrowRight} className='size-[12px] inline-flex ml-[10px]' /></button>
        </div>
      </div>





    </div>
  )
}

export default Home