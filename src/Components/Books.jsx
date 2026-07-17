import { motion } from "framer-motion";
import { useRef } from "react";

const ACCENT = "#C68A2B";

const books = [
  {
    id: 1,
    image: "/Images/About.jpeg",
    title: "The Invisible Struggle",
    link: "https://a.co/d/09W0IkfC",
  },
  {
    id: 2,
    image: "/Images/shatterd.png",
    title: "Shattered Bonds",
    link: "https://a.co/d/090W2MGH",
  },
  {
    id: 3,
    image: "/Images/neurodigital.png",
    title: "Neurodiversity Beyond The West",
    link: "https://a.co/d/0iNoTQdn",
  },
  {
    id: 4,
    image: "/Images/support.jpeg",
    title: "NeuroDigital Support",
    link: "https://a.co/d/090W2MGH",
  },
  {
    id: 5,
    image: "/Images/invisible.jpg",
    title: "The Invisible Users",
    link: "https://a.co/d/06dbkgJF",
  },
];

export default function Books() {
  return (
    <section id="books" className="bg-[#0F0F10] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-8 max-w-3xl text-center"
        >
          <span
            className="inline-flex rounded-full border border-[#E6D2A3] bg-[#FFF9EE] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] sm:px-5"
            style={{ color: ACCENT }}
          >
            Published Books
          </span>

          <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            Books That Inspire
            <span className="block" style={{ color: ACCENT }}>
              Research & Inclusion
            </span>
          </h2>

          <p className="mt-2 text-sm leading-7 text-[#BDBDBD] sm:text-base lg:leading-8">
            Five published books exploring neurodiversity, digital wellbeing,
            diaspora experiences, inclusion, accessibility and ethical
            technology.
          </p>
        </motion.div>

        {/* Books Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 md:gap-6 lg:grid-cols-5 lg:gap-6">
          {/* Book Card */}
          {books.map((book, index) => (
            <motion.a
              key={book.id}
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group flex flex-col"
            >
              {/* Image Container - Standard Book Cover Ratio (2:3) */}
              <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-2xl shrink-0 bg-gray-900">
                {/* 2:3 Aspect Ratio Container (standard book cover) */}
                <div
                  className="relative w-full overflow-hidden rounded-xl"
                  style={{ paddingBottom: "150%" }}
                >
                  <img
                    src={book.image}
                    alt={book.title}
                    className={`absolute inset-0 h-full w-full bg-gray-900 transition duration-700 group-hover:scale-105 ${
                      book.id === 3
                        ? "object-cover object-top"
                        : "object-contain"
                    }`}
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-3 text-center text-xs font-semibold leading-tight text-white transition duration-300 group-hover:text-[#C68A2B] sm:text-sm md:text-base line-clamp-2">
                {book.title}
              </h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
