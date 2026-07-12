"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const ACCENT = "#0d7377";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#f8f9fc]"
    >
      {/* ——— Background image (right side, subtle) ——— */}
      <div className="absolute inset-y-0 right-0 hidden w-[45%] lg:block">
        {/* Replace with Kofi's professional headshot */}
        <Image
          src="https://picsum.photos/seed/kofi-hero/1200/1600"
          alt="Kofi Ofori-Mensah, digital marketing researcher and founder of NeuroDigital Support"
          fill
          priority
          sizes="45vw"
          className="object-cover object-top"
        />
        {/* Soft fade on left edge so text reads cleanly */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f8f9fc] to-transparent" />
      </div>

      {/* ——— Content (left side) ——— */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-[1260px] px-5 pt-40 pb-24 lg:pt-44 lg:pb-0"
      >
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.p
            variants={item}
            className="text-xs font-medium tracking-[4px] text-[#717173]"
          >
            BUSINESS RESEARCHER &amp; FOUNDER
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-extrabold leading-[1.15] text-[#1f1f25] md:text-5xl lg:text-[56px]"
          >
            Kofi Ofori-Mensah
            <span className="mt-2 block text-3xl font-semibold leading-snug text-[#717173] md:text-4xl lg:text-[40px]">
              Building a More Inclusive Internet for{" "}
              <span style={{ color: ACCENT }}>Neurodivergent Adults</span>
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-[#717173] md:text-lg"
          >
            London-based business consultant, MSc Digital Marketing researcher
            at the University of Roehampton, founder of{" "}
            <span className="font-semibold text-[#1f1f25]">
              NeuroDigital Support
            </span>
            , and author exploring how digital platforms can be designed for
            neurodivergent wellbeing rather than against it.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            {/* Primary CTA */}
            <a
              href="#contact"
              className="inline-block rounded px-8 py-4 text-sm font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ backgroundColor: ACCENT }}
            >
              Get in Touch
            </a>

            {/* Secondary CTA */}
            <a
              href="#research"
              className="inline-block rounded border-2 px-8 py-4 text-sm font-semibold uppercase tracking-[2px] transition-all duration-300 hover:-translate-y-0.5"
              style={{ borderColor: ACCENT, color: ACCENT }}
            >
              Read the Research
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* ——— Mobile hero image (below content on small screens) ——— */}
      <div className="absolute bottom-0 right-0 h-[35%] w-full lg:hidden">
        <Image
          src="https://picsum.photos/seed/kofi-hero/1200/1600"
          alt="Kofi Ofori-Mensah"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#f8f9fc]" />
      </div>
    </section>
  );
}