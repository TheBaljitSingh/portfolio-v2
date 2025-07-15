import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";

function Experience(props) {
    return (
        <div className="p-4">
            {/* Experience Section */}
            <div className="mb-10">
                <h1 className="text-4xl font-bold underline underline-offset-4 decoration-2 mb-4">{props.title || "Experience"}</h1>
                <p className="mb-6">
                    As a MERN Stack Developer, I have developed numerous frontend and backend experiences, focusing on creating scalable and user-friendly applications.
                </p>

                {/* Internship 1 */}
                <div className="p-4 border-b border-black rounded-xl mb-6">
                    <div className="flex justify-between flex-wrap">
                        <h3 className="text-2xl font-semibold">Backend Developer Intern</h3>
                        <h6 className="text-2xl font-medium">March 2025 - Present</h6>
                    </div>
                    <ul className="list-disc list-inside mt-3 space-y-1">
                        <li>Working with a microservices architecture (Kafka)</li>
                        <li>Built Notification System Integrated with FCM (Firebase Cloud Messaging)</li>
                        <li>Used AWS S3 (presigned URLs and more)</li>
                        <li>Integrated Google Map APIs</li>
                    </ul>
                </div>

                {/* Internship 2 */}
                <div className="p-4 border-b border-black rounded-xl mb-6">
                    <div className="flex justify-between flex-wrap">
                        <h3 className="text-2xl font-semibold">Intern at Trustopay</h3>
                        <h6 className="text-2xl font-medium">Aug. 2024 - Sept. 2024</h6>
                    </div>
                    <div className="mt-2">
                        <a
                            href="https://x.com/thebaljitsingh/status/1904217031601487945"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 mt-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                        >
                            View Work
                        </a>
                    </div>
                    <ul className="list-disc list-inside mt-3 space-y-1">
                        <li>Worked as a React Developer, transforming Figma designs into web apps</li>
                        <li>Integrated backend APIs for dynamic data handling</li>
                    </ul>
                </div>
            </div>

            {/* Projects Section */}
            <div>
                <h1 className="text-4xl font-bold underline underline-offset-4 decoration-2 mb-4">Projects</h1>

                {/* List of Projects */}
                {[
                    {
                        title: "GlobeTrotter Game ✅",
                        description: "A web-based Game for Travelers. Integrated Google Gemini API to generate dynamic data.",
                        demo: "https://headout-assignment-psi.vercel.app/",
                        github: "https://github.com/TheBaljitSingh/Headout-assignment"
                    },
                    {
                        title: "Chrome Extension for LinkedIn Messaging ✅",
                        description: "A Chrome extension that generates optimized messages for LinkedIn.",
                        github: "https://github.com/TheBaljitSingh/chrome-extention-for-linkedin-messaging"
                    },
                    {
                        title: "Online Grievance Management ✅",
                        description: "Platform for lodging, tracking, and resolving grievances efficiently.",
                        demo: "https://online-grievance-management.vercel.app/",
                        github: "https://github.com/TheBaljitSingh/Online-Grievance-Management"
                    },
                    {
                        title: "ApnaBlog - Blogging Platform ✅",
                        description: "Users can create, share, and view posts. Redux used for state management.",
                        demo: "https://apnadaily-blog.netlify.app/",
                        github: "https://github.com/TheBaljitSingh/Apna-Blog-Backend"
                    },
                    {
                        title: "E-Commerce Backend ✅",
                        description: "A backend system for an e-commerce platform (under development).",
                        github: "https://github.com/TheBaljitSingh/E-Commerce-Backend"
                    },
                    {
                        title: "Fine - Finance ✅",
                        description: "A platform connecting loan providers and seekers. Includes frontend + backend.",
                        demo: "https://fine-frontend.vercel.app/",
                        github: "https://github.com/PatidarManas/Fine-lets-hack-parul"
                    },
                    {
                        title: "Weather Condition Checker ✅",
                        description: "Real-time weather conditions using OpenWeather API.",
                        demo: "https://weather-Experience-gx02.onrender.com/",
                        github: "https://github.com/TheBaljitSingh/weather-condition-checker-Experience"
                    },
                ].map((project, idx) => (
                    <div key={idx} className="p-4 border rounded-xl mb-4">
                        <h3 className="text-2xl font-semibold">{project.title}</h3>
                        <p className="p-2 mt-2">{project.description}</p>
                        <div className="p-2 flex space-x-2 justify-end">
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-32 h-10 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                                >
                                    <span>View Demo</span>
                                    <LuExternalLink className="ml-1" />
                                </a>
                            )}
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-32 h-10 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                                >
                                    <FaGithub className="mr-1" />
                                    <span>GitHub</span>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
