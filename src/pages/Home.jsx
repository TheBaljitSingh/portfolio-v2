import React from 'react';
import { FaReact, FaNode, FaCss3, FaHtml5, FaVuejs, FaNodeJs, FaGithub, FaIntercom, FaInternetExplorer } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { ChevronLeft, ChevronRight } from "lucide-react";
import invoiceImg from '../images/invoice-generator.png'
import eventSchedular from "../images/events-schedular.png"
import chatgptImg from '../images/chatgpt-clone.png'
import trustopay from "../images/trustupay logo.png";
import meetmux from "../images/meetmux_logo.jpeg"
import weatherImg from "../images/weather.png"
import GlobeTrotter from '../images/Globetrotter.png'
import { CiGlobe } from 'react-icons/ci';


export default function Home() {

  const [index, setIndex] = React.useState(0);
  const handlePrev = () => setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  const handleNext = () => setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

  const projects = [
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
      title: "Weather Condition Checker",
      description: 'Real-time weather conditions using OpenWeather API.',
      tech: ['React'],
      image: weatherImg,
      link: ['https://github.com/TheBaljitSingh/weather-condition-checker-project', 'https://weather-cond-check.vercel.app/']
    }
  ];
  const skills = [
    "C++", "React", "Node.js", "Javascript", "Node.js", "Next.js", "Postgres", "Docker", "AWS"
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
        <h2 className="text-xl font-semibold mb-4">Skills</h2>
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


        <h2 className="text-3xl font-bold mb-8">My Projects</h2>


      </div>
      {/* grid card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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



      <div className="min-h-screen py-16 px-4 md:px-10  text-gray-800">
        <h2 className="text-3xl font-bold mb-8">Work Experience</h2>

        {/* MeetMux */}
        <div className="mb-10">
          <div className="flex items-center space-x-2">
            <h3 className="text-xl font-semibold">
              Backend Developer Intern @ MeetMux
            </h3>
            <img src={meetmux} alt="Trustopay Logo" className="w-6 h-6 object-contain" />
          </div>

          <p className="text-sm text-gray-500">Mar 2025 – Present · Remote</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Working on Event-Driven Architecture with Kafka</li>
            <li>Built Notification System with FCM (Firebase Cloud Messaging)</li>
            <li>Designed a scalable post schema for structured live, planned and general activity</li>
            <li>Contributed to restructuring the backend from monolithic to multiple microservices</li>
            <li><strong>Tech Stack:</strong> Node.js, Express, Docker, Kafka, Sequelize, PostgreSQL, Firebase</li>
          </ul>
        </div>

        {/* Trustopay */}
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="text-xl font-semibold">
              React Developer Intern @ Trustopay
            </h3>
            <img src={trustopay} alt="Trustopay Logo" className="w-6 h-6 object-contain" />
          </div>
          <p className="text-sm text-gray-500">Aug 2024 – Sept 2024 · Vadodara, India</p>
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
