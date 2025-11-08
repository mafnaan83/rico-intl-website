"use client";

import { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import Image from "next/image";
import { twJoin, twMerge } from "tailwind-merge";

const ICON_PATHS = [
  "/can.png",
  "/cont.png",
  "/tin.png",
  "/metal con.png",
  "/pack.png",
];

const alt = [
  "Custom-printed tin packaging for commercial products",
  "High-quality metal can used for industrial and food packaging",
  "Durable plastic container for chemical and lubricant storage",
  "Industrial metal container designed for bulk packaging and transport",
  "Assorted packaging materials and equipment for industrial use",
];

const configs = [
  "Plastic Can",
  "Container",
  "Tin",
  "Metal Drum",
  "Container pack",
];

type Props = {
  isReversed?: boolean;
  className?: string;
};

const ELEMENTS = [...ICON_PATHS, ...ICON_PATHS];

export default function AppleMarquee({ isReversed = false, className }: Props) {
  const movingContainer = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const timelineTimeScaleTween = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!movingContainer.current) return;

    gsap.set(movingContainer.current, {
      xPercent: isReversed ? -50 : 0,
    });

    const tl = gsap.timeline({
      defaults: { ease: "none", repeat: -1 },
    });

    tl.to(movingContainer.current, {
      xPercent: isReversed ? 0 : -50,
      duration: 50,
    }).set(movingContainer.current, { xPercent: isReversed ? -50 : 0 });

    timeline.current = tl;

    return () => {
      tl.kill();
    };
  }, [isReversed]);

  const onPointerEnter = () => {
    if (!timeline.current) return;
    timelineTimeScaleTween.current?.kill();
    timelineTimeScaleTween.current = gsap.to(timeline.current, {
      timeScale: 0.25,
      duration: 0.4,
    });
  };

  const onPointerLeave = () => {
    if (!timeline.current) return;
    timelineTimeScaleTween.current?.kill();
    timelineTimeScaleTween.current = gsap.to(timeline.current, {
      timeScale: 1,
      duration: 0.2,
    });
  };

  const list = useMemo(
    () => (
      <div className="flex w-fit items-center gap-10">
        {ELEMENTS.map((src, index) => {
          const altIndex = index % ICON_PATHS.length;
          const configText = configs[altIndex];
          const isLast = index === ELEMENTS.length - 1;

          return (
            <div
              key={index}
              className={twJoin(
                "group flex flex-col items-center justify-start shrink-0 transition-all",
                isLast && "mr-10"
              )}
              style={{ width: 300 }}
            >
              <div className="relative w-[300px] h-[300px] rounded-md overflow-hidden">
                <Image
                  src={src}
                  alt={alt[altIndex]}
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
              <p className="mt-2 text-center text-sm text-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {configText}
              </p>
            </div>
          );
        })}
      </div>
    ),
    []
  );

  return (
    <div
      className={twMerge("max-w-full select-none overflow-hidden", className)}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      <div ref={movingContainer} className="flex w-fit">
        {list}
        {list}
      </div>
    </div>
  );
}
