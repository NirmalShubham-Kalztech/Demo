import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";


export default function App() {
return (
<div className="min-h-screen flex flex-col bg-gray-50">
  <Navbar />


  <div className="flex-grow">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
  </div>


  <Footer />
</div>
);
}