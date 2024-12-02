import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import Image from 'next/image';

const Home = () => {
  return (
    <div className='sm:w-[320px] md:w-[768px]'>
      
      {/* Section 1 */}
      <div className='bg-[#043873] text-white flex justify-between gap-[50px] items-center py-[100px] px-[100px] sm:px-[16px] sm:py-[80px] sm:flex-col'>

        {/* Left */}
        <div className='w-[50%] flex flex-col gap-8 sm:w-[100%] sm:items-center sm:text-center'>
          <h1 className='text-[64px] font-[700] inter leading-[77.45px] sm:text-[36px] sm:leading-[43.57px] md:text-[54px] md:leading-[65.35px]'>Get More Done with whitepace</h1>
          <p className='font-[400] text-[18px] inter sm:leading-[30px]'>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
          <button type='button' className='bg-[#4f9cf9] w-[218px] px-[30px] py-[15px] rounded-[8px] '>Try Whitepace free <FontAwesomeIcon icon={faArrowRight} className='size-[12px] ml-[10px] inline-flex items-start' /></button>
        </div>

        {/* Right */}
        <div className='bg-[#c4defd] w-[824px] h-[549px] sm:w-[286px] sm:h-[191px] md:w-[551px] md:h-[367px]'></div>
      </div>

      {/* Section 2 */}
      <div className='bg-white text-black flex justify-between gap-[50px] items-center py-[100px] px-[100px] sm:px-[16px] sm:py-[80px] sm:flex-col'>

        {/* Left */}
        <div className='w-[50%] flex flex-col gap-8 inter sm:w-[100%] sm:items-center sm:text-center'>
          <h1 className='text-[72px] font-[700]  leading-[87.14px] sm:text-[36px] sm:leading-[43.57px] md:text-[54px] md:leading-[65.35px]'>Project Management</h1>
          <p className='font-[400] text-[18px] sm:leading-[30px]'>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
          <button type='button' className='bg-[#4f9cf9] w-[170px] px-[30px] py-[15px] rounded-[8px] text-white'>Get Started <FontAwesomeIcon icon={faArrowRight} className='size-[12px] ml-[10px] inline-flex items-start' /></button>
        </div>

        {/* Right */}
        <div className='w-[748px] h-[547px] bg-[#c4defd] sm:w-[286px] sm:h-[177px] md:w-[561px] md:h-[349px]'></div>
      </div>

      {/* Section 3 */}
      <div className='bg-white text-black flex justify-between gap-[50px] items-center py-[100px] px-[100px] sm:px-[16px] sm:py-[80px] sm:flex-col-reverse'>

        {/* Left */}
        <div>
          <Image src='/images/Work Together Image.png' width={710} height={661} alt='Work Together Image' className='sm:w-[279px] sm:h-[259.74px] md:w-[454px] md:h-[422.67px]'/>
        </div>

        {/* Right */}
        <div className='w-[50%] flex flex-col gap-8 inter sm:w-[100%] sm:items-center sm:text-center'>
          <h1 className='text-[72px] font-[700]  leading-[87.14px] sm:text-[36px] sm:leading-[43.57px] md:text-[54px] md:leading-[65.35px]'>Work together</h1>
          <p className='font-[400] text-[18px] sm:leading-[30px]'>With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.</p>
          <button type='button' className='bg-[#4f9cf9] w-[160px] px-[30px] py-[15px] rounded-[8px] text-white'>Try it now <FontAwesomeIcon icon={faArrowRight} className='size-[12px] ml-[10px] inline-flex items-start' /></button>
        </div>
      </div>

      {/* Section 4 */}
      <div className='bg-[#043873] text-white flex justify-between gap-[50px] items-center py-[100px] px-[100px] sm:px-[16px] sm:py-[80px] sm:flex-col'>

        {/* Left */}
        <div className='w-[50%] flex flex-col gap-8 sm:w-[100%] sm:items-center sm:text-center'>
          <h1 className='text-[64px] font-[700] inter leading-[77.45px] sm:text-[36px] sm:leading-[43.57px] md:text-[54px] md:leading-[65.35px]'>Use as Extension</h1>
          <p className='font-[400] text-[18px] inter sm:leading-[30px]'>Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.</p>
          <button type='button' className='bg-[#4f9cf9] w-[145px] px-[30px] py-[15px] rounded-[8px] '>Let&apos;s Go <FontAwesomeIcon icon={faArrowRight} className='size-[12px] ml-[10px] inline-flex items-start' /></button>
        </div>

        {/* Right */}
        <div className='bg-[#c4defd] w-[686px] h-[479px] sm:w-[284.5px] sm:h-[198.65px] md:w-[557px] md:h-[388.93px]'></div>
      </div>

      {/* Section 5 */}
      <div className='bg-white text-black flex justify-between gap-[50px] items-center py-[100px] px-[100px] sm:px-[16px] sm:py-[80px] sm:flex-col'>

        {/* Left */}
        <div className='bg-[#c4defd] w-[714px] h-[532.09px] sm:w-[288px] sm:h-[216.62px] md:w-[534px] md:h-[397.95px]'></div>

        {/* Right */}
        <div className='w-[50%] flex flex-col gap-8 inter sm:w-[100%] sm:items-center sm:text-center'>
          <h1 className='text-[72px] font-[700]  leading-[87.14px] sm:text-[36px] sm:leading-[43.57px] md:text-[54px] md:leading-[65.35px]'>Customise it to your needs</h1>
          <p className='font-[400] text-[18px] sm:leading-[30px]'>Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
          <button type='button' className='bg-[#4f9cf9] w-[150px] px-[30px] py-[15px] rounded-[8px] text-white'>Let&apos;s Go <FontAwesomeIcon icon={faArrowRight} className='size-[12px] ml-[10px] inline-flex items-start' /></button>
        </div>
      </div>

      {/* Section 6 */}
      <div className='px-[300px] py-[100px] text-center flex flex-col gap-10 sm:px-[16px] sm:py-[80px] '>
        <h1 className='text-[72px] font-[700]  leading-[87.14px] sm:text-[36px] sm:leading-[43.57px] md:text-[54px] md:leading-[65.35px]'>Choose Your Plan</h1>
        <p className='font-[400] text-[18px] sm:leading-[30px]'>Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</p>
      </div>

      {/* Section 7 */}
      <div className='p-[100px] flex gap-8 items-center sm:px-[16px] sm:py-[80px] sm:flex-col sm:gap-10'>

        {/* Cart 1 */}
        <div className='w-[472.33px] h-[634px] border-[#ffe492] border-[1px] px-[44px] py-[40px] rounded-[10px] flex flex-col gap-[20px] text-black inter transform transition duration-700 hover:scale-105 sm:w-[289px] sm:h-[750px] md:w-[472.33px] md:h-[650px]'>
          <h3 className='font-[600] text-[24px]'>Free</h3>
          <h2 className='text-[36px] font-[700]'>$0</h2>
          <p className='font-[500]'>Capture ideas and find them quickly</p>
          <p className='text-[16px]'><FontAwesomeIcon icon={faCircleCheck} className='size-[16px] mr-[10px] inline-flex items-center' />Sync unlimited devices</p>
          <p className='text-[16px]'><FontAwesomeIcon icon={faCircleCheck} className='size-[16px] mr-[10px] inline-flex items-center sm:size-[15px]' />10 GB monthly uploads</p>
          <p className='text-[16px]'><FontAwesomeIcon icon={faCircleCheck} className='size-[16px] mr-[10px] inline-flex items-center sm:size-[15px]' />200 MB max. note size</p>
          <p className='text-[16px] flex items-center'><FontAwesomeIcon icon={faCircleCheck} className='size-[18px] mr-[10px] sm:size-[35px] md:size-[18px]' />Customize Home dashboard and access extra widgets</p>
          <p className='text-[16px] sm:flex items-center'><FontAwesomeIcon icon={faCircleCheck} className='size-[16px] mr-[10px] inline-flex items-center sm:size-[28px] md:size-[18px]' />Connect primary Google Calendar account</p>
          <p className='text-[16px] flex items-center'><FontAwesomeIcon icon={faCircleCheck} className='size-[18px] mr-[10px] sm:size-[35px] md:size-[18px]' />Add due dates, reminders, and notifications to your tasks</p>
          <button type='button' className='w-[166px] py-[16px] px-[40px] rounded-[8px] border-[#ffe492] border-[1px] duration-700 hover:bg-[#ffe492] hover:duration-700'>Get Started</button>
        </div>

        {/* Cart 2 */}
        <div className='bg-[#043873] text-white w-[472.33px] h-[761px] px-[44px] py-[80px] flex flex-col gap-[20px] inter rounded-[10px] transform transition duration-700 hover:scale-105 sm:w-[289px] sm:h-[730px] sm:py-[40px] md:w-[472.33px] md:h-[650px]'>
          <h3 className='font-[600] text-[24px]'>Personal</h3>
          <h2 className='text-[36px] font-[700] text-[#ffe492]'>$11.99</h2>
          <p className='font-[500]'>Keep home and family on track</p>
          <p className='text-[16px]'><FontAwesomeIcon icon={faCircleCheck} className='size-[16px] mr-[10px] text-[#ffe492] inline-flex items-center' />Sync unlimited devices</p>
          <p className='text-[16px]'><FontAwesomeIcon icon={faCircleCheck} className='size-[16px] mr-[10px] text-[#ffe492] inline-flex items-center' />10 GB monthly uploads</p>
          <p className='text-[16px]'><FontAwesomeIcon icon={faCircleCheck} className='size-[16px] mr-[10px] text-[#ffe492] inline-flex items-center' />200 MB max. note size</p>
          <p className='text-[16px] flex items-center'><FontAwesomeIcon icon={faCircleCheck} className='size-[18px] mr-[10px] text-[#ffe492] sm:size-[35px] md:size-[18px]' />Customize Home dashboard and access extra widgets</p>
          <p className='text-[16px] sm:flex sm:items-center'><FontAwesomeIcon icon={faCircleCheck} className='size-[16px] mr-[10px] text-[#ffe492] inline-flex items-center sm:size-[27px] md:size-[18px]' />Connect primary Google Calendar account</p>
          <p className='text-[16px] flex items-center'><FontAwesomeIcon icon={faCircleCheck} className='size-[18px] mr-[10px] text-[#ffe492] sm:size-[35px] md:size-[18px]' />Add due dates, reminders, and notifications to your tasks</p>
          <button type='button' className='bg-[#4f9cf9] w-[166px] py-[16px] px-[40px] rounded-[8px] duration-700 hover:w-[180px] hover:duration-700'>Get Started</button>
        </div>

        {/* Cart 3 */}
        <div className='w-[472.33px] h-[634px] border-[#ffe492] border-[1px] px-[44px] py-[40px] rounded-[10px] flex flex-col gap-[20px] text-black inter transform transition duration-700 hover:scale-105 sm:w-[289px] sm:h-[730px] md:w-[472.33px] md:h-[650px]'>
          <h3 className='font-[600] text-[24px]'>Organization</h3>
          <h2 className='text-[36px] font-[700]'>$49.99</h2>
          <p className='font-[500]'>Capture ideas and find them quickly</p>
          <p className='text-[16px]'><FontAwesomeIcon icon={faCircleCheck} className='size-[16px] mr-[10px] inline-flex items-center' />Sync unlimited devices</p>
          <p className='text-[16px]'><FontAwesomeIcon icon={faCircleCheck} className='size-[16px] mr-[10px] inline-flex items-center' />10 GB monthly uploads</p>
          <p className='text-[16px]'><FontAwesomeIcon icon={faCircleCheck} className='size-[16px] mr-[10px] inline-flex items-center' />200 MB max. note size</p>
          <p className='text-[16px] flex items-center'><FontAwesomeIcon icon={faCircleCheck} className='size-[18px] mr-[10px] sm:size-[35px] md:size-[18px]' />Customize Home dashboard and access extra widgets</p>
          <p className='text-[16px] sm:flex sm:items-center'><FontAwesomeIcon icon={faCircleCheck} className='size-[16px] mr-[10px] inline-flex items-center sm:size-[27px] md:size-[18px]' />Connect primary Google Calendar account</p>
          <p className='text-[16px] flex items-center'><FontAwesomeIcon icon={faCircleCheck} className='size-[18px] mr-[10px] sm:size-[35px] md:size-[18px]' />Add due dates, reminders, and notifications to your tasks</p>
          <button type='button' className='w-[166px] py-[16px] px-[40px] rounded-[8px] border-[#ffe492] border-[1px] duration-700 hover:bg-[#ffe492] hover:duration-700'>Get Started</button>
        </div>
      </div>

      {/* Section 8 */}
      <div className='bg-[#043873] px-[200px] py-[100px] text-center text-white inter flex flex-col gap-10 items-center sm:px-[16px] sm:py-[80px] md:items-start md:text-left md:pr-[80px]'>
        <h1 className='text-[72px] font-[700] leading-[87.14px] sm:text-[36px] sm:leading-[43.57px] md:text-[54px] md:leading-[65.35px]'>Your work, everywhere you are</h1>
        <p className='font-[400] text-[18px] sm:leading-[30px]'>Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
        <button type='button' className='bg-[#4f9cf9] w-[165px] px-[30px] py-[15px] rounded-[8px] '>Try Taskey <FontAwesomeIcon icon={faArrowRight} className='size-[12px] ml-[10px] inline-flex items-start' /></button>
      </div>

      {/* Section 9 */}
      <div className='bg-white text-black flex justify-between gap-[50px] items-center p-[100px] sm:px-[16px] sm:py-[80px] sm:flex-col-reverse'>

        {/* Left */}
        <div className='w-[50%] flex flex-col gap-8 inter sm:w-[100%] sm:items-center sm:text-center'>
          <h1 className='text-[72px] font-[700]  leading-[87.14px] sm:text-[36px] sm:leading-[43.57px] md:text-[54px] md:leading-[65.35px]'>100% your data</h1>
          <p className='font-[400] text-[18px] sm:leading-[30px]'>The app is open source and your notes are saved to an open format, so you&apos;ll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.</p>
          <button type='button' className='bg-[#4f9cf9] w-[170px] px-[30px] py-[15px] rounded-[8px] text-white'>Read more <FontAwesomeIcon icon={faArrowRight} className='size-[12px] ml-[10px] inline-flex items-start' /></button>
        </div>

        {/* Right */}
        <div>
          <Image src='/images/Element.png' width={681} height={381.13} alt='Element' className='sm:w-[290.5px] sm:h-[162.58px] md:w-[513px] md:h-[287.11px]' />
        </div>
      </div>

      {/* Section 10 */}
      <div className='p-[100px] flex flex-col items-center gap-[50px] sm:px-[16px] sm:py-[80px]'>
        <h1 className='text-[72px] font-[700]  leading-[87.14px] sm:text-[36px] sm:leading-[43.57px] md:text-[54px] md:leading-[65.35px]'>Our sponsors</h1>
        <div className='flex justify-between items-center gap-[150px] sm:flex-col sm:gap-[100px]'>
          <Image src='/images/Apple.png' width={55.47} height={68} alt='Apple Logo'/>
          <Image src='/images/Microsoft.png' width={285} height={62} alt='Microsoft Logo' className='sm:w-[213px] sm:h-[46px]'/>
          <Image src='/images/Slack.png' width={280} height={71} alt='Slack Logo' className='sm:w-[192px] sm:h-[49px]'/>
          <Image src='/images/Google.png' width={211} height={69.81} alt='Google Logo' className='sm:w-[139.5px] sm:h-[46.16px]'/>
        </div>
      </div>

      {/* Section 11 */}
      <div className='p-[100px] bg-[#043873] text-white flex justify-between items-center sm:px-[16px] sm:py-[80px] sm:flex-col sm:gap-[50px]'>

        {/* Left */}
        <div>
          <Image src='/images/Apps.png' width={582} height={470.8} alt='Apps' className='sm:w-[286.5px] sm:h-[231.76px] md:w-[485px] md:h-[392.33px]'/>
        </div>

        {/* Right */}
        <div className='w-[50%] flex flex-col gap-8 inter sm:w-[100%] sm:items-center sm:text-center'>
          <h1 className='text-[72px] font-[700]  leading-[87.14px] sm:text-[36px] sm:leading-[43.57px] md:text-[54px] md:leading-[65.35px]'>Work with Your Favorite Apps Using whitepace</h1>
          <p className='font-[400] text-[18px] sm:leading-[30px]'>Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.</p>
          <button type='button' className='bg-[#4f9cf9] w-[170px] px-[30px] py-[15px] rounded-[8px] text-white'>Read more <FontAwesomeIcon icon={faArrowRight} className='size-[12px] ml-[10px] inline-flex items-start' /></button>
        </div>
      </div>

      {/* Section 12 */}
      <div className='p-[100px] px-[50px] flex flex-col items-center'>
        <h1 className='text-[72px] text-center font-[700]  leading-[87.14px] sm:text-[36px] sm:leading-[43.57px]'>What Our Clients Says</h1>
        <div className='flex justify-between sm:gap-[50px] flex-wrap items-center my-[50px]'>

          {/* Card 1 */}
          <div className='w-[471.67px] h-[498.46px] inter py-[60px] px-[40px] rounded-[10px] shadow-md shadow-gray-900 sm:w-[288px] sm:h-[500px] sm:py-[20px] sm:px-[15px]'>
            <div className='flex flex-col gap-5 py-[30px] border-black border-b-[2px]'>
              <FontAwesomeIcon icon={faQuoteLeft} className='size-[86px] text-[#043873] sm:size-[56px]' />
              <p className='sm:text-[16px] sm:leading-[20px]'>Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
            </div>

            {/* ---------------- */}

            <div className='flex items-center py-[30px] justify-between sm:gap-[20px]'>
              <div className='w-[95px] h-[95px] rounded-[50px] bg-[#606060] sm:w-[65px] sm:h-[65px] '></div>
              <div className='flex flex-col gap-5 w-[250px]'>
                <h3 className='text-[24px] font-[600] sm:text-[18px] sm:font-[700]'>Oberon Shaw, MCH</h3>
                <p className='text-[16px] sm:text-[18px] sm:leading-[30px]'>Head of Talent Acquisition, North America</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className='bg-[#4f9cf9] text-white w-[471.67px] h-[498.46px] inter py-[60px] px-[40px] rounded-[10px] shadow-md shadow-gray-900 sm:w-[288px] sm:h-[500px] sm:py-[20px] sm:px-[15px]'>
            <div className='flex flex-col gap-5 py-[30px] border-white border-b-[2px]'>
              <FontAwesomeIcon icon={faQuoteLeft} className='size-[86px] text-[#fff] sm:size-[56px]' />
              <p className='sm:text-[16px] sm:leading-[20px]'>Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
            </div>

            {/* ---------------- */}

            <div className='flex items-center py-[30px] justify-between sm:gap-[20px]'>
              <div className='w-[95px] h-[95px] rounded-[50px] bg-[#fff] sm:w-[65px] sm:h-[65px]'></div>
              <div className='flex flex-col gap-5 w-[250px]'>
                <h3 className='text-[24px] font-[600] sm:text-[18px] sm:font-[700]'>Oberon Shaw, MCH</h3>
                <p className='text-[16px] sm:text-[18px] sm:leading-[30px]'>Head of Talent Acquisition, North America</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className='bg-[#4f9cf9] text-white w-[471.67px] h-[498.46px] inter py-[60px] px-[40px] rounded-[10px] shadow-md shadow-gray-900 sm:w-[288px] sm:h-[500px] sm:py-[20px] sm:px-[15px]'>
            <div className='flex flex-col gap-5 py-[30px] border-white border-b-[2px]'>
              <FontAwesomeIcon icon={faQuoteLeft} className='size-[86px] text-[#fff]sm:size-[56px]' />
              <p className='sm:text-[16px] sm:leading-[20px]'>Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
            </div>

            {/* ---------------- */}

            <div className='flex items-center py-[30px] justify-between sm:gap-[20px]'>
              <div className='w-[95px] h-[95px] rounded-[50px] bg-[#fff] sm:w-[65px] sm:h-[65px]'></div>
              <div className='flex flex-col gap-5 w-[250px]'>
                <h3 className='text-[24px] font-[600] sm:text-[18px] sm:font-[700]'>Oberon Shaw, MCH</h3>
                <p className='text-[16px] sm:text-[18px] sm:leading-[30px]'>Head of Talent Acquisition, North America</p>
              </div>
            </div>
          </div>
        </div>
        <Image src='/images/Slider.png' width={60} height={12} alt='Slider' />
      </div>

      {/* Section 13 */}
      <div className='bg-[#043873] text-white p-[100px] flex flex-col items-center md:px-[16px]'>
        
        {/* 1 */}
        <div className='flex flex-col items-center gap-7 text-center inter w-[608px] h-[533px] sm:w-[288px] sm:h-[464px] sm:items-start sm:text-left md:w-[608px] md:h-[425px]'>
          <h1 className='text-[72px] font-[700]  leading-[87.14px] sm:text-[40px] sm:leading-[50px] md:text-[54px] md:leading-[64px]'>Try Whitepace today</h1>
          <p className='text-[24px] leading-[32px] sm:text-[18px] sm:leading-[30px] md:text-[24px] md:leading-[32px]'>Get started for free. <br /> Add your whole team as your needs grow.</p>
          <button type='button' className='bg-[#4f9cf9] w-[195px] px-[30px] py-[15px] rounded-[8px] '>Try Taskey free <FontAwesomeIcon icon={faArrowRight} className='size-[12px] ml-[10px] inline-flex items-start' /></button>
          <p className='text-[24px] leading-[32px] sm:text-[18px] md:text-[24px]'>On a big team? Contact sales</p>
          <div className='flex justify-between gap-[50px] items-center'>
            <Image src='/images/apple-2.png' width={60} height={60} alt='Apple Logo White' className='sm:w-[35px] sm:h-[36px]'/>
            <Image src='/images/Group.png' width={60} height={60} alt='Windows Logo white' className='sm:w-[35px] sm:h-[36px]'/>
            <Image src='/images/android.png' width={60} height={60} alt='Android Logo White' className='sm:w-[35px] sm:h-[36px]'/>
          </div>
        </div>

        {/* 2 */}
        <div className='flex justify-between gap-[120px] inter p-[100px] pb-0 sm:flex-col sm:gap-[70px] sm:items-center sm:text-center sm:px-[16px] md:items-start md:text-left'>
          
          {/* 1 */}
          <div className='sm:w-[288px] sm:text-center sm:px-[16px] sm:flex sm:flex-col sm:items-center md:w-[704px] md:text-left md:items-start'>
            <Image src='/images/Logo.png' width={191} height={34} alt='Logo' className='md:w-[351.68px] md:h-[62px]'/>
            <p className='mt-[10px] md:w-[500px]'>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
          </div>

          {/* 2 */}
          <div className='flex flex-col gap-[15px]'>
            <p className='font-[700]'>Product</p>
            <p className='text-[#ffe492]'>Overview</p>
            <p>Pricing</p>
            <p>Customer stories</p>
          </div>

          {/* 3 */}
          <div className='flex flex-col gap-[15px]'>
            <p className='font-[700]'>Resources</p>
            <p>Blog</p>
            <p>Guides & tutorials</p>
            <p>Help center</p>
          </div>

          {/* 4 */}
          <div className='flex flex-col gap-[15px]'>
            <p className='font-[700]'>Company</p>
            <p>About us</p>
            <p>Careers</p>
            <p>Media kit</p>
          </div>

          {/* 5 */}
          <div className='flex flex-col gap-[15px] sm:w-[210px] sm:items-center sm:gap-[30px]'>
            <h3 className='font-[700] text-[28px]'>Try It Today</h3>
            <p className='leading-[20px]'>Get started for free.
            Add your whole team as your needs grow.</p>
            <button type='button' className='bg-[#4f9cf9] w-[165px] px-[30px] py-[15px] rounded-[8px] text-white'>Start today <FontAwesomeIcon icon={faArrowRight} className='size-[12px] ml-[10px] inline-flex items-start' /></button>
          </div>
        </div>
      </div>







    </div>
  )
}

export default Home