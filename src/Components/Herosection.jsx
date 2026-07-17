import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex w-full items-center overflow-hidden bg-stone-50"
      style={{ minHeight: "calc(100vh - 76px)" }}
    >
      {/* Decorative dot grid — echoes the reference layout, muted to nothing in low-stim mode */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle, #D9C6A0 1.6px, transparent 1.6px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-6 md:px-8 md:py-14 lg:px-10 lg:py-0">
        {/* Top row: eyebrow + sensory-mode toggle */}
        <div className="mb-4 py-2">
          <div className="inline-flex items-center rounded-full border border-amber-300 bg-white px-5 py-2 text-xs font-semibold tracking-wide text-amber-800">
            Digital Marketing Researcher
            <span className="mx-2 text-stone-400">•</span>
            Founder
            <span className="mx-2 text-stone-400">•</span>
            Author
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-8 md:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left column — headline, sub-headline, CTAs */}
          {/* Left Content */}
          <div className="order-2 mx-auto max-w-175 text-center lg:order-1 lg:mx-0 lg:max-w-150 lg:text-left">
            <h1
              className="mx-auto max-w-162.5 font-serif text-[34px] leading-tight sm:text-[40px] md:text-[46px] lg:mx-0 lg:max-w-160 lg:text-[2.7rem]"
              style={{ fontFamily: "'Fraunces', ui-serif, Georgia, serif" }}
            >
              Kofi Ofori-Mensah
              <span className="block mt-2 text-xl font-normal text-neutral-700 sm:text-2xl lg:text-[1.45rem]">
                Business Researcher, Marketing &amp; Founder — building a more
                inclusive internet for neurodivergent adults
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-155 text-[16px] leading-8 text-stone-600 lg:mx-0">
              London-based business consultant, MSc Digital Marketing researcher
              at the University of Roehampton, founder of NeuroDigital Support,
              and author exploring how digital platforms can be designed for
              neurodivergent wellbeing — rather than against it.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#e4a136] px-5 py-3 text-sm font-bold text-neutral-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#dd9725]"
              >
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#research"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-stone-700 underline decoration-stone-300 underline-offset-4 hover:text-stone-900"
              >
                Read the research
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <p className="mx-auto mt-6 max-w-155 text-sm leading-7 text-stone-500 lg:mx-0">
              <span className="font-semibold text-stone-700">Kofi's</span> path
              into this work is not conventional. Before returning to
              postgraduate study, he built a career spanning microfinance and
              credit risk in Ghana, real estate sales and marketing leadership,
              and frontline support work with autistic adults and people in UK.
            </p>
          </div>

          {/* Right column — visual card + credibility badge, mirrors the reference composition */}
          {/* Right column */}
          <div className="order-1 relative mx-auto w-full max-w-[320px] sm:max-w-95 md:max-w-115 lg:order-2 lg:ml-auto lg:max-w-107.5">
            <div className="relative overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-xl">
              <img
                src="/Images/portfolio-img.png"
                alt="Kofi Ofori-Mensah"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
