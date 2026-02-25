import React, { useState, useEffect, useRef } from "react";
import { IoMdDocument } from "react-icons/io";
import profile from "../images/baljit.jpg";
import { gsap } from "gsap";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const logoRef = useRef(null);
  const linkRefs = useRef([]);

  // Track scroll for background change
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Simple GSAP animation on load
  useEffect(() => {
    gsap.set(logoRef.current, { y: 20, opacity: 0 });
    gsap.set(linkRefs.current, { y: 20, opacity: 0 });

    const tl = gsap.timeline();
    tl.to(logoRef.current, { y: 0, opacity: 1, duration: 1, ease: "power2.in" },0); // <-- start at 0
    tl.to(linkRefs.current,{ y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.in" },0); // <-- start at 0 (same time as logo)
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
           <a ref={(el) => (linkRefs.current[0] = el)} href="/" className="opacity-0 hover:text-blue-600 transition">
            Home
          </a>
        </div>

        {/* Nav Links */}
        <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6 text-sm sm:text-base">
          {/* <a ref={(el) => (linkRefs.current[0] = el)} href="/" className="opacity-0 hover:text-blue-600 transition">
            Home
          </a> */}
          <a ref={(el) => (linkRefs.current[1] = el)} href="/achievements" className="opacity-0 hover:text-blue-600 transition">
            Achievement
          </a>
          <a ref={(el) => (linkRefs.current[2] = el)} href="/about" className="opacity-0 hover:text-blue-600 transition">
            About
          </a>
          <a
            ref={(el) => (linkRefs.current[3] = el)}
            href="https://drive.google.com/file/d/1sOr0T8aO96cM3DR0lSLrm7Osz-_jWd4x/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-0"
          >
            <IoMdDocument className="w-5 h-5 text-gray-600" />
          </a>
        </div>
      </div>
    </nav>
  );
}
