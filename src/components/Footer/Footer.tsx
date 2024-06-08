import Image from "next/image";
import Link from "next/link";
import logo from '../../../public/studyretro.svg';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-5">
        <div className="flex items-center">
        <Image
            src={logo}
            alt="StudyRetro Logo"
            width={250}
            height={500}
            className="ml-5 mb-4 md:mb-0 md:ml-0 md:mr-6"
          />          <p className="ml-2 text-sm">© 2024 StudyRetro. All rights reserved.</p>
        </div>
        <nav className="mt-4 md:mt-0">
          <ul className="flex flex-col md:flex-row list-none">
            <li className="mr-4 mb-2 md:mb-0">
              <Link href="/about">
                <button className="hover:text-gray-400">About Us</button>
              </Link>
            </li>
            <li className="mr-4 mb-2 md:mb-0">
              <Link href="/contact">
                <button className="hover:text-gray-400">Contact</button>
              </Link>
            </li>
            <li>
              <Link href="/faq">
                <button className="hover:text-gray-400">FAQ</button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
