import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MapPin,
  Trees,
  Leaf,
  Building2,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const ACCENT = "#C68A2B";

// Project Data
const projects = [
  {
    id: 1,
    icon: Building2,
    image: "/Images/astina-pa-image.png",
    badge: "FLAGSHIP DEVELOPMENT",
    title: "Asitina Pa Agri-Venture",
    description:
      "Building corporate-managed agricultural towns in Ghana that integrate sustainable farming, modern housing, education, healthcare, and clean water into a scalable model.",
    highlights: [
      "Phase 1 investment over $1 million",
      "Targeting 10,000+ jobs",
      "Integrated housing, schools & healthcare",
    ],
    button: "Explore Project",
  },
  {
    id: 2,
    icon: Trees,
    image: "/Images/second.png",
    badge: "GREEN INFRASTRUCTURE",
    title: "City Forest Ghana",
    description:
      "A professional urban forestry initiative that designs and maintains green spaces and runs one of the largest nurseries in West Africa to supply regional restoration projects.",
    highlights: [
      "Large-scale nursery development",
      "Urban & horticultural forestry services",
      "Modelled on international best practices",
    ],
    button: "View Initiative",
  },
  {
    id: 3,
    icon: Building2,
    image: "/Images/asten.png",
    badge: "FLAGSHIP DEVELOPMENT",
    title: "Asitina Pa",
    location: "Ghana",
    description:
      "Building sustainable agricultural communities that combine modern infrastructure, environmental responsibility, and economic opportunity to improve rural life across Ghana.",
    highlights: [
      "Sustainable agricultural communities",
      "Green infrastructure & smart planning",
      "Investment-driven rural development",
    ],
    button: "Explore Project",
  },
  {
    id: 4,
    icon: Building2,
    image: "/Images/park.png",
    badge: "MASTERPLAN",
    title: "Sustainable Community Masterplan",
    location: "Ghana",
    description:
      "A visionary masterplan integrating residential living, urban agriculture, recreational spaces, and essential infrastructure to create resilient, self-sustaining communities for future generations.",
    highlights: [
      "Eco-friendly urban planning",
      "Community parks & public facilities",
      "Long-term environmental resilience",
    ],
    button: "View Masterplan",
  },
  {
    id: 5,
    icon: BookOpen,
    image: "/Images/image.png",
    badge: "RESEARCH WORK",
    title: "Asitina Pa Sustainable Communities",
    description:
      "An impact-driven research and development initiative designing sustainable agricultural communities in Ghana, integrating modern housing, farming, education, healthcare, and green infrastructure.",
    highlights: [
      "Sustainable agricultural town planning",
      "Green infrastructure & community development",
      "Food security and rural economic growth",
    ],
    button: "View Project",
  },
  {
    id: 6,
    icon: BookOpen,
    image: "/Images/dig.png",
    badge: "RESEARCH WORK",
    title: "Asitina Pa Housing Concept",
    location: "Ghana / UK",
    description:
      "An innovative housing concept supporting the Asitina Pa vision, focused on sustainable architecture, resilient communities, and environmentally conscious residential development.",
    highlights: [
      "Sustainable housing research",
      "Modern community architecture",
      "Climate-resilient residential design",
    ],
    button: "View Research",
  },
  {
    id: 7,
    icon: BookOpen,
    image: "/Images/gene.png",
    badge: "RESEARCH WORK",
    title: "Asitina Pa Residential Living",
    location: "Ghana / UK",
    description:
      "A sustainable residential housing initiative within the Asitina Pa vision, designed to deliver modern, resilient, and environmentally responsible living spaces for growing communities.",
    highlights: [
      "Contemporary housing solutions",
      "Community-centred neighbourhoods",
      "Climate-smart residential planning",
    ],
    button: "View Research",
  },
];

// ===================================
// REUSABLE PROJECT CARD
// ===================================
function ProjectCard({ project }) {
  const Icon = project.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#EFE7D8] bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-lg"
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden aspect-16/10 bg-[#FFF9EE]">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&q=80&w=600";
          }}
        />

        {/* BADGE */}
        <div className="absolute left-5 top-5 rounded-full bg-[#e4a136] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white shadow-lg">
          {project.badge}
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-6 lg:p-8">
        <div className="flex items-start gap-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF6E7]">
            <Icon size={22} color={ACCENT} />
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#1E1E1E] leading-snug line-clamp-1">
              {project.title}
            </h3>

            <div
              className="mt-1 flex items-center gap-1.5 text-xs font-semibold"
              style={{ color: ACCENT }}
            >
              <MapPin size={14} />
              Ghana / UK
            </div>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="mt-5 text-[14px] leading-relaxed text-[#676767] line-clamp-3">
          {project.description}
        </p>

        {/* HIGHLIGHTS */}
        <div className="mt-6 space-y-3 mb-6">
          {project.highlights.map((item, index) => (
            <div key={index} className="flex items-start gap-2.5">
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFF6E7]">
                <Leaf size={11} color={ACCENT} />
              </div>

              <p className="text-[13.5px] leading-relaxed text-[#555] line-clamp-1">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <button className="mt-auto bg-[#e4a136] inline-flex w-fit cursor-pointer items-center gap-2.5 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#dd9725]">
          {project.button}
          <ArrowUpRight size={16} />
        </button>
      </div>
    </motion.article>
  );
}

// ===================================
// MAIN COMPONENT EXPORT
// ===================================
export default function GhanaProjects() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Sync Swiper parameters with custom navigation DOM elements
  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section
      id="projects"
      className="py-12 lg:py-16 bg-[#FCFBF8] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <span
            className="inline-flex rounded-full border border-[#E6D2A3] bg-[#FFF9EE] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em]"
            style={{ color: ACCENT }}
          >
            Featured Initiatives
          </span>

          <h2 className="mt-3 text-3xl font-black leading-tight text-[#1E1E1E] lg:text-4xl">
            Projects & Publications
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-[14px] leading-relaxed text-[#6D6D6D]">
            Designing research-backed solutions and sustainable systems that
            bridge agriculture, forestry, environmental protection, and
            inclusive digital research.
          </p>
        </motion.div>

        {/* SLIDER WRAPPER WITH ONLY ARROW BUTTONS */}
        <div className="relative px-2 md:px-12">
          {/* Custom Prev Button */}
          <button
            ref={prevRef}
            className="prev-btn absolute -left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#EFE7D8] bg-white text-[#1E1E1E] shadow-md transition-all duration-300 hover:bg-[#FFF6E7] hover:text-[#C68A2B] active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Custom Next Button */}
          <button
            ref={nextRef}
            className="next-btn absolute -right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#EFE7D8] bg-white text-[#1E1E1E] shadow-md transition-all duration-300 hover:bg-[#FFF6E7] hover:text-[#C68A2B] active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none"
          >
            <ChevronRight size={20} />
          </button>

          {/* Swiper Slider */}
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={false} // Dubarah start nahi hoga
            speed={900}
            spaceBetween={24}
            onSwiper={setSwiperInstance}
            autoplay={{
              delay: 3000, // 3 seconds tak har slide ruke gi
              disableOnInteraction: true, // Manual touch/click se autoplay stop ho jaye
              stopOnLastSlide: true, // Sabse important: 7th slide par aakar automatic slide hona band ho jaye
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className="projectSwiper"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="h-auto">
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
