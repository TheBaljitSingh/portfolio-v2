import { FaStackOverflow, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { LuExternalLink } from "react-icons/lu";

function Project(props){
    return (
        <div className="h-full">
            <h1 className='text-5xl fix font-normal p-2'>{props.title} </h1>
                <p className='p-4'>I'm MERN Stack Developer. I have developed many frontend and backend projects.</p>
                {/* ye hai project ka content */}


                <div className=" overflow-auto h-96 p-2 ">

                <div className='p-4  border-solid rounded-xl'> 
                  <h3 className='text-2xl'>Weather Condition Checker ✅</h3>
                  <p className='p-2 mt-2'>You can check what's the weather conditin in you city. made with openweather API</p>
                  <div className='p-2 flex flex-row space-x-2 justify-center'>
                    <button className='w-22 space-x-1 h-10 justify-center items-center flex p-2 rounded-lg bg-blue-600 text-gray-300'><a href="https://weather-project-gx02.onrender.com/">View Demo </a><LuExternalLink /></button>
                    <button className='w-20 h-10 space-x-1 justify-center items-center flex  p-2 rounded-lg bg-blue-600 text-gray-300'><a href="https://github.com/TheBaljitSingh/weather-condition-checker-project">Github </a><LuExternalLink /></button>
                  </div>
                </div>

                <div className='p-4 border-solid rounded-xl mt-2'>
                  <h3 className='text-2xl'>ApnaBlog- a Blogging Platform ✅</h3>
                  <p className='p-2 mt-2'>ApnaBlog is a blogging website where you can create your posts and also view blogs shared publicly by other authors. To enable article viewing, I have implemented Redux.</p>
                  <div className='p-2 flex flex-row space-x-2 justify-center'>
                    <button className='w-22 space-x-1 h-10 justify-center items-center flex p-2 rounded-lg bg-blue-600 text-gray-300'><a href="https://apnadaily-blog.netlify.app/" target="_blank">View Demo </a><LuExternalLink /></button>
                    <button className='w-20 h-10 space-x-1 justify-center items-center flex  p-2 rounded-lg bg-blue-600 text-gray-300'><a href="https://github.com/TheBaljitSingh/Apna-Blog-Backend/" target="_blank">Github </a><LuExternalLink /></button>
                  </div>
                </div>

                <div className='p-4 border-solid rounded-xl mt-2'>
                  <h3 className='text-2xl'>E-Commerce Backend </h3>
                  <p className='p-2 mt-2'> Trying to create a E-commerce portal. this is backend part under development</p>
                   <div className='p-2 flex flex-row space-x-2 justify-center'>
                    {/* <button className='w-22 space-x-1 h-10 justify-center items-center flex p-2 rounded-lg bg-blue-600 text-gray-300'><a href="https://apnadaily-blog.netlify.app/" target="_blank">View Demo </a><LuExternalLink /></button> */}
                    <button className='w-20 h-10 space-x-1 justify-center items-center flex  p-2 rounded-lg bg-blue-600 text-gray-300'><a href="https://github.com/TheBaljitSingh/E-Commerce-Backend" target="_blank">Github </a><LuExternalLink /></button>
                  </div>
                </div>

                <div className='p-4 border-solid rounded-xl mt-2'>
                  <h3 className='text-2xl'>Fine - Finance ✅  </h3>
                  <p className='p-2 mt-2'>A portal that Connect loan provider and loan seeker (frontend part)  </p>
                   <div className='p-2 flex flex-row space-x-2 justify-center'>
                    {/* <button className='w-22 space-x-1 h-10 justify-center items-center flex p-2 rounded-lg bg-blue-600 text-gray-300'><a href="/" target="_blank">View Demo </a><LuExternalLink /></button> */}
                    <button className='w-20 h-10 space-x-1 justify-center items-center flex  p-2 rounded-lg bg-blue-600 text-gray-300'><a href="https://github.com/TheBaljitSingh/Gfg-hackathon-regionalRound-frontend" target="_blank">Github </a><LuExternalLink /></button>
                  </div>
                </div>
                </div>
              

        </div>
    )
}
export default Project;