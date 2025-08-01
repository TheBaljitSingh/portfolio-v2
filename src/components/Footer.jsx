import React from "react";
import { FaStackOverflow } from "react-icons/fa";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import {MdEmail} from 'react-icons/md'

const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-4 md:px-8 py-4 border-t text-gray-600 text-sm bottom-0">
      {/* Left text */}
      <p>
        Built with love by{" "}
        <a
          href="https://thebaljitsingh.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:underline"
        >
          Baljit Singh
        </a>
      </p>

      {/* Icons */}
      <div className="flex space-x-4 text-xl">
        <a
          href="https://twitter.com/thebaljitsingh"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://linkedin.com/in/thebaljitsingh"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/thebaljitsingh"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://stackoverflow.com/users/11642996/baljit-singh"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition"
        >
          <FaStackOverflow />
        </a>
        <a
          href="mailto:thebaljitsinghin@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition"
        >
          <MdEmail/>
          
          
          
        </a>
      </div>
    </footer>
  );
};

export default Footer;
