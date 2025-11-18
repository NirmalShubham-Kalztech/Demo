import React from "react";

import { motion } from "framer-motion";
 
export default function Overview() {

  return (
<div className="w-full min-h-screen bg-black text-white overflow-hidden">

      {/* Scrolling Background Stars */}
<motion.div

        className="absolute inset-0 bg-[url('https://assets.codepen.io/13471/stars.png')] opacity-40"

        animate={{ backgroundPositionY: [0, 2000] }}

        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}

      />
 
      {/* Earth Animation */}
<div className="flex justify-center items-center pt-20 relative z-10">
<motion.img

          src="https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"

          alt="Earth"

          className="w-56 h-56 rounded-full shadow-2xl border-4 border-blue-500"

          animate={{ rotate: 360 }}

          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}

        />
</div>
 
      {/* Overview Section */}
<div className="relative z-10 mt-16 px-6 md:px-20">
<motion.h1

          className="text-3xl md:text-5xl font-bold text-center mb-10"

          initial={{ opacity: 0, y: 40 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8 }}
>

          Overview 
    </motion.h1>

        <motion.p
            className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}   
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >

            Welcome to our modern and visually immersive overview section. Here you’ll find a
            smooth, atmospheric animation that imitates the rotation of Earth, giving your
            website a futuristic and elegant feel. Perfect for tech, education, science, or
            portfolio websites.
        </motion.p>
        
            {/* Continuous Floating Elements */}
        <div className="flex justify-center mt-16 space-x-6">

                
        </div>
        
    </div>
 
      {/* Smooth Scroll Indicator */}
<motion.div

        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-gray-300" 

        animate={{ opacity: [0.2, 1, 0.2] }} 

        transition={{ repeat: Infinity, duration: 2 }}
>
<p className="text-sm">Scroll Down</p>
<div className="w-1 h-6 bg-gray-400 mx-auto mt-1 rounded-full" />
</motion.div>
</div>

  );

}

 