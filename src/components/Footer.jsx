import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Social media icons
  const socialLinks = [
    { name: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z', url: '#' },
    { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', url: '#' },
    { name: 'GitHub', icon: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12', url: '#' },
    { name: 'Dribbble', icon: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm9.747 10.416c-.366-1.029-1.416-2.216-2.938-2.684-.276 1.334-.996 2.943-1.848 4.478.948.332 2.061.44 2.928.028.686-.324 1.258-.864 1.858-1.822zm-3.73 7.944c-.748.748-1.707 1.161-2.754 1.161-.682 0-1.341-.194-1.923-.558.206-.397.413-.818.612-1.258.58.29 1.255.461 1.998.461.793 0 1.524-.246 2.127-.668.402.502.848 1.147 1.048 1.86-.612.244-1.3.378-2.108.378-1.482 0-2.812-.556-3.816-1.458-.09-.085-.179-.171-.267-.258.636-1.214 1.145-2.464 1.506-3.681.44.82.978 1.6 1.597 2.316.784.904 1.814 1.516 3.025 1.795-.198.65-.555 1.214-1.048 1.708zm-11.232-3.03c-.648-1.167-1.056-2.506-1.056-3.93 0-1.056.246-2.055.684-2.94.402 1.334 1.334 2.506 2.592 3.258-.402.79-.72 1.63-.948 2.506-.612.232-1.213.476-1.272.476-.402.29-.732.668-.996 1.102-.024-.024-.048-.048-.06-.072.036-.397.084-.79.156-1.19zm8.382-7.902c.198.79.44 1.602.72 2.416.492.154 1.002.232 1.53.232.396 0 .79-.036 1.182-.108-.156-.686-.384-1.346-.684-1.97-.402-.636-.966-1.23-1.68-1.758-.402.732-.858 1.446-1.368 2.188zM4.848 6.432c.732-.732 1.68-1.134 2.7-1.134.396 0 .79.06 1.182.18-.324.732-.696 1.446-1.116 2.118-.612.232-1.23.44-1.848.636-.012-.024-.024-.048-.036-.072-.156-.648-.396-1.272-.732-1.848.024.06.048.12.072.18zm14.136-1.44c1.062.372 1.92 1.134 2.436 2.118.156-.79.246-1.602.246-2.436 0-.732-.072-1.446-.216-2.118-.732.36-1.386.924-1.92 1.62-.312.36-.564.79-.756 1.258-.108.108-.204.216-.3.312.12.396.24.79.336 1.19-.036.012-.072.036-.108.048z', url: '#' }
  ];

  // Navigation links
  const productLinks = [
    { name: 'Features', url: '#' },
    { name: 'Pricing', url: '#' },
    { name: 'API', url: '#' },
    { name: 'Documentation', url: '#' }
  ];

  const companyLinks = [
    { name: 'About', url: '#' },
    { name: 'Blog', url: '#' },
    { name: 'Careers', url: '#' },
    { name: 'Press', url: '#' }
  ];

  const legalLinks = [
    { name: 'Privacy', url: '#' },
    { name: 'Terms', url: '#' },
    { name: 'Security', url: '#' },
    { name: 'Cookies', url: '#' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with:', email);
    setEmail('');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer 
      ref={footerRef}
      className="bg-white border-t border-gray-100 relative overflow-hidden"
      aria-label="Main Footer"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-1/4 left-10 w-24 h-24 border border-gray-100 rounded-full"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 right-20 w-16 h-16 border border-gray-100 rounded-lg"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -180, -360]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-1/4 w-8 h-8 border border-gray-100 rotate-45"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Continuous flowing lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent">
          <motion.div
            className="h-full bg-gradient-to-r from-transparent via-blue-400 to-transparent"
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent">
          <motion.div
            className="h-full bg-gradient-to-r from-transparent via-blue-300 to-transparent"
            animate={{
              x: ['100%', '-100%']
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12"
        >
          
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-white font-bold text-xl">A</span>
              </motion.div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                  Aurora
                </h2>
                <p className="text-blue-600 font-medium text-sm">Digital Solutions</p>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed max-w-md">
              Building elegant digital experiences with precision and creativity. 
              We transform complex challenges into seamless solutions.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-300 hover:shadow-sm transition-all duration-300 group"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Product Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-gray-900 font-semibold text-lg mb-4 relative inline-block">
              Product
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.url}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-blue-500 group-hover:scale-125 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-gray-900 font-semibold text-lg mb-4 relative inline-block">
              Company
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.url}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-blue-500 group-hover:scale-125 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-gray-900 font-semibold text-lg mb-4 relative inline-block">
              Stay Updated
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              />
            </h3>
            <p className="text-gray-600 text-sm">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative group">
                <motion.input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-400 group-hover:border-blue-300"
                  required
                  aria-label="Email address for newsletter subscription"
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.div 
                  className="absolute inset-0 border border-blue-500 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none"
                  initial={false}
                  animate={{ opacity: 0 }}
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <span className="flex items-center justify-center">
                  Subscribe
                  <motion.svg 
                    className="w-5 h-5 ml-2"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </span>
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          className="my-12 border-t border-gray-100"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Aurora Digital. All rights reserved.
          </p>
          
          <div className="flex space-x-6 text-sm">
            {legalLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-gray-500 hover:text-blue-600 transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Back to top */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
          aria-label="Back to top"
        >
          <motion.svg 
            className="w-5 h-5"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </motion.svg>
        </motion.button>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;