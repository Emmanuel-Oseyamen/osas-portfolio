"use client";

import {
  Hotel,
  School,
  Stethoscope,
  ShoppingBag,
  RefreshCw,
  Globe,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Globe,
    number: "01",
    title: "Business Websites",
    description:
      "Professional digital experiences designed to establish credibility, communicate your value, and give customers a clear reason to choose your business.",
  },
  {
    icon: Hotel,
    number: "02",
    title: "Hotel Websites",
    description:
      "Premium hospitality websites that showcase rooms, amenities, galleries, pricing, and provide a direct path to booking enquiries.",
  },
  {
    icon: School,
    number: "03",
    title: "School Websites",
    description:
      "Clear and professional school platforms for admissions, programmes, announcements, facilities, and parent communication.",
  },
  {
    icon: Stethoscope,
    number: "04",
    title: "Clinic Websites",
    description:
      "Trust-focused healthcare websites that present services, doctors, facilities, appointments, and essential patient information.",
  },
  {
    icon: ShoppingBag,
    number: "05",
    title: "Restaurant & Retail",
    description:
      "Engaging websites for restaurants, pharmacies, and retail businesses with menus, product showcases, galleries, and direct customer enquiries.",
  },
  {
    icon: RefreshCw,
    number: "06",
    title: "Website Redesign",
    description:
      "Transform an outdated website into a modern, responsive, visually polished experience built around clarity, speed, and usability.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-28"
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
            What I Do
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Digital experiences
            <span className="block text-slate-400">
              built for your business.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            From a first online presence to a complete website redesign,
            I build modern experiences that make businesses look credible,
            communicate clearly, and connect with their customers.
          </p>
        </motion.div>


        {/* =====================================================
            SERVICES GRID
        ===================================================== */}

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
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
                  delay: index * 0.07,
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
                  hover:shadow-[0_25px_70px_rgba(15,23,42,0.09)]
                "
              >

                {/* Hover accent */}

                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-1
                    w-0
                    bg-blue-600
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />


                {/* Top row */}

                <div className="flex items-start justify-between">

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-slate-950
                      text-white
                      transition-all
                      duration-500
                      group-hover:bg-blue-600
                    "
                  >
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <span className="text-sm font-medium tracking-[3px] text-slate-300">
                    {service.number}
                  </span>

                </div>


                {/* Content */}

                <div className="mt-10">

                  <h3 className="
                    text-2xl
                    font-bold
                    tracking-tight
                    text-slate-950
                  ">
                    {service.title}
                  </h3>

                  <p className="
                    mt-4
                    text-base
                    leading-7
                    text-slate-600
                  ">
                    {service.description}
                  </p>

                </div>


                {/* Bottom indicator */}

                <div
                  className="
                    mt-8
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-slate-400
                    transition-all
                    duration-300
                    group-hover:text-blue-600
                  "
                >
                  Explore service

                  <ArrowUpRight
                    size={16}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </div>

              </motion.div>
            );
          })}

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
            gap-6
            rounded-3xl
            bg-slate-950
            p-8
            text-white
            md:flex-row
            md:items-center
            md:justify-between
            md:p-10
          "
        >

          <div>

            <p className="text-xl font-semibold md:text-2xl">
              Need something more specific?
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Tell me what your business needs and we can build around it.
            </p>

          </div>

          <a
            href="https://wa.me/2347079989263?text=Hi%20Osas,%20I'd%20like%20to%20discuss%20a%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              w-fit
              items-center
              gap-2
              rounded-full
              bg-white
              px-6
              py-3.5
              text-sm
              font-semibold
              text-slate-950
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-blue-600
              hover:text-white
            "
          >
            Start a Conversation

            <ArrowUpRight size={17} />

          </a>

        </motion.div>

      </div>
    </section>
  );
}
