import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className="relative min-h-screen px-4 md:px-20 lg:px-52 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 -z-20 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

      {/* Radial gradient centered behind navbar */}
      <div className="absolute -z-10 h-full w-full pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_120px,#C9EBFF,transparent)]"></div>
      </div>

      <Navbar />

      <main className="flex-grow pt-24">
        <Outlet/>
      </main>

      <Footer />
    </div>
  )
}

export default MainLayout
