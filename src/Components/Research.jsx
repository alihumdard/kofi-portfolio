import { motion } from "framer-motion";
import { FileText, Brain, Globe, BookOpen, ScrollText } from "lucide-react";

const ACCENT = "#e4a136";

const researches = [
  {
    id: 1,
    tag: "DISSERTATION",
    title: "Neurodivergent Experience of Social Media Marketing",
    description:
      "MSc dissertation examining the lived experiences of autistic and neurodivergent adults with social media marketing in the UK, placing neurodivergent voices at the centre of digital marketing research.",
    icon: FileText,
  },

  {
    id: 2,
    tag: "RESEARCH PAPER",
    title: "Algorithmic Exclusion & Neurodivergent Users",
    description:
      "Research paper analysing how platform design shapes belonging, accessibility and mental health experiences for neurodivergent users online.",
    icon: Brain,
  },

  {
    id: 3,
    tag: "RESEARCH Social Media",
    title: "Social Media & Late Autism / ADHD Self-Identification",
    description:
      "Examining the role of social media in late autism and ADHD self-identification among adults in the UK.",
    icon: Globe,
  },

  {
    id: 4,
    tag: "PREPRINTS",
    title: "Behavioural Analysis in Ghanaian Microfinance",
    description:
      "Two preprints applying behavioural and psychological analysis to financial decision-making in Ghanaian microfinance.",
    icon: ScrollText,
  },

  {
    id: 5,
    tag: "PUBLISHED ARTICLE",
    title: "Diaspora Parenting & Youth Outcomes",
    description:
      "Published article exploring diaspora parenting and youth outcomes within the UK's Ghanaian community.",
    icon: BookOpen,
  },
];

export default function Research() {
  return (
    <section id="research" className="py-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-8 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-black leading-tight text-[#1F1F25] sm:text-4xl lg:text-5xl">
            Research Highlights
          </h2>

          <p className="mt-4 text-base leading-7 text-[#717173] sm:text-[17px]">
            Academic research spanning neurodivergent digital wellbeing,
            algorithmic exclusion, platform ethics and behavioural analysis,
            with a focus on creating more inclusive digital experiences.
          </p>
        </motion.div>

        {/* Research Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8 xl:grid-cols-3">
          {researches.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -12,
                }}
                className="group cursor-pointer relative overflow-hidden rounded-3xl border border-[#ECE5D8] bg-white p-5 shadow-sm transition-all duration-500 hover:border-[#E2C17B] hover:shadow-xl sm:p-6"
              >
                {/* Top Accent Line */}

                <span
                  className="absolute left-0 top-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
                  style={{
                    background: ACCENT,
                  }}
                />

                {/* Tag */}

                <span
                  className="inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] sm:px-4"
                  style={{
                    background: "#FFF5DF",
                    color: ACCENT,
                  }}
                >
                  {item.tag}
                </span>

                {/* Icon */}

                <div
                  className="mt-5 flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110"
                  style={{
                    background: "#FFF8EA",
                  }}
                >
                  <Icon
                    size={30}
                    strokeWidth={2}
                    style={{
                      color: ACCENT,
                    }}
                  />
                </div>

                {/* Title */}

                <h3 className="mt-4 text-xl font-bold leading-snug text-[#1F1F25] transition-colors duration-300 group-hover:text-[#171717] sm:text-[23px]">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="mt-3 text-sm leading-tight text-[#717173] sm:mt-4 sm:text-base">
                  {item.description}
                </p>

                {/* Bottom Link */}

                <div className="mt-4 flex items-center gap-2 font-semibold transition-all duration-300 group-hover:translate-x-1">
                  <span style={{ color: ACCENT }}>Read Research</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke={ACCENT}
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 17L17 7M17 7H8M17 7V16"
                    />
                  </svg>
                </div>

                {/* Decorative Background Circle */}

                <div
                  className="absolute -right-14 -top-14 h-36 w-36 rounded-full opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-100"
                  style={{
                    background: "#FCE7B2",
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
