import { useState, useEffect } from "react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { SiOrcid } from "react-icons/si";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Research", id: "research" },
    { name: "Projects", id: "projects" },
    { name: "Books", id: "books" },
    { name: "Contact", id: "contact" },
  ];

  const socials = [
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/kofioforimensah/",
    },
    {
      icon: <SiOrcid />,
      link: "https://orcid.org/0009-0009-6363-8267",
    },
    {
      icon: <FaTwitter />,
      link: "https://x.com/ofori_mensah",
    },
  ];

  // Lock horizontal scroll permanently so the off-screen drawer can never bleed into view
  useEffect(() => {
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";
  }, []);

  // Fully lock background scroll while the drawer is open (position:fixed technique,
  // reliable on iOS/mobile where overflow:hidden alone can still let the page scroll)
  useEffect(() => {
    if (mobileMenu) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflowY = "hidden";

      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.overflowY = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [mobileMenu]);

  // Scroll event and active section detector
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close drawer automatically if window is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenu) {
        setMobileMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenu]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-[#E8E4DA] transition-all duration-500 ${
        scrolled ? "bg-[#F8F6F1]/90 backdrop-blur-lg" : "bg-[#F8F6F1]"
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-14">
            {/* Logo */}
            <a
              href="/"
              className="text-[32px] font-bold tracking-[-0.03em] text-[#232323]"
            >
              Kofi
              <span className="text-[#C68A2B]">•</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setActiveSection(item.id)}
                  className={`relative no-underline text-[15px] font-medium text-[#2E2E2E] transition-all duration-300 hover:text-black 
                    after:absolute after:left-0 after:bottom-[-6px] after:h-[1.5px] after:bg-[#2E2E2E] after:transition-all after:duration-300
                    ${
                      activeSection === item.id
                        ? "text-black after:w-full"
                        : "after:w-0 hover:after:w-full"
                    }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Right Side Items */}
          <div className="flex items-center gap-5 md:gap-8">
            {/* Social Icons */}
            <div className="flex items-center gap-4 md:gap-5">
              {socials.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[18px] text-[#2E2E2E] transition-all duration-500 ease-in-out hover:text-[#C68A2B]"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center gap-2 rounded-lg bg-[#C68A2B] px-8 py-3 text-[14px] font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:bg-[#B8771F] hover:-translate-y-1"
            >
              GET IN TOUCH
              <span>→</span>
            </a>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-label="Toggle menu"
              className="lg:hidden p-2 text-[#2E2E2E] hover:text-black transition-all duration-300 text-2xl transform hover:scale-110 cursor-pointer"
            >
              <FaBars className="rotate-0 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay Container */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ${
          mobileMenu ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop Fade Effect */}
        <div
          className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
            mobileMenu ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileMenu(false)}
        />

        {/* Full Viewport Height Drawer — responsive width, never overflows small screens */}
        <div
          className={`fixed top-0 right-0 h-screen w-full max-w-[320px] sm:max-w-[360px] bg-[#F8F6F1] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
            mobileMenu ? "translate-x-0" : "translate-x-[110%]"
          }`}
        >
          {/* Header Section of Drawer */}
          <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-[#E8E4DA]/50">
            <a
              href="/"
              onClick={() => setMobileMenu(false)}
              className="text-[28px] font-bold tracking-[-0.03em] text-[#232323]"
            >
              Kofi
              <span className="text-[#C68A2B]">•</span>
            </a>
            {/* Close Button */}
            <button
              onClick={() => setMobileMenu(false)}
              aria-label="Close menu"
              className="text-2xl text-[#2E2E2E] hover:text-black transition-colors duration-200 cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Scrollable Nav Area */}
          <div className="flex-1 overflow-y-auto py-2 flex flex-col">
            {/* Navigation Links */}
            <div>
              {navItems.map((item, index) => (
                <div
                  key={item.id}
                  className="px-6 py-5 border-b border-[#E8E4DA]/50"
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => {
                      setActiveSection(item.id);
                      setMobileMenu(false);
                    }}
                    className={`relative inline-block no-underline text-[15px] font-semibold transition-all ease-out duration-300 group
                      after:absolute after:left-0 after:bottom-[-6px] after:h-0.5 after:bg-[#C68A2B] after:transition-all after:duration-300
                      ${
                        activeSection === item.id
                          ? "text-[#C68A2B] after:w-3/4"
                          : "text-[#232323] hover:text-[#C68A2B] after:w-0 hover:after:w-3/4"
                      }
                      ${
                        mobileMenu
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-5"
                      }`}
                    style={{
                      transitionDelay: mobileMenu ? `${index * 50}ms` : "0ms",
                    }}
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="px-6 py-6 mt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenu(false)}
                className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[#C68A2B] px-6 py-3.5 text-[14px] font-semibold uppercase tracking-[0.08em] text-[#F8F6F1] transition-all duration-300 hover:bg-[#B8771F] hover:-translate-y-1"
              >
                Get In Touch
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}