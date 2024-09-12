import React from 'react';
import logo from "../images/portt.png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='bg-red flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <img src={logo} alt="logo" style={{ width: '60px', height: 'auto' }} />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a 
          href="https://www.linkedin.com/in/harsh-gupta-554a02310/" 
          className='p-2 rounded-full hover:bg-gray-700'
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/harsh164" 
          className='p-2 rounded-full hover:bg-gray-700'
        >
          <FaGithub />
        </a>
        <a 
          href="https://x.com/Hgupta164" 
          className='p-2 rounded-full hover:bg-gray-700'
        >
          <FaTwitter />
        </a>
        <a 
          href="https://www.instagram.com/your-profile" 
          className='p-2 rounded-full hover:bg-gray-700'
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
