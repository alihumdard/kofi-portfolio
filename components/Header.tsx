"use client";

import { useEffect, useState, useCallback } from "react";
import { FiMenu, FiX, FiLinkedin, FiTwitter } from "react-icons/fi";
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
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl shadow-[0_12px_40px_rgba(15,23,42,.08)] py-4"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-345 items-center px-9 xl:px-10">
          {/* ——— Left: Text Logo + Nav ——— */}
          <div className="flex items-center">
            {/* Text logo — replace with image if client provides one */}
            <a
              href="#home"
              className="group flex items-center text-[31px] font-bold tracking-tight"
            >
              <span>Kofi</span>
              <span
                className="
                ml-1
                "
                style={{ color: ACCENT }}
              >
                •
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="ml-14 hidden items-center gap-12 xl:gap-12 lg:flex">
              {links.map((l) => {
                const isActive = activeSection === l.href;
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    className={`group relative pb-2 text-[15px] font-medium tracking-[0.3px]
                    transition-all duration-300 ease-out
                    ${isActive ? "text-[#0d7377]" : "text-[#1f1f25] hover:text-[#0d7377]"}`}
                    style={{ color: isActive ? ACCENT : "#1f1f25" }}
                  >
                    {l.label}
                    <span
                      className={`absolute left-0 -bottom-1.5
                        h-0.5
                        rounded-full
                        bg-[#0d7377]
                        transition-all
                        duration-500
                        ease-out
                        ${
                          isActive
                            ? "w-full opacity-100"
                            : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                        }`}
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
              className="
              group
              ml-6
              flex
              items-center
              justify-center
              rounded-md
              bg-[#0d7377]
              px-8
              py-3.5
              text-xs
              font-semibold
              uppercase
              tracking-[2px]
              text-white
              transition-all
              duration-500
              hover:-translate-y-1
              "
              style={{ backgroundColor: ACCENT }}
            >
              Get in Touch
              <span
                className="
              ml-2
              transition-transform
              duration-300
              group-hover:translate-x-1
              "
              >
                →
              </span>
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
                    className="
                    flex
                    items-center
                    justify-center
                    w-10
                    h-10
                    rounded-full
                    transition-all
                    duration-300
                    text-[#1f1f25]
                    hover:bg-[#0d7377]
                    hover:text-white
                    hover:-translate-y-1
                    hover:shadow-lg
                    "
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
        className={`fixed inset-0 z-998 bg-black/40 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      <nav
        className={`fixed inset-y-0 right-0 z-999 w-75 bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
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
                  className="relative block py-3.5"
                >
                  <span
                    className="text-[15px] font-medium transition-colors"
                    style={{ color: isActive ? ACCENT : "#1f1f25" }}
                  >
                    {l.label}
                  </span>
                  {isActive && (
                    <span
                      className="absolute bottom-2.5 left-0 h-0.5 w-30"
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
