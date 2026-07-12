import {
  FiFacebook,
  FiLinkedin,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";

const socials = [
  { icon: FiFacebook, href: "#", label: "Facebook" },
  { icon: FiLinkedin, href: "#", label: "LinkedIn" },
  { icon: FiInstagram, href: "#", label: "Instagram" },
  { icon: FiTwitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="bg-black py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 md:flex-row">
        <p className="text-2xl font-extrabold text-white">
          trydo<span className="text-[#f9004d]">.</span>
        </p>

        <div className="flex gap-3">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-all hover:border-[#f9004d] hover:bg-[#f9004d]"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>

        <p className="text-sm text-white/60">
          Copyright © {new Date().getFullYear()}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
