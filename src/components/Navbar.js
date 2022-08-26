import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="nav fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#ffffff] text-black">
      <div>
        <h1 className="text-4xl sm:text-4xl font-bold text-[#ffffff]">
          PRINCE
        </h1>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <a href="/" className=" hover:text-[#ffffff]">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-[#ffffff]">
            About
          </a>
        </li>
        <li>
          <a href="/skills" className="hover:text-[#ffffff]">
            Skills
          </a>
        </li>
        <li>
          <a href="/work" className="hover:text-[#ffffff]">
            Work
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:text-[#ffffff]">
            Contact
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#ffffff] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <a href="/home">Home</a>
        </li>
        <li className="py-6 text-4xl">
          <a href="/about">About</a>
        </li>
        <li className="py-6 text-4xl">
          <a href="/skills">Skills</a>
        </li>
        <li className="py-6 text-4xl">
          <a href="/work">Work</a>
        </li>
        <li className="py-6 text-4xl">
          <a href="/contact">Contact</a>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="shadow-lg shadow-[#7d7d7d] w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#034eb6] ">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://www.linkedin.com/in/dingan-mkhize-b2153518a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="shadow-lg shadow-[#7d7d7d] w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] ">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://github.com/Dingan-Mkhize"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="shadow-lg shadow-[#7d7d7d] w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0c8179] ">
            <a
              className="flex justify-between items-center w-full text-white"
              href="/contact"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="shadow-lg shadow-[#7d7d7d] w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#dadfdf] ">
            <a
              className="flex justify-between items-center w-full text-grey-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
