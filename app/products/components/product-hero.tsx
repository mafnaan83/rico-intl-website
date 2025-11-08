"use client";

import { motion } from "framer-motion";

export default function ProductHero() {
  return (
    <div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2 bg-white">
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-center p-10 space-y-6"
      >
        <h2 className="text-5xl font-bold leading-tight text-black max-w-lg">
          Ever thought what keeps products safe?
        </h2>
        <p className="text-gray-600 text-lg">
          We’ve got the packaging that does the job right.
        </p>

        <a href="/contact" className="underline text-black font-medium text-lg">
          Talk to us
        </a>
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative flex items-center justify-center bg-linear-to-b from-zinc-900 to-zinc-700"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Floating cup images (replace src with actual Next.js optimized images) */}
          <motion.img
            src="/p1.png"
            alt="Cup 1"
            className="lg:w-100 md:w-70 w-65 -top-40 absolute lg:top-100 md:top-50 left-0 lg:left-60 md:left-50 right-0 lg:right-20"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />

          <motion.img
            src="/p2.png"
            alt="Cup 2"
            className="lg:w-100 md:w-70 w-65 sm:top-0 absolute lg:top-40 md:top-80 right-0 lg:right-100 md:right-50"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>
      </motion.div>
    </div>
  );
}
