"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faArrowRight, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='2xl:min-w-[1550px] bg-[#043873] text-white py-[16px] flex flex-row justify-between items-center sm:px-[16px] md:px-[32px] lg:px-[32px] xl:px-[32px] 2xl:px-[100px] relative'>
      {/* Logo */}
      <Image
        src='/images/Logo.png'
        width={191}
        height={34}
        alt='Logo'
        className='2xl:w-[191px] 2xl:h-[34px] sm:w-[134px] sm:h-[24px]'
      />
      
      {/* Navigation Links */}
      <div className='flex 2xl:flex-row items-center justify-center gap-[60px]'>
        <nav className='flex justify-center items-center gap-[32px] dm-sans font-[500] sm:hidden md:hidden lg:hidden xl:flex'>
          <Link href=''>
            Products <FontAwesomeIcon icon={faAngleDown} className='size-[12px] inline-flex ml-[10px]' />
          </Link>
          <Link href=''>
            Solutions <FontAwesomeIcon icon={faAngleDown} className='size-[12px] inline-flex ml-[10px]' />
          </Link>
          <Link href=''>
            Resources <FontAwesomeIcon icon={faAngleDown} className='size-[12px] inline-flex ml-[10px]' />
          </Link>
          <Link href=''>
            Pricing <FontAwesomeIcon icon={faAngleDown} className='size-[12px] inline-flex ml-[10px]' />
          </Link>
        </nav>
        
        {/* Buttons & Hamburger */}
        <div className='flex justify-center items-center gap-[24px] inter'>
          <button
            type='button'
            className='px-[24px] py-[16px] bg-[#FFE492] text-[#043873] font-[500] rounded-[8px] sm:hidden md:hidden lg:block'
          >
            Login
          </button>
          <button
            type='button'
            className='px-[24px] py-[16px] bg-[#4F9CF9] text-[#fff] font-[500] rounded-[8px] sm:hidden md:hidden lg:block'
          >
            Try Whitepace free{' '}
            <FontAwesomeIcon icon={faArrowRight} className='size-[12px] inline-flex ml-[10px]' />
          </button>
          <button
            type='button'
            onClick={toggleMenu}
            className='2xl:hidden xl:hidden lg:block md:block sm:block'
          >
            <FontAwesomeIcon icon={faBars} className='size-[15px]' />
          </button>
        </div>
      </div>

      {/* Side Menu */}
      {isMenuOpen && (
        <div className='fixed top-0 right-0 h-[250px] w-[190px] bg-white text-[#043873] shadow-lg z-50 flex flex-col px-6 py-8 space-y-6'>
          {/* Close Button */}
          <div className='w-full flex justify-end'>
            <button onClick={toggleMenu} className='text-[24px]'>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className='flex flex-col gap-4 dm-sans font-[500]'>
            <Link href='' onClick={toggleMenu}>
              Products <FontAwesomeIcon icon={faAngleDown} className='size-[12px] inline-flex ml-[10px]' />
            </Link>
            <Link href='' onClick={toggleMenu}>
              Solutions <FontAwesomeIcon icon={faAngleDown} className='size-[12px] inline-flex ml-[10px]' />
            </Link>
            <Link href='' onClick={toggleMenu}>
              Resources <FontAwesomeIcon icon={faAngleDown} className='size-[12px] inline-flex ml-[10px]' />
            </Link>
            <Link href='' onClick={toggleMenu}>
              Pricing <FontAwesomeIcon icon={faAngleDown} className='size-[12px] inline-flex ml-[10px]' />
            </Link>
            
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
