import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function WhatWeDo() {
  const { scrollY } = useScroll();

  // Smooth parallax depth layers
  const titleY = useTransform(scrollY, [0, 500], [0, -80]);
  const col1Y = useTransform(scrollY, [0, 500], [0, -50]);
  const col2Y = useTransform(scrollY, [0, 500], [0, -30]);

  // Smooth opacity fade on scroll (premium effect)
  const fadeOut = useTransform(scrollY, [0, 350], [1, 0.75]);

  const parent = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        ease: "easeOut",
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <motion.div
      style={{ opacity: fadeOut }}
      className="w-full bg-white text-black py-24 px-6 md:px-20 overflow-hidden"
    >
      <div className="grid md:grid-cols-3 gap-16 items-start">

        {/* LEFT TITLE BLOCK */}
        <motion.div
          style={{ y: titleY }}
          variants={parent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="text-6xl md:text-7xl font-black leading-tight"
        >
          <motion.p variants={child}>What</motion.p>
          <motion.p variants={child}>we</motion.p>
          <motion.p variants={child}>
            do<span className="text-green-500">?</span>
          </motion.p>
        </motion.div>

        {/* COLUMN 1 */}
        <motion.div
          style={{ y: col1Y }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="text-gray-800"
        >
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold"
          >
            Digital.
          </motion.h2>

          {/* Line Reveal */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-pink-400 mt-2 mb-6"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="italic text-xl mb-6"
          >
            We create super-rich experiences online!
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-lg leading-relaxed text-gray-600"
          >
            Our team creates solutions that are not only performance driven,
            but also creative. We run engaging digital campaigns that help
            brands grow faster.
          </motion.p>

          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="inline-block mt-6 text-2xl font-bold hover:text-green-500 transition"
          >
            ABOUT US →
          </motion.a>
        </motion.div>

        {/* COLUMN 2 */}
        <motion.div
          style={{ y: col2Y }}
          initial={{ opacity: 0, y: 100, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.2,
          }}
          className="text-gray-800"
        >
          <motion.h2
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold"
          >
            And More Digital.
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-pink-400 mt-2 mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="italic text-xl mb-6"
          >
            Marketing brands with care
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-lg leading-relaxed text-gray-600"
          >
            We create digital experiences that stick with audiences and
            achieve brand objectives.
          </motion.p>

          <motion.a
            href="#"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="inline-block mt-6 text-2xl font-bold hover:text-green-500 transition"
          >
            OUR SERVICES →
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
}
