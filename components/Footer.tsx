"use client";

import {
  FiLinkedin,
  FiTwitter,
  FiMail,
} from "react-icons/fi";
import { SiOrcid } from "react-icons/si";

const ACCENT = "#0d7377";

const socials = [
  { icon: FiLinkedin, href: "#", label: "LinkedIn" },
  { icon: SiOrcid, href: "#", label: "ORCID" },
  { icon: FiTwitter, href: "#", label: "Twitter / X" },
  { icon: FiMail, href: "mailto:admin@example.com", label: "Email" },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Books", href: "#books" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] pt-16 pb-8">
      <div className="mx-auto max-w-[1260px] px-5">
        {/* ——— Top row: logo + nav + socials ——— */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-xl font-bold text-white">
              Kofi Ofori-Mensah<span style={{ color: ACCENT }}>.</span>
            </p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/50">
              Digital marketing researcher, neurodiversity advocate, and founder
              of NeuroDigital Support.
            </p>
          </div>

          {/* Quick nav */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex gap-3">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all hover:text-white"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = ACCENT;
                    (e.currentTarget as HTMLElement).style.backgroundColor = ACCENT;
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
                    (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)";
                  }}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        {/* ——— Divider ——— */}
        <div className="my-10 h-px bg-white/10" />

        {/* ——— Bottom row: copyright ——— */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Kofi Ofori-Mensah. All Rights Reserved.
          </p>
          <p className="text-xs text-white/40">
            Built with purpose for neurodivergent digital wellbeing.
          </p>
        </div>
      </div>
    </footer>
  );
}