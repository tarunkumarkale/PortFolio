import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full flex flex-wrap md:flex-nowrap">
      <div className="w-full md:w-70% bg-black text-white p-4 flex justify-between items-center">
        <div>My Portfolio</div>
        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Navigation Links */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } w-full md:w-[42.5%]  bg-black text-green-700 p-4 md:flex md:items-center md:justify-center`}
      >
        <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 gap-5">
          <Link
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          className="cursor-pointer text-xl font-bold pl-[-30%]"
            onClick={toggleMenu} // Close menu on click
            
          >
     About_Me
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        className="cursor-pointer text-xl  font-bold"
            onClick={toggleMenu} // Close menu on click
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
       className="cursor-pointer text-xl  font-bold"
            onClick={toggleMenu} // Close menu on click
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
