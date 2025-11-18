import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Social media icons data
  const socialLinks = [
    { name: 'Facebook', icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z', url: '#' },
    { name: 'Twitter', icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z', url: '#' },
    { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z', url: '#' },
    { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', url: '#' }
  ];

  // Navigation links
  const companyLinks = [
    { name: 'About Us', url: '#' },
    { name: 'Our Team', url: '#' },
    { name: 'Careers', url: '#' },
    { name: 'Press', url: '#' }
  ];

  const supportLinks = [
    { name: 'Help Center', url: '#' },
    { name: 'Contact Us', url: '#' },
    { name: 'Privacy Policy', url: '#' },
    { name: 'Terms of Service', url: '#' }
  ];

  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribed with:', email);
    setEmail('');
  };

  return (
    <footer 
      className="bg-black text-white relative overflow-hidden"
      aria-label="Main Footer"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Moving circles */}
        <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-yellow-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-10 right-20 w-16 h-16 bg-yellow-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-yellow-300 rounded-full opacity-40 animate-ping"></div>
        
        {/* Floating squares */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-yellow-500 opacity-25 animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-yellow-400 opacity-35 animate-float-delayed"></div>
        
        {/* Animated lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent animate-slide"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-slide-reverse"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Company Information */}
          <div className={`space-y-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <span className="text-black font-bold text-lg">Y</span>
              </div>
              <span className="text-xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                YellowBlack
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Creating elegant solutions with a touch of brilliance. We combine innovation with timeless design principles.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-gray-400 hover:text-yellow-400 transform hover:scale-110 transition-all duration-300 group"
                  aria-label={`Follow us on ${social.name}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <svg className="w-5 h-5 group-hover:fill-current" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-yellow-400 font-semibold mb-4 text-lg border-b border-yellow-500 pb-2 inline-block">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-gray-300 hover:text-yellow-400 transition-all duration-300 transform hover:translate-x-2 block py-1 group"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <span className="group-hover:underline">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-yellow-400 font-semibold mb-4 text-lg border-b border-yellow-500 pb-2 inline-block">
              Support
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-gray-300 hover:text-yellow-400 transition-all duration-300 transform hover:translate-x-2 block py-1 group"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <span className="group-hover:underline">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-yellow-400 font-semibold mb-4 text-lg border-b border-yellow-500 pb-2 inline-block">
              Newsletter
            </h3>
            <p className="text-gray-300 mb-4">
              Stay updated with our latest news and offers.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                  required
                  aria-label="Email address for newsletter subscription"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                Subscribe
                <span className="ml-2 animate-pulse">→</span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`border-t border-gray-800 mt-12 pt-8 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 YellowBlack. All rights reserved. Crafted with passion.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 hover:underline">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 hover:underline">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(90deg); }
        }
        
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes slide-reverse {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-slide {
          animation: slide 3s linear infinite;
        }
        
        .animate-slide-reverse {
          animation: slide-reverse 4s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;