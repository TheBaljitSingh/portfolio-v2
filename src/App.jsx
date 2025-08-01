import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from "./pages/About";
import MainLayout from './Layout/MainLayout';
import Achievement from "./pages/Achievement.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="achievements" element={<Achievement />} />
      </Route>
    </Routes>
  );
}
