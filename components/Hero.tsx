"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

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
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-[#f6f6f6]"
    >
      {/* Background image — replace with your own /images/hero.jpg */}
      <Image
        src="https://picsum.photos/seed/trydo-hero/1920/1080"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-right opacity-50"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-7xl px-5 pt-24"
      >
        <motion.p
          variants={item}
          className="text-xs font-medium tracking-[4px] text-[#1f1f25]"
        >
          FREELANCE DIGITAL DESIGNER
        </motion.p>
        <motion.h1
          variants={item}
          className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight text-[#1f1f25] md:text-6xl lg:text-7xl"
        >
          Hello, I&apos;m <span className="text-[#f9004d]">Nancy</span> Welcome
          to my World.
        </motion.h1>
      </motion.div>
    </section>
  );
}
