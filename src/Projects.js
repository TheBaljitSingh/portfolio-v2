import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";

function Project(props) {
    return (
        <div className="h-full">
            <h1 className='text-5xl fix font-normal p-2'>{props.title}</h1>
            <p className='p-4'>I'm a MERN Stack Developer. I have developed many frontend and backend projects.</p>
            
            <div className="overflow-auto h-96 p-2">

                <div className='p-4 border-solid rounded-xl'> 
                    <h3 className='text-2xl'>Weather Condition Checker ✅</h3>
                    <p className='p-2 mt-2'>You can check what's the weather condition in your city. Made with OpenWeather API.</p>
                    <div className='p-2 flex flex-row space-x-2 justify-center'>
                        <button className='w-22 h-10 justify-center items-center flex p-2 rounded-lg bg-blue-600 text-gray-300'>
                            <a href="https://weather-project-gx02.onrender.com/" className="flex items-center space-x-1" target="_blank">
                                <span>View Demo</span>
                                <LuExternalLink />
                            </a>
                        </button>
                        <button className='w-20 h-10 justify-center items-center flex p-2 rounded-lg bg-blue-600 text-gray-300'>
                            <a href="https://github.com/TheBaljitSingh/weather-condition-checker-project" className="flex items-center space-x-1" target="_blank">
                                <FaGithub />
                                <span>Github</span>
                            </a>
                        </button>
                    </div>
                </div>

                <div className='p-4 border-solid rounded-xl mt-2'>
                    <h3 className='text-2xl'>Chrome Extention for Linkedin Messaging ✅</h3>
                    <p className='p-2 mt-2'>This is Assignment Project | Developed a Chrome Extention for linkedin. which it enabel user to use it to generate text while messaging to people for better react or response</p>
                    <div className='p-2 flex flex-row space-x-2 justify-center'>
                        {/* <button className='w-22 h-10 justify-center items-center flex p-2 rounded-lg bg-blue-600 text-gray-300'>
                            <a href="https://fine-frontend.vercel.app/" className="flex items-center space-x-1" target="_blank">
                                <span>View Demo</span>
                                <LuExternalLink />
                            </a>
                        </button> */}
                        <button className='w-20 h-10 justify-center items-center flex p-2 rounded-lg bg-blue-600 text-gray-300'>
                            <a href="https://github.com/TheBaljitSingh/chrome-extention-for-linkedin-messaging" className="flex items-center space-x-1" target="_blank">
                                <FaGithub />
                                <span>Github</span>
                            </a>
                        </button>
                    </div>
                </div>

                <div className='p-4 border-solid rounded-xl mt-2'>
                    <h3 className='text-2xl'>ApnaBlog - a Blogging Platform ✅</h3>
                    <p className='p-2 mt-2'>ApnaBlog is a blogging website where you can create your posts and also view blogs shared publicly by other authors. Implemented Redux for article viewing.</p>
                    <div className='p-2 flex flex-row space-x-2 justify-center'>
                        <button className='w-22 h-10 justify-center items-center flex p-2 rounded-lg bg-blue-600 text-gray-300'>
                            <a href="https://apnadaily-blog.netlify.app/" className="flex items-center space-x-1" target="_blank">
                                <span>View Demo</span>
                                <LuExternalLink />
                            </a>
                        </button>
                        <button className='w-20 h-10 justify-center items-center flex p-2 rounded-lg bg-blue-600 text-gray-300'>
                            <a href="https://github.com/TheBaljitSingh/Apna-Blog-Backend" className="flex items-center space-x-1" target="_blank">
                                <FaGithub />
                                <span>Github</span>
                            </a>
                        </button>
                    </div>
                </div>

                <div className='p-4 border-solid rounded-xl mt-2'>
                    <h3 className='text-2xl'>E-Commerce Backend</h3>
                    <p className='p-2 mt-2'>Trying to create an E-commerce portal. This is the backend part under development.</p>
                    <div className='p-2 flex flex-row space-x-2 justify-center'>
                        <button className='w-20 h-10 justify-center items-center flex p-2 rounded-lg bg-blue-600 text-gray-300'>
                            <a href="https://github.com/TheBaljitSingh/E-Commerce-Backend" className="flex items-center space-x-1" target="_blank">
                                <FaGithub />
                                <span>Github</span>
                            </a>
                        </button>
                    </div>
                </div>

                <div className='p-4 border-solid rounded-xl mt-2'>
                    <h3 className='text-2xl'>Fine - Finance ✅</h3>
                    <p className='p-2 mt-2'>A portal that connects loan providers and loan seekers (frontend part).</p>
                    <div className='p-2 flex flex-row space-x-2 justify-center'>
                        <button className='w-20 h-10 justify-center items-center flex p-2 rounded-lg bg-blue-600 text-gray-300'>
                            <a href="https://github.com/TheBaljitSingh/Gfg-hackathon-regionalRound-frontend" className="flex items-center space-x-1" target="_blank">
                                <FaGithub />
                                <span>Github</span>
                            </a>
                        </button>
                    </div>
                </div>

                <div className='p-4 border-solid rounded-xl mt-2'>
                    <h3 className='text-2xl'>Fine - Finance ✅</h3>
                    <p className='p-2 mt-2'>Upgraded Version of Fine (Backend + Frontend).</p>
                    <div className='p-2 flex flex-row space-x-2 justify-center'>
                        <button className='w-22 h-10 justify-center items-center flex p-2 rounded-lg bg-blue-600 text-gray-300'>
                            <a href="https://fine-frontend.vercel.app/" className="flex items-center space-x-1" target="_blank">
                                <span>View Demo</span>
                                <LuExternalLink />
                            </a>
                        </button>
                        <button className='w-20 h-10 justify-center items-center flex p-2 rounded-lg bg-blue-600 text-gray-300'>
                            <a href="https://github.com/PatidarManas/Fine-lets-hack-parul" className="flex items-center space-x-1" target="_blank">
                                <FaGithub />
                                <span>Github</span>
                            </a>
                        </button>
                    </div>
                </div>

            
            </div>
        </div>
    )
}

export default Project;
