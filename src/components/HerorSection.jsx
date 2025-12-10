import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const { scrollY } = useScroll();

  // Text Parallax (scroll)
  const textY = useTransform(scrollY, [0, 300], [0, -80]);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white flex items-center">

      {/* YELLOW SHAPE */}
      <div
        className="absolute top-0 left-1/3 w-[120%] h-full bg-[#F4D40C] z-0"
        style={{
          clipPath:
            "polygon(20% 0%, 60% 0%, 40% 50%, 60% 100%, 20% 100%, 0% 50%)",
        }}
      ></div>

      {/* GREEN SHAPE */}
      <div
        className="absolute top-0 left-[60%] w-full h-full bg-[#63B685] z-0"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% 100%, 40% 100%, 60% 50%, 40% 0)",
        }}
      ></div>

      {/* CONTENT */}
      <motion.div
        style={{ y: textY }}    // ← Parallax effect
        className="relative z-10 max-w-4xl px-10"
        whileHover={{ rotateX: 5, rotateY: -5 }}  // ← 3D float
        transition={{ type: "spring", stiffness: 200, damping: 12 }}
      >

        {/* Top Zigzag */}
        <svg width="85" height="12" className="mb-4">
          <path
            d="M0 6 L10 0 L20 10 L30 0 L40 10 L50 0 L60 10 L70 0 L80 10"
            stroke="black"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        {/* HEADING */}
        <h1 className="text-5xl md:text-6xl font-[800] leading-tight text-black">
          We create <br />
          super-rich <br />
          experiences online!
        </h1>

        {/* Bottom Zigzag */}
        <svg width="85" height="12" className="mt-4">
          <path
            d="M0 6 L10 0 L20 10 L30 0 L40 10 L50 0 L60 10 L70 0 L80 10"
            stroke="black"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </motion.div>
    </section>
  );
}
