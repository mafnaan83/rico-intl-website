// components/AppleMacSection.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeInWhenVisible from "@/app/helper-ui/Framer-animation";
import AppleMarquee from "@/app/helper-ui/marquee";

export default function ProductCar() {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const words = [
    "Durable",
    "Industrial",
    "Packaging",
    "for Every Need",
    "in Dammam",
  ];
  return (
    <section className="lg:py-20 py-10 text-black bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-10">
          <h1
            ref={headingRef}
            className="text-3xl lg:max-w-3xl sm:text-4xl md:text-5xl font-semibold text-center leading-tight"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={
                  isHeadingInView
                    ? { opacity: 1, filter: "blur(0px)", y: 0 }
                    : {}
                }
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className={`mr-2 inline-block ${
                  word === "Packaging"
                    ? "bg-[linear-gradient(to_right,#5f17eb,#8b5cf6)] bg-clip-text text-transparent"
                    : ""
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Horizontally scrollable laptops */}
        <FadeInWhenVisible delay={0.7}>
          <div className="overflow-x-auto">
            <div className="flex space-x-6 pb-4">
              <AppleMarquee />
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
