import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ServicesPage = () => {
  const [activeCard, setActiveCard] = useState(null);

  // PARALLAX SCROLL
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  // STAGGER ANIMATION
  const parent = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.18 },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const services = [
    {
      id: 1,
      title: "Digital Strategy and Planning",
      description:
        "We leverage our years of experience to create powerful digital plans...",
      fullDescription:
        "Our digital strategy includes market research, competitive analysis...",
      icon: "🎯",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
    },
    {
      id: 2,
      title: "Creative Strategy & Graphics Design",
      description: "We design beautiful graphics, UI/UX and branding...",
      fullDescription:
        "Our creative team builds stunning UI/UX, brand identity & motion graphics...",
      icon: "🎨",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
    },
    {
      id: 3,
      title: "Social Media Marketing",
      description: "We build targeted social media strategies...",
      fullDescription:
        "We handle full organic + paid social media campaigns...",
      icon: "📱",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
    },
    {
      id: 4,
      title: "Videos, GIFs & Content Marketing",
      description: "We create high-impact videos, reels and GIFs...",
      fullDescription:
        "We produce content videos, GIFs, reels, editing, scripting...",
      icon: "🎬",
      color: "from-red-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-red-50 to-orange-50",
    },
    {
      id: 5,
      title: "Website Design & Development",
      description: "Modern, responsive and fast websites...",
      fullDescription:
        "We build SEO friendly, mobile responsive, fast performance websites...",
      icon: "💻",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-gradient-to-br from-indigo-50 to-blue-50",
    },
    {
      id: 6,
      title: "Search Engine Optimization",
      description: "Rank your brand higher in search engines...",
      fullDescription:
        "Keyword research, backlink building, on-page + technical SEO...",
      icon: "🔍",
      color: "from-amber-500 to-yellow-500",
      bgColor: "bg-gradient-to-br from-amber-50 to-yellow-50",
    },
  ];

  return (
    <div ref={sectionRef} className="relative overflow-hidden py-20 px-4 min-h-screen">

      {/* PARALLAX BACKGROUND */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-[url('/services-bg.jpg')] bg-cover bg-center opacity-30"
      />

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          variants={parent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <motion.h1
            variants={child}
            className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg"
          >
            Our Services
          </motion.h1>

          <motion.p
            variants={child}
            className="text-xl text-gray-700 mt-6 max-w-3xl mx-auto"
          >
            Comprehensive digital solutions crafted to elevate your brand to the next level.
          </motion.p>
        </motion.div>

        {/* SERVICE CARDS */}
        <motion.div
          variants={parent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((service, i) => (
            <motion.div
              variants={child}
              key={service.id}
              whileHover={{
                scale: 1.07,
                rotateY: 8,
                rotateX: 6,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.2)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className={`relative rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl p-6 transition-all duration-300 cursor-pointer ${service.bgColor}`}
              onMouseEnter={() => setActiveCard(service.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* FLOATING ICON */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} text-white text-2xl flex items-center justify-center mb-4 shadow-md`}
              >
                {service.icon}
              </motion.div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4">
                {service.description}
              </p>

              {/* FULL DESCRIPTION */}
              {activeCard === service.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-gray-700 mb-3"
                >
                  {service.fullDescription}
                </motion.div>
              )}

              {/* BUTTON */}
              <motion.button
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.9 }}
                className={`mt-auto py-2 px-4 rounded-lg text-white font-medium shadow-md bg-gradient-to-r ${service.color}`}
              >
                Read More
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
