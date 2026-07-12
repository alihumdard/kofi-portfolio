"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const ACCENT = "#0d7377";

type Status = "idle" | "sending" | "sent" | "error";

const topics = [
  "Research Collaboration",
  "Speaking Invitation",
  "Media & Interview",
  "Asitina Pa / Investment",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const update =
    (field: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => setForm({ ...form, [field]: e.target.value });

  async function handleSubmit() {
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ name: "", email: "", topic: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded border border-gray-300 bg-white px-4 py-3.5 text-sm text-[#1f1f25] outline-none transition-colors focus:border-[#0d7377]";

  return (
    <section id="contact" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-[1260px] px-5">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* ——— Left: Info + invitations ——— */}
          <Reveal>
            <h2 className="text-4xl font-extrabold text-[#1f1f25] md:text-5xl">
              Let&apos;s Talk.
            </h2>
            <p className="mt-4 leading-relaxed text-[#717173]">
              Whether you&apos;re a researcher, a platform, a journalist, or an
              organisation working on digital inclusion — there&apos;s likely a
              reason to connect.
            </p>

            {/* Speaking invitation */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-[#1f1f25]">
                Speaking Invitation
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#717173]">
                Kofi speaks on neurodivergent digital experience, algorithmic
                exclusion, and building inclusive digital marketing practice.
              </p>
            </div>

            {/* Media invitation */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-[#1f1f25]">
                Media Invitation
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#717173]">
                Available for interviews and commentary on neurodivergent
                digital wellbeing, social media and mental health, and inclusive
                design.
              </p>
            </div>

            {/* Newsletter */}
            <div
              className="mt-10 rounded-lg p-6"
              style={{ backgroundColor: `${ACCENT}0d` }}
            >
              <h3 className="text-lg font-semibold text-[#1f1f25]">
                Newsletter
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#717173]">
                Get the research before it&apos;s published elsewhere. Occasional
                notes on neurodivergent digital wellbeing research,
                NeuroDigital Support&apos;s progress, and what I&apos;m reading.
                No noise — just what&apos;s genuinely worth your time.
              </p>
              <div className="mt-4 flex gap-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 rounded border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#0d7377]"
                />
                <button
                  className="shrink-0 rounded px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: ACCENT }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </Reveal>

          {/* ——— Right: Contact form ——— */}
          <Reveal delay={0.15}>
            <div className="rounded-lg bg-[#f8f9fc] p-8 md:p-10">
              <h3 className="text-2xl font-bold text-[#1f1f25]">
                Send a Message
              </h3>
              <p className="mt-2 text-sm text-[#717173]">
                Fields marked with * are required.
              </p>

              <div className="mt-8 space-y-5">
                <input
                  className={inputClass}
                  placeholder="Your Name *"
                  value={form.name}
                  onChange={update("name")}
                />
                <input
                  className={inputClass}
                  type="email"
                  placeholder="Your Email *"
                  value={form.email}
                  onChange={update("email")}
                />

                {/* Topic dropdown */}
                <select
                  className={`${inputClass} ${
                    !form.topic ? "text-gray-400" : ""
                  }`}
                  value={form.topic}
                  onChange={update("topic")}
                >
                  <option value="" disabled>
                    Select a Topic
                  </option>
                  {topics.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>

                <textarea
                  className={`${inputClass} min-h-[150px] resize-y`}
                  placeholder="Your Message *"
                  value={form.message}
                  onChange={update("message")}
                />

                <button
                  onClick={handleSubmit}
                  disabled={status === "sending"}
                  className="w-full rounded py-4 text-sm font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60"
                  style={{ backgroundColor: ACCENT }}
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                {status === "sent" && (
                  <p className="text-center text-sm font-medium text-green-600">
                    Message sent — I&apos;ll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p
                    className="text-center text-sm font-medium"
                    style={{ color: "#d32f2f" }}
                  >
                    Please fill in name, email and message.
                  </p>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}