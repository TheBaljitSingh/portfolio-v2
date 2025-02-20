import React, { useEffect, useState } from 'react'
import { FaStackOverflow, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { LuExternalLink } from "react-icons/lu";
import { SiLeetcode } from "react-icons/si";



export default function Social() {


  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      // console.log(scrollTop);
      if (scrollTop > 200 && scrollTop > lastScrollTop) {
        setIsScrolled(true); // Hide header on scroll down
      } else if (scrollTop < 250) {
        setIsScrolled(false); // Show header on scroll up
      }
      setIsScrolled(scrollTop <= 0 ? 0 : scrollTop); // For mobile or negative scrolling
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={` bg-yewala text-gray-400 flex  w-screen p-8 fixed ${isScrolled?'shadow-md':''} ` } >
    <div className='flex-1 flex justify-center mr-auto'>
    <h2 className='font-semibold text-2xl hover:cursor-pointer '>Baljit Singh</h2>
    </div>   
    <div className='mx-72'>
    </div> 
    <div className='flex-1 flex justify-center ml-auto space-x-5 '>

      <div > <a href="https://stackoverflow.com/users/11642996/baljit-singh">< FaStackOverflow size={30} /></a>
      </div>
      <div > <a href=" https://leetcode.com/thebaljitsingh/">< SiLeetcode size={30} /></a>
      </div>
      <div>  <a href="https://www.linkedin.com/in/thebaljitsingh/"><FaLinkedin size={30} /></a>
      </div>
      <div>   <a href="https://github.com/TheBaljitSingh"><FaGithub size={30} /></a>
      </div>
    
               
     
    </div>      
</nav>
  )
}
