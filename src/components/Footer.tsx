"use client";

import {
  ArrowUpRight,
  ArrowUp,
  Mail,
  Phone,
  MessageCircle,
  Globe,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">

      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Blue glow */}
        <div
          className="
            absolute
            -left-40
            top-20
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-600/10
            blur-[140px]
          "
        />

        {/* Right glow */}
        <div
          className="
            absolute
            -right-40
            bottom-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-indigo-600/10
            blur-[140px]
          "
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>


      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* =======================================================
            BIG CTA
        ======================================================= */}

        <div className="border-b border-white/10 py-24 sm:py-28 lg:py-32">

          <div className="max-w-5xl">

            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-500" />

              <span className="text-xs font-bold uppercase tracking-[0.28em] text-blue-400">
                Let's build something
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                max-w-4xl
                text-4xl
                font-bold
                leading-[1.02]
                tracking-[-0.045em]
                text-white
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              Your business deserves
              <span className="block text-slate-500">
                a website that stands out.
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-7
                max-w-2xl
                text-base
                leading-7
                text-slate-400
                sm:text-lg
                sm:leading-8
              "
            >
              Whether you're launching a new business, upgrading an
              outdated website, or creating your first digital presence,
              let's build something that represents your business properly.
            </p>

            {/* CTA */}
            <div className="mt-9">

              <a
                href="https://wa.me/2347079989263?text=Hi%20Osas%2C%20I'd%20like%20to%20discuss%20a%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
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
                  sm:px-8
                "
              >
                Start a Project

                <ArrowUpRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </a>

            </div>

          </div>

        </div>


        {/* =======================================================
            MAIN FOOTER CONTENT
        ======================================================= */}

        <div className="grid gap-14 py-16 md:grid-cols-12 lg:py-20">

          {/* =====================================================
              BRAND
          ===================================================== */}

          <div className="md:col-span-5">

            <div className="flex items-center gap-3">

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-white
                  text-sm
                  font-black
                  text-slate-950
                "
              >
                O
              </div>

              <div>
                <h3 className="text-lg font-bold tracking-tight">
                  Osas Web Studio
                </h3>

                <p className="text-xs text-slate-500">
                  Web Design & Development
                </p>
              </div>

            </div>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
              We design and develop modern websites for hotels, restaurants,
              schools, clinics, apartments, and ambitious businesses that
              want a stronger presence online.
            </p>

            {/* Availability */}
            <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5">

              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>

              <span className="text-xs font-medium text-slate-300">
                Available for new projects
              </span>

            </div>

          </div>


          {/* =====================================================
              NAVIGATION
          ===================================================== */}

          <div className="md:col-span-3 md:col-start-7">

            <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Explore
            </h4>

            <nav className="flex flex-col gap-4">

              <a
                href="#portfolio"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-slate-400
                  transition-colors
                  hover:text-white
                "
              >
                Portfolio

                <ArrowUpRight
                  size={13}
                  className="
                    opacity-0
                    transition-all
                    duration-200
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:opacity-100
                  "
                />
              </a>

              <a
                href="#services"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-slate-400
                  transition-colors
                  hover:text-white
                "
              >
                Services

                <ArrowUpRight
                  size={13}
                  className="
                    opacity-0
                    transition-all
                    duration-200
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:opacity-100
                  "
                />
              </a>

              <a
                href="#process"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-slate-400
                  transition-colors
                  hover:text-white
                "
              >
                Process

                <ArrowUpRight
                  size={13}
                  className="
                    opacity-0
                    transition-all
                    duration-200
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:opacity-100
                  "
                />
              </a>

              <a
                href="#faq"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-slate-400
                  transition-colors
                  hover:text-white
                "
              >
                FAQ

                <ArrowUpRight
                  size={13}
                  className="
                    opacity-0
                    transition-all
                    duration-200
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:opacity-100
                  "
                />
              </a>

            </nav>

          </div>


          {/* =====================================================
              CONTACT
          ===================================================== */}

          <div className="md:col-span-3">

            <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Get in touch
            </h4>

            <div className="flex flex-col gap-5">

              {/* Email */}
              <a
                href="mailto:emmanueloseyamen@gmail.com"
                className="
                  group
                  flex
                  items-start
                  gap-3
                  text-sm
                  text-slate-400
                  transition-colors
                  hover:text-white
                "
              >
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-slate-500 transition-colors group-hover:text-blue-400"
                />

                <span className="break-all">
                  emmanueloseyamen@gmail.com
                </span>
              </a>


              {/* Phone */}
              <a
                href="tel:+2347079989263"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-slate-400
                  transition-colors
                  hover:text-white
                "
              >
                <Phone
                  size={17}
                  className="shrink-0 text-slate-500 transition-colors group-hover:text-blue-400"
                />

                <span>
                  +234 707 998 9263
                </span>
              </a>


              {/* WhatsApp */}
              <a
                href="https://wa.me/2347079989263"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-slate-400
                  transition-colors
                  hover:text-white
                "
              >
                <MessageCircle
                  size={17}
                  className="shrink-0 text-slate-500 transition-colors group-hover:text-emerald-400"
                />

                <span>
                  Chat on WhatsApp
                </span>

                <ArrowUpRight
                  size={13}
                  className="
                    opacity-0
                    transition-all
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:opacity-100
                  "
                />
              </a>

            </div>

          </div>

        </div>


        {/* =======================================================
            BOTTOM BAR
        ======================================================= */}

        <div className="border-t border-white/10 py-7">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            {/* Copyright */}
            <p className="text-xs text-slate-500">
              © {year} Osas Web Studio. All rights reserved.
            </p>


            {/* Socials */}
            <div className="flex items-center gap-5">

              {/* Back to top */}
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  text-xs
                  font-medium
                  text-slate-500
                  transition-colors
                  hover:text-white
                "
              >
                Back to top

                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:border-white/30
                  "
                >
                  <ArrowUp
                    size={13}
                  />
                </span>
              </button>

            </div>

          </div>

        </div>


        {/* =======================================================
            SMALL BRAND MARK
        ======================================================= */}

        <div className="overflow-hidden pb-6 pt-8">

          <div className="select-none text-center text-[clamp(5rem,18vw,15rem)] font-black leading-none tracking-[-0.08em] text-white/[0.025]">
            OSAS
          </div>

        </div>

      </div>

    </footer>
  );
}
