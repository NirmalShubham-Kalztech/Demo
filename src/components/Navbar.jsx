import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Our Services" },
    { path: "/work", label: "Our Work" },
    { path: "/contact", label: "Get In Touch" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 object-contain" />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-10">
            {navItems.map((item) => {
              const active = location.pathname === item.path;

              return (
                <li key={item.path} className="relative">
                  <Link
                    to={item.path}
                    className={`text-sm font-medium transition ${
                      active
                        ? "text-black"
                        : "text-gray-600 hover:text-black"
                    }`}
                  >
                    {item.label}
                  </Link>

                  {active && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-black rounded"></span>
                  )}
                </li>
              );
            })}

            <Link
              to="/work-with-us"
              className="border border-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-black hover:text-white transition"
            >
              Work With Us →
            </Link>
          </ul>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-3xl"
          >
            ☰
          </button>
        </div>
      </motion.nav>

      {/* 🔥 NAVBAR SPACER (IMPORTANT FIX) */}
      <div className="h-[80px]" />

      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      {mobileOpen && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed top-[80px] left-0 right-0 z-50 bg-white px-6 py-6 space-y-5 md:hidden"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className="block text-lg font-semibold text-gray-800"
            >
              {item.label}
            </Link>
          ))}

          <Link
            to="/work-with-us"
            onClick={() => setMobileOpen(false)}
            className="block mt-4 text-center border border-black py-3 rounded-full font-semibold"
          >
            Work With Us →
          </Link>
        </motion.div>
      )}
    </>
  );
}
