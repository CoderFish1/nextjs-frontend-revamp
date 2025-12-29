"use client";

import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function ContactPage() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden">

      <BackgroundBeams />
      <div className="relative z-10 w-full max-w-lg px-6">
        <div className="rounded-2xl border border-white/10 bg-neutral-900/80 backdrop-blur-xl p-8 shadow-xl">

          <h1 className="text-3xl font-serif font-semibold text-white">
            Get in Touch
          </h1>

          <p className="mt-3 text-sm text-neutral-400">
            Have a question about courses, instructors, or schedules?
            We’d love to hear from you.
          </p>

          <form className="mt-8 space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-white/20"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-white/20"
            />
            <textarea
              placeholder="Your message"
              rows={4}
              className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-white/20"
            />

            <button
              type="submit"
              className="mt-4 inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-black hover:bg-neutral-200 transition"
            >
              Send Message →
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
