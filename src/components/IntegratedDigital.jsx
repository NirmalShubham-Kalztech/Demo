import React from "react";
import { motion } from "framer-motion";
import Image from "../assets/image1.png";

export default function IntegratedDigitalSolutions() {
  return (
    <section className="w-full bg-gray-100 py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-stretch">

          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-xl shadow-sm flex flex-col justify-center"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
              Integrated Digital <br /> Solutions
            </h1>

            {/* Pink Line */}
            <div className="h-1 w-20 bg-pink-500 mt-4 mb-6"></div>

            <p className="italic text-xl text-gray-700 mb-6">
              Insights, Metrics and Analytics – Everything is connected!
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              In a digital world where everything’s connected, we believe that the
              approach to digital communications has to be joined-up too. Our
              approach combines creativity & technology and blends a diverse range
              of digital marketing disciplines — from mobile and responsive web
              design to search and social media campaigns — all under one roof.
            </p>
          </motion.div>

          {/* ================= RIGHT IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex items-stretch"
          >
            {/* Image takes SAME height as left */}
            <img
              src={Image}
              alt="Connected Devices"
              className="w-full h-full object-contain"
            />

            {/* Yellow Scroll Button */}
            <div className="absolute bottom-8 right-8 w-14 h-14 bg-yellow-400 rounded-sm flex items-center justify-center shadow-md cursor-pointer hover:scale-105 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M12 8l-6 6h12z" />
              </svg>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
