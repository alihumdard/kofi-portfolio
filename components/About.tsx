"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

type TabItem = { title: string; meta: string; description: string };

const tabs: { label: string; items: TabItem[] }[] = [
  {
    label: "Main skills",
    items: [
      {
        title: "User experience design",
        meta: "UI/UX",
        description: "Delight the user and make it work.",
      },
      {
        title: "Web and user interface design",
        meta: "Development",
        description: "Websites, web experiences, ...",
      },
      {
        title: "Interaction design",
        meta: "Animation",
        description: "I like to move it move it.",
      },
    ],
  },
  {
    label: "Awards",
    items: [
      {
        title: "Awwwards.com",
        meta: "Winner",
        description: "2019 - 2020",
      },
      {
        title: "CSS Design Awards",
        meta: "Winner",
        description: "2017 - 2018",
      },
      {
        title: "Design Nominees",
        meta: "Site of the day",
        description: "2013 - 2014",
      },
    ],
  },
  {
    label: "Experience",
    items: [
      {
        title: "Sr. Front-end Engineer",
        meta: "Google",
        description: "2018 - Current",
      },
      {
        title: "Front-end Engineer",
        meta: "Microsoft",
        description: "2017 - 2018",
      },
      {
        title: "Software Engineer",
        meta: "Alibaba",
        description: "2013 - 2014",
      },
    ],
  },
  {
    label: "Education & Certification",
    items: [
      {
        title: "BSc In CSE",
        meta: "ABC University, Los Angeles, CA",
        description: "2010",
      },
      {
        title: "Diploma in Computer Science",
        meta: "Gamma Technical Institute",
        description: "2009",
      },
      {
        title: "Graphic Designer",
        meta: "ABC Institute, Los Angeles, CA",
        description: "2007",
      },
    ],
  },
];

export default function About() {
  const [active, setActive] = useState(0);

  return (
    <section id="about" className="scroll-mt-20 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-lg shadow-2xl">
            {/* Replace with your own /images/about.jpg */}
            <Image
              src="https://picsum.photos/seed/trydo-about/800/1000"
              alt="Portrait of Nancy"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <h2 className="text-4xl font-extrabold text-[#1f1f25] md:text-5xl">
            About Me
          </h2>
          <p className="mt-5 leading-relaxed text-[#717173]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable.
          </p>

          {/* Tabs */}
          <div className="mt-8 flex flex-wrap gap-6 border-b border-gray-200">
            {tabs.map((t, i) => (
              <button
                key={t.label}
                onClick={() => setActive(i)}
                className={`-mb-px pb-3 text-sm font-semibold transition-colors ${
                  active === i
                    ? "border-b-2 border-[#f9004d] text-[#f9004d]"
                    : "text-[#1f1f25] hover:text-[#f9004d]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Tab panel */}
          <AnimatePresence mode="wait">
            <motion.ul
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="mt-8 space-y-6"
            >
              {tabs[active].items.map((item) => (
                <li key={item.title}>
                  <p className="font-semibold text-[#1f1f25]">
                    {item.title}{" "}
                    <span className="font-normal text-[#717173]">
                      – {item.meta}
                    </span>
                  </p>
                  <p className="mt-1 text-sm text-[#717173]">
                    {item.description}
                  </p>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
