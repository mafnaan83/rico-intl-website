"use client";

import gsap from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { FC, useMemo, useRef, useEffect } from "react";
import { twJoin, twMerge } from "tailwind-merge";
import Image from "next/image";

gsap.registerPlugin(CSSPlugin);

const testimonials = [
  {
    author: {
      name: "Raheel",
      handle: "@raheelweb",
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/images%2Fvecteezy_man-empty-avatar-vector-photo-placeholder-for-social_36594092.jpg?alt=media&token=1493c984-9e65-404b-bc92-4a3cf7584f82",
    },
    text: "Their products are durable, customizable, and delivered on time — every time. Working with them has significantly improved our production efficiency.",
    href: "#",
  },
  {
    author: {
      name: "Dr. Abdurehman",
      handle: "@drabdurehman",
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/images%2Fvecteezy_man-empty-avatar-vector-photo-placeholder-for-social_36594092.jpg?alt=media&token=1493c984-9e65-404b-bc92-4a3cf7584f82",
    },
    text: "We’ve been sourcing PET and HDPE bottles from Reliable International for over a year now. Their attention to quality and consistency is unmatched. The team’s responsiveness and reliability make them stand out.",
    href: "#",
  },
  {
    author: {
      name: "Hammad Noor",
      handle: "@hammadapps",
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/images%2Fvecteezy_man-empty-avatar-vector-photo-placeholder-for-social_36594092.jpg?alt=media&token=1493c984-9e65-404b-bc92-4a3cf7584f82",
    },
    text: "From the very first order, Reliable International impressed us with their professionalism and commitment to sustainability.",
    href: "#",
  },
];

type Props = {
  isReversed?: boolean;
  className?: string;
};

const ELEMENTS = [...testimonials, ...testimonials];

const Testamonialarquee: FC<Props> = ({ isReversed = false, className }) => {
  const movingContainer = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const timelineTimeScaleTween = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!movingContainer.current) return;

    // Set initial position
    gsap.set(movingContainer.current, {
      xPercent: isReversed ? -50 : 0,
    });

    // Create infinite scrolling timeline
    timeline.current = gsap
      .timeline({ defaults: { ease: "none", repeat: -1 } })
      .to(movingContainer.current, {
        xPercent: isReversed ? 0 : -50,
        duration: 50,
      })
      .set(movingContainer.current, { xPercent: 0 });

    return () => {
      timeline.current?.kill();
      timelineTimeScaleTween.current?.kill();
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
      <div className="flex w-fit items-center gap-10 px-4 lg:py-10 py-5">
        {ELEMENTS.map((item, index) => {
          const { author, text } = item;
          const isLast = index === ELEMENTS.length - 1;

          return (
            <div
              key={index}
              className={twJoin(
                "shrink-0 w-[400px] bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 p-6 py-10 flex flex-col justify-between",
                isLast && "mr-10"
              )}
            >
              <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                “{text}”
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    fill
                    className="object-cover rounded-full border"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-800 text-sm">
                    {author.name}
                  </span>
                </div>
              </div>
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
};

export default Testamonialarquee;
