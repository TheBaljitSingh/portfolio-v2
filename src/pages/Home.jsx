import React from 'react';
import { FaReact, FaNode, FaCss3, FaHtml5, FaVuejs, FaNodeJs, FaGithub, FaIntercom, FaInternetExplorer } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { ChevronLeft, ChevronRight } from "lucide-react";
import invoiceImg from '../images/invoice-generator.png'
import cloudImg from "../images/cloud_dhcp.jpeg"
import eventSchedular from "../images/events-schedular.png"
import chatgptImg from '../images/chatgpt-clone.png'
import trustopay from "../images/trustupay logo.png";
import meetmux from "../images/meetmux_logo.jpeg"
import weatherImg from "../images/weather.png"
import GlobeTrotter from '../images/Globetrotter.png'
import Leadmanagement from "../images/lead_management.png"
import ReportManagement from "../images/reportmanagement.png"
import { CiGlobe } from 'react-icons/ci';


export default function Home() {

  const [index, setIndex] = React.useState(0);
  const handlePrev = () => setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  const handleNext = () => setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

  const projects = [
    {
      title:"Hosting Service(like vercel)",
      description:"Created React app hosting service, its like vercel feature to deploy you react application to cloud",
      tech:['Typescript', 'Node.js','AWS S3', 'React'],
      image:cloudImg,
      link:['https://github.com/TheBaljitSingh/vercel-v2']
    },
    {
      title: "Invoice Generator",
      description: "A Simple Invoice Generator Tool, Generate customizable invoices. Add your branding, calculate taxes, and download with effortlessly",
      tech: ['React', 'TailwindCss'],
      image: invoiceImg,
      link: ['https://github.com/TheBaljitSingh/invoice-generator', 'https://invoice-generator-in.vercel.app/']
    },
    {
      title: "Event Schedular",
      description: "Event Schedular: Scheduling Simplified Streamline your event planning process with our comprehensive platform",
      tech: ['React', 'TailwindCss', 'Nodejs'],
      image: eventSchedular,
      link: ['https://github.com/TheBaljitSingh/EventSchedular_Frontend', 'https://eventscheduling.vercel.app/']
    },
    {
      title: "Chatgpt Clone",
      description: "A clone of Chatgpt's website that take input and give answers of user",
      tech: ['Nextjs', 'TailwindCss'],
      image: chatgptImg,
      link: ['https://github.com/TheBaljitSingh/chatgpt-ui', 'https://chatgpt-ui-ten-hazel.vercel.app/']
    },
    {
      title: "Globetrotter Game",
      description: "A Game assignment project where you have to guess the place via given clues. and you will get points +2 if its correct guess",
      image: GlobeTrotter,
      tech: ['React', 'Node.js', 'Google Gimini', 'Mongodb'],
      link: ['https://github.com/TheBaljitSingh/Headout-assignment', 'https://headout-assignment-psi.vercel.app/']
    },
    {
      title:"Lead management portal",
      description:"A portal to manage the leads(like a camapign data..), performing CRUD operation with backend support, integrated AG Grid in react",
      image: Leadmanagement,
      tech: ['React', "Node.js", "Tailwind Css", "Git"],
      link: ['https://github.com/TheBaljitSingh/Erino-assignment', 'https://erino-assignment-five.vercel.app/']
    },
    {
      title:"Report submission portal",
      description:"upload the report in csv format, asynchronously it will process using Queue machanism",
      image: ReportManagement,
      tech: ["Node.js", "Bullmq", "Redis", "React"],
      link: ['https://github.com/TheBaljitSingh/reports', 'https://reports-blue-pi.vercel.app/login']
    },
    {
      title: "Weather Condition Checker",
      description: 'Real-time weather conditions using OpenWeather API.',
      tech: ['React'],
      image: weatherImg,
      link: ['https://github.com/TheBaljitSingh/weather-condition-checker-project', 'https://weather-cond-check.vercel.app/']
    }
  ];
  const skills = [
    "C++", "React", "Node.js", "Javascript", "Node.js", "Next.js", "Postgres", "Docker","Kafka", "AWS"
  ];

  return (


    <div className="p-6 max-w-6xl mx-auto">
      {/* Profile Section */}
      <div className="text-center mb-10 mt-12">
        <h1 className="text-4xl font-bold text-gray-900">
          Hi, I'm Baljit 👋
        </h1>
        <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full mt-2 inline-block">
          Aspiring Software Engineer
        </span>

      </div>

      <div className="my-6">
        <h2 className="text-2xl font-bold mb-6 ">Skills</h2>
        <div className="flex flex-wrap gap-3  justify-center">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-black text-white px-3 py-1 rounded-full text-sm font-semibold shadow"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Projects Header */}
      <div className='flex justify-start mt-12'>




      </div>
      {/* grid card */}
        <h2 className="text-3xl font-bold mb-8 ">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:px-4">
        {projects.map((project, i) => (
          <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <a href={project.link[1]}>

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover hover:cursor-pointer"
              />
              </a>

            <div className="p-4 space-y-2">
              {/* Title & Description */}
              <h3 className="font-bold text-lg">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 text-sm">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links: Website & Source */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={project.link[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-gray-800"
                >
                  <CiGlobe className="text-base" />
                  Website
                </a>
                <a
                  href={project.link[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-gray-800"
                >
                  <FaGithub className="text-base" />
                  Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>



    <div className="min-h-screen py-16 md:px-1 text-gray-800">
  <h2 className="text-3xl font-bold mb-8 ">Work Experience</h2>

  {/* MeetMux */}
  <div className="mb-10 md:px-4">
<div className="flex items-end space-x-2">
  <h3 className="text-xl font-semibold">
    Software Engineer – MeetMux
  </h3>
  <a
    href="https://www.linkedin.com/company/meetmux/" // Replace with actual LinkedIn URL
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block"
  >
    <img
      src={meetmux}
      alt="Meetmux Logo"
      className="w-6 h-6 object-contain"
    />
  </a>
</div>


    <p className="text-sm text-gray-500"> Remote · Internship · Mar 2025 – Present</p>

    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Working on Event-Driven Architecture with Kafka</li>
      <li>Built Notification System with FCM (Firebase Cloud Messaging)</li>
      <li>Designed a scalable post schema for structured live, planned and general activity</li>
      <li>Contributed to restructuring the backend from monolithic to multiple microservices</li>
      <li><strong>Tech Stack:</strong> Node.js, Express, Docker, Kafka, Sequelize, PostgreSQL, Firebase</li>
    </ul>
  </div>

  {/* Trustopay */}
  <div className='mb-10 md:px-4'>
    <div className="flex items-end space-x-2">
  <h3 className="text-xl font-semibold">
    Software Engineer – MeetMux
  </h3>
  <a
    href="https://www.linkedin.com/company/trustopayy" // Replace with actual LinkedIn URL
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block"
  >
    <img
      src={trustopay}
      alt="Trustopay logo"
      className="w-6 h-6 object-contain"
    />
  </a>
</div>

    <p className="text-sm text-gray-500">Vadodara · Internship · Aug 2024 – Sept 2024</p>

    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Designed and implemented the front-end architecture for Trustopay web app</li>
      <li>Enhanced user engagement by 40% and reduced drop-off rates by 25%</li>
      <li>Built reusable React components for scalable development</li>
      <li>Optimized performance using best industry practices</li>
    </ul>
  </div>
</div>

    </div>
  )
}
