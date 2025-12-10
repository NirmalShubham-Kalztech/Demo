import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/Logo.png"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Our Services" },
    { path: "/work", label: "Our Work" },
    // { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Get In Touch" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-xl py-3 backdrop-blur-lg" : "bg-transparent py-5"
      }`}
      style={{ perspective: "1000px" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Logo with 3D Hover Tilt */}
        <motion.div
          whileHover={{ rotateY: 15 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="cursor-pointer"
        >
          <Link to="/" className="flex items-center space-x-2">
            <img src= {logo}  alt="logo" className="h-10 object-contain" />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 items-center">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <motion.li
                key={item.path}
                whileHover={{ scale: 1.15, rotateX: 10, rotateY: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="relative"
              >
                <Link
                  to={item.path}
                  className={`font-medium text-sm tracking-wide ${
                    isActive ? "text-black" : "text-gray-700"
                  }`}
                >
                  {item.label}
                </Link>

                {/* ACTIVE 3D Glow Line */}
                {isActive && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 h-[3px] bg-black rounded-md"
                    initial={false}
                    animate={{ width: "100%", boxShadow: "0px 0px 8px rgba(0,0,0,0.5)" }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  />
                )}
              </motion.li>
            );
          })}

          {/* 3D CTA Button */}
          <motion.div
            whileHover={{ scale: 1.12, rotateX: 10, rotateY: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <Link
              to="/work-with-us"
              className="text-sm font-semibold text-black border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition"
            >
              Work With Us →
            </Link>
          </motion.div>
        </ul>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.8 }}
          className="md:hidden text-black text-2xl"
          onClick={() => setMobile(!mobile)}
        >
          ☰
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {mobile && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-md py-6 px-6 space-y-4"
        >
          {navItems.map((item) => (
            <motion.div whileHover={{ x: 10 }} key={item.path}>
              <Link
                to={item.path}
                className="block text-lg font-medium text-gray-800"
                onClick={() => setMobile(false)}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}

          <Link
            to="/work-with-us"
            className="block mt-6 text-center border border-black py-3 rounded-full font-semibold"
            onClick={() => setMobile(false)}
          >
            Work With Us →
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
