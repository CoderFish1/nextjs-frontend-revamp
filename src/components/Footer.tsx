"use client";
import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative w-full bg-black border-t border-white/10 px-6 py-20">
      
      <div className="mx-auto max-w-7xl grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

        {/* ABOUT */}
        <div>
          <h3 className="text-lg font-semibold text-white tracking-tight">
            Music School
          </h3>
          <p className="mt-5 text-sm text-neutral-400 leading-relaxed">
            A modern music academy dedicated to nurturing creativity,
            technique, and confidence. Learn music the right way —
            structured, inspiring, and personal.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-300">
            Explore
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-white transition">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/webinars" className="hover:text-white transition">
                Webinars
              </Link>
            </li>
            <li>
              <Link href="/contacts" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-300">
            Connect
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Twitter / X
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                YouTube
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Facebook
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-300">
            Contact
          </h4>
          <div className="mt-5 space-y-2 text-sm text-neutral-400">
            <p>New Delhi, India</p>
            <p>Email: info@musicschool.com</p>
            <p>Phone: +91 12345 67890</p>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="mt-16 border-t border-white/10 pt-6 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Music School. All rights reserved.
      </div>

    </footer>
  );
};
