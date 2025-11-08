"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const TextHeading = () => {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const words = ["Get in touch,", "let us know", "how we can help you"];
  return (
    <div className="bg-white">
      <h2
        ref={headingRef}
        className="text-3xl font-semibold text-center text-black md:text-6xl lg:text-7xl px-5 pt-30"
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
            animate={
              isHeadingInView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}
            }
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            className={`mr-2 inline-block ${
              ["RICO International", "transformation"].includes(word)
                ? "bg-[linear-gradient(to_right,#5f17eb,#8b5cf6)] bg-clip-text text-transparent"
                : ""
            }`}
          >
            {word}
          </motion.span>
        ))}
      </h2>
    </div>
  );
};

export default TextHeading;
