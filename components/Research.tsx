"use client";

import {
  FiBookOpen,
  FiFileText,
  FiGlobe,
  FiUsers,
  FiCpu,
} from "react-icons/fi";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const ACCENT = "#0d7377";

const research = [
  {
    icon: FiCpu,
    title: "Neurodivergent Experience of Social Media Marketing",
    description:
      "MSc dissertation examining the lived experiences of autistic and neurodivergent adults with social media marketing in the UK — one of a small number of UK studies to centre neurodivergent voices in digital marketing research specifically.",
    tag: "Dissertation",
  },
  {
    icon: FiUsers,
    title: "Algorithmic Exclusion & Neurodivergent Users",
    description:
      "Research paper analysing how platform design shapes belonging and mental health online for neurodivergent users.",
    tag: "Research Paper",
  },
  {
    icon: FiGlobe,
    title: "Social Media & Late Autism / ADHD Self-Identification",
    description:
      "Research paper exploring the role of social media in late autism and ADHD self-identification among adults in the UK — diagnosis based on content.",
    tag: "Research Paper",
  },
  {
    icon: FiFileText,
    title: "Behavioural Analysis in Ghanaian Microfinance",
    description:
      "Two preprints applying behavioural and psychological analysis to financial decision-making in a Ghanaian microfinance context.",
    tag: "Preprints",
  },
  {
    icon: FiBookOpen,
    title: "Diaspora Parenting & Youth Outcomes",
    description:
      "A published article on diaspora parenting and youth outcomes in the UK's Ghanaian community.",
    tag: "Published Article",
  },
];

export default function Research() {
  return (
    <section id="research" className="scroll-mt-20 bg-[#f8f9fc] py-24">
      <div className="mx-auto max-w-[1260px] px-5">
        <SectionTitle
          title="Research Highlights"
          subtitle="Academic research spanning neurodivergent digital wellbeing, algorithmic exclusion, platform ethics, and cross-cultural behavioural analysis."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {research.map((r, i) => {
            const Icon = r.icon;
            return (
              <Reveal key={r.title} delay={(i % 3) * 0.1}>
                <div className="group flex h-full cursor-pointer flex-col rounded bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{ ["--accent" as string]: ACCENT }}
                >
                  {/* Tag */}
                  <span
                    className="mb-4 inline-block w-fit rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white"
                    style={{ backgroundColor: ACCENT }}
                  >
                    {r.tag}
                  </span>

                  {/* Icon */}
                  <Icon
                    size={36}
                    className="transition-colors duration-300"
                    style={{ color: ACCENT }}
                  />

                  {/* Title */}
                  <h3 className="mt-5 text-lg font-semibold leading-snug text-[#1f1f25]">
                    {r.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#717173]">
                    {r.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}