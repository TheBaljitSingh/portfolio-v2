import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";

function Project(props) {
    return (
        <div className=" p-4  ">
            <h1 className="text-5xl font-normal p-2 underline underline-offset-4 decoration-2">{props.title}</h1>
            <p className="p-4">As a MERN Stack Developer, I have developed numerous frontend and backend projects, focusing on creating scalable and user-friendly applications.</p>

            {/* Internship Section */}
            <div className="p-4 border-b border-black rounded-xl mb-6">
                <div className="flex justify-between">
                <h3 className="text-2xl font-semibold">Intern at Trustopay | 2024</h3>
                <div className="p-2 flex justify-center">
                    <a
                        href="https://trustopay-new.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-32 h-10 rounded-lg bg-blue-600 text-gray-300 hover:bg-blue-700 transition-colors"
                    >
                        <span>work</span>
                    </a>
                </div>


                </div>
                <ul className="list-disc list-inside p-2 mt-2 space-y-2">
                <ul>+ Worked as a React Developer, building web applications from scratch—transforming Figma designs into fully deployable websites.</ul>  
<ul>+ Integrated backend APIs to enhance dynamic data handling and improve application functionality.</ul>

                </ul>
             
            </div>

            {/* Projects Section */}
            <div className=" p-2">
                {/* Weather Condition Checker */}
                

              

                {/* Online Grievance Management */}
                <div className="p-4 border rounded-xl mb-4">
                    
                    <h3 className="text-2xl font-semibold ">  Online Grievance Management ✅</h3>
                    <p className="p-2 mt-2">A web-based platform for lodging, tracking, and resolving grievances efficiently.</p>
                    <div className="p-2 flex space-x-2 justify-end">
                        <a
                            href="https://online-grievance-management.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-32 h-10 rounded-lg bg-blue-600 text-gray-300 hover:bg-blue-700 transition-colors"
                        >
                            <span>View Demo</span>
                            <LuExternalLink className="ml-1" />
                        </a>
                        <a
                            href="https://github.com/TheBaljitSingh/Online-Grievance-Management"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-32 h-10 rounded-lg bg-blue-600 text-gray-300 hover:bg-blue-700 transition-colors"
                        >
                            <FaGithub className="mr-1" />
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>

                  {/* Chrome Extension for LinkedIn Messaging */}
                  <div className="p-4 border rounded-xl mb-4">
                    <h3 className="text-2xl font-semibold ">Chrome Extension for LinkedIn Messaging ✅</h3>
                    <p className="p-2 mt-2">A Chrome extension that assists users in generating optimized messages for better responses on LinkedIn.</p>
                    <div className="p-2 flex space-x-2 justify-end">
                        <a
                            href="https://github.com/TheBaljitSingh/chrome-extention-for-linkedin-messaging"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-32 h-10 rounded-lg bg-blue-600 text-gray-300 hover:bg-blue-700 transition-colors"
                        >
                            <FaGithub className="mr-1" />
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>

                {/* ApnaBlog - Blogging Platform */}
                <div className="p-4 border rounded-xl mb-4">
                    <h3 className="text-2xl font-semibold ">ApnaBlog - Blogging Platform ✅</h3>
                    <p className="p-2 mt-2">A blogging platform where users can create, share, and view posts. Implemented Redux for state management.</p>
                    <div className="p-2 flex space-x-2 justify-end">
                        <a
                            href="https://apnadaily-blog.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-32 h-10 rounded-lg bg-blue-600 text-gray-300 hover:bg-blue-700 transition-colors"
                        >
                            <span>View Demo</span>
                            <LuExternalLink className="ml-1" />
                        </a>
                        <a
                            href="https://github.com/TheBaljitSingh/Apna-Blog-Backend"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-32 h-10 rounded-lg bg-blue-600 text-gray-300 hover:bg-blue-700 transition-colors"
                        >
                            <FaGithub className="mr-1" />
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>

                {/* E-Commerce Backend */}
                <div className="p-4 border rounded-xl mb-4">
                    <h3 className="text-2xl font-semibold ">E-Commerce Backend ✅</h3>
                    <p className="p-2 mt-2">A backend system for an e-commerce platform currently under development.</p>
                    <div className="p-2 flex space-x-2 justify-end">
                        <a
                            href="https://github.com/TheBaljitSingh/E-Commerce-Backend"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-32 h-10 rounded-lg bg-blue-600 text-gray-300 hover:bg-blue-700 transition-colors"
                        >
                            <FaGithub className="mr-1" />
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>

                {/* Fine - Finance */}
                <div className="p-4 border rounded-xl mb-4">
                    <h3 className="text-2xl font-semibold ">Fine - Finance ✅</h3>
                    <p className="p-2 mt-2">An upgraded version of Fine, a platform connecting loan providers and seekers (backend + frontend).</p>
                    <div className="p-2 flex space-x-2 justify-end">
                        <a
                            href="https://fine-frontend.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-32 h-10 rounded-lg bg-blue-600 text-gray-300 hover:bg-blue-700 transition-colors"
                        >
                            <span>View Demo</span>
                            <LuExternalLink className="ml-1" />
                        </a>
                        <a
                            href="https://github.com/PatidarManas/Fine-lets-hack-parul"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-32 h-10 rounded-lg bg-blue-600 text-gray-300 hover:bg-blue-700 transition-colors"
                        >
                            <FaGithub className="mr-1" />
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
                <div className="p-4 border rounded-xl mb-4">
                    <h3 className="text-2xl font-semibold ">Weather Condition Checker ✅</h3>
                    <p className="p-2 mt-2">A web application to check real-time weather conditions in any city using the OpenWeather API.</p>
                    <div className="p-2 flex  space-x-2 justify-end">
                        <a
                            href="https://weather-project-gx02.onrender.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-32 h-10 rounded-lg bg-blue-600 text-gray-300 hover:bg-blue-700 transition-colors"
                        >
                            <span>View Demo</span>
                            <LuExternalLink className="ml-1" />
                        </a>
                        <a
                            href="https://github.com/TheBaljitSingh/weather-condition-checker-project"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-32 h-10 rounded-lg bg-blue-600 text-gray-300 hover:bg-blue-700 transition-colors"
                        >
                            <FaGithub className="mr-1" />
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;