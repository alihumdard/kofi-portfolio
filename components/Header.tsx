"use client";

import { useEffect, useState, useCallback } from "react";
import {
  FiMenu,
  FiX,
  FiFacebook,
  FiLinkedin,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Service", href: "#service" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: FiFacebook, href: "#", label: "Facebook" },
  { icon: FiLinkedin, href: "#", label: "LinkedIn" },
  { icon: FiInstagram, href: "#", label: "Instagram" },
  { icon: FiTwitter, href: "#", label: "Twitter" },
];

/* ——— Trydo circle logo (SVG) ——— */
function Logo({ size = 50 }: { size?: number }) {
  return (
    <a href="#home" aria-label="Home" className="shrink-0">
      <svg
        width={size}
        height={size}
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="25" cy="25" r="25" fill="#1a1a1a" />
        <rect x="15" y="14" width="5" height="22" rx="2.5" fill="#f5c832" />
        <rect x="23" y="10" width="5" height="26" rx="2.5" fill="#f9004d" />
        <rect x="31" y="14" width="5" height="22" rx="2.5" fill="#e95b5b" />
      </svg>
    </a>
  );
}

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
          {/* ——— Left: Logo + Nav grouped ——— */}
          <div className="flex items-center">
            <Logo />

            {/* Desktop nav */}
            <nav className="ml-10 hidden items-center gap-9 lg:flex">
              {links.map((l) => {
                const isActive = activeSection === l.href;
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    className={`relative pb-4 text-[15px] font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-[#f9004d]"
                        : "text-[#1f1f25] hover:text-[#f9004d]"
                    }`}
                  >
                    {l.label}
                    <span
                      className={`absolute bottom-0 left-0 h-[3px] rounded-full bg-[#f9004d] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </a>
                );
              })}
            </nav>
          </div>

          {/* ——— Spacer ——— */}
          <div className="flex-1" />

          {/* ——— Right: Desktop socials + BUY NOW ——— */}
          <div className="hidden items-center gap-7 lg:flex">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="text-[#1f1f25] transition-colors hover:text-[#f9004d]"
                >
                  <Icon size={16} strokeWidth={1.5} />
                </a>
              );
            })}
            <a
              href="#contact"
              className="ml-3 rounded border border-[#1f1f25] px-7 py-3 text-xs font-semibold uppercase tracking-[2px] text-[#1f1f25] transition-all duration-300 hover:border-[#f9004d] hover:bg-[#f9004d] hover:text-white"
            >
              Buy Now
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
                    className="text-[#1f1f25]/80 transition-colors hover:text-[#f9004d]"
                  >
                    <Icon size={15} strokeWidth={1.5} />
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

      {/* ——— Mobile Drawer (slides LEFT → RIGHT) ——— */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[998] bg-black/40 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer — pinned to LEFT edge */}
      <nav
        className={`fixed inset-y-0 right-0 z-[999] w-[300px] bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer top: logo + close */}
        <div className="flex items-center justify-between px-7 pb-3 pt-6">
          <Logo size={42} />
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
                    className={`text-[15px] font-medium transition-colors ${
                      isActive
                        ? "text-[#f9004d]"
                        : "text-[#1f1f25] hover:text-[#f9004d]"
                    }`}
                  >
                    {l.label}
                  </span>

                  {/* Active pink underline — partial width like original */}
                  {isActive && (
                    <span className="absolute bottom-[10px] left-0 h-[2px] w-[120px] bg-[#f9004d]" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}