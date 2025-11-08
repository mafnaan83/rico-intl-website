"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import {
  Lightbulb,
  Eye,
  Compass,
  ShieldCheck,
  BadgeCheck,
  Leaf,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { CoreValue } from "./corevalue";
import { MissionVisionCard } from "./mission-vision-card";

const MissionVision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // triggers when 100px before visible
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div
      ref={ref}
      className="relative bg-white py-10 md:py-10 px-4 md:px-8 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="relative">
          {/* Core Values Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6 }}
            className="bg-linear-to-br from-gray-700 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-8 shadow-2xl relative z-20 md:mb-[-60px]"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <CoreValue icon={ShieldCheck} label="Safety" delay={0.1} />
              <CoreValue icon={BadgeCheck} label="Quality" delay={0.2} />
              <CoreValue icon={Lightbulb} label="Innovation" delay={0.3} />
              <CoreValue icon={Leaf} label="Sustainability" delay={0.4} />
            </div>
          </motion.div>

          {/* Vision and Mission */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col md:flex-row items-start gap-12 md:gap-16 backdrop-blur-xl border rounded-3xl p-8 md:p-12 pt-16 md:pt-24 shadow-[0_10px_30px_rgba(0,0,0,0.1)] relative z-10 text-white"
          >
            <MissionVisionCard
              icon={Eye}
              title="Vision"
              description="To be a leading regional supplier and trading partner recognized for quality, integrity,
and customer satisfaction in the packaging and general trading industries."
              delay={0.3}
            />

            {/* Divider */}
            <div className="hidden md:block w-px bg-zinc-700 self-stretch" />
            <div className="md:hidden h-px bg-zinc-700 w-full" />

            <MissionVisionCard
              icon={Compass}
              title="Mission"
              description="To provide reliable, innovative, and sustainable packaging and trading solutions that
meet the diverse needs of our customers, while maintaining the highest standards of
quality and service."
              delay={0.5}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;