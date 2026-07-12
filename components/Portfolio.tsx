import Image from "next/image";
import { projects } from "@/data/projects";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle
          title="My Latest Project"
          subtitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={`${p.title}-${i}`} delay={(i % 3) * 0.1}>
              <div className="group relative h-[420px] overflow-hidden rounded">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="text-xs tracking-wider text-white/70">
                    {p.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    {p.title}
                  </h3>
                  <a
                    href={p.href}
                    className="mt-5 inline-block border border-white px-5 py-2 text-xs font-semibold tracking-widest text-white opacity-0 transition-all duration-300 hover:border-[#f9004d] hover:bg-[#f9004d] group-hover:opacity-100"
                  >
                    VIEW DETAILS
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <a
            href="#"
            className="inline-block rounded bg-[#f9004d] px-10 py-4 text-sm font-semibold tracking-wider text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            VIEW MORE
          </a>
        </Reveal>
      </div>
    </section>
  );
}
