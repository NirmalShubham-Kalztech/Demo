import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function WorkWithUs() {
  // Refs for left and right columns
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  // In-view detection
  const leftInView = useInView(leftRef, { once: false });
  const rightInView = useInView(rightRef, { once: false });

  return (
    <div className="min-h-screen bg-gray-50 pt-32 px-6"> {/* pt-32 = navbar pasun space */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Column */}
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, x: -50 }}
          animate={leftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-gray-900 leading-tight">
            Work With Us
          </h1>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
            <p className="text-gray-700 italic">
              At Webeesocial, we are proud of our team and encourage the efforts of all our bees in their achievements throughout their career with us. As a full-service agency, we strengthen ourselves by integrating each team to learn from one another. As a company, we have 4 specific values that we believe represent a successful working strategy: Taking Ownership, Thinking Smart, Supporting Others and Surprise and Delight. They are the essence of what we stand for as a company and part of our success are making sure we apply them to our work ethic.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Our Environment</h2>
            <p className="text-gray-700 italic">
              As soon as you walk into our office you will notice the vibrant atmosphere that hits you. As a company, we also want to encourage social awareness and are keen that we give a little back to the society in which we live and work. We endorse our “Bees” to share all ideas and recommendations to help drive the atmosphere in the working environment run smoothly and efficiently.
            </p>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          ref={rightRef}
          initial={{ opacity: 0, x: 50 }}
          animate={rightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
          className="border-l border-gray-300 pl-6 md:pl-10"
        >
          <h2 className="text-2xl font-semibold mb-4">Contact Our HR</h2>

          <div className="flex items-center mb-4">
            <span className="mr-2 text-xl">✉️</span>
            <a href="mailto:hr@webeesocial.com" className="text-green-600">
              hr@webeesocial.com
            </a>
          </div>

          <p className="text-gray-700 mb-6">
            For enquiries and applications, please send your resume along with a detailed cover letter at <a href="mailto:hr@webeesocial.com" className="text-green-600">hr@webeesocial.com</a>
          </p>

          <p className="text-gray-700">
            For WBS CA applications, please send a mail to <a href="mailto:saurav.k@webeesocial.com" className="text-green-600">saurav.k@webeesocial.com</a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
