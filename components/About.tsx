"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

const ACCENT = "#0d7377";

const tabs = [
  {
    label: "Overview",
    content: (
      <>
        <p className="leading-relaxed text-[#717173]">
          Kofi Ofori-Mensah works at the intersection of digital marketing,
          neurodiversity, and platform ethics. His research examines how
          autistic and neurodivergent adults experience social media marketing
          in the UK, and his venture,{" "}
          <span className="font-semibold text-[#1f1f25]">
            NeuroDigital Support
          </span>
          , translates that research into tools and advocacy for sensory-aware,
          neurodivergent-friendly digital design.
        </p>
        <p className="mt-4 leading-relaxed text-[#717173]">
          Kofi&apos;s path into this work is not conventional. Before returning
          to postgraduate study, he built a career spanning microfinance and
          credit risk in Ghana, real estate sales and marketing leadership, and
          frontline support work with autistic adults and people with complex
          needs in the UK. That combination of financial and commercial rigour,
          alongside direct, caring proximity to neurodivergent people&apos;s
          daily lives, shapes how he approaches research and product design:
          grounded in lived experience, tested against evidence, and translated
          into something practical.
        </p>
      </>
    ),
  },
  {
    label: "Mission",
    content: (
      <>
        <h4 className="text-lg font-semibold text-[#1f1f25]">Mission</h4>
        <p className="mt-3 leading-relaxed text-[#717173]">
          To make digital spaces — social media, marketing platforms, and the
          algorithms behind them — genuinely usable and safe for neurodivergent
          adults, and to give researchers, platforms, and policymakers the
          evidence base to make that happen.
        </p>
        <h4 className="mt-8 text-lg font-semibold text-[#1f1f25]">
          Value Proposition
        </h4>
        <p className="mt-3 leading-relaxed text-[#717173]">
          Kofi brings a rare combination to this field: postgraduate research
          training in digital marketing, direct frontline experience supporting
          autistic adults, and hands-on venture-building experience launching a
          neurodivergent-focused digital wellbeing product. This lets him move
          fluidly between academic research, product development, and advocacy —
          and speak credibly to universities, platforms, investors, and the
          neurodivergent community alike.
        </p>
      </>
    ),
  },
  {
    label: "Current Work",
    content: (
      <ul className="space-y-5">
        {[
          {
            role: "MSc Digital Marketing",
            org: "University of Roehampton",
            detail:
              "Dissertation on the lived experiences of autistic and neurodivergent adults with social media marketing in the UK.",
          },
          {
            role: "Project Coordinator & Research Assistant",
            org: "University of Roehampton",
            detail:
              "Contributing to applied research on local air quality, environmental monitoring, and green infrastructure.",
          },
          {
            role: "Founder",
            org: "NeuroDigital Support",
            detail:
              "Building a UK-based digital ecosystem addressing neurodivergent digital wellbeing, platform ethics, and sensory-aware design — with NuroTok as its flagship product.",
          },
          {
            role: "Support Worker",
            org: "Brookhaven Care",
            detail: "Supporting adults with autism and complex needs.",
          },
          {
            role: "Conference Speaker",
            org: "ICCHP 2026",
            detail:
              "International Conference on Computers Helping People with Special Needs.",
          },
        ].map((item) => (
          <li key={item.role}>
            <p className="font-semibold text-[#1f1f25]">
              {item.role}{" "}
              <span className="font-normal" style={{ color: ACCENT }}>
                — {item.org}
              </span>
            </p>
            <p className="mt-1 text-sm leading-relaxed text-[#717173]">
              {item.detail}
            </p>
          </li>
        ))}
      </ul>
    ),
  },
  {
    label: "Achievements",
    content: (
      <ul className="space-y-5">
        {[
          {
            title: "University of Roehampton Futures Award",
            meta: "Winner, 2026",
          },
          {
            title: "Author of Five Books",
            meta: "The Invisible Users · Shattered Bonds · Neurodiversity Beyond the West · Neurodigital Support · The Invisible Struggle",
          },
          {
            title: "Founder, NeuroDigital Support",
            meta: "A digital ecosystem for neurodivergent digital wellbeing with NuroTok as its flagship product.",
          },
        ].map((item) => (
          <li key={item.title}>
            <p className="font-semibold text-[#1f1f25]">{item.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-[#717173]">
              {item.meta}
            </p>
          </li>
        ))}
      </ul>
    ),
  },
];

export default function About() {
  const [active, setActive] = useState(0);

  return (
    <section id="about" className="scroll-mt-20 py-24">
      <div className="mx-auto grid max-w-[1260px] items-start gap-14 px-5 lg:grid-cols-2">
        {/* ——— Left: Photo ——— */}
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-lg shadow-2xl">
            {/* Replace with Kofi's real photo */}
            <Image
              src="/Images/portfolio-img.png"
              alt="Kofi Ofori-Mensah presenting research at the University of Roehampton"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* ——— Right: Content with tabs ——— */}
        <Reveal delay={0.15}>
          <h2 className="text-4xl font-extrabold text-[#1f1f25] md:text-5xl">
            About Me
          </h2>
          <p className="mt-4 text-[#717173]">
            Researcher, founder, author, and support worker — building at the
            intersection of digital marketing, neurodiversity, and platform
            ethics.
          </p>

          {/* Tab buttons */}
          <div className="mt-8 flex flex-wrap gap-6 border-b border-gray-200">
            {tabs.map((t, i) => (
              <button
                key={t.label}
                onClick={() => setActive(i)}
                className="-mb-px pb-3 text-sm font-semibold transition-colors"
                style={{
                  color: active === i ? ACCENT : "#1f1f25",
                  borderBottom:
                    active === i
                      ? `2px solid ${ACCENT}`
                      : "2px solid transparent",
                }}
                onMouseEnter={(e) => {
                  if (active !== i)
                    (e.target as HTMLElement).style.color = ACCENT;
                }}
                onMouseLeave={(e) => {
                  if (active !== i)
                    (e.target as HTMLElement).style.color = "#1f1f25";
                }}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Tab content panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="mt-8"
            >
              {tabs[active].content}
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
