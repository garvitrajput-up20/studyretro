'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from '../../../public/studyretro.svg';
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-4 md:py-6 px-5">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Image
            src={logo}
            alt="StudyRetro Logo"
            width={250}
            height={500}
            className="ml-5 mb-4 md:mb-0 md:ml-0 md:mr-6"
          />
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              {menuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </button>
          </div>
        </div>
        <nav
          className={`menu flex-col md:flex-row flex-wrap list-none gap-2 md:gap-5 justify-center md:justify-start text-lg md:flex ${menuOpen ? "flex" : "hidden"
            }`}
        >
          <Link href="/">
            <li className="mr-2 md:mr-4 hover:text-gray-300 cursor-pointer transition-colors duration-200">
              Home
            </li>
          </Link>
          <li className="mr-2 md:mr-4 hover:text-gray-300 cursor-pointer transition-colors duration-200">
            Shop
          </li>
          <Link href="/about">
          <li className="mr-2 md:mr-4 hover:text-gray-300 cursor-pointer transition-colors duration-200">
            About Us
          </li>
          </Link>
          <li className="hover:text-gray-300 cursor-pointer transition-colors duration-200">
            Contact Us
          </li>
        </nav>
        <div className="hidden md:block">
          <Link href="/login">
            <button

              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-full transition-all duration-200"
            >
              Get Started
            </button></Link>
        </div>
        {menuOpen && (
          <div className="md:hidden mt-4">
            <Link href="/login">
              <button

                className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-full transition-all duration-200"
              >
                Get Started
              </button></Link>

          </div>
        )}
      </div>
    </main>
  );
}
