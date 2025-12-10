import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ServicesPage = () => {
  const [activeCard, setActiveCard] = useState(null);

  // SCROLL PARALLAX CONTROL
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

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
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="relative overflow-hidden py-20 px-4 min-h-screen"
    >
      {/* FULL PAGE BACKGROUND PARALLAX */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-[url('/services-bg.jpg')] bg-cover bg-center opacity-30"
      />

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-700 mt-6 max-w-3xl mx-auto drop-shadow-md">
            Comprehensive digital solutions tailored to elevate your brand.
          </p>
        </div>

        {/* SERVICE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ scale: 1.05, rotateX: 6, rotateY: 6 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className={`relative rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 ${service.bgColor}`}
              onMouseEnter={() => setActiveCard(service.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="p-6 flex flex-col h-full">

                {/* ICON */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} text-white text-2xl flex items-center justify-center mb-4 shadow-md`}
                >
                  {service.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>

                {/* SHORT DESCRIPTION */}
                <p className="text-sm text-gray-600 mb-4">
                  {service.description}
                </p>

                {/* FULL DESCRIPTION ON HOVER */}
                {activeCard === service.id && (
                  <div className="text-sm text-gray-700 transition-all duration-300">
                    {service.fullDescription}
                  </div>
                )}

                {/* BUTTON */}
                <button
                  className={`mt-4 py-2 rounded-lg text-white font-medium bg-gradient-to-r ${service.color}`}
                >
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
