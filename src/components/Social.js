import React, { useEffect, useState } from 'react'
import { FaStackOverflow, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { LuExternalLink } from "react-icons/lu";
import { SiLeetcode } from "react-icons/si";



export default function Social() {


  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={` bg-yewala text-gray-400 flex  w-screen p-8  ${isScrolled?'sticky':'fixed'} ` } >
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
