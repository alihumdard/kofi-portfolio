"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const update =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [field]: e.target.value });

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
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded border border-gray-300 px-4 py-3 text-sm outline-none transition-colors focus:border-[#f9004d]";

  return (
    <section id="contact" className="scroll-mt-20 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-4xl font-extrabold text-[#1f1f25] md:text-5xl">
            Hire Me.
          </h2>
          <p className="mt-4 text-[#717173]">
            I am available for freelance work. Connect with me via phone:{" "}
            <a
              href="tel:01923088574"
              className="font-semibold text-[#f9004d] hover:underline"
            >
              01923 088574
            </a>{" "}
            or email:{" "}
            <a
              href="mailto:admin@example.com"
              className="font-semibold text-[#f9004d] hover:underline"
            >
              admin@example.com
            </a>
          </p>

          <div className="mt-8 space-y-4">
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
            <input
              className={inputClass}
              placeholder="Write a Subject"
              value={form.subject}
              onChange={update("subject")}
            />
            <textarea
              className={`${inputClass} min-h-[140px] resize-y`}
              placeholder="Your Message *"
              value={form.message}
              onChange={update("message")}
            />
            <button
              onClick={handleSubmit}
              disabled={status === "sending"}
              className="rounded bg-[#f9004d] px-10 py-4 text-sm font-semibold tracking-wider text-white transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60"
            >
              {status === "sending" ? "SENDING..." : "SUBMIT"}
            </button>

            {status === "sent" && (
              <p className="text-sm font-medium text-green-600">
                Message sent. I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm font-medium text-[#f9004d]">
                Name, email and message are required.
              </p>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="hidden lg:block">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
            {/* Replace with your own /images/contact.jpg */}
            <Image
              src="https://picsum.photos/seed/trydo-contact/800/1000"
              alt=""
              fill
              sizes="40vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
