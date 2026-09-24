// src/components/Hero.tsx

"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  Code2,
  Sparkles,
} from "lucide-react";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#f8fafc]
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Main atmosphere */}
        <div
          className="
            absolute
            left-[38%]
            top-[-25%]
            h-[750px]
            w-[750px]
            -translate-x-1/2
            rounded-full
            bg-blue-100/45
            blur-[150px]
          "
        />

        {/* Right atmosphere */}
        <div
          className="
            absolute
            right-[-18%]
            top-[15%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-indigo-100/30
            blur-[150px]
          "
        />

        {/* Bottom atmosphere */}
        <div
          className="
            absolute
            bottom-[-30%]
            left-[25%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-slate-200/50
            blur-[130px]
          "
        />

        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>


      {/* =========================================================
          MAIN HERO
      ========================================================= */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-6
          pb-24
          pt-8
          sm:px-8
          sm:pb-28
          sm:pt-12
          lg:px-10
          lg:pb-32
          lg:pt-16
        "
      >
        <div
          className="
            grid
            items-center
            gap-16
            lg:grid-cols-[0.92fr_1.08fr]
            lg:gap-14
            xl:gap-20
          "
        >

          {/* =====================================================
              LEFT — MESSAGE
          ===================================================== */}

          <FadeIn>
            <div className="relative z-10 max-w-2xl">

              {/* Eyebrow */}

              <div className="mb-7 flex items-center gap-3">

                <span className="h-px w-9 bg-blue-600" />

                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-slate-500
                  "
                >
                  Web Design · Development
                </p>

              </div>


              {/* Main heading */}

              <h1
                className="
                  max-w-3xl
                  text-[3.4rem]
                  font-bold
                  leading-[0.94]
                  tracking-[-0.065em]
                  text-slate-950
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[4.7rem]
                  xl:text-[5.35rem]
                "
              >
                Websites that
                <span className="block text-blue-600">
                  make businesses
                </span>
                impossible to ignore.
              </h1>


              {/* Description */}

              <p
                className="
                  mt-8
                  max-w-xl
                  text-base
                  leading-7
                  text-slate-600
                  sm:text-lg
                  sm:leading-8
                "
              >
                I design and build modern websites for businesses that
                want to look credible, earn trust, and turn visitors
                into real customers.
              </p>


              {/* CTA */}

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">

                <a
                  href="#portfolio"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-2.5
                    rounded-full
                    bg-slate-950
                    px-7
                    py-4
                    text-sm
                    font-semibold
                    text-white
                    shadow-[0_15px_40px_rgba(15,23,42,0.16)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-blue-600
                    hover:shadow-[0_20px_45px_rgba(37,99,235,0.25)]
                  "
                >
                  Explore My Work

                  <ArrowUpRight
                    size={17}
                    strokeWidth={2.2}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </a>


                <a
                  href="https://wa.me/2347079989263?text=Hi%20Osas%2C%20I%20need%20a%20website%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-slate-200
                    bg-white/70
                    px-7
                    py-4
                    text-sm
                    font-semibold
                    text-slate-900
                    shadow-sm
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-slate-300
                    hover:bg-white
                    hover:shadow-lg
                  "
                >
                  Start a Project

                  <ArrowUpRight
                    size={16}
                    className="
                      text-slate-400
                      transition-all
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:text-slate-900
                    "
                  />
                </a>

              </div>


              {/* Trust row */}

              <div
                className="
                  mt-10
                  flex
                  flex-wrap
                  gap-x-6
                  gap-y-3
                  border-t
                  border-slate-200/80
                  pt-6
                "
              >

                <TrustPoint label="Custom Design" />

                <TrustPoint label="Mobile First" />

                <TrustPoint label="SEO Ready" />

              </div>

            </div>
          </FadeIn>


          {/* =====================================================
              RIGHT — FOUNDER IMAGE
          ===================================================== */}

          <FadeIn delay={0.12}>
            <div className="relative mx-auto w-full max-w-[650px] lg:ml-auto">

              {/* Image glow */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  -inset-10
                  rounded-[4rem]
                  bg-blue-200/30
                  blur-[70px]
                "
              />


              {/* Main image */}

              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2.5rem]
                  border
                  border-white
                  bg-slate-100
                  shadow-[0_40px_100px_rgba(15,23,42,0.16)]
                "
              >

                <div className="relative aspect-[4/4.55]">

                  <Image
                    src="/osas-founder.png"
                    alt="Osas — founder of Osas Web Studio"
                    fill
                    priority
                    sizes="
                      (max-width: 1024px) 100vw,
                      55vw
                    "
                    className="
                      object-cover
                      object-center
                      transition-transform
                      duration-[1400ms]
                      ease-out
                      group-hover:scale-[1.025]
                    "
                  />


                  {/* Cinematic overlay */}

                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-slate-950/65
                      via-slate-950/5
                      to-transparent
                    "
                  />


                  {/* Subtle color wash */}

                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-tr
                      from-blue-950/10
                      via-transparent
                      to-blue-300/10
                      mix-blend-overlay
                    "
                  />


                  {/* Image identity */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      p-7
                      sm:p-9
                    "
                  >

                    <div className="flex items-end justify-between gap-6">

                      <div>

                        <p
                          className="
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.3em]
                            text-white/60
                          "
                        >
                          Founder · Designer · Developer
                        </p>

                        <h2
                          className="
                            mt-2
                            text-2xl
                            font-bold
                            tracking-tight
                            text-white
                            sm:text-3xl
                          "
                        >
                          Osas
                        </h2>

                      </div>


                      <div
                        className="
                          hidden
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/20
                          bg-white/10
                          text-white
                          backdrop-blur-md
                          sm:flex
                        "
                      >
                        <ArrowUpRight size={20} />
                      </div>

                    </div>

                  </div>

                </div>

              </div>


              {/* =================================================
                  STATUS PILL
              ================================================= */}

              <div
                className="
                  absolute
                  -left-3
                  top-7
                  hidden
                  rounded-2xl
                  border
                  border-white
                  bg-white/95
                  px-4
                  py-3
                  shadow-[0_20px_50px_rgba(15,23,42,0.12)]
                  backdrop-blur-xl
                  sm:block
                  lg:-left-7
                "
              >

                <div className="flex items-center gap-3">

                  <span className="relative flex h-2.5 w-2.5">

                    <span
                      className="
                        absolute
                        h-full
                        w-full
                        animate-ping
                        rounded-full
                        bg-emerald-400
                        opacity-60
                      "
                    />

                    <span
                      className="
                        relative
                        h-2.5
                        w-2.5
                        rounded-full
                        bg-emerald-500
                      "
                    />

                  </span>

                  <div>

                    <p
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-slate-400
                      "
                    >
                      Studio
                    </p>

                    <p className="mt-0.5 text-xs font-semibold text-slate-900">
                      Available for projects
                    </p>

                  </div>

                </div>

              </div>


              {/* =================================================
                  SMALL CREATIVE CARD
              ================================================= */}

              <div
                className="
                  absolute
                  -bottom-6
                  -right-3
                  w-[220px]
                  rounded-2xl
                  border
                  border-white
                  bg-white/95
                  p-4
                  shadow-[0_25px_60px_rgba(15,23,42,0.14)]
                  backdrop-blur-xl
                  sm:-right-5
                "
              >

                <div className="flex items-center justify-between">

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-xl
                      bg-blue-50
                    "
                  >
                    <Code2
                      size={17}
                      className="text-blue-600"
                    />
                  </div>

                  <Sparkles
                    size={14}
                    className="text-blue-500"
                  />

                </div>

                <p
                  className="
                    mt-4
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-slate-400
                  "
                >
                  What I do
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    font-bold
                    leading-5
                    text-slate-900
                  "
                >
                  Design & development for ambitious businesses.
                </p>

              </div>

            </div>
          </FadeIn>

        </div>
      </div>


      {/* =========================================================
          BOTTOM EDGE
      ========================================================= */}

      <div
        aria-hidden="true"
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-slate-200
          to-transparent
        "
      />

    </section>
  );
}


/* ===============================================================
   TRUST POINT
================================================================ */

function TrustPoint({
  label,
}: {
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">

      <span
        className="
          flex
          h-5
          w-5
          items-center
          justify-center
          rounded-full
          bg-blue-600
          text-white
        "
      >
        <Check
          size={11}
          strokeWidth={3}
        />
      </span>

      {label}

    </div>
  );
}
