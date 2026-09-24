"use client";

import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Bisyl Suites",
    type: "Hotel Website",
    description:
      "A refined hospitality experience designed to present the property, showcase accommodation, and guide prospective guests toward enquiries.",
    tags: ["Hospitality", "Rooms", "Gallery"],
    link: "https://bisyl-suites.vercel.app/",
    image: "/bisyl-suites.vercel.app.png",
  },
  {
    number: "02",
    title: "Fergmond Hotel",
    type: "Luxury Hotel Website",
    description:
      "A premium hotel experience built around elegant presentation, accommodation discovery, visual storytelling, and direct guest enquiries.",
    tags: ["Luxury", "Hospitality", "Booking"],
    link: "https://fergmond-luxury-hotel.vercel.app/",
    image: "/fergmond-luxury-hotel.vercel.app.png",
  },
  {
    number: "03",
    title: "Opheem Recipes & Lounge",
    type: "Restaurant Website",
    description:
      "A modern restaurant and lounge experience created to showcase the dining atmosphere, signature offerings, and visual identity of the brand.",
    tags: ["Restaurant", "Menu", "Gallery"],
    link: "https://opheem-recipes-lounge.vercel.app/",
    image: "/opheem-recipes-lounge.vercel.app.png",
  },
  {
    number: "04",
    title: "Grand Cuba Hotel",
    type: "Hotel Website",
    description:
      "A cinematic hospitality website combining premium typography, immersive imagery, room presentation, and a refined guest journey.",
    tags: ["Luxury", "Rooms", "Hospitality"],
    link: "https://grand-cuba-hotel.vercel.app/",
    image: "/grand-cuba-hotel.vercel.app.png",
  },
  {
    number: "05",
    title: "Maxl Elegance Hotel",
    type: "Hotel Website",
    description:
      "A sophisticated digital presence designed around elegant visuals, accommodation discovery, and a seamless path toward reservations.",
    tags: ["Hospitality", "Rooms", "Reservations"],
    link: "https://malx-elegance-hotel-owq9.vercel.app/",
    image: "/malx-elegance-hotel-owq9.vercel.app.png",
  },
  {
    number: "06",
    title: "Ese Jones Apartments",
    type: "Apartment Website",
    description:
      "A property-focused website presenting apartment spaces, amenities, and essential information through a clean and professional experience.",
    tags: ["Apartments", "Property", "Gallery"],
    link: "https://esejones-jwoh.vercel.app/",
    image: "/esejones-jwoh.vercel.app.png",
  },
  {
    number: "07",
    title: "Goldstep Hotels",
    type: "Hotel Website",
    description:
      "A modern hospitality experience created to strengthen the hotel's online presence through structured information, visual presentation, and direct enquiries.",
    tags: ["Hotel", "Gallery", "Enquiries"],
    link: "https://goldstep-xi.vercel.app/",
    image: "/goldstep-xi.vercel.app.png",
  },
  {
    number: "08",
    title: "VNN Hotel",
    type: "Hotel Website",
    description:
      "A modern hotel experience featuring room presentation, visual storytelling, booking enquiries, and WhatsApp integration for direct reservations.",
    tags: ["Booking", "Gallery", "WhatsApp"],
    link: "https://vnn-hotel.vercel.app/",
    image: "/vnn-hotel.verrcel.app.png",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#f8fafc] py-28 sm:py-32 lg:py-40"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-blue-100/30 blur-[130px]" />

        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-100/30 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* =======================================================
            SECTION INTRO
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-4xl lg:mb-24"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-blue-600" />

            <p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-600">
              Selected Work
            </p>
          </div>

          <h2 className="text-4xl font-bold leading-[1.02] tracking-[-0.045em] text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
            Digital experiences
            <span className="block text-slate-400">
              built to be remembered.
            </span>
          </h2>

          <div className="mt-7 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

            <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              A selection of websites I've designed and developed for
              hotels, restaurants, apartments, and ambitious businesses.
            </p>

            <div className="hidden shrink-0 items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 sm:flex">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              08 Projects
            </div>

          </div>
        </motion.div>


        {/* =======================================================
            FEATURED PROJECT
        ======================================================= */}

        <ProjectCard
          project={projects[0]}
          featured
        />


        {/* =======================================================
            PROJECT GRID
        ======================================================= */}

        <div className="mt-8 grid gap-8 lg:grid-cols-2">

          {projects.slice(1).map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}

        </div>


        {/* =======================================================
            BOTTOM CTA
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="
            relative
            mt-24
            overflow-hidden
            rounded-[2rem]
            bg-slate-950
            px-7
            py-10
            text-white
            sm:px-10
            sm:py-12
            lg:px-14
            lg:py-14
          "
        >

          {/* CTA glow */}
          <div
            aria-hidden="true"
            className="
              absolute
              -right-20
              -top-20
              h-72
              w-72
              rounded-full
              bg-blue-600/20
              blur-[100px]
            "
          />

          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            <div>

              <div className="mb-4 flex items-center gap-2">
                <Sparkles
                  size={15}
                  className="text-blue-400"
                />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                  Your next project
                </span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Have a business that deserves
                <span className="text-slate-400">
                  {" "}a better website?
                </span>
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
                Let's create a digital presence that makes your business
                look as professional as the work you do.
              </p>

            </div>

            <a
              href="https://wa.me/2347079989263?text=Hi%20Osas%2C%20I'd%20like%20to%20discuss%20a%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-full
                bg-white
                px-7
                py-4
                text-sm
                font-semibold
                text-slate-950
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-blue-600
                hover:text-white
              "
            >
              Start a Project

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  );
}


/* ===============================================================
   PROJECT CARD
================================================================ */

function ProjectCard({
  project,
  featured = false,
  index = 0,
}: {
  project: (typeof projects)[number];
  featured?: boolean;
  index?: number;
}) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.06,
      }}
      className={`
        group
        relative
        block
        overflow-hidden
        rounded-[2rem]
        border
        border-slate-200/80
        bg-white
        shadow-[0_10px_40px_rgba(15,23,42,0.04)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-slate-300
        hover:shadow-[0_30px_80px_rgba(15,23,42,0.12)]
        ${featured ? "lg:rounded-[2.5rem]" : ""}
      `}
    >

      {/* =========================================================
          PROJECT IMAGE
      ========================================================= */}

      <div
        className={`
          relative
          overflow-hidden
          bg-slate-100
          ${featured ? "aspect-[16/8.5]" : "aspect-[16/10]"}
        `}
      >

        <img
          src={project.image}
          alt={`${project.title} website`}
          className="
            h-full
            w-full
            object-cover
            object-top
            transition-transform
            duration-[1000ms]
            ease-out
            group-hover:scale-[1.045]
          "
        />

        {/* Image overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-950/55
            via-transparent
            to-transparent
            opacity-70
          "
        />

        {/* Top project metadata */}
        <div className="absolute left-5 right-5 top-5 flex items-center justify-between sm:left-7 sm:right-7 sm:top-7">

          <span
            className="
              rounded-full
              border
              border-white/20
              bg-black/20
              px-3
              py-1.5
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-white
              backdrop-blur-md
            "
          >
            {project.type}
          </span>

          <span
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-black/20
              text-white
              backdrop-blur-md
              transition-all
              duration-300
              group-hover:border-white
              group-hover:bg-white
              group-hover:text-slate-950
            "
          >
            <ArrowUpRight size={17} />
          </span>

        </div>

        {/* Project number */}
        <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">
          <span className="text-xs font-bold tracking-[0.25em] text-white/60">
            {project.number}
          </span>
        </div>

      </div>


      {/* =========================================================
          PROJECT CONTENT
      ========================================================= */}

      <div
        className={`
          ${featured ? "p-7 sm:p-9 lg:p-10" : "p-7 sm:p-8"}
        `}
      >

        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:gap-8">

          <div className="max-w-2xl">

            <h3
              className="
                text-2xl
                font-bold
                tracking-[-0.025em]
                text-slate-950
                transition-colors
                duration-300
                group-hover:text-blue-600
                sm:text-3xl
              "
            >
              {project.title}
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              {project.description}
            </p>

          </div>

          <div className="shrink-0">

            <span
              className="
                inline-flex
                items-center
                gap-2
                text-xs
                font-bold
                uppercase
                tracking-[0.15em]
                text-slate-400
                transition-colors
                group-hover:text-blue-600
              "
            >
              View Project
              <ExternalLink size={13} />
            </span>

          </div>

        </div>


        {/* Tags */}

        <div className="mt-7 flex flex-wrap gap-2">

          {project.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                bg-slate-100
                px-3
                py-1.5
                text-[11px]
                font-semibold
                text-slate-500
                transition-colors
                group-hover:bg-blue-50
                group-hover:text-blue-600
              "
            >
              {tag}
            </span>
          ))}

        </div>

      </div>

    </motion.a>
  );
}
