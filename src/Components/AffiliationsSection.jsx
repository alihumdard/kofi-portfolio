import React from "react";

// Document content se aligned exact data
const affiliations = [
  {
    name: "University of Roehampton London",
    logoUrl: "/Images/unique.jpeg", // Roehampton Logo
    link: "https://blog.roehampton.ac.uk/2026/07/13/from-support-worker-to-digital-inclusion-advocate-how-my-extended-masters-at-roehampton-helped-me-find-my-purpose/",
    tag: "Academic Partner",
    description:
      "Project Coordinator, Research Assistant & MSc Digital Marketing Researcher",
  },
  {
    name: "Business Insider Africa",
    logoUrl: "/Images/community.jpeg", // Business Insider Africa Logo
    link: "https://africa.businessinsider.com/local/careers/exclusive-interview-with-kofi-ofori-mensah-head-of-sales-and-marketing-at-prabon/qp58m6n",
    tag: "Media Feature",
    description:
      "Featured Expert Commentary on Digital Marketing, Inclusion & Ethics",
  },
];

export default function AffiliationsSection() {
  return (
    <section className="bg-[#FAF8F5] py-12 px-6 md:px-10 border-t border-b border-[#EFECE6] overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Academic Affiliations Premium Badge */}
        <div className="inline-block mb-4">
          <span className="text-[11px] font-bold tracking-[0.15em] uppercase border border-[#C2903C]/40 text-[#B4812E] bg-[#FDFBF9] px-4 py-1.5 rounded-full shadow-sm">
            Academic Affiliations & Media
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#2D2A26] tracking-tight mb-4">
          Trusted By & Featured In
        </h2>

        {/* Sub-description */}
        <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto mb-8 leading-relaxed">
          Bridging academic research with industry-leading digital marketing,
          ethics, and neurodiversity discussions.
        </p>

        {/* Logos & Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch justify-center max-w-4xl mx-auto">
          {affiliations.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between p-8 bg-white rounded-2xl border border-[#EFECE6] hover:border-[#C2903C]/40 shadow-[0_4px_20px_-4px_rgba(235,230,220,0.4)] hover:shadow-[0_12px_30px_-6px_rgba(194,144,60,0.12)] transition-all duration-300 ease-in-out h-full min-h-75"
            >
              {/* Category Tag Badge */}
              <div className="absolute top-4 left-4">
                <span className="text-[9px] font-bold tracking-wider uppercase bg-[#F5EFE4] text-[#B4812E] px-2.5 py-1 rounded">
                  {item.tag}
                </span>
              </div>

              {/* Logo Container */}
              <div className="w-full flex items-center justify-center h-28 mt-4 mb-6">
                <img
                  src={item.logoUrl}
                  alt={`${item.name} logo`}
                  className="max-h-full max-w-[80%] object-contain filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform group-hover:scale-[1.02]"
                />
              </div>

              {/* Title & Description Box */}
              <div className="text-center pt-4 border-t border-[#F7F5F0]">
                <p className="text-[11px] text-slate-400 font-bold mb-1.5 uppercase tracking-wider">
                  {item.name}
                </p>
                <p className="text-sm text-slate-600 mb-5 font-medium leading-relaxed">
                  {item.description}
                </p>

                {/* View Profile Action Link */}
                <div className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#e4a136] group-hover:text-[#dd9725] transition-colors duration-300">
                  <span>View Profile</span>
                  <svg
                    className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1.5 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
