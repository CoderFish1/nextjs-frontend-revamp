"use client";

import Link from "next/link";
import Image from "next/image";
import { Spotlight } from "./ui/Spotlight";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { Vortex } from "./ui/vortex";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <Spotlight
        className="-left-[35%] top-1/2 -translate-y-1/2 pointer-events-none"
        fill="purple"
      />

      <Spotlight
        className="-right-[35%] top-1/2 -translate-y-1/2 pointer-events-none"
        fill="blue"
      />

      <div className="relative z-10 mx-auto max-w-7xl min-h-screen flex items-center px-6">
        <div className="w-full flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-[70%] rounded-2xl overflow-hidden">
            <Vortex
              backgroundColor="black"
              className="flex flex-col items-center justify-center px-6 md:px-14 py-16 min-h-[420px]"
            >
              <h1 className="text-white text-3xl md:text-6xl font-bold text-center leading-tight">
                Learn Music the Right Way
              </h1>

              <p className="text-neutral-300 mt-6 text-center max-w-xl md:text-xl">
                Structured paths. Real mentors. Real progress.
              </p>

              <div className="mt-8">
                <Link href="/courses">
                  <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="bg-white text-black px-6 py-3"
                  >
                    Explore Learning Paths
                  </HoverBorderGradient>
                </Link>
              </div>
            </Vortex>
          </div>

          <div className="w-full md:w-[30%] relative rounded-2xl overflow-hidden min-h-[420px] bg-neutral-900/40">
            <Image
              src="/courses/guitar.jpg"
              alt="Guitar course"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
