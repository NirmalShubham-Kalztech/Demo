import { motion } from "framer-motion";

import aboutImg from "../assets/about-img.png";
import leader1 from "../assets/leader1.png"; 
import leader2 from "../assets/leader2.png"; 
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";

export default function About() {
  return (
    <div className="w-full bg-white pt-20">

      {/* -------- ABOUT SECTION -------- */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-start">

          {/* LEFT CONTENT */}
          <motion.div 
            className="pt-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-black tracking-tight text-black"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              ABOUT <span className="text-green-500">US</span>
            </motion.h1>

            <motion.div 
              className="w-20 h-[3px] bg-yellow-400 mt-3 mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6 }}
            />

            <motion.p
              className="italic text-xl md:text-2xl text-gray-900 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              We live and breathe digital. The Internet is our home.
            </motion.p>

            <motion.p
              className="text-gray-700 text-[17px] leading-[1.9]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              We are a buzzing digital media agency based out of New Delhi, India.
              Our team consists of experienced and hardworking social bees who
              breathe and live digital. Change on Facebook, Twitter, YouTube,
              Instagram, Google algorithm? Rest assured we know it the moment it’s out.
              <br /><br />
              We combine our years of experience in creating integrated social
              solutions with creative output to generate a rich digital experience
              for our clients. We think, we research, we create, and we deliver the
              best possible solutions.
            </motion.p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div 
            className="w-full flex justify-end items-start"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={aboutImg}
              alt="About Visual"
              className="w-[90%] md:w-[85%] h-full object-contain"
            />
          </motion.div>
        </div>
      </div>

      {/* -------- LEADERSHIP SECTION -------- */}
      <div className="bg-gray-50 py-20 mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">

          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Our <span className="text-green-500">Leadership</span>
          </motion.h2>

          <div className="w-20 h-[3px] bg-yellow-400 mb-12"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {[leader1, leader2].map((img, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <img src={img} className="w-full rounded-xl mb-4" />
                <h3 className="text-xl font-semibold">
                  {i === 0 ? "Rahul Sharma" : "Naina Kapoor"}
                </h3>
                <p className="text-gray-500">
                  {i === 0 ? "Founder & CEO" : "Creative Director"}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </div>

      {/* -------- CLIENTS SECTION -------- */}
      <div className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 text-center">

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Our <span className="text-green-500">Clients</span>
          </motion.h2>
          
          <div className="w-20 h-[3px] bg-yellow-400 mx-auto mb-12"></div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10">
            {[client1, client2, client3, client4, client1, client2].map((img, i) => (
              <motion.img 
                key={i}
                src={img}
                className="w-24 mx-auto opacity-90"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              />
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}
