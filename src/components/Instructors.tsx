"use client";

import React, { useEffect, useState } from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export const Instructors = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <WavyBackground className="py-32">

        {/* HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-20 px-6">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">
            Our Mentors
          </p>

          <h2
            className="
              mt-4 text-3xl md:text-6xl
              font-serif font-semibold
              bg-gradient-to-b from-white to-neutral-400
              bg-clip-text text-transparent
            "
          >
            Learn From World-Class Instructors
          </h2>

          <p className="mt-6 text-neutral-300 text-sm md:text-base font-light">
            Each instructor brings years of professional experience, deep musical
            understanding, and a passion for teaching.
          </p>
        </div>

        {/* TESTIMONIALS (CLIENT-ONLY AFTER MOUNT) */}
        <div className="max-w-6xl mx-auto px-6">
          {mounted && (
            <AnimatedTestimonials testimonials={instructors} />
          )}
        </div>

      </WavyBackground>
    </section>
  );
};

/* DATA */
const instructors = [
  {
    quote:
      "Great singing starts with confidence and control. My goal is to help students discover their true voice and perform with emotion.",
    name: "Elena Briggs",
    designation: "Vocal Coach",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=60",
  },
  {
    quote:
      "Music should feel natural in your hands. I focus on strong fundamentals that make guitar playing effortless and expressive.",
    name: "Marcus Reid",
    designation: "Guitar Instructor",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=60",
  },
  {
    quote:
      "Piano is about touch and intention. I help students develop technique while keeping musicality at the center.",
    name: "Julia Zhang",
    designation: "Piano Teacher",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=60",
  },
  {
    quote:
      "Rhythm is the backbone of music. I train students to feel time, groove confidently, and play with precision.",
    name: "Andre Gomez",
    designation: "Drumming Expert",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=60",
  },
];
