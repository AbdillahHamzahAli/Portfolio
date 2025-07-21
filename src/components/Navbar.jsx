import React, { useState } from "react";
import Logo from "../assets/H.dev.svg";
import { FaBars, FaTimes, FaGithub, FaInstagram } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
import resume from "../assets/resume/CV Hamzah 05072025.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-white text-black">
      <div className="ml-4">
        <img src={Logo} alt="Logo" style={{ width: "90px" }} />
      </div>
      {/* menu */}
      <div>
        <ul className="hidden md:flex">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skill" smooth={true} duration={500}>
              Skill
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* hamberger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skill" smooth={true} duration={500}>
            Skill
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="work" onClick={handleClick} smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black ">
            <a
              href="https://www.instagram.com/hamzah.tsx"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black ">
            <a
              href="https://github.com/AbdillahHamzahAli"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black ">
            <a
              href="mailto:abdillahhamzahali@gmail.com"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black ">
            <a
              href={resume}
              download
              className="flex justify-between items-center w-full text-gray-300"
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
