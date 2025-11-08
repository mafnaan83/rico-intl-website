"use client";

import WhiteButton from "@/app/helper-ui/button";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

const WhyChooseUs = () => {
  const content = [
    "Excellence and Integrity in Every Package",
    "Precision and Professionalism in Every Pack",
    "Creating Value Through Trusted Packaging Solutions",
  ];

  const stats = [
    { value: "2+", label: "Years in market" },
    { value: "20+", label: "Clients trust us" },
    { value: "50+", label: "Projects delivered" },
    { value: "15+", label: "Expert team members" },
    { value: "24/7", label: "Support availability" },
  ];

  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const words = ["Why", "Choose", "RICO International"];
  const router = useRouter();
  return (
    <section className="sm:px-25 px-5 pt-20 mx-auto pb-10 bg-white">
      {/* Top: Left and Right Grid */}
      {/* Top: Left and Right Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
        {/* Left Side */}
        <div className="md:col-span-2 order-2 md:order-1">
          <p className="text-gray-700 text-base mb-6 text-justify">
            We value the strong relationships we’ve built with our trusted
            partners. By working together, we ensure the delivery of
            high-quality packaging solutions, innovative products, and reliable
            services. Our collaborations help us grow, improve, and create value
            for businesses across industries.
          </p>
          <WhiteButton
            label="View Products"
            onClick={() => router.push("/products")}
            showArrow
          />
        </div>

        {/* Right Side / Heading */}
        <div className="md:col-span-3 order-1 md:order-2 text-left">
          <h2 className="rounded-md text-[#5f17eb] py-1 lg:px-4 text-lg font-bold w-fit mb-4">
            YOUR PARTNER
          </h2>
          <h2
            ref={headingRef}
            className="text-3xl font-semibold text-black md:text-6xl lg:text-7xl lg:px-5"
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
      </div>

      {/* Bottom: 3 Big Cards */}
      <div className="mt-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.map((item, index) => (
          <div
            key={index}
            className="shadow-lg bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition flex flex-col justify-evenly"
          >
            {index === 1 ? (
              <>
                <h3 className="text-4xl font-base text-black">{item}</h3>
                <Image
                  src={"/seea.png"}
                  height={200}
                  width={200}
                  alt="They"
                  className="py-15 mx-auto"
                />
                <h3 className="flex text-xl font-medium items-center text-zinc-400 justify-center w-18 h-18 rounded-full border-2 border-blue-300">
                  0{index + 1}
                </h3>
              </>
            ) : (
              <>
                <h3 className="flex text-xl text-zinc-400  font-medium items-center justify-center w-18 h-18 rounded-full border-2 border-blue-100">
                  0{index + 1}
                </h3>
                <Image
                  src={"/seea.png"}
                  height={200}
                  width={200}
                  alt="They"
                  className="py-15 mx-auto"
                />
                <h3 className="text-4xl font-base text-zinc-800 mt-3">
                  {item}
                </h3>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Numbers */}
      <div className="flex flex-col md:flex-row mt-10 items-center md:items-start gap-10">
        <h2 className="text-2xl font-medium text-black md:self-center text-center md:text-left min-w-[200px]">
          RICO by <br /> the numbers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 px-6">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-px h-26 bg-black"></div>
              <div className="flex flex-col gap-3">
                <h3 className="text-6xl font-light text-zinc-800">
                  {stat.value}
                </h3>
                <h3 className="text-base text-zinc-600">{stat.label}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
