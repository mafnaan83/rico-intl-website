"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const images = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/rico%2FGeneral%20Trading.png?alt=media&token=a99e137b-9ef2-42c8-8b48-68238206800a",
    label: "General Trading",
    desc: "Versatile solutions for every business.",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/rico%2Ffood%26bev.png?alt=media&token=866efea2-f1a4-4cc8-9aea-9fb11f8aca8d",
    label: "Food & Beverage",
    desc: "Safe and durable packaging",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/rico%2Fchemical.png?alt=media&token=a67f250e-94eb-46f5-93e7-59205f16e1ee",
    label: "Chemical",
    desc: "Secure solutions for chemical handling.",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/rico%2Flubricant.png?alt=media&token=bcd5a35d-1323-4102-9622-ac8c675abf6f",
    label: "Lubricant & Oil",
    desc: "Protecting product quality and integrity.",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/rico%2FIndustrial%20manu.png?alt=media&token=d716c13d-03dc-4563-988e-4b3c6559d77c",
    label: "Manufacturing",
    desc: "Tough solutions for heavy-duty needs.",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/rico%2Fa-realistic-high-resolution-photograph-showing-nea.png?alt=media&token=9a11d63a-e8d2-489c-ad93-65d3d3cb3ec6",
    label: "Supply Chain",
    desc: "Get the best materials for packing",
  },
];

const Industries = () => {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.4 });
  const words = ["Sloutions", "By", "Business", "Type"];
  return (
    <div className="mx-auto dark:bg-white">
      <h2
        ref={headingRef}
        className="text-3xl pl-5 md:text-5xl lg:px-20 font-bold mb-5 text-black"
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
              word === "Business"
                ? "bg-[linear-gradient(to_right,#5f17eb,#8b5cf6)]  bg-clip-text text-transparent"
                : ""
            }`}
          >
            {word}
          </motion.span>
        ))}
      </h2>

      <div className="overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide py-6 lg:pl-18 pl-6 ">
        <div className="flex gap-6">
          {images.map(({ src, label, desc }, index) => (
            <div
              key={index}
              className="group relative inline-block min-w-[300px] h-110 rounded-xl overflow-hidden shadow-md"
            >
              {/* Background Image */}
              <Image
                src={src}
                alt={label}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-105"
              />

              {/* Top or bottom label depending on index */}
              {index % 2 === 0 ? (
                // Top label for even index (0, 2, 4...)
                <div className="absolute top-0 left-0 right-0 bg-linear-to-b from-black/70 to-transparent p-6">
                  <h4 className="text-white font-semibold text-2xl">{label}</h4>
                  <p className="text-white">{desc}</p>
                </div>
              ) : (
                // Bottom label for odd index (1, 3, 5...)
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-4">
                  <h4 className="text-white font-semibold text-2xl">{label}</h4>
                  <p className="text-white">{desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
