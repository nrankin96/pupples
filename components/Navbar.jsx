"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

// TODO: Fix logo image
// TODO: A  navbar links
// TODO: 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  
  };

  return (
    <nav className="flex bg-[#8ECAE6] h-[60px] items-center justify-between w-full px-2">
      <div className="flex items-center w-full ">
      <Link href="/">
      <Image
          src="/pupple-logo.png"
          alt="logo"
          width={200}
          height={300}
          className="mt-6 lg:w-[140px] lg:h-[140px]"
        />

      </Link>
        
        <div className="flex w-full justify-end lg:justify-between px-4">
          <div className="hidden lg:flex ">
            <ul className=" lg:flex space-x-4 w-full lg:w-[900px] py-2 lg:place-content-center lg:text-[16px] mx-20">
              <li>
                <Link href="/" className="">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/">Adopt</Link>
              </li>
              <li>
                <Link href="/">Foster</Link>
              </li>
              <li>
                <Link href="/">Donate</Link>
              </li>
            </ul>
          </div>
          <button
            className="flex flex-col pt-4 lg:hidden"
            onClick={handleClick}
          >
            <div className="text-md lg:flex justify-end">
              {menuOpen ? (
                <div className="flex flex-col items-center">
                  <div className="">
                    <AiOutlineClose className="flex  h-10 w-8 my-auto cursor-pointer lg:hidden " />
                  </div>
                  <div className="absolute right-4 z-10 mt-[50px] w-56 origin-top-right rounded-md border bg-gray-100 bg-opacity-80 shadow-lg ring-1 ring-black ring-opacity-5">
                    <ul className=" items-center space-x-3 w-full ">
                      <li>
                        <Link href="/" className="">
                          <p> Our Mission</p>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <p>Adopt</p>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <p>Foster</p>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <p>Donate</p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <GiHamburgerMenu className="h-10 w-8 my-auto cursor-pointer lg:hidden " />
              )}
            </div>
          </button>
          <div className="hidden lg:flex">
            <button className="lg:flex lg:text-[16px] bg-[#023047] text-white rounded-md justify-center px-4 py-2 w-[90px]">JOIN</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
