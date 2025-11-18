import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
 
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();
 
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  useEffect(() => {
    setActiveLink(location.pathname);
    setIsMobileMenuOpen(false);
  }, [location]);
 
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => document.body.style.overflow = "unset";
  }, [isMobileMenuOpen]);
 
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/solutions", label: "Solutions" },
    { path: "/industries", label: "Industries" },
    { path: "/company", label: "Company" },
    { path: "/careers", label: "Careers" },
    { path: "/insights", label: "Insights" },
  ];
 
  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-white/98 backdrop-blur-2xl shadow-2xl py-3"
            : "bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 py-6 shadow-2xl"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* 3D Moving Shadow Flow Container */}
          <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none overflow-hidden opacity-80">
            {/* Layer 1 - Fast Bright Glow */}
            <div className="absolute bottom-4 left-0 w-64 h-12 bg-amber-400 rounded-full filter blur-3xl animate-flow-shadow-fast shadow-3d-glow" />
            {/* Layer 2 - Medium Golden Flow */}
            <div className="absolute bottom-2 left-0 w-96 h-16 bg-amber-500 rounded-full filter blur-3xl animate-flow-shadow-medium opacity-70 shadow-3d-glow" />
            {/* Layer 3 - Slow Deep Shadow */}
            <div className="absolute bottom-0 left-0 w-80 h-20 bg-amber-600/60 rounded-full filter blur-3xl animate-flow-shadow-slow opacity-50 shadow-3d-deep" />
            {/* Reverse direction layers for depth */}
            <div className="absolute bottom-3 right-0 w-72 h-14 bg-blue-500/30 rounded-full filter blur-3xl animate-flow-shadow-reverse opacity-40" />
          </div>
 
          <div className="flex justify-between items-center relative z-10">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center font-black text-3xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-3 ${
                  isScrolled
                    ? "bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-2xl"
                    : "bg-gradient-to-br from-amber-400 to-amber-600 text-white shadow-2xl shadow-amber-500/60"
                }`}>
                  E
                </div>
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 translate-x-[-200%] animate-shine" />
                </div>
              </div>
              <div className="leading-none">
                <span className={`font-black text-2xl tracking-tighter ${isScrolled ? "text-slate-900" : "text-white"}`}>
                  ENTERPRISE
                </span>
                <span className={`block text-xs font-bold tracking-widest uppercase ${isScrolled ? "text-slate-600" : "text-amber-300"}`}>
                  Solutions
                </span>
              </div>
            </Link>
 
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <ul className="flex space-x-10 relative">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`relative px-2 py-4 font-bold text-sm tracking-wider transition-all duration-300 group ${
                        activeLink === item.path
                          ? isScrolled ? "text-slate-900" : "text-white"
                          : isScrolled ? "text-slate-600" : "text-gray-300"
                      }`}
                    >
                      <span className="relative z-10">{item.label}</span>
                     
                      {/* Active 3D Indicator */}
                      {activeLink === item.path && (
                        <span className="absolute bottom-0  inset-x-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full shadow-lg shadow-amber-500/60 transform scale-110" />
                      )}
                     
                      {/* Hover Lift Effect */}
                      <span className="absolute inset-0 rounded-lg bg-amber-400/10 scale-0 group-hover:scale-100 transition-transform duration-300 blur-xl" />
                    </Link>
                  </li>
                ))}
              </ul>
 
              {/* CTA */}
              <div className="ml-12 pl-10 border-l border-gray-400/30">
                <Link
                  to="/contact"
                  className="relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-lg font-bold text-sm tracking-wide shadow-2xl shadow-amber-500/50 hover:shadow-amber-500/70 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                >
                  <span className="relative z-10">Get in Touch</span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] hover:translate-x-full transition-transform duration-700" />
                </Link>
              </div>
            </div>
 
            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-3 rounded-lg transition-all ${isScrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute top-1 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 top-3' : ''}`} />
                <span className={`absolute top-3 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`absolute top-5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 top-3' : ''}`} />
              </div>
            </button>
          </div>
        </div>
 
        {/* Scroll Progress */}
        <div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 origin-left transition-transform duration-300 shadow-glow"
          style={{ transform: `scaleX(${isScrolled ? window.scrollY / (document.body.scrollHeight - window.innerHeight) : 0})` }} 
        />
      </nav>
 
      {/* Mobile Menu & Backdrop (unchanged) */}
      {isMobileMenuOpen && (
        <>
          <div className="lg:hidden fixed top-[73px] left-0 right-0 bg-white shadow-2xl z-50 transition-all duration-500">
            <div className="py-8 px-6 space-y-4">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path} className={`block py-4 text-lg font-bold ${activeLink === item.path ? "text-amber-600" : "text-slate-800"}`} onClick={() => setIsMobileMenuOpen(false)} >
                  {item.label}
                </Link>
              ))}
              <Link to="/contact" className="block text-center mt-8 bg-gradient-to-r from-amber-500 to-amber-600 text-white py-5 rounded-lg font-bold shadow-lg" onClick={() => setIsMobileMenuOpen(false)}>
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
        </>
      )}
 
      {/* 3D Moving Shadow Animations */}
      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-200%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
 
        @keyframes flow-shadow-fast {
          0% { transform: translateX(-100%) translateY(0px) scale(1); }
          50% { transform: translateX(100%) translateY(-4px) scale(1.1); }
          100% { transform: translateX(300%) translateY(0px) scale(1); }
        }
 
        @keyframes flow-shadow-medium {
          0% { transform: translateX(-120%) translateY(0px); }
          100% { transform: translateX(350%) translateY(2px); }
        }
 
        @keyframes flow-shadow-slow {
          0% { transform: translateX(-80%) translateY(0px); }
          100% { transform: translateX(400%) translateY(-2px); }
        }
 
        @keyframes flow-shadow-reverse {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-300%); }
        }
 
        .animate-shine { animation: shine 4s ease-in-out infinite; }
        .animate-flow-shadow-fast { animation: flow-shadow-fast 12s linear infinite; }
        .animate-flow-shadow-medium { animation: flow-shadow-medium 18s linear infinite; }
        .animate-flow-shadow-slow { animation: flow-shadow-slow 24s linear infinite; }
        .animate-flow-shadow-reverse { animation: flow-shadow-reverse 20s linear infinite; }
 
        .shadow-3d-glow {
          box-shadow: 0 20px 40px rgba(251, 191, 36, 0.6), 0 0 60px rgba(251, 191, 36, 0.4);
        }
 
        .shadow-3d-deep {
          box-shadow: 0 30px 60px rgba(180, 83, 9, 0.5);
        }
 
        .shadow-glow {
          box-shadow: 0 0 20px rgba(251, 191, 36, 0.8);
        }
      `}</style>
 
 
    </>
  );
} 