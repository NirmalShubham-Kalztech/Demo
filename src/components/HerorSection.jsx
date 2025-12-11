import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const { scrollY } = useScroll();

  // Light parallax on text
  const textY = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white flex items-center">

      {/* YELLOW SHAPE (Auto floating animation) */}
      <motion.div
        initial={{ scale: 1.2, rotate: -5, opacity: 0 }}
        animate={{
          scale: [1.2, 1.25, 1.2],
          rotate: [-5, -2, -5],
          opacity: 1,
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/3 w-[120%] h-full bg-[#F4D40C] z-0"
        style={{
          clipPath:
            "polygon(20% 0%, 60% 0%, 40% 50%, 60% 100%, 20% 100%, 0% 50%)",
        }}
      />

      {/* GREEN SHAPE (Auto floating, opposite rhythm) */}
      <motion.div
        initial={{ scale: 1.3, rotate: 8, opacity: 0 }}
        animate={{
          scale: [1.3, 1.35, 1.3],
          rotate: [8, 3, 8],
          opacity: 1,
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-[60%] w-full h-full bg-[#63B685] z-0"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% 100%, 40% 100%, 60% 50%, 40% 0)",
        }}
      />

      {/* CONTENT AREA */}
      <motion.div
        style={{ y: textY }}
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="relative z-10 max-w-4xl px-10"
      >

        {/* TOP ZIGZAG (wiggle animation) */}
        <motion.svg
          width="85"
          height="12"
          className="mb-4"
          animate={{ x: [0, -3, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            d="M0 6 L10 0 L20 10 L30 0 L40 10 L50 0 L60 10 L70 0 L80 10"
            stroke="black"
            strokeWidth="2"
            fill="none"
          />
        </motion.svg>

        {/* HEADING (Soft wobble animation) */}
        <motion.h1
          className="text-5xl md:text-6xl font-[800] leading-tight text-black"
          animate={{
            y: [0, -8, 0],
            rotate: [0, -1, 1, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          We create <br />
          super-rich <br />
          experiences online!
        </motion.h1>

        {/* BOTTOM ZIGZAG (opposite wiggle) */}
        <motion.svg
          width="85"
          height="12"
          className="mt-4"
          animate={{ x: [0, 3, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            d="M0 6 L10 0 L20 10 L30 0 L40 10 L50 0 L60 10 L70 0 L80 10"
            stroke="black"
            strokeWidth="2"
            fill="none"
          />
        </motion.svg>

      </motion.div>
    </section>
  );
}
