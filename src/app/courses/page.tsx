"use client";

import React from "react";
import courseData from "@/data/music_courses.json";
import { Carousel } from "@/components/ui/carousel";

const CoursesPage = () => {
  const slides = courseData.courses.map((course) => ({
    title: course.title,
    button: "View Course",
    src: course.image, 
  }));

  return (
    <div className="relative w-full min-h-screen bg-black px-6">


      <h1 className="text-center text-4xl md:text-6xl font-bold text-white pt-32">
        All Courses{" "}
        <span className="text-neutral-400">
          ({courseData.courses.length})
        </span>
      </h1>


      <p className="mt-6 text-center text-neutral-400 max-w-2xl mx-auto">
        Explore our complete collection of structured music programs designed
        for beginners to advanced learners.
      </p>

    
      <div className="relative overflow-hidden w-full py-24">
        <Carousel slides={slides} />
      </div>
    </div>
  );
};

export default CoursesPage;
