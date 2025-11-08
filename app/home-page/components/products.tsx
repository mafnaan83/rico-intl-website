"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  CardHoverReveal,
  CardHoverRevealContent,
  CardHoverRevealMain,
} from "./helpers/reveal-on-hover";
import { motion, useInView } from "framer-motion";

interface ProductCategory {
  image: string;
  title: string;
  description: string;
  tags: string[];
}

const productCategories: ProductCategory[] = [
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/rico%2FNEW%20TINS%20AND%20CANS.png?alt=media&token=2bfd7696-d831-4aab-a9d1-23849be64474",
    title: "Tin Cans & Containers",
    description:
      "Durable and versatile containers available in multiple sizes and shapes.",
    tags: ["Tins", "Storage", "Industrial", "Durable"],
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/rico%2Fprinted%20tins.png?alt=media&token=f13d13cd-5195-4e7b-8c3f-d43f61feed01",
    title: "Custom-Printed Tins",
    description:
      "Personalized metal tins with premium printing and finishing options.",
    tags: ["Printed", "Custom", "Branded", "Design"],
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/rico%2FNEW%20METAL%20TINS.png?alt=media&token=aaf60333-174a-47fa-8c55-e77de138296b",
    title: "Plain Metal Tins",
    description:
      "High-quality plain tins ideal for food, chemical, and industrial packaging.",
    tags: ["Plain", "Metal", "Quality", "Multi-use"],
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/rico%2FNEW%20METAL%20DRUM.png?alt=media&token=9d29beaf-57ad-4ce9-820a-3ddcf14c233a",
    title: "Industrial Metal Drums & Pails",
    description:
      "Heavy-duty storage solutions for lubricants, chemicals, and bulk materials.",
    tags: ["Drums", "Pails", "Industrial", "Safe"],
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/rico%2FHDPE%20BOTTLES.png?alt=media&token=419a37da-1e81-46e7-a8b5-9a404b92308c",
    title: "HDPE Bottles & Containers",
    description:
      "Lightweight, durable, and chemical-resistant packaging for various applications.",
    tags: ["HDPE", "Safe", "Bottles", "Industrial"],
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/rico%2FPETTT.png?alt=media&token=ccde5fe0-41c6-4479-9b3f-eeb9e734a318",
    title: "PET Bottles & Containers",
    description:
      "Lightweight, durable, and chemical-resistant packaging for various applications.",
    tags: ["HDPE", "Safe", "Bottles", "Industrial"],
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/rico%2FNew%20cans.png?alt=media&token=055be2f2-1b30-4dd9-9704-6201eb61e0e3",
    title: "Plastic Cans & Containers",
    description:
      "High-quality HDPE, PET, and PP packaging designed for strength, safety, and versatility — ideal for storing",
    tags: ["Durable", "Leak-Proof", "Versatile", "Safe"],
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/rico%2Fa-realistic-high-resolution-photograph-showing-nea.png?alt=media&token=9a11d63a-e8d2-489c-ad93-65d3d3cb3ec6",
    title: "Packing Materials",
    description:
      "Global supply of packaging materials and equipment with reliable delivery and quality assurance.",
    tags: ["Packaging", "Equipment", "Global", "Reliable"],
  },
];

const ProductCategoryCarousel = () => {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.4 });
  const words = ["Our", "Products"];
  return (
    <div className="py-12 lg:pl-18 pl-5">
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
              word === "Products"
                ? "bg-[linear-gradient(to_right,#5f17eb,#8b5cf6)]  bg-clip-text text-transparent"
                : ""
            }`}
          >
            {word}
          </motion.span>
        ))}
      </h2>

      <div className="flex overflow-x-auto space-x-6 scrollbar-hide pb-2">
        {productCategories.map((cat, idx) => (
          <CardHoverReveal
            key={idx}
            className="h-[512px] w-[320px] sm:w-[360px] md:w-[350px] rounded-xl flex-shrink-0"
          >
            <CardHoverRevealMain>
              <Image
                width={1077}
                height={606}
                alt={cat.title}
                src={cat.image}
                className="object-cover"
              />
            </CardHoverRevealMain>

            <CardHoverRevealContent className="space-y-4 rounded-2xl bg-zinc-900/75 text-zinc-50">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">{cat.title}</h3>
                <p className="text-sm text-zinc-300">{cat.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardHoverRevealContent>
          </CardHoverReveal>
        ))}
      </div>
    </div>
  );
};

export default ProductCategoryCarousel;
