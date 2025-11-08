import React from "react";
import { ShieldCheck, Package, Handshake, Network } from "lucide-react";
import FeatureCard from "@/app/helper-ui/feature-card";
import WhiteButton from "@/app/helper-ui/button";

const WhyUs = () => {
  return (
    <div className="bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-zinc-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neutral-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zinc-700/5 rounded-full blur-3xl"></div>
      </div>

      {/* Flowing lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <path
            d="M-100 400 Q300 200 600 400 T1300 400"
            stroke="url(#grayGradient1)"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
          />
          <path
            d="M-100 500 Q400 300 700 500 T1300 500"
            stroke="url(#grayGradient2)"
            strokeWidth="2"
            fill="none"
            opacity="0.2"
          />
          <defs>
            <linearGradient
              id="grayGradient1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#9ca3af" stopOpacity="0" />
              <stop offset="50%" stopColor="#9ca3af" stopOpacity="1" />
              <stop offset="100%" stopColor="#9ca3af" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="grayGradient2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#a1a1aa" stopOpacity="0" />
              <stop offset="50%" stopColor="#a1a1aa" stopOpacity="1" />
              <stop offset="100%" stopColor="#a1a1aa" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Main content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                Why We’re the
                <br />
                <span className="text-zinc-300"> Right Choice</span>
              </h2>

              <p className="text-lg lg:text-xl text-zinc-400 leading-relaxed max-w-lg">
                Combining quality products, flexible supply, and trusted service
                to ensure your packaging needs are met with consistency and
                care.
              </p>
            </div>

            <WhiteButton label={"Talk to us"} showArrow />
          </div>

          {/* Right side - Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard
              icon={Package}
              title="Wide Range of Packaging"
              description="Metal, plastic, and custom solutions for every industry need."
            />

            <FeatureCard
              icon={Handshake}
              title="Flexible Supply & Pricing"
              description="Affordable options with terms that fit your business."
            />

            <FeatureCard
              icon={Network}
              title="Strong Supplier Network"
              description="Reliable sourcing and consistent product availability."
            />

            <FeatureCard
              icon={ShieldCheck}
              title="Quality & Customer Focus"
              description="We prioritize product quality and customer satisfaction in every order."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
