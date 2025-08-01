import React from 'react';
import { FaReact, FaNode, FaCss3, FaHtml5, FaVuejs, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { ChevronLeft, ChevronRight } from "lucide-react";
import invoiceImg from '../images/invoice-generator.png'
import eventSchedular from "../images/events-schedular.png"
import chatgptImg from '../images/chatgpt-clone.png'
import trustopay from "../images/trustupay logo.png";
import meetmux from "../images/meetmux_logo.jpeg"
import weatherImg from "../images/weather.png"
import GlobeTrotter from '../images/Globetrotter.png'


export default function Home() {

  const [index, setIndex] = React.useState(0);
  const handlePrev = () => setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  const handleNext = () => setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

  const projects = [
    {
      title: "Invoice Generator",
      description: "A Simple Invoice Generator Tool, Generate customizable invoices. Add your branding, calculate taxes, and download with effortlessly",
      tech: [<FaReact />, <SiTailwindcss />],
      image: invoiceImg,
      link: 'https://invoice-generator-in.vercel.app/'
    },
    {
      title: "Event Schedular",
      description: "Event Schedular: Scheduling Simplified Streamline your event planning process with our comprehensive platform",
      tech: [<FaReact />, <SiTailwindcss />, <FaNode />],
      image: eventSchedular,
      link: 'https://eventscheduling.vercel.app/'
    },
    {
      title: "Chatgpt Clone",
      description: "A clone of Chatgpt's website that take input and give answers of user",
      tech: [<FaReact />],
      image: chatgptImg,
      link: 'https://chatgpt-ui-ten-hazel.vercel.app/'
    },
    {
      title:"Globetrotter Game",
      description: "A Game assignment project where you have to guess the place via given clues. and you will get points +2 if its correct guess",
      image:GlobeTrotter,
      tech:[<FaReact/>, <FaNodeJs/>],
      link: 'https://headout-assignment-psi.vercel.app/'
    },
    {
      title:"Weather Condition Checker",
      description:'Real-time weather conditions using OpenWeather API.',
      tech:[<FaReact/>],
      image:weatherImg,
      link:'https://weather-cond-check.vercel.app/'
    }
  ];

  return (


    <div className="p-6 max-w-6xl mx-auto">
      {/* Profile Section */}
      <div className="text-center mb-10 mt-12">
        <h1 className="text-4xl font-bold text-gray-900">
          Baljit <span className="text-gray-600">Singh</span>
        </h1>
        <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full mt-2 inline-block">
          Software Engineer
        </span>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          A passionate Software Engineer. strong ability to create user-friendly and scalable System which is lovable by users.
        </p>
      </div>

      {/* Projects Header */}
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        I love building things
      </h2>

      {/* Carousel */}
      <div className="relative">
        <div className="overflow-hidden">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${index * 100}%)` }}>
            {projects.map((project, i) => (
              <div key={i} className="min-w-full p-4">
                <a href={project.link}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:cursor-pointer">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                      <div className="flex space-x-2 text-xl text-gray-500">{project.tech}</div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-gray-100"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-gray-100"
        >
          <ChevronRight />
        </button>
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
