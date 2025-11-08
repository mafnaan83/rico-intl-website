"use client";

import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { Handshake, ShieldCheck, Star, Zap, Users, Leaf } from "lucide-react";

const services = [
  {
    title: "Reliability",
    description:
      "We deliver on our promises with consistency and dedication you can depend on.",
    icon: <ShieldCheck className="w-5 h-5 text-black" />,
    link: "/laptops-desktop",
  },
  {
    title: "Quality",
    description:
      "Every product reflects our commitment to precision, performance, and excellence.",
    icon: <Star className="w-5 h-5 text-black" />,
    link: "/networking",
  },
  {
    title: "Integrity",
    description:
      "We value honesty and transparency, building lasting relationships based on trust.",
    icon: <Handshake className="w-5 h-5 text-black" />,
    link: "/surveillance",
  },
  {
    title: "Innovation",
    description:
      "Constantly evolving with new ideas to meet changing market needs.",
    icon: <Zap className="w-5 h-5 text-black" />,
    link: "/digital-services",
  },
  {
    title: "Sustainability",
    description:
      "We listen, adapt, and deliver solutions that put our clients first.",
    icon: <Leaf className="w-5 h-5 text-black" />,
    link: "/servers-storage",
  },
  {
    title: "Customer Focus",
    description:
      "Committed to responsible practices that support a better future.",
    icon: <Users className="w-5 h-5 text-black" />,
    link: "/it-support-security",
  },
];

export default function OurValues() {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.4 });
  const words = ["Creating", "Value", "Through", "Values"];

  return (
    <section className="px-5 lg:px-20 pt-10 pb-20 bg-white">
      <h2
        ref={headingRef}
        className="text-3xl md:text-5xl font-bold mb-10 text-black"
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
              word === "Values"
                ? "bg-[linear-gradient(to_right,#5f17eb,#8b5cf6)]  bg-clip-text text-transparent"
                : ""
            }`}
          >
            {word}
          </motion.span>
        ))}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  description,
  icon,
  link,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const router = useRouter();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative flex flex-col justify-between rounded-2xl border p-6 h-full overflow-hidden bg-white transition-all hover:cursor-pointer hover:shadow-md"
      onClick={() => router.push(link)}
    >
      <div className="z-10 relative space-y-3">
        <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full border">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-black group-hover:text-white transition-colors">
          {title}
        </h3>
        <p className="text-sm text-black group-hover:text-white transition-colors">
          {description}
        </p>
      </div>

      {/* <div className="z-10 relative mt-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            router.push(link);
          }}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black hover:scale-110 transition-transform shadow-sm"
        >
          ↗
        </button>
      </div> */}

      {/* Gradient hover background */}
      <div className="absolute inset-0 bg-linear-to-br from-gray-600 to-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl z-0" />
    </motion.div>
  );
}
