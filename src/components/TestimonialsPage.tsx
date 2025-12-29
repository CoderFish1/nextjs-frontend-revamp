"use client";

import React from "react";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/utils/lib/util";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

const testimonials = [
  {
    id: 1,
    name: "Aarav Sharma",
    designation: "Piano Student",
    content: (
      <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-light">
        Joining this music academy completely transformed my understanding of music.
        The teachers are patient, inspiring, and truly passionate about helping every
        student shine.
      </p>
    ),
  },
  {
    id: 2,
    name: "Neha Kapoor",
    designation: "Guitar Student",
    content: (
      <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-light">
        Learning guitar here has been an amazing experience. The curriculum is engaging,
        and the instructors make even complex techniques easy to grasp.
      </p>
    ),
  },
  {
    id: 3,
    name: "Riya Verma",
    designation: "Vocal Student",
    content: (
      <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-light">
        The vocal training here helped me find my voice and build confidence on stage.
        I couldn’t ask for better guidance.
      </p>
    ),
  },
  {
    id: 4,
    name: "Karan Mehta",
    designation: "Drums Student",
    content: (
      <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-light">
        Personalized attention and a wide variety of instruments truly set this academy
        apart. Every lesson feels meaningful and motivating.
      </p>
    ),
  },
  {
    id: 5,
    name: "Sanya Joshi",
    designation: "Violin Student",
    content: (
      <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-light">
        From the very first lesson, I felt inspired to create and explore music.
        Learning here feels creative, supportive, and exciting.
      </p>
    ),
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden px-6 py-32">

       <DottedGlowBackground
        className="pointer-events-none mask-radial-to-90% mask-radial-at-center"
        opacity={1}
        gap={10}
        radius={1.6}
        colorLightVar="--color-neutral-500"
        glowColorLightVar="--color-neutral-600"
        colorDarkVar="--color-neutral-500"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />

     

      <div className="relative z-10 mx-auto max-w-7xl flex flex-col items-center">

        <div className="text-center max-w-3xl">
          <h2
            className="
              text-3xl md:text-5xl
              font-serif font-semibold tracking-tight
              bg-gradient-to-b from-white to-neutral-400
              bg-clip-text text-transparent
            "
          >
            Stories Shaped by Sound
          </h2>

          <p className="mt-5 text-neutral-400 text-sm md:text-base font-light">
            Honest words from students whose musical journeys evolved
            through guidance, practice, and passion.
          </p>
        </div>

        <div className="mt-24">
          <CardStack items={testimonials} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
