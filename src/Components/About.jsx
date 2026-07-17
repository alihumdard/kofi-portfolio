import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const ACCENT = "#C68A2B";

const tabs = [
  {
    label: "Overview",
    content: (
      <>
        <p className="leading-7 text-[#717173]">
          Kofi Ofori-Mensah works at the intersection of digital marketing,
          neurodiversity, and platform ethics. His research examines how
          autistic and neurodivergent adults experience social media marketing
          in the UK, while his venture,
          <span className="font-semibold text-[#1f1f25]">
            {" "}
            NeuroDigital Support
          </span>{" "}
          translates that research into practical tools and advocacy for
          neurodivergent-friendly digital design.
        </p>

        <p className="mt-5 leading-7 text-[#717173]">
          Before returning to postgraduate study, Kofi built experience across
          finance, real estate marketing, and frontline autism support. This
          unique combination allows him to connect academic research with
          real-world product development and inclusive technology.
        </p>
      </>
    ),
  },

  {
    label: "Mission",
    content: (
      <>
        <h4 className="text-lg font-semibold text-[#1f1f25]">Mission</h4>

        <p className="mt-2 leading-tight text-[#717173]">
          To make digital spaces genuinely accessible and safe for
          neurodivergent adults while helping organisations create more
          inclusive online experiences.
        </p>

        <h4 className="mt-2 text-lg font-semibold text-[#1f1f25]">Vision</h4>

        <p className="mt-2 leading-tight text-[#717173]">
          Building research-backed technology that improves digital wellbeing,
          accessibility and ethical platform design worldwide.
        </p>
      </>
    ),
  },

  {
    label: "Current Work",
    content: (
      <ul className="space-y-6 border-l-2 border-[#C68A2B]/20 pl-6">
        {[
          {
            role: "MSc Digital Marketing",
            org: "University of Roehampton",
            detail:
              "Researching the lived experiences of autistic adults with social media marketing.",
          },

          {
            role: "Founder",
            org: "NeuroDigital Support",
            detail:
              "Building digital wellbeing products for neurodivergent communities.",
          },

          {
            role: "Support Worker",
            org: "Brookhaven Care",
            detail: "Supporting adults with autism and complex support needs.",
          },
        ].map((item) => (
          <li key={item.role}>
            <h5 className="font-semibold text-[#1f1f25]">{item.role}</h5>

            <p className="text-sm font-medium" style={{ color: ACCENT }}>
              {item.org}
            </p>

            <p className="mt-2 text-sm leading-6 text-[#717173]">
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
      <ul className="space-y-6">
        {[
          {
            title: "University of Roehampton Futures Award",
            meta: "Winner • 2026",
          },

          {
            title: "Founder",
            meta: "NeuroDigital Support",
          },

          {
            title: "Published Author",
            meta: "Five books covering neurodiversity, digital wellbeing and inclusion.",
          },
        ].map((item) => (
          <li key={item.title}>
            <h5 className="font-semibold text-[#1f1f25]">{item.title}</h5>

            <p className="mt-2 text-sm text-[#717173]">{item.meta}</p>
          </li>
        ))}
      </ul>
    ),
  },
];

export default function About() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="about"
      className="bg-linear-to-b from-white via-[#fcfcfc] to-[#f7fbfb] py-10 lg:py-12"
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10">
        <div className="grid grid-cols-1 items-center gap-6 md:gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="group mx-auto w-full max-w-sm md:max-w-md lg:max-w-xl overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/Images/kofi-img.png"
                alt="Kofi Ofori-Mensah"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Right Content */}

          <motion.div
            className="w-full text-center lg:text-left"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div
              className="inline-flex items-center justify-center px-8 py-4 rounded-full
                bg-[#F8F6F1]
                border border-[#EAB308]
                shadow-[0_4px_10px_rgba(234,179,8,0.12)]"
            >
              <span className="text-[#C28A00] text-sm font-semibold tracking-[0.25em] uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-[28px] mt-3 font-black leading-tight sm:text-[32px] md:text-[35px] lg:text-[34px]">
              Building Research That Creates
              <span className="block" style={{ color: ACCENT }}>
                A More Inclusive Digital World
              </span>
            </h2>

            <p className="mt-3 text-[15px] leading-6 text-[#717173]">
              Researcher, Founder, Author, and Support Worker with a strong
              passion for digital wellbeing, inclusive innovation, and ethical
              technology. Focused on promoting neurodiversity, conducting
              meaningful research, and developing solutions that make technology
              more accessible, responsible, and beneficial for everyone.
            </p>

            {/* Tabs */}

            <div className="mt-6 flex flex-wrap justify-center gap-2 border-b border-gray-200 pb-3 lg:justify-start">
              {tabs.map((tab, index) => (
                <button
                  key={tab.label}
                  onClick={() => setActive(index)}
                  className={`rounded-lg cursor-pointer px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    active === index
                      ? "bg-white shadow-md text-[#C68A2B] border border-gray-200"
                      : "text-gray-700 hover:bg-gray-100 hover:text-[#C68A2B]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Animated Tab Content */}
            <div className="mt-6 min-h-80">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="rounded-2xl border border-gray-200 bg-white p-4 lg:p-5 shadow-md"
                >
                  {tabs[active].content}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
