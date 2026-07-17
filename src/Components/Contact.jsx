import React from "react";
import { useForm } from "react-hook-form";
import { CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";

// Aapke EmailJS Credentials
const EMAILJS_SERVICE_ID = "service_w1gazqm";
const EMAILJS_PUBLIC_KEY = "QGCRHCpc_SaJ6NCtQ";
const CONTACT_TEMPLATE_ID = "template_8bgqwyr";

const TOPICS = [
  "Speaking invitation",
  "Media / interview request",
  "Research collaboration",
  "NeuroDigital Support",
  "Asitina Pa",
  "Other",
];

function TextField({
  id,
  label,
  type = "text",
  register,
  rules,
  error,
  as = "input",
  placeholder,
}) {
  const Tag = as;
  const baseClasses = `w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-[#111827] placeholder-gray-400 outline-none transition focus:ring-2 focus:ring-[#C68A2B]/40 ${
    error
      ? "border-red-500 focus:ring-red-200"
      : "border-[#EAE6DA] focus:border-[#C68A2B]"
  }`;

  return (
    <div className="relative">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <Tag
        id={id}
        type={as === "input" ? type : undefined}
        placeholder={placeholder}
        rows={as === "textarea" ? 5 : undefined}
        className={`${baseClasses} ${as === "textarea" ? "resize-none" : ""}`}
        {...register(id, rules)}
      />
      {error && (
        <p className="absolute -bottom-5 left-1 text-[11px] font-medium text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
}

function NewsletterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({ mode: "onBlur" });

  const onSubmit = async (data) => {
    try {
      // Newsletter subscription automatic email setup
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        CONTACT_TEMPLATE_ID,
        {
          to_email: data.email,
          to_name: "Subscriber",
          topic: "Newsletter Subscription",
          message:
            "Thank you for subscribing to our newsletter! You will receive our latest updates.",
        },
        EMAILJS_PUBLIC_KEY,
      );
      console.log("Subscribed:", data.email);
      reset();
    } catch (error) {
      console.error("Newsletter sending failed:", error);
    }
  };

  return (
    <div className="rounded-xl bg-[#F7F5F0] p-6 border border-[#EAE6DA]/60">
      <h3 className="text-base font-semibold text-[#111827]">Newsletter</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">
        Get the research before it's published elsewhere. Occasional notes on
        neurodivergent digital wellbeing research, NeuroDigital Support's
        progress, and what I'm reading. No noise — just what's genuinely worth
        your time.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-start"
      >
        <div className="flex-1 pb-2">
          <TextField
            id="email"
            label="Your email"
            type="email"
            placeholder="Your email *"
            register={register}
            error={errors.email}
            rules={{
              required: "Email is required.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address.",
              },
            }}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#dd9725] active:translate-y-0 cursor-pointer rounded-lg bg-[#e4a136] px-6 py-2.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60 shadow-sm"
        >
          {isSubmitting ? "Subscribing…" : "Subscribe"}
        </button>
      </form>

      {isSubmitSuccessful && (
        <p className="mt-3 flex items-center gap-1.5 text-sm font-medium text-[#C68A2B]">
          <CheckCircle2 className="h-4 w-4 text-[#e4a136]" /> You're subscribed
          — thank you.
        </p>
      )}
    </div>
  );
}

function SendMessageForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({ mode: "onBlur" });

  const onSubmit = async (data) => {
    try {
      // Form values are mapped with the Template Variables we made earlier
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        CONTACT_TEMPLATE_ID,
        {
          to_name: data.name,
          to_email: data.email, // Customer ka dynamic email
          company_name: data.company,
          topic: data.topic,
          message: data.message,
        },
        EMAILJS_PUBLIC_KEY,
      );

      console.log("Message submitted and Email sent successfully:", data);
      reset();
    } catch (error) {
      console.error("Email sending failed:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="rounded-2xl bg-[#F7F5F0] p-6 sm:p-8 border border-[#EAE6DA]/60">
      <h3 className="text-xl font-bold text-[#111827]">Send a Message</h3>
      <p className="mt-1 text-xs text-[#4B5563]">
        Fields marked with * are required.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="mt-6 space-y-7"
      >
        <TextField
          id="name"
          label="Your Name"
          placeholder="Your Name *"
          register={register}
          error={errors.name}
          rules={{ required: "Please enter your name." }}
        />

        <TextField
          id="email"
          label="Your Email"
          type="email"
          placeholder="Your Email *"
          register={register}
          error={errors.email}
          rules={{
            required: "Please enter your email.",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address.",
            },
          }}
        />

        <TextField
          id="company"
          label="Company Name"
          placeholder="Enter your Company Name *"
          register={register}
          error={errors.company}
          rules={{ required: "Please enter your company name." }}
        />

        <div className="relative">
          <label htmlFor="topic" className="sr-only">
            Select a Topic
          </label>
          <select
            id="topic"
            defaultValue=""
            className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-[#C68A2B]/40 hover:text-gray-400 ${
              errors.topic
                ? "border-red-500 text-[#111827] focus:ring-red-200"
                : "border-[#EAE6DA] text-[#111827] focus:border-[#C68A2B]"
            }`}
            {...register("topic", { required: "Please select a topic." })}
          >
            <option value="" disabled className="text-gray-400">
              Select a Topic *
            </option>
            {TOPICS.map((topic) => (
              <option key={topic} value={topic} className="text-[#111827]">
                {topic}
              </option>
            ))}
          </select>
          {errors.topic && (
            <p className="absolute -bottom-5 left-1 text-[11px] font-medium text-red-500">
              {errors.topic.message}
            </p>
          )}
        </div>

        <TextField
          id="message"
          label="Your Message"
          as="textarea"
          placeholder="Your Message *"
          register={register}
          error={errors.message}
          rules={{
            required: "Please enter a message.",
            minLength: {
              value: 10,
              message: "Message should be at least 10 characters.",
            },
          }}
        />

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full cursor-pointer rounded-lg bg-[#e4a136] py-3 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#dd9725] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 shadow-sm"
          >
            {isSubmitting ? "Sending…" : "Send Message"}
          </button>
        </div>

        {isSubmitSuccessful && (
          <p className="flex items-center gap-1.5 text-sm font-medium text-[#e4a136] justify-center">
            <CheckCircle2 className="h-4 w-4" /> Message sent — thank you, I'll
            get back to you soon.
          </p>
        )}
      </form>
    </div>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white py-14 sm:py-12 border-t border-[#EAE6DA]"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:gap-16 items-start">
        {/* Left column */}
        <div className="lg:sticky lg:top-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight">
            Let's Talk.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#4B5563]">
            Whether you're a researcher, a platform, a journalist, or an
            organisation working on digital inclusion — there's likely a reason
            to connect.
          </p>

          <div className="mt-4 space-y-3">
            <div className="p-5 rounded-xl border border-[#EAE6DA]/40 hover:border-[#C68A2B]/20 transition-all duration-300 bg-[#FDFBF9]">
              <h3 className="text-base font-bold  uppercase tracking-wide text-[#C68A2B]">
                Speaking Invitation
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">
                Kofi speaks on neurodivergent digital experience, algorithmic
                exclusion, and building inclusive digital marketing practice.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[#EAE6DA]/40 hover:border-[#C68A2B]/20 transition-all duration-300 bg-[#FDFBF9]">
              <h3 className="text-base font-bold  uppercase tracking-wide text-[#C68A2B]">
                Media Invitation
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">
                Available for interviews and commentary on neurodivergent
                digital wellbeing, social media and mental health, and inclusive
                design.
              </p>
            </div>
          </div>

          <div className="mt-4">
            <NewsletterForm />
          </div>
        </div>

        {/* Right column */}
        <div>
          <SendMessageForm />
        </div>
      </div>
    </section>
  );
}
