import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ElectricBorder } from "@react-bits/electric-border";

const ServicesPage = () => {
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  const services = [
    {
      id: 1,
      title: "Digital Strategy and Planning",
      description:
        "We leverage our years of experience to create the correct strategy and plans for your business...",
      fullDescription:
        "Our digital strategy services encompass comprehensive market analysis, competitor research, and data-driven planning...",
      icon: "🎯",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      border1: "#3b82f6",
      border2: "#06b6d4",
    },
    {
      id: 2,
      title: "Creative Strategy and Web Graphics Design",
      description:
        "Creativity is a way of life at webeesocial. When we create something – website, app, emailer...",
      fullDescription:
        "Our creative team specializes in crafting visually stunning designs that tell your brand’s story...",
      icon: "🎨",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      border1: "#a855f7",
      border2: "#ec4899",
    },
    {
      id: 3,
      title: "Social Media Marketing",
      description: "Social is in our name, literally! We use a variety of social strategies across different channels...",
      fullDescription:
        "We develop and execute comprehensive social media strategies across Facebook, Instagram, LinkedIn, and more...",
      icon: "📱",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      border1: "#22c55e",
      border2: "#10b981",
    },
    {
      id: 4,
      title: "Videos, GIFs and Content Marketing",
      description:
        "Video has become the most popular content format. Google rewards pages with rich media...",
      fullDescription:
        "Our content marketing team creates video content, GIFs, and strategic written content that drives engagement...",
      icon: "🎬",
      color: "from-red-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-red-50 to-orange-50",
      border1: "#ef4444",
      border2: "#fb923c",
    },
    {
      id: 5,
      title: "Website Design & Development",
      description:
        "We stay ahead of UI trends. We break down the user journey and build high-performance websites...",
      fullDescription:
        "We create responsive, user-centric websites using latest technologies, SEO best practices, and optimized UX/UI...",
      icon: "💻",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-gradient-to-br from-indigo-50 to-blue-50",
      border1: "#6366f1",
      border2: "#3b82f6",
    },
    {
      id: 6,
      title: "Search Engine Optimization",
      description:
        "We audit your SEO assets, define transparent timelines and drive results consistently...",
      fullDescription:
        "Our SEO services include technical audits, keyword research, on-page optimization, and link building...",
      icon: "🔍",
      color: "from-amber-500 to-yellow-500",
      bgColor: "bg-gradient-to-br from-amber-50 to-yellow-50",
      border1: "#f59e0b",
      border2: "#fbbf24",
    },
    {
      id: 7,
      title: "Email Marketing",
      description:
        "We build effective email campaigns and automate secure & personalized delivery...",
      fullDescription:
        "We create targeted email campaigns, segmentation, automation workflows, A/B testing and analytics...",
      icon: "📧",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-teal-50 to-cyan-50",
      border1: "#14b8a6",
      border2: "#06b6d4",
    },
    {
      id: 8,
      title: "Web Analytics",
      description:
        "Data-driven marketing is most effective. Understanding analytics is key for digital growth...",
      fullDescription:
        "We provide deep insights into user behavior, conversions and performance using advanced analytics...",
      icon: "📊",
      color: "from-gray-500 to-slate-500",
      bgColor: "bg-gradient-to-br from-gray-50 to-slate-50",
      border1: "#6b7280",
      border2: "#475569",
    },
    {
      id: 9,
      title: "Media Planning & Buying",
      description:
        "We work with a network of media partners to offer integrated solutions...",
      fullDescription:
        "We ensure efficient ad budget allocation, negotiate placements, monitor and optimize campaigns...",
      icon: "📺",
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-violet-50 to-purple-50",
      border1: "#8b5cf6",
      border2: "#a855f7",
    },
    {
      id: 10,
      title: "Shopify Website & Development",
      description: "Looking for a Shopify development company? You’re on the right page...",
      fullDescription:
        "We build custom Shopify stores with theme customization, app integrations, payment setup and maintenance...",
      icon: "🛍️",
      color: "from-green-600 to-lime-500",
      bgColor: "bg-gradient-to-br from-green-50 to-lime-50",
      border1: "#16a34a",
      border2: "#84cc16",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-4">

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to elevate your brand.
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
          {services.map((service) => (
            <ElectricBorder
              key={service.id}
              color1={service.border1}
              color2={service.border2}
              borderRadius={22}
              borderWidth={3}
              speed={2}
            >
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
                className={`relative overflow-hidden rounded-2xl shadow-lg ${service.bgColor} transition-all duration-500`}
                onMouseEnter={() => setActiveCard(service.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="p-8 flex flex-col h-full">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} text-white text-3xl flex items-center justify-center shadow-lg mb-6`}
                  >
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-4">{service.description}</p>

                  {/* Full description reveal on hover */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: activeCard === service.id ? 1 : 0,
                      height: activeCard === service.id ? "auto" : 0,
                    }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden text-sm text-gray-700"
                  >
                    {service.fullDescription}
                  </motion.div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className={`w-full mt-6 py-3 rounded-xl bg-gradient-to-r ${service.color} text-white font-semibold`}
                  >
                    Read More
                  </motion.button>
                </div>
              </motion.div>
            </ElectricBorder>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
