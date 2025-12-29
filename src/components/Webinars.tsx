"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Link from "next/link";
import {
  IconMusic,
  IconMicrophone,
  IconGuitarPick,
  IconWaveSine,
  IconMusicBolt,
  IconPiano,
} from "@tabler/icons-react";

export const Webinars = () => {
  return (
    <section className="relative w-full bg-black px-6 pt-32 pb-24">

   
      <div className="mx-auto max-w-4xl text-center mb-16">
        <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
          Featured Webinars
        </p>

        <h2
          className="
            mt-4 text-3xl md:text-5xl font-serif font-semibold
            bg-gradient-to-b from-white to-neutral-400
            bg-clip-text text-transparent
          "
        >
          Crafted Sessions for Musical Growth
        </h2>

        <p className="mt-5 text-neutral-400 text-sm md:text-base font-light">
          Learn directly from experienced mentors through thoughtfully
          designed, skill-focused webinars.
        </p>
      </div>

      {/* BENTO GRID */}
      <BentoGrid className="max-w-6xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={
              <ImageHeader src={item.image} />
            }
            icon={item.icon}
            className={i === 0 || i === 4 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>

   
      <div className="mt-16 flex justify-center">
        <Link
          href="/courses"
          className="rounded-full bg-white px-6 py-3 text-sm font-medium
                     text-black hover:bg-neutral-200 transition"
        >
          Explore All Courses →
        </Link>
      </div>
    </section>
  );
};

const ImageHeader = ({ src }: { src: string }) => (
  <div className="relative h-full w-full min-h-[6rem] overflow-hidden rounded-xl">
    <img
      src={src}
      alt=""
      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/20" />
  </div>
);


const items = [
  {
    title: "Mastering Piano Techniques",
    description:
      "Refine finger control, posture, and expressive performance with expert pianists.",
    image: "/courses/piano.jpg",
    icon: <IconPiano className="h-4 w-4 text-neutral-400" />,
  },
  {
    title: "Guitar Essentials",
    description:
      "Build strong fundamentals with chord progressions, rhythm, and technique.",
    image: "/courses/guitar.jpg",
    icon: <IconGuitarPick className="h-4 w-4 text-neutral-400" />,
  },
  {
    title: "Vocal Training & Performance",
    description:
      "Develop vocal strength, breathing control, and stage confidence.",
    image: "/courses/vocalist.jpg",
    icon: <IconMicrophone className="h-4 w-4 text-neutral-400" />,
  },
  {
    title: "Drums: Rhythm & Timing",
    description:
      "Master groove, tempo, and rhythmic precision.",
    image: "/courses/drumming.jpg",
    icon: <IconWaveSine className="h-4 w-4 text-neutral-400" />,
  },
  {
    title: "Music Theory Made Simple",
    description:
      "Understand harmony, scales, and composition without confusion.",
    image: "/courses/classical-music.jpg",
    icon: <IconMusicBolt className="h-4 w-4 text-neutral-400" />,
  },
  {
    title: "Creative Musicianship",
    description:
      "Explore improvisation, creativity, and expressive musical thinking.",
    image: "/courses/jazz.jpg",
    icon: <IconMusic className="h-4 w-4 text-neutral-400" />,
  },
];
