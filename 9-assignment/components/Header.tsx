"use client";

import React, { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-cyan-50 flex justify-between items-center xl:px-[100px] border-b-[1px] border-gray-400 py-[20px] xl:min-w-[1440px] relative sm:min-w-[375px] sm:px-[16px]">
      {/* Logo */}
      <h1 className="text-[30px] font-[700]">Rizfan</h1>

      {/* Navigation Links for Larger Screens */}
      <ul className="hidden xl:flex justify-center gap-[50px] text-[25px] text-gray-500">
        <li>Home</li>
        <li>About</li>
        <li>Skill</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger Menu Button for Smaller Screens */}
      <button
        type="button"
        onClick={toggleMenu}
        className="xl:hidden text-[30px] text-gray-500"
      >
        ☰
      </button>

      {/* Side Menu for Smaller Screens */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 h-[400px] w-[60%] bg-cyan-50 shadow-lg z-50 flex flex-col py-8 px-6">
          {/* Close Button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="self-end text-[30px] text-gray-500 mb-6"
          >
            ✖
          </button>

          {/* Navigation Links */}
          <ul className="flex flex-col gap-6 text-[25px] text-gray-500">
            <li onClick={toggleMenu}>Home</li>
            <li onClick={toggleMenu}>About</li>
            <li onClick={toggleMenu}>Skill</li>
            <li onClick={toggleMenu}>Project</li>
            <li onClick={toggleMenu}>Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};
