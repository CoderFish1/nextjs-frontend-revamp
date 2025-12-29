import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import TestimonialsPage from "@/components/TestimonialsPage";
import { Webinars } from "@/components/Webinars";
import { Instructors } from "@/components/Instructors";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <FeaturedCourses/>
    <TestimonialsPage/>
    <Webinars/>
    <Instructors/>
    <Footer/>
    </>
  );
}
