"use client";

import { faAngleDown, faMobileScreen, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-auto h-auto bg-gradient-to-b from-black to-[#041528] text-white xl:px-[120px] sm:px-[10px] py-[5px] relative">
      {/* Top Bar */}
      <div className="flex justify-between items-center border-[#302F2E] border-b-[1px] pb-[5px]">
        <h3 className="xl:text-[16px] sm:text-[12px]">
          <FontAwesomeIcon
            icon={faMobileScreen}
            className="xl:size-[20px] sm:size-[15px] text-red-500 inline-flex items-end"
          />{" "}
          Download App via SMS
        </h3>
        <div className="flex justify-center gap-[5px] items-center">
          <p className="text-red-500 xl:text-[16px] sm:text-[12px] border-grey-100 border-r-[1px] px-[10px]">Urdu</p>
          <p className="xl:text-[16px] sm:text-[12px] border-grey-100 border-r-[1px] px-[10px]">Sign Up</p>
          <p className="xl:text-[16px] sm:text-[12px]">Sign In</p>
        </div>
      </div>

      {/* Header Content */}
      <div className="flex justify-between items-center pt-[10px]">
        <Image src="/images/logo.svg" width={160} height={50} alt="Logo" />

        {/* Desktop Navigation */}
        <nav className=" sm:hidden xl:flex">
          <Link href="" className="text-white hover:bg-white hover:text-red-600 px-[25px] py-[16px]">
            Used Cars <FontAwesomeIcon icon={faAngleDown} className="inline-flex"/>
          </Link>
          <Link href="" className="text-white hover:bg-white hover:text-red-600 px-[25px] py-[16px]">
            New Cars <FontAwesomeIcon icon={faAngleDown} />
          </Link>
          <Link href="" className="text-white hover:bg-white hover:text-red-600 px-[25px] py-[16px]">
            Bikes <FontAwesomeIcon icon={faAngleDown} />
          </Link>
          <Link href="" className="text-white hover:bg-white hover:text-red-600 px-[25px] py-[16px]">
            Auto Store <FontAwesomeIcon icon={faAngleDown} />
          </Link>
          <Link href="" className="text-white hover:bg-white hover:text-red-600 px-[25px] py-[16px]">
            Videos
          </Link>
          <Link href="" className="text-white hover:bg-white hover:text-red-600 px-[25px] py-[16px]">
            Forums
          </Link>
          <Link href="" className="text-white hover:bg-white hover:text-red-600 px-[25px] py-[16px]">
            Blog
          </Link>
          <Link href="" className="text-white hover:bg-white hover:text-red-600 px-[25px] py-[16px]">
            More <FontAwesomeIcon icon={faAngleDown} />
          </Link>
          <button type="button" className="bg-red-700 text-white rounded-[5px] px-[20px] py-[10px] font-bold">
            Post an Ad
          </button>
        </nav>

        {/* Hamburger Button */}
        <button
          type="button"
          onClick={toggleMenu}
          className="sm:block xl:hidden text-[25px] text-white"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-[70%] h-auto bg-[#041528] shadow-lg z-50 flex flex-col py-6 px-6">
          <div className="flex justify-end">
            <button type="button" onClick={toggleMenu} className="text-white text-[25px]">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <ul className="flex flex-col gap-4 text-white text-[20px]">
            <li onClick={toggleMenu}>
              <Link href="">Used Cars</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link href="">New Cars</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link href="">Bikes</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link href="">Auto Store</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link href="">Videos</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link href="">Forums</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link href="">Blog</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link href="">More</Link>
            </li>
            <li>
              <button type="button" className="bg-red-700 text-white rounded-[5px] px-[20px] py-[10px] font-bold">
                Post an Ad
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
