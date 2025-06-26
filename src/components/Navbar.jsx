// import React from "react";
// import logo from "../assets/SP.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className=" mb-20 flex items-center justify-end py-2">
        {/* <div className="flex flex-shrink-0 items-center">
          <img className="mx-2 opacity-70 " width={120} src={logo} alt="" />
        </div> */}
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/n-sailendra-prasath">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/sailendraprasath">
            <FaGithub size={30} />
          </a>
          {/* <FaSquareXTwitter /> */}
          {/* <a href="https://www.instagram.com/____saileshhhh____?igsh=MWtwMnJid2xzZ3ZwYg==">
            <FaInstagram />
          </a> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
