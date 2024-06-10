'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from '../../../public/studyretro.svg';
import Link from "next/link";
import { books } from '../../../data/books'; // Adjust the path if necessary

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();

  const handleSearch = (e: any) => {
    e.preventDefault();
    router.push(`/search?query=${searchQuery}`);
  };

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 1) {
      const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredBooks);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <main className="bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg relative z-10">
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
          <Link href="/shop">
            <li className="mr-2 md:mr-4 hover:text-gray-300 cursor-pointer transition-colors duration-200">
              Shop
            </li>
          </Link>
          <Link href="/about">
            <li className="mr-2 md:mr-4 hover:text-gray-300 cursor-pointer transition-colors duration-200">
              About Us
            </li>
          </Link>
          <Link href="/contactus">
            <li className="hover:text-gray-300 cursor-pointer transition-colors duration-200">
              Contact Us
            </li>
          </Link>
        </nav>
        <form onSubmit={handleSearch} className="relative hidden md:flex md:items-center">
          <input
            type="text"
            placeholder="Search books..."
            value={searchQuery}
            onChange={handleSearchInputChange}
            className="rounded-full py-2 px-4 w-full md:w-64 lg:w-96 text-black focus:outline-none"
          />
          <button type="submit" className="absolute right-0 top-0 bottom-0 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-full transition-all duration-200">
            Search
          </button>
          {suggestions.length > 0 && (
            <div className="absolute bg-white text-black w-full mt-2 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto top-full left-0">
              {suggestions.map((book) => (
                <Link key={book.id} href={`/books/${book.id}`}>
                  <div className="p-2 hover:bg-gray-200 cursor-pointer">
                    {book.title}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </form>
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
            <form onSubmit={handleSearch} className="relative mt-4">
              <input
                type="text"
                placeholder="Search books..."
                value={searchQuery}
                onChange={handleSearchInputChange}
                className="rounded-full py-2 px-4 w-full text-black focus:outline-none"
              />
              <button type="submit" className="absolute right-0 top-0 bottom-0 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-full transition-all duration-200">
                Search
              </button>
              {suggestions.length > 0 && (
                <div className="absolute bg-white text-black w-full mt-2 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto top-full left-0">
                  {suggestions.map((book) => (
                    <Link key={book.id} href={`/books/${book.id}`}>
                      <div className="p-2 hover:bg-gray-200 cursor-pointer">
                        {book.title}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </form>
          </div>
        )}
      </div>
    </main>
  );
}
