"use client"

import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='xl:min-w-[1440px] xl:px-[150px] xl:py-[30px] flex justify-between items-center sm:px-[20px] sm:min-w-[375px] sm:py-[16px] relative'>
      <h1 className='font-semibold xl:text-[50px] sm:text-[24px]'>ma.</h1>
      <nav className='xl:flex gap-5 text-[21px] dm-sans font-semibold sm:hidden'>
        <Link href='/'>Work</Link>
        <Link href='/About'>About</Link>
        <Link href=''>Playground</Link>
        <Link href=''>Contact</Link>
      </nav>
      <div className='xl:hidden sm:block'>
        <button type='button' onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className='text-[24px]' />
        </button>
      </div>

      {/* Sidebar Menu */}
      {isMenuOpen && (
        <div className='fixed top-0 right-0 h-[250px] w-[150px] bg-white bg-opacity-90 shadow-lg z-50 flex flex-col px-6 py-8 space-y-4'>
          {/* Close Button */}
          <div className='w-full flex justify-end'>
            <button onClick={toggleMenu} className='text-[24px]'>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          {/* Navigation Links */}
          <Link
            href='/'
            onClick={toggleMenu}
            className='text-[18px] font-medium hover:text-gray-500'
          >
            Work
          </Link>
          <Link
            href='/About'
            onClick={toggleMenu}
            className='text-[18px] font-medium hover:text-gray-500'
          >
            About
          </Link>
          <Link
            href=''
            onClick={toggleMenu}
            className='text-[18px] font-medium hover:text-gray-500'
          >
            Playground
          </Link>
          <Link
            href=''
            onClick={toggleMenu}
            className='text-[18px] font-medium hover:text-gray-500'
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
