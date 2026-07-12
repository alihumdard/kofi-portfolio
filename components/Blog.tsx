import Image from "next/image";
import { posts } from "@/data/posts";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Blog() {
  return (
    <section id="blog" className="scroll-mt-20 bg-[#f8f9fc] py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle
          title="Latest News"
          subtitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.1}>
              <a
                href={post.href}
                className="group relative block h-[380px] overflow-hidden rounded"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="text-xs tracking-wider text-white/70">
                    {post.category}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold leading-snug text-white transition-colors group-hover:text-[#f9004d]">
                    {post.title}
                  </h3>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
