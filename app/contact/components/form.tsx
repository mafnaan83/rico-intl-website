"use client";
import GradientButton from "@/app/helper-ui/gradinet-button";
import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <div className="py-20 flex items-center justify-center bg-linear-to-br from-white via-purple-50 to-orange-50 p-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 bg-white/40 backdrop-blur-lg p-10 rounded-2xl shadow-xl">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <h1 className="text-4xl text-black font-bold">Contact Us</h1>
          <p className="text-gray-600 max-w-md">
            We are committed to processing the information in order to contact
            you and talk about your enquiries.
          </p>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-center space-x-3">
              <span className="text-orange-500">📧</span>
              <p>fahad@rico-intl.com</p>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-orange-500">🏠</span>
              <p>Dammam, Saudi Arabia</p>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-orange-500">📞</span>
              <p>+966 530649135</p>
            </div>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-400 text-gray-800 "
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-400 text-gray-800"
          />

          <input
            type="text"
            placeholder="Website"
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-400 text-gray-800"
          />

          <textarea
            placeholder="Message"
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-400 text-gray-800"
          />

          <GradientButton label={"Submit"} />
        </motion.form>
      </div>
    </div>
  );
}
