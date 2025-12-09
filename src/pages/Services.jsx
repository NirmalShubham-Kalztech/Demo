import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ElectricBorder from "../components/ElectricBorder";

const ServicesPage = () => {
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  const services = [
    {
      id: 1,
      title: "Digital Strategy and Planning",
      description:
        "We leverage our years of experience to create the correct strategy and plans...",
      fullDescription:
        "Our digital strategy services encompass market analysis, competitor research...",
      icon: "🎯",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      border1: "#3b82f6",
      border2: "#06b6d4",
    },
    {
      id: 2,
      title: "Creative Strategy & Graphics Design",
      description:
        "Creativity is a way of life at our company. We design stunning visual content...",
      fullDescription:
        "Our creative team builds beautiful UI/UX designs, web graphics, branding...",
      icon: "🎨",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      border1: "#a855f7",
      border2: "#ec4899",
    },
    {
      id: 3,
      title: "Social Media Marketing",
      description:
        "We use powerful social strategies across multiple channels...",
      fullDescription:
        "We manage social strategies across Facebook, Instagram, LinkedIn...",
      icon: "📱",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      border1: "#22c55e",
      border2: "#10b981",
    },
    {
      id: 4,
      title: "Videos, GIFs & Content Marketing",
      description:
        "Video is the most powerful content format used today...",
      fullDescription:
        "We create engaging videos, GIFs, reels, and long-form content...",
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
        "We design and develop high-performance modern websites...",
      fullDescription:
        "We create SEO optimized, responsive and user-centric websites...",
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
        "We audit and optimize your complete digital presence...",
      fullDescription:
        "Our SEO services include keyword research, audits, backlinks...",
      icon: "🔍",
      color: "from-amber-500 to-yellow-500",
      bgColor: "bg-gradient-to-br from-amber-50 to-yellow-50",
      border1: "#f59e0b",
      border2: "#fbbf24",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-4">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to elevate your brand.
          </p>
        </motion.div>

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
              borderRadius={20}
              borderWidth={3}
              speed={2.8}
            >
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.03 }}
                className={`relative overflow-hidden rounded-xl shadow-lg ${service.bgColor} transition-all duration-300`}
                onMouseEnter={() => setActiveCard(service.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="p-6 flex flex-col h-full">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} text-white text-2xl flex items-center justify-center mb-4 shadow-md`}
                  >
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>

                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: activeCard === service.id ? 1 : 0,
                      height: activeCard === service.id ? "auto" : 0,
                    }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden text-sm text-gray-700"
                  >
                    {service.fullDescription}
                  </motion.div>

                  <button
                    className={`mt-4 py-2 rounded-lg text-white font-medium bg-gradient-to-r ${service.color}`}
                  >
                    Read More
                  </button>
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
