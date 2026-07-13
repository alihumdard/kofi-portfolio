"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const ACCENT = "#0d7377";

const books = [
  {
    title: "The Invisible Users",
    image: "/Images/About.jpeg",
    href: "https://a.co/d/06dbkgJF",
  },
  {
    title: "Shattered Bonds",
    image: "/Images/shatterd.jpeg",
    href: "#",
  },
  {
    title: "Neurodiversity Beyond the West",
    image: "/Images/neuro.jpeg",
    href: "https://a.co/d/0iNoTQdn",
  },
  {
    title: "Neurodigital Support",
    image: "/Images/support.jpeg",
    href: "https://a.co/d/090W2MGH",
  },
  {
    title: "The Invisible Struggle",
    image: "/Images/About.jpeg",
    href: "https://a.co/d/06dbkgJF",
  },
];

export default function Books() {
  return (
    <section id="books" className="scroll-mt-20 bg-[#f8f9fc] py-24">
      <div className="mx-auto max-w-[1260px] px-5">
        <SectionTitle
          title="Published Books"
          subtitle="Five books exploring neurodiversity, digital wellbeing, diaspora experience, and inclusive design."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {books.map((book, i) => (
            <Reveal key={book.title} delay={(i % 5) * 0.08}>
              <a href={book.href} className="group block">
                {/* Book cover */}
                <div className="relative aspect-[2/3] overflow-hidden rounded-lg shadow-md transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                  {/* Replace with real book cover images */}
                  <Image
                    src={book.image}
                    alt={`${book.title} by Kofi Ofori-Mensah — book cover`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span
                      className="m-4 inline-block rounded px-4 py-2 text-[11px] font-semibold uppercase tracking-widest text-white"
                      style={{ backgroundColor: ACCENT }}
                    >
                      View Details
                    </span>
                  </div>
                </div>

                {/* Title below cover */}
                <h3 className="mt-4 text-center text-sm font-semibold leading-snug text-[#1f1f25] transition-colors duration-200 group-hover:text-[#0d7377]">
                  {book.title}
                </h3>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
