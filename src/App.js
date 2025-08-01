import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from "./pages/About";
import MainLayout from './Layout/MainLayout';
import Achievement from "./pages/Achievement.jsx"

export default function App() {
  return (
       <Router>
    <MainLayout >
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/acheivments' element={<Achievement/>} />

      </Routes>
    </MainLayout>

   </Router>
  )
}
