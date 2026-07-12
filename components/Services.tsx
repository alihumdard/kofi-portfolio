import { services } from "@/data/services";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Services() {
  return (
    <section id="service" className="scroll-mt-20 bg-[#f8f9fc] py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle
          title="My Awesome Service"
          subtitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={`${s.title}-${i}`} delay={(i % 3) * 0.1}>
                <div className="group h-full cursor-pointer rounded bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-[#f9004d] hover:shadow-xl">
                  <Icon
                    size={40}
                    className="text-[#f9004d] transition-colors duration-300 group-hover:text-white"
                  />
                  <h3 className="mt-6 text-lg font-semibold text-[#1f1f25] transition-colors duration-300 group-hover:text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#717173] transition-colors duration-300 group-hover:text-white/90">
                    {s.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
