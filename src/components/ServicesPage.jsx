import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const ServicesPage = () => {
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  const services = [
    {
      id: 1,
      title: "Digital Strategy and Planning",
      description: "We leverage our years of experience to create the correct strategy and plans for your business which helps to grow your brand and revenue.",
      fullDescription: "Our digital strategy services encompass comprehensive market analysis, competitor research, and data-driven planning. We develop customized roadmaps that align with your business objectives, ensuring measurable growth in brand visibility and revenue generation through innovative digital solutions.",
      icon: "🎯",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50"
    },
    {
      id: 2,
      title: "Creative Strategy and Web Graphics Design",
      description: "Creativity is a way of life at webeesocial. When we create something – a website, an app, emailer, an infographic, a social media post or..",
      fullDescription: "Our creative team specializes in crafting visually stunning designs that tell your brand's story. From comprehensive web graphics to engaging social media visuals, we ensure every design element resonates with your target audience and strengthens your brand identity across all digital touchpoints.",
      icon: "🎨",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50"
    },
    {
      id: 3,
      title: "Social Media Marketing",
      description: "Social is in our name, literally! Social Media is key to our overall strategy, and we use a variety of social strategies across different channels…",
      fullDescription: "We develop and execute comprehensive social media strategies across platforms like Facebook, Instagram, Twitter, LinkedIn, and emerging channels. Our approach includes content creation, community management, paid advertising, and performance analytics to build meaningful connections with your audience.",
      icon: "📱",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50"
    },
    {
      id: 4,
      title: "Videos, GIFs and Content Marketing",
      description: "Video has become the most popular content format. Google algorithm rewards pages with features such as social media integration, social bookmarking and rich videos.",
      fullDescription: "Our content marketing team creates compelling video content, engaging GIFs, and strategic written content that drives engagement and conversions. We focus on storytelling that captures attention and delivers your message effectively across all digital platforms.",
      icon: "🎬",
      color: "from-red-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-red-50 to-orange-50"
    },
    {
      id: 5,
      title: "Website Design and Development",
      description: "We stay ahead of the technological and UI trends. We focus on breaking down a user journey, translating our design into the most efficient and…",
      fullDescription: "We create responsive, user-centric websites that provide exceptional user experiences. Our development process incorporates the latest technologies, SEO best practices, and conversion optimization techniques to ensure your website not only looks great but performs exceptionally.",
      icon: "💻",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-gradient-to-br from-indigo-50 to-blue-50"
    },
    {
      id: 6,
      title: "Search Engine Optimization",
      description: "Our approach to SEO and SEM is simple and transparent. We audit your assets and assess your SEO/SEM goals post which we share timeline expectations…",
      fullDescription: "Our SEO services include comprehensive technical audits, keyword research, on-page optimization, content strategy, and link building. We provide transparent reporting and work diligently to improve your search engine rankings and drive qualified organic traffic to your website.",
      icon: "🔍",
      color: "from-amber-500 to-yellow-500",
      bgColor: "bg-gradient-to-br from-amber-50 to-yellow-50"
    },
    {
      id: 7,
      title: "Email Marketing",
      description: "We can build effective email marketing campaigns and streamline the delivery process so that sending emailers is easy, secure and personalised.",
      fullDescription: "We design and execute targeted email marketing campaigns that drive engagement and conversions. Our services include list segmentation, automation workflows, A/B testing, and performance analytics to ensure your email marketing delivers measurable results.",
      icon: "📧",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-teal-50 to-cyan-50"
    },
    {
      id: 8,
      title: "Web Analytics",
      description: "Data driven marketing is most effective. Understanding analytics data is key for any business with a digital presence.",
      fullDescription: "We implement comprehensive analytics tracking and provide detailed insights into user behavior, conversion patterns, and campaign performance. Our data-driven approach helps you make informed decisions to optimize your digital presence and maximize ROI.",
      icon: "📊",
      color: "from-gray-500 to-slate-500",
      bgColor: "bg-gradient-to-br from-gray-50 to-slate-50"
    },
    {
      id: 9,
      title: "Media Planning and Buying",
      description: "We are connected with a network of media partners who help us offer a fully integrated and accredited communication solution.",
      fullDescription: "Our media planning and buying services ensure your advertising budget is spent efficiently across digital channels. We negotiate optimal placements, monitor campaign performance, and continuously optimize to maximize your media ROI.",
      icon: "📺",
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-violet-50 to-purple-50"
    },
    {
      id: 10,
      title: "Shopify Website & Development",
      description: "Looking for a Shopify website development company? You've landed on just the right page!",
      fullDescription: "We specialize in creating custom Shopify stores that drive sales and provide exceptional shopping experiences. Our services include theme customization, app integration, payment gateway setup, and ongoing maintenance to ensure your e-commerce store operates smoothly and profitably.",
      icon: "🛍️",
      color: "from-green-600 to-lime-500",
      bgColor: "bg-gradient-to-br from-green-50 to-lime-50"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-4">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions tailored to elevate your brand and drive measurable results. 
            Discover how our expertise can transform your digital presence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${service.bgColor} border border-white/50`}
              onMouseEnter={() => setActiveCard(service.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Animated Background Circles */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/20 rounded-full transition-all duration-1000 ease-out transform hover:scale-150 hover:rotate-180"></div>
              <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-white/10 rounded-full transition-all duration-1000 ease-out transform hover:scale-150 hover:-rotate-180"></div>
              
              {/* Card Content */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl text-white shadow-lg mb-6 transform transition-transform duration-300 hover:rotate-12`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <div className="flex-1">
                  <p className="text-gray-600 leading-relaxed mb-6 transition-all duration-500">
                    {service.description}
                  </p>
                  
                  {/* Full Description - Shows on hover */}
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: activeCard === service.id ? 1 : 0,
                      height: activeCard === service.id ? "auto" : 0
                    }}
                    transition={{ duration: 0.5 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {service.fullDescription}
                    </p>
                  </motion.div>
                </div>

                {/* Read More Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full mt-6 py-3 px-6 rounded-xl bg-gradient-to-r ${service.color} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                >
                  Read More
                </motion.button>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-20"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-2xl border border-white/20">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your business goals and drive exceptional results.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(79, 70, 229, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-2xl font-semibold text-lg shadow-lg transition-all duration-300"
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-180deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.1); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        /* Smooth scrolling for the entire page */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }
      `}</style>
    </div>
  );
};

export default ServicesPage; 