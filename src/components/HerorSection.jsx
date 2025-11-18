import { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import ClickSpark from './ClickSpark';

const HeroSection = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, threshold: 0.3 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Mouse move effect for background elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <ClickSpark
      sparkColor="#ffffff"
      sparkSize={12}
      sparkRadius={25}
      sparkCount={12}
      duration={800}
      easing="ease-out"
      extraScale={1.2}
    >
      <motion.section
        ref={heroRef}
        className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
        style={{ opacity }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Moving Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
            }}
          />
          
          {/* Floating Orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-4 h-4 bg-white rounded-full opacity-10"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute top-3/4 right-1/3 w-6 h-6 bg-white rounded-full opacity-5"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '2s' }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-white rounded-full opacity-15"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '4s' }}
          />

          {/* Animated Lines */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="w-full py-20">
            <motion.div
              className="text-center"
              variants={containerVariants}
            >
              {/* Main Heading */}
              <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tighter"
                variants={itemVariants}
              >
                <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                  ELEGANCE
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 font-light tracking-wide max-w-4xl mx-auto leading-relaxed"
                variants={itemVariants}
              >
                Where timeless design meets modern innovation. 
                <span className="block text-white font-normal mt-2">
                  Crafting digital experiences that inspire and endure.
                </span>
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
                variants={itemVariants}
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(255,255,255,0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-12 py-4 rounded-sm font-semibold text-lg tracking-wider uppercase relative overflow-hidden group"
                >
                  <span className="relative z-10">Explore Portfolio</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>

                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: "rgba(255,255,255,0.8)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-12 py-4 rounded-sm font-semibold text-lg tracking-wider uppercase bg-transparent hover:bg-white hover:bg-opacity-10 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </motion.div>

              {/* Stats Section */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-gray-700 pt-12"
                variants={itemVariants}
              >
                {[
                  { number: '15+', label: 'Years Experience' },
                  { number: '500+', label: 'Projects Completed' },
                  { number: '99%', label: 'Client Satisfaction' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center">
            <span className="text-gray-400 text-sm mb-2 tracking-wider">SCROLL</span>
            <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
          </div>
        </motion.div>

        {/* Parallax Background Shapes */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 border border-white opacity-5 rounded-full"
          style={{ y: y1 }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-48 h-48 border border-white opacity-5 rounded-full"
          style={{ y: y2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white opacity-3 rounded-full"
          style={{ y: y1 }}
        />

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent" />

        {/* Custom CSS for additional animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          
          @keyframes glow {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.6; }
          }
          
          @keyframes shimmer {
            0% { background-position: -1000px 0; }
            100% { background-position: 1000px 0; }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .animate-glow {
            animation: glow 4s ease-in-out infinite;
          }
          
          .shimmer-text {
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            background-size: 1000px 100%;
            animation: shimmer 3s infinite linear;
          }
          
          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
          }
        `}</style>
      </motion.section>
    </ClickSpark>
  );
};

export default HeroSection;