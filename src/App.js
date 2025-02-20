import './App.css';
import { useState, useEffect } from 'react';


import Baljit from "../src/Baljit_maskup.jpg";
import Project from './Projects';
import Contact from './Contact';
import Acheivment from './Acheivment';
import Social from "./components/Social"



function App(){

  
  const [showDiv, setDiv] = useState({
    id: "Welcome!"
  });
  
  useEffect(()=>{
    console.log(showDiv);
  }, [showDiv]);

  const toggleDiv = (e)=>{

    setDiv({
      id: e.target.id,
    });
  };
  

  return (
    <div >
  <Social/>
      <div className='max-w-full max-h-full bg-yewala'>
      {/* here navbar will go */}
         
        <main className='  text-gray-400  '>

        <a href="mailto:thebaljitsinghin@gmail.com" className=' fixed bottom-0 right-0 transform rotate-90 mb-64 text-xl font-normal mail'>
          <span className='text-yellow-300'>@ </span>|  <span className='select-all'>thebaljitsinghIN@gmail.com</span>
        </a>

          <div className='max-w-[1158px]  h-screen flex m-auto justify-between '>
            <div className=' w-2/3 flex-row my-8'> {/* margin change kar ke dekh le */}
              {/* this is for content */}
              <div className='my-15 mt-20  '>
                <div className={showDiv.id==="Welcome!"? "Welcome!  font-thin": "hidden"}>
                <h1 className='text-5xl  font-normal p-2 underline underline-offset-4 decoration-2 mb-8'>Welcome!</h1>

                {/* <h1 className='text-5xl fix  '>{props.title}</h1> */}

                <p className='border-l border-blue-600 rounded-lg shadow-gray-400 p-4 text-xl '>Hey, I'm 
                <span className='inline-flex items-baseline '>
                  <a href="https://www.linkedin.com/in/thebaljitsingh"> 
                    <img src={Baljit} alt="Baljit Singh from Parul University" className='self-center w-5 h-5 rounded-full mx-1 ' /> 
                    </a> 
                    <span>Baljit </span> 
                </span>
                 .  A passionate Software Engineering student graduating in 2025, excelling in web development, programming, data structures, and algorithms. Proficient in HTML, CSS, JavaScript, React, and Node.js, with a strong ability to create user-friendly and scalable web applications. Demonstrated teamwork and problem-solving skills through active participation in hackathons and collaborative projects. seeking opportunities to contribute to innovative and impactful projects. let’s connect to collaborate for mutual growth and success!                </p>
                </div>
                <div className={showDiv.id==="Project"? "Project": "hidden" } >
                <Project title="Project" />
                
                </div>
                <div className={showDiv.id==="Acheivment"? "Acheivment": "hidden"} >
                <Acheivment title="Acheivment"/>
               
                </div>
                <div className={showDiv.id==="Contact"? "Contact": "hidden"} >
                  <Contact title="Contact me"/>

               
                </div>
              </div>

            </div>
            
         
            <div className='fixed w-1/3 h-auto ml-[700px] mt-[240px] '>
              {/* this is for sidebar */}
              <div className='flex flex-col items-center justify-center w-full mb-32 '>
              
              <div>
                <button id='Welcome!' onClick={(e)=>{toggleDiv(e)}}  className='w-32 p-4 text-lg focus:text-gray-300  rounded-lg ease-in-out duration-100 ' >Welcome</button>
              </div>
              <div>
                <button id='Project' onClick={(e)=> toggleDiv(e)} className='w-32 p-4 text-lg focus:text-gray-300   rounded-lg ease-in-out duration-100'  >Projects</button>
              </div>
              <div>
                <button id='Acheivment' onClick={(e)=>{toggleDiv(e)}} className='w-32 p-4 text-lg focus:text-gray-300     rounded-lg ease-in-out duration-100'  >Acheivments</button>
              </div>
              <div>
                <button id='Contact' onClick={(e)=>{toggleDiv(e)}} className=' w-32 p-4 text-lg focus:text-gray-300   rounded-lg ease-in-out duration-100' >Contact</button>
              </div>
                
            </div>
            </div>
          </div>
          


        </main>

      <footer>
        {/* footer */}
      </footer>
      </div>
        
        
    </div>
  )
}

export default App;
