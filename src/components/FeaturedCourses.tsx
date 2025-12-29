"use client";

import React from "react";
import courseData from "../data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { motion } from "framer-motion";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

const FeaturedCourses = () => {
  const featuredData = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <section className="relative w-full bg-black py-28 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
          Curated Learning Paths
        </h2>
        <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
          Hand-picked courses designed to take you from fundamentals to mastery.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {featuredData.map((course: Course) => (
          <motion.div
            key={course.id}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <BackgroundGradient className="rounded-2xl h-full" animate={true}>
              <div className="p-8 h-full flex flex-col justify-between bg-neutral-950 rounded-2xl">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {course.title}
                  </h3>

                  <p className="text-sm text-neutral-400 mt-2">
                    By {course.instructor}
                  </p>

                  <p className="text-neutral-300 mt-5 text-sm leading-relaxed">
                    {course.description}
                  </p>
                </div>

                <div className="mt-8">
                  <Link href={`/courses/${course.slug}`}>
                    <HoverBorderGradient
                      containerClassName="rounded-full"
                      className="text-sm px-6 py-2"
                    >
                      Explore Course
                    </HoverBorderGradient>
                  </Link>
                </div>
              </div>
            </BackgroundGradient>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 flex justify-center">
        <Link href="/courses">
          <HoverBorderGradient
            containerClassName="rounded-full"
            className="px-10 py-3 text-base"
          >
            View All Courses
          </HoverBorderGradient>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedCourses;
