import React, { useState, useEffect } from "react";
import { Moon } from "lucide-react";
import { IoMdDocument } from "react-icons/io";

import profile from "../images/baljit.jpg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300
        ${scrolled
          ? "bg-white shadow-lg rounded-full w-[95%] md:w-[70%] px-4 md:px-6"
          : "bg-white/80 shadow-lg rounded-full w-[95%] md:w-[80%] px-4 md:px-6"
        }
      `}
    >
      <div className="flex items-center justify-between h-16">
        {/* Profile Image */}
        <div className="flex-shrink-0">
            <a href="/">
          <img
            src={profile}
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
            />
            </a>
        </div>

        {/* Nav Links */}
        <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6 text-sm sm:text-base">
          {/* <Moon className="w-5 h-5 text-gray-600" /> */}
          <a href="/" className="hover:text-blue-600 transition">Home</a>
          <a href="/achievements" className="hover:text-blue-600 transition">Achievement</a>
          <a href="/about" className="hover:text-blue-600 transition">About</a>
  <div className="relative group inline-block">
      <a
        href="https://drive.google.com/file/d/1yC6xGLULYRBVWeug_EWgIaiX_EgCFCyS/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoMdDocument className="w-5 h-5 text-gray-600" />
      </a>

      {/* Tooltip */}
      <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-max px-3 py-1 text-sm text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        View Resume
      </div>
    </div>          {/* <a href="/contact" className="hover:text-blue-600 transition">Contact</a> */}
          {/* <a href="#projects" className="hover:text-blue-600 transition">Projects</a> */}
        </div>
      </div>
    </nav>
  );
}
