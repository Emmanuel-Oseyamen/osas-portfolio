"use client";

import { ExternalLink, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Bisyl Suites",
    type: "Hotel Website",
    description:
      "A refined hospitality website designed to present the property, showcase its accommodation, and create a polished digital experience for prospective guests.",
    tags: ["Hospitality", "Rooms", "Gallery"],
    link: "https://bisyl-suites.vercel.app/",
  },
  {
    title: "Fergmond Hotel",
    type: "Luxury Hotel Website",
    description:
      "A premium hotel experience focused on elegant presentation, accommodation discovery, visual storytelling, and direct guest enquiries.",
    tags: ["Luxury", "Hospitality", "Booking"],
    link: "https://fergmond-luxury-hotel.vercel.app/",
  },
  {
    title: "Opheem Recipes & Lounge",
    type: "Restaurant Website",
    description:
      "A modern restaurant and lounge website built to showcase the dining experience, signature offerings, atmosphere, and brand identity.",
    tags: ["Restaurant", "Menu", "Gallery"],
    link: "https://opheem-recipes-lounge.vercel.app/",
  },
  {
    title: "Grand Cuba Hotel",
    type: "Hotel Website",
    description:
      "A high-end hospitality website combining cinematic imagery, premium typography, room presentation, and a refined guest experience.",
    tags: ["Luxury", "Rooms", "Hospitality"],
    link: "https://grand-cuba-hotel.vercel.app/",
  },
  {
    title: "Maxl Elegance Hotel",
    type: "Hotel Website",
    description:
      "A sophisticated hotel website designed around elegant visuals, clear accommodation presentation, and a seamless path toward reservations.",
    tags: ["Hospitality", "Rooms", "Reservations"],
    link: "https://malx-elegance-hotel-owq9.vercel.app/",
  },
  {
    title: "Ese Jones Apartments",
    type: "Apartment Website",
    description:
      "A property-focused website designed to present apartment spaces, amenities, and essential information in a clean and professional format.",
    tags: ["Apartments", "Property", "Gallery"],
    link: "https://esejones-jwoh.vercel.app/",
  },
  {
    title: "Goldstep Hotels",
    type: "Hotel Website",
    description:
      "A modern hospitality website created to strengthen the hotel's online presence through structured information, visual presentation, and direct enquiries.",
    tags: ["Hotel", "Gallery", "Enquiries"],
    link: "https://goldstep-xi.vercel.app/",
  },
  {
    title: "VNN Hotel",
    type: "Hotel Website",
    description:
      "A modern hotel website featuring room presentation, visual storytelling, booking enquiries, and WhatsApp integration for direct reservations.",
    tags: ["Booking", "Gallery", "WhatsApp"],
    link: "https://vnn-hotel.vercel.app/",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-slate-50 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-blue-600">
            Selected Work
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Websites built to make
            <span className="block text-slate-500">
              businesses stand out.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            A selection of websites I've designed and developed for hotels,
            restaurants, apartments, and local businesses.
          </p>
        </motion.div>


        {/* =====================================================
            PROJECT GRID
        ===================================================== */}

        <div className="grid gap-6 md:grid-cols-2">

          {projects.map((project, index) => (

            <motion.a
              key={project.title}
              href={project.link}
              target={project.link !== "#" ? "_blank" : undefined}
              rel={
                project.link !== "#"
                  ? "noopener noreferrer"
                  : undefined
              }
              initial={{
                opacity: 0,
                y: 35,
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
                duration: 0.6,
                delay: index * 0.06,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-slate-300
                hover:shadow-[0_25px_70px_rgba(15,23,42,0.10)]
              "
            >

              {/* Top accent */}

              <div className="
                absolute
                left-0
                top-0
                h-1
                w-0
                bg-blue-600
                transition-all
                duration-500
                group-hover:w-full
              " />


              {/* Project number + icon */}

              <div className="mb-12 flex items-center justify-between">

                <span className="text-sm font-medium tracking-[3px] text-slate-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-200
                    text-slate-500
                    transition-all
                    duration-300
                    group-hover:border-blue-600
                    group-hover:bg-blue-600
                    group-hover:text-white
                  "
                >
                  <ArrowUpRight size={19} />
                </div>

              </div>


              {/* Project information */}

              <div>

                <p className="mb-3 text-sm font-semibold uppercase tracking-[2px] text-blue-600">
                  {project.type}
                </p>

                <h3 className="
                  text-3xl
                  font-bold
                  tracking-tight
                  text-slate-950
                  transition-colors
                  duration-300
                  group-hover:text-blue-600
                ">
                  {project.title}
                </h3>

                <p className="
                  mt-5
                  max-w-xl
                  text-base
                  leading-7
                  text-slate-600
                ">
                  {project.description}
                </p>

              </div>


              {/* Tags */}

              <div className="mt-8 flex flex-wrap gap-2">

                {project.tags.map((tag) => (

                  <span
                    key={tag}
                    className="
                      rounded-full
                      bg-slate-100
                      px-3
                      py-1.5
                      text-xs
                      font-medium
                      text-slate-600
                    "
                  >
                    {tag}
                  </span>

                ))}

              </div>


              {/* Visit project */}

              {project.link !== "#" && (

                <div className="
                  mt-8
                  flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-slate-950
                  transition-colors
                  group-hover:text-blue-600
                ">
                  View live website
                  <ExternalLink size={15} />
                </div>

              )}

            </motion.a>

          ))}

        </div>


        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mt-16
            flex
            flex-col
            items-start
            justify-between
            gap-6
            rounded-3xl
            bg-slate-950
            p-8
            text-white
            md:flex-row
            md:items-center
            md:p-10
          "
        >

          <div>

            <p className="text-xl font-semibold">
              Have a project in mind?
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Let's create a website that represents your business properly.
            </p>

          </div>

          <a
            href="https://wa.me/2347079989263?text=Hi%20Osas,%20I'd%20like%20to%20discuss%20a%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-white
              px-6
              py-3
              text-sm
              font-semibold
              text-slate-950
              transition
              hover:bg-blue-600
              hover:text-white
            "
          >
            Start a Project
            <ArrowUpRight size={17} />
          </a>

        </motion.div>

      </div>
    </section>
  );
}
