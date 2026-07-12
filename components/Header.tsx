"use client";

import { useEffect, useState, useCallback } from "react";
import {
  FiMenu,
  FiX,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import { SiOrcid } from "react-icons/si";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Books", href: "#books" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: FiLinkedin, href: "#", label: "LinkedIn" },
  { icon: SiOrcid, href: "#", label: "ORCID" },
  { icon: FiTwitter, href: "#", label: "Twitter / X" },
];

/* ——— Accent color (used throughout the site) ——— */
const ACCENT = "#0d7377";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  /* Lock body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* Scroll spy */
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);

    const sections = links.map((l) => l.href.replace("#", ""));
    let current = sections[0];
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) current = id;
      }
    }
    setActiveSection(`#${current}`);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 py-2 shadow-md backdrop-blur-sm"
            : "bg-transparent py-4"
        }`}
      >
        <div className="mx-auto flex max-w-[1260px] items-center px-5">
          {/* ——— Left: Text Logo + Nav ——— */}
          <div className="flex items-center">
            {/* Text logo — replace with image if client provides one */}
            <a
              href="#home"
              className="shrink-0 text-xl font-bold tracking-tight text-[#1f1f25]"
            >
              Kofi<span style={{ color: ACCENT }}>.</span>
            </a>

            {/* Desktop nav */}
            <nav className="ml-10 hidden items-center gap-8 lg:flex">
              {links.map((l) => {
                const isActive = activeSection === l.href;
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    className="relative pb-4 text-[14px] font-medium transition-colors duration-200"
                    style={{ color: isActive ? ACCENT : "#1f1f25" }}
                    onMouseEnter={(e) => {
                      if (!isActive)
                        (e.target as HTMLElement).style.color = ACCENT;
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive)
                        (e.target as HTMLElement).style.color = "#1f1f25";
                    }}
                  >
                    {l.label}
                    <span
                      className="absolute bottom-0 left-0 h-[3px] rounded-full transition-all duration-300"
                      style={{
                        backgroundColor: ACCENT,
                        width: isActive ? "100%" : "0%",
                      }}
                    />
                  </a>
                );
              })}
            </nav>
          </div>

          {/* ——— Spacer ——— */}
          <div className="flex-1" />

          {/* ——— Right: Desktop socials + CTA ——— */}
          <div className="hidden items-center gap-6 lg:flex">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="text-[#1f1f25] transition-colors"
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = ACCENT)
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#1f1f25")
                  }
                >
                  <Icon size={16} />
                </a>
              );
            })}

            {/* CTA — "Get in Touch" */}
            <a
              href="#contact"
              className="ml-2 rounded px-7 py-3 text-xs font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: ACCENT }}
            >
              Get in Touch
            </a>
          </div>

          {/* ——— Mobile: socials + hamburger ——— */}
          <div className="flex items-center gap-5 lg:hidden">
            <div className="flex items-center gap-4">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="text-[#1f1f25]/80 transition-colors"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="p-1 text-[#1f1f25]"
            >
              <FiMenu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* ——— Mobile Drawer (slides RIGHT → LEFT) ——— */}
      <div
        className={`fixed inset-0 z-[998] bg-black/40 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      <nav
        className={`fixed inset-y-0 right-0 z-[999] w-[300px] bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer top */}
        <div className="flex items-center justify-between px-7 pb-3 pt-6">
          <span className="text-lg font-bold text-[#1f1f25]">
            Kofi<span style={{ color: ACCENT }}>.</span>
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="p-1 text-[#1f1f25]"
          >
            <FiX size={22} strokeWidth={1.5} />
          </button>
        </div>

        {/* Nav links */}
        <ul className="mt-4 flex flex-col px-7">
          {links.map((l) => {
            const isActive = activeSection === l.href;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="relative block py-[14px]"
                >
                  <span
                    className="text-[15px] font-medium transition-colors"
                    style={{ color: isActive ? ACCENT : "#1f1f25" }}
                  >
                    {l.label}
                  </span>
                  {isActive && (
                    <span
                      className="absolute bottom-[10px] left-0 h-[2px] w-[120px]"
                      style={{ backgroundColor: ACCENT }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Drawer footer: socials */}
        <div className="mt-auto border-t border-gray-100 px-7 py-6">
          <div className="flex gap-4">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-[#1f1f25] transition-all"
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}