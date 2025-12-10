import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function WhatWeDo() {
  const { scrollY } = useScroll();

  // Parallax Effects (Different speeds)
  const titleY = useTransform(scrollY, [0, 400], [0, -60]);
  const col1Y = useTransform(scrollY, [0, 400], [0, -40]);
  const col2Y = useTransform(scrollY, [0, 400], [0, -20]);

  return (
    <div className="w-full bg-white text-black py-20 px-6 md:px-20 overflow-hidden">

      <div className="grid md:grid-cols-3 gap-10 items-start">

        {/* LEFT TITLE PARALLAX */}
        <motion.div
          style={{ y: titleY }}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-black leading-tight"
        >
          <p>What</p>
          <p>we</p>
          <p>
            do<span className="text-green-500">?</span>
          </p>
        </motion.div>

        {/* FIRST COLUMN PARALLAX */}
        <motion.div
          style={{ y: col1Y }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-800"
        >
          <h2 className="text-4xl font-bold">Digital.</h2>
          <div className="h-1 w-16 bg-pink-400 mt-2 mb-6"></div>

          <p className="italic text-xl mb-6">
            We create super-rich experiences online!
          </p>

          <p className="text-lg leading-relaxed text-gray-600">
            Our team creates solutions that are not only performance driven,
            but also creative. We run engaging digital campaigns that help
            brands grow faster.
          </p>

          <a
            href="#"
            className="inline-block mt-6 text-2xl font-bold hover:text-green-500 transition"
          >
            ABOUT US →
          </a>
        </motion.div>

        {/* SECOND COLUMN PARALLAX */}
        <motion.div
          style={{ y: col2Y }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-800"
        >
          <h2 className="text-4xl font-bold">And More Digital.</h2>
          <div className="h-1 w-16 bg-pink-400 mt-2 mb-6"></div>

          <p className="italic text-xl mb-6">Marketing brands with care</p>

          <p className="text-lg leading-relaxed text-gray-600">
            We create digital experiences that stick with audiences and
            achieve brand objectives. Trust us with creating visibility and
            performance-focused marketing for your brand.
          </p>

          <a
            href="#"
            className="inline-block mt-6 text-2xl font-bold hover:text-green-500 transition"
          >
            OUR SERVICES →
          </a>
        </motion.div>

      </div>
    </div>
  );
}
