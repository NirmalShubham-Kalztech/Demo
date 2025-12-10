import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="pt-28 px-6 md:px-12 lg:px-20 bg-gray-50">
      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600">
          Contact Us
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Have questions? We’d love to hear from you. Send us a message and our
          team will get back to you soon.
        </p>
      </div>

      {/* CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        
        {/* CONTACT FORM */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-2xl shadow-lg border"
        >
          <h2 className="text-xl font-semibold mb-4">Send a Message</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border rounded-lg px-4 py-3 w-full outline-blue-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border rounded-lg px-4 py-3 w-full outline-blue-500"
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="border rounded-lg px-4 py-3 w-full mt-4 outline-blue-500"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="border rounded-lg px-4 py-3 w-full mt-4 outline-blue-500"
          />

          <button
            type="submit"
            className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* CONTACT DETAILS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 rounded-2xl shadow-lg border"
        >
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>

          <ul className="space-y-4">
            <li>
              <h3 className="font-medium text-gray-800">📍 Address</h3>
              <p className="text-gray-600">123 Business Street, Mumbai, India</p>
            </li>
            <li>
              <h3 className="font-medium text-gray-800">📞 Phone</h3>
              <p className="text-gray-600">+91 98765 43210</p>
            </li>
            <li>
              <h3 className="font-medium text-gray-800">📧 Email</h3>
              <p className="text-gray-600">support@yourcompany.com</p>
            </li>
          </ul>

          <div className="mt-6">
            <h3 className="font-medium text-gray-800 mb-2">🌐 Follow Us</h3>
            <div className="flex gap-4 text-xl">
              <a href="#" className="hover:text-blue-600">🌐</a>
              <a href="#" className="hover:text-blue-600">📘</a>
              <a href="#" className="hover:text-blue-600">📸</a>
              <a href="#" className="hover:text-blue-600">🐦</a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
