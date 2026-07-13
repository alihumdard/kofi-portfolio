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
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-white via-[#f9fbfc] to-[#eef7f6] pt-[90px]"
    >
      {/* ——— Background image (right side, subtle) ——— */}
      <div className="absolute right-0 top-20 hidden h-[88%] w-[42%] lg:block">
        <Image
          src="/Images/Hero.png"
          alt="Hero"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* ——— Content (left side) ——— */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex w-full max-w-[1380px] items-center justify-between px-10 xl:px-14"
      >
        <div className="max-w-[620px] lg:py-6">
          {/* Eyebrow */}
          <motion.p
            variants={item}
            className="inline-flex items-center rounded-full bg-[#0d7377]/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[3px] text-[#0d7377]"
          >
            BUSINESS RESEARCHER, Marketing &amp; FOUNDER
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="mt-6 text-[40px] font-extrabold leading-[1.05] text-[#1f1f25] md:text-[40px] lg:text-[50px]"
          >
            Kofi Ofori-Mensah
            <span className="mt-3 block text-[34px] font-semibold leading-tight text-[#717173] md:text-[34px] lg:text-[36px]">
              Building a More Inclusive Internet for{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#0d7377]">
                  Neurodivergent Adults
                </span>
              </span>
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={item}
            className="mt-3 max-w-[560px] text-lg leading-8 text-[#6b7280]"
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
          <motion.div variants={item} className="mt-4 flex flex-wrap gap-4">
            {/* Primary CTA */}
            <a
              href="#contact"
              className="group inline-flex h-14 items-center justify-center rounded-xl bg-[#0d7377] px-8 text-sm font-semibold uppercase tracking-[2px] text-white transition-all duration-500 hover:-translate-y-1"
              style={{ backgroundColor: ACCENT }}
            >
              Get in Touch
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            {/* Secondary CTA */}
            <a
              href="#research"
              className="group inline-flex h-14 items-center rounded-xl border border-[#0d7377] bg-white px-10 text-sm font-semibold uppercase tracking-[2px] text-[#0d7377] transition-all duration-500 hover:-translate-y-1"
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
          src="/Images/Hero.png"
          alt="Kofi Ofori-Mensah"
          fill
          priority
          sizes="100vw"
          className="object-contain object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#f8f9fc]" />
      </div>
    </section>
  );
}
