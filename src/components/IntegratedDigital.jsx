import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "../assets/image1.png";

export default function IntegratedDigitalSolutions() {
  const { scrollY } = useScroll();

  const leftY = useTransform(scrollY, [0, 400], [0, -50]);
  const rightY = useTransform(scrollY, [0, 400], [0, -30]);
  const fadeOut = useTransform(scrollY, [0, 300], [1, 0.9]);

  // Letter stagger for heading
  const letterVariant = {
    hidden: { opacity: 0, y: 20 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.04, duration: 0.5, ease: "easeOut" },
    }),
  };

  const splitHeading = "Integrated Digital Solutions".split("");

  // Paragraph animation
  const textFloat = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };

  return (
    <motion.section
      style={{ opacity: fadeOut }}
      className="w-full bg-gray-100 py-20 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-stretch">

          {/* LEFT CONTENT */}
          <motion.div
            style={{ y: leftY }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white p-10 rounded-xl shadow-sm flex flex-col justify-center hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >

            {/* LETTER BY LETTER HEADING */}
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 flex flex-wrap">
              {splitHeading.map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariant}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false }}
                  className={char === " " ? "mr-2" : ""}
                >
                  {char}
                </motion.span>
              ))}
            </h1>

            {/* Pink Line Reveal */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="h-1 bg-pink-500 mt-4 mb-6"
            />

            {/* Italic Text */}
            <motion.p
              variants={textFloat}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.3 }}
              className="italic text-xl text-gray-700 mb-6"
            >
              Insights, Metrics and Analytics – Everything is connected!
            </motion.p>

            {/* Paragraph */}
            <motion.p
              variants={textFloat}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.3 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              In a digital world where everything’s connected, we believe that the
              approach to digital communications has to be joined-up too. Our
              approach combines creativity & technology and blends a diverse range
              of digital marketing disciplines — from mobile and responsive web
              design to search and social media campaigns — all under one roof.
            </motion.p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            style={{ y: rightY }}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex items-stretch"
          >
            <motion.img
              src={Image}
              alt="Connected Devices"
              className="w-full h-full object-contain"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />

            {/* Floating Button + Glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              animate={{
                y: [0, -6, 0],
                boxShadow: [
                  "0px 0px 0px rgba(255,215,0,0.4)",
                  "0px 0px 20px rgba(255,215,0,0.8)",
                  "0px 0px 0px rgba(255,215,0,0.4)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-8 right-8 w-14 h-14 bg-yellow-400 rounded-sm flex items-center justify-center cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M12 8l-6 6h12z" />
              </svg>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
