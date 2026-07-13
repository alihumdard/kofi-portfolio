"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const ACCENT = "#0d7377";

const projects = [
  {
    title: "Asitina Pa",
    subtitle: "Impact-Investment Agricultural Venture",
    image: "/Images/astina-pa-image.png",
    description:
      "Building corporate-managed agricultural towns in Ghana that integrate sustainable farming, green infrastructure, housing, and community services — designed for nationwide replication.",
    highlights: [
      "Phase I investment: $1 million",
      "10,000+ direct and indirect jobs targeted",
      "Supplying 30–40% of Ghana's staple food demand within 10 years",
      "Includes housing, schools, healthcare, water & sanitation",
      "Asitina Pa Agricultural Bank/Fintech for farmer financial inclusion",
    ],
    cta: "Interested as an investor, government partner, or collaborator?",
  },
  {
    title: "City Forest Ghana",
    subtitle: "Urban Forestry & Green Infrastructure",
    image: "/Images/second.png",
    description:
      "Asitina Pa's green infrastructure subsidiary — a professional urban forestry company that plans, plants, and maintains green spaces for governments, developers, and institutions across Ghana, modelled on UK urban forestry practice.",
    highlights: [
      "Horticultural & urban forestry nursery — among the largest in West Africa",
      "Supplies Asitina Pa's developments and external clients",
      "Modelled on UK urban forestry best practice",
    ],
    cta: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-[1260px] px-5">
        <SectionTitle
          title="Projects in Ghana"
          subtitle="Designing systems — digital or physical — around the people who are supposed to benefit from them, backed by governance and evidence rather than good intentions alone."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.15}>
              <div className="group flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                {/* Image */}
                <div className="relative h-[280px] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <p
                      className="text-xs font-semibold uppercase tracking-widest"
                      style={{ color: "#93e0e3" }}
                    >
                      {p.subtitle}
                    </p>
                    <h3 className="mt-1 text-2xl font-bold text-white">
                      {p.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-7">
                  <p className="leading-relaxed text-[#717173]">
                    {p.description}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-5 flex-1 space-y-2">
                    {p.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-[#717173]"
                      >
                        <span
                          className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                          style={{ backgroundColor: ACCENT }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* CTA if present */}
                  {p.cta && (
                    <a
                      href="#contact"
                      className="mt-6 inline-block w-fit rounded px-6 py-3 text-xs font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                      style={{ backgroundColor: ACCENT }}
                    >
                      Get in Touch
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
