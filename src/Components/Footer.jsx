import React from "react";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

/**
 * Site Footer — Kofi Ofori-Mensah
 * Color scheme (sampled from reference image — dark navy):
 * --color-bg:        #1A1A2E   section background
 * --color-heading:   #FFFFFF   name / logo text
 * --color-muted:     #9CA1B8   tagline, copyright, nav links (default state)
 * --color-nav-hover: #FFFFFF   nav link hover
 * --color-border:    rgba(255,255,255,0.10)   divider line, icon circle border
 *
 * Nav links + social profiles per the document's internal-linking / schema
 * recommendations (Home, About, Research, Projects, Books, Contact —
 * sameAs: LinkedIn, ORCID, X/Twitter, email).
 */

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Books", href: "#books" },
  { label: "Contact", href: "#contact" },
];

function OrcidIcon({ className = "h-4 w-4" }) {
  // ORCID iD mark — simplified as text-in-circle to match the outline icon style
  // of the other social icons (no brand-color fill, so it sits quietly in the dark row).
  return (
    <span
      className={`flex items-center justify-center font-serif text-[10px] font-bold leading-none ${className}`}
      aria-hidden="true"
    >
      iD
    </span>
  );
}

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kofioforimensah/",
    icon: FaLinkedinIn,
  },
  {
    label: "ORCID",
    href: "https://orcid.org/0009-0009-6363-8267",
    icon: OrcidIcon,
  },
  {
    label: "X / Twitter",
    href: "https://x.com/ofori_mensah",
    icon: FaXTwitter,
  },
  {
    label: "Email",
    href: "mailto:Kofi@neurodigitalsupport.com",
    icon: MdEmail,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A2E]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-10">
        {/* Top row: identity, nav, socials */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* Identity */}
          <div>
            <p className="text-lg font-bold text-white">
              Kofi Ofori-Mensah<span className="text-[#9CA1B8]">.</span>
            </p>

            {/* Modified: Contact Email with MdEmail Icon */}
            <div className="mt-2 flex items-center gap-2 text-sm text-[#9CA1B8]">
              <MdEmail className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>
                {" "}
                <a
                  href="mailto:Kofi@neurodigitalsupport.com"
                  className="underline hover:text-white transition-colors"
                >
                  Kofi@neurodigitalsupport.com
                </a>
              </span>
            </div>

            <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#9CA1B8]">
              Digital marketing researcher, neurodiversity advocate, and founder
              of NeuroDigital Support.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center gap-x-7 gap-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#9CA1B8] transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#9CA1B8] transition-colors hover:border-white/30 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-white/10" />

        {/* Bottom row: copyright + tagline */}
        <div className="mt-6 flex flex-col gap-2 text-xs text-[#9CA1B8] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Kofi Ofori-Mensah. All Rights Reserved.
          </p>
          <p>Built with purpose for neurodivergent digital wellbeing.</p>
        </div>
      </div>
    </footer>
  );
}
