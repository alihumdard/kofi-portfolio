import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

/* ——— Fonts ——— */
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

/* ——— SEO Metadata (from client's SEO package) ——— */
export const metadata: Metadata = {
  title:
    "Kofi Ofori-Mensah — Digital Marketing Research, Neurodivergent Digital Wellbeing",
  description:
    "Kofi Ofori-Mensah is a digital marketing researcher (University of Roehampton) and founder of NeuroDigital Support, researching how neurodivergent adults experience social media and building tools for inclusive digital wellbeing.",
  keywords: [
    "Kofi Ofori-Mensah",
    "Kofi Ofori Mensah",
    "neurodiversity researcher",
    "digital marketing researcher UK",
    "NeuroDigital Support",
    "neurodivergent digital wellbeing",
    "digital inclusion",
    "algorithmic exclusion",
    "inclusive digital marketing",
    "autism and social media",
    "digital accessibility research",
    "University of Roehampton",
  ],
  authors: [{ name: "Kofi Ofori-Mensah" }],
  creator: "Kofi Ofori-Mensah",
  metadataBase: new URL("https://kofioforimensah.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://kofioforimensah.com",
    siteName: "Kofi Ofori-Mensah",
    title: "Kofi Ofori-Mensah — Digital Marketing Researcher & Founder",
    description:
      "Researching neurodivergent adults' experience of social media marketing. Founder of NeuroDigital Support. MSc Digital Marketing, University of Roehampton.",
    // TODO: Add OG image once headshot is available
    // images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Kofi Ofori-Mensah" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kofi Ofori-Mensah — Digital Marketing Researcher & Founder",
    description:
      "Digital marketing researcher & founder of NeuroDigital Support, working on neurodivergent digital wellbeing and inclusive platform design.",
    // TODO: Add Twitter handle when confirmed
    // creator: "@kofi_handle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* ——— JSON-LD Structured Data ——— */
function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kofi Ofori-Mensah",
    url: "https://kofioforimensah.com",
    jobTitle: "Digital Marketing Researcher",
    affiliation: {
      "@type": "Organization",
      name: "University of Roehampton",
    },
    alumniOf: {
      "@type": "Organization",
      name: "University of Roehampton",
    },
    description:
      "Kofi Ofori-Mensah is a digital marketing researcher at the University of Roehampton and founder of NeuroDigital Support, focused on neurodivergent digital wellbeing.",
    sameAs: [
      // TODO: Replace with real URLs
      "https://linkedin.com/in/kofi-ofori-mensah",
      "https://orcid.org/XXXX-XXXX-XXXX-XXXX",
      // "https://osf.io/XXXXX",
      // "https://twitter.com/kofi_handle",
    ],
    knowsAbout: [
      "Digital Marketing",
      "Neurodiversity",
      "Algorithmic Exclusion",
      "Platform Ethics",
      "Inclusive Design",
    ],
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NeuroDigital Support",
    url: "https://kofioforimensah.com",
    founder: {
      "@type": "Person",
      name: "Kofi Ofori-Mensah",
    },
    description:
      "A digital ecosystem addressing neurodivergent digital wellbeing, platform ethics, and sensory-aware design, with NuroTok as its flagship product.",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kofi Ofori-Mensah",
    url: "https://kofioforimensah.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://kofioforimensah.com/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Kofi Ofori-Mensah?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A digital marketing researcher at the University of Roehampton and founder of NeuroDigital Support, focused on neurodivergent digital wellbeing.",
        },
      },
      {
        "@type": "Question",
        name: "What does NeuroDigital Support do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It's a digital ecosystem that addresses neurodivergent digital well-being, platform ethics, and sensory-aware design, with NuroTok as its flagship app.",
        },
      },
      {
        "@type": "Question",
        name: "What is Kofi Ofori-Mensah's research about?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "His MSc dissertation examines the lived experiences of autistic and neurodivergent adults with social media marketing in the UK.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${montserrat.variable} ${openSans.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="bg-white font-[family-name:var(--font-body)] text-[#1f1f25] antialiased">
        {children}
      </body>
    </html>
  );
}