// src/components/Hero.tsx

"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  Code2,
  Sparkles,
  Zap,
} from "lucide-react";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-white"
    >
      {/* =========================================================
          BACKGROUND ATMOSPHERE
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Main blue atmosphere */}
        <div className="absolute left-[45%] top-[-18%] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-blue-100/50 blur-[140px]" />

        {/* Indigo glow */}
        <div className="absolute right-[-12%] top-[25%] h-[500px] w-[500px] rounded-full bg-indigo-100/40 blur-[130px]" />

        {/* Bottom neutral atmosphere */}
        <div className="absolute bottom-[-20%] left-[20%] h-[450px] w-[450px] rounded-full bg-slate-100/80 blur-[120px]" />

        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* =========================================================
          HERO CONTAINER
      ========================================================= */}

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-8 sm:px-8 sm:pb-24 sm:pt-12 lg:px-10 lg:pb-28 lg:pt-16">
        <div className="grid items-center gap-14 lg:grid-cols-[0.94fr_1.06fr] lg:gap-16 xl:gap-20">

          {/* =====================================================
              LEFT — BRAND MESSAGE
          ===================================================== */}

          <FadeIn>
            <div className="relative z-10 max-w-2xl">

              {/* Eyebrow */}
              <div className="mb-7 flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-50" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600" />
                </span>

                <p className="text-xs font-bold uppercase tracking-[0.28em] text-slate-500">
                  Osas Web Studio
                </p>
              </div>

              {/* Main heading */}
              <h1 className="text-[3.3rem] font-bold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-6xl md:text-7xl lg:text-[4.7rem] xl:text-[5.2rem]">

                We build websites
                <span className="block text-blue-600">
                  people remember.
                </span>

              </h1>

              {/* Accent line */}
              <div className="mt-7 h-1 w-16 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-10 rounded-full bg-blue-600" />
              </div>

              {/* Description */}
              <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Modern websites for businesses that want to look
                professional, earn trust, and turn attention into real
                opportunities.
              </p>

              {/* Positioning */}
              <p className="mt-5 max-w-lg text-sm leading-6 text-slate-500">
                Strategy, design and development for hotels, schools,
                clinics, restaurants, pharmacies and ambitious businesses
                across Nigeria.
              </p>

              {/* =================================================
                  CTA
              ================================================= */}

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
                    shadow-[0_14px_35px_rgba(15,23,42,0.16)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-blue-600
                    hover:shadow-[0_18px_40px_rgba(37,99,235,0.25)]
                  "
                >
                  Explore Our Work

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
                    bg-white/80
                    px-7
                    py-4
                    text-sm
                    font-semibold
                    text-slate-900
                    shadow-sm
                    backdrop-blur
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
                      opacity-60
                      transition-all
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </a>

              </div>

              {/* =================================================
                  TRUST POINTS
              ================================================= */}

              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200/80 pt-6">

                <TrustPoint label="Custom Design" />

                <TrustPoint label="Mobile First" />

                <TrustPoint label="Fast & SEO Ready" />

              </div>

            </div>
          </FadeIn>

          {/* =====================================================
              RIGHT — FOUNDER IMAGE
          ===================================================== */}

          <FadeIn delay={0.15}>
            <div className="relative mx-auto w-full max-w-[650px] lg:ml-auto">

              {/* Ambient glow behind image */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  -inset-6
                  rounded-[3rem]
                  bg-blue-200/40
                  blur-3xl
                "
              />

              {/* Secondary blue glow */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-10
                  top-1/4
                  h-48
                  w-48
                  rounded-full
                  bg-indigo-300/20
                  blur-3xl
                "
              />

              {/* =================================================
                  IMAGE FRAME
              ================================================= */}

              <div className="relative">

                {/* Outer border */}
                <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-br from-white via-slate-200 to-blue-200" />

                {/* Image container */}
                <div
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[2rem]
                    border
                    border-white/80
                    bg-slate-100
                    shadow-[0_35px_90px_rgba(15,23,42,0.18)]
                  "
                >

                  <div className="relative aspect-[4/4.25] overflow-hidden">

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

                    {/* Image cinematic gradient */}
                    <div
                      aria-hidden="true"
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

                    {/* Subtle blue cinematic wash */}
                    <div
                      aria-hidden="true"
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-tr
                        from-blue-950/10
                        via-transparent
                        to-blue-400/10
                        mix-blend-overlay
                      "
                    />

                    {/* Image bottom identity */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">

                      <div className="flex items-end justify-between gap-4">

                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">
                            Founder · Designer · Developer
                          </p>

                          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                            Osas Web Studio
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
                    AVAILABLE STATUS CARD
                ================================================= */}

                <div
                  className="
                    absolute
                    -left-4
                    top-7
                    hidden
                    rounded-2xl
                    border
                    border-white/80
                    bg-white/95
                    px-4
                    py-3
                    shadow-[0_18px_45px_rgba(15,23,42,0.14)]
                    backdrop-blur-xl
                    sm:block
                    lg:-left-8
                  "
                >
                  <div className="flex items-center gap-3">

                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    </span>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                        Studio Status
                      </p>

                      <p className="mt-0.5 text-xs font-semibold text-slate-900">
                        Available for projects
                      </p>
                    </div>

                  </div>
                </div>

                {/* =================================================
                    CREATIVE CARD
                ================================================= */}

                <div
                  className="
                    absolute
                    -bottom-7
                    -right-4
                    w-[210px]
                    rounded-2xl
                    border
                    border-white/80
                    bg-white/95
                    p-4
                    shadow-[0_22px_55px_rgba(15,23,42,0.16)]
                    backdrop-blur-xl
                    sm:-right-6
                    sm:w-[230px]
                  "
                >

                  <div className="flex items-start justify-between">

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        bg-blue-50
                      "
                    >
                      <Code2
                        size={18}
                        className="text-blue-600"
                      />
                    </div>

                    <Sparkles
                      size={15}
                      className="text-blue-500"
                    />

                  </div>

                  <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    What we create
                  </p>

                  <p className="mt-1 text-sm font-bold leading-5 text-slate-900">
                    Digital experiences built to make your business stand out.
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-[10px] font-semibold text-slate-500">
                    <Zap
                      size={12}
                      className="text-blue-600"
                    />
                    Design · Development · Strategy
                  </div>

                </div>

              </div>
            </div>
          </FadeIn>

        </div>
      </div>

      {/* =========================================================
          BOTTOM SCROLL / CONTINUATION SIGNAL
      ========================================================= */}

      <div
        aria-hidden="true"
        className="
          absolute
          bottom-6
          left-1/2
          hidden
          -translate-x-1/2
          items-center
          gap-3
          text-[9px]
          font-bold
          uppercase
          tracking-[0.3em]
          text-slate-400
          lg:flex
        "
      >
        <span className="h-px w-8 bg-slate-300" />
        Scroll to explore
        <span className="h-px w-8 bg-slate-300" />
      </div>
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
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
        <Check
          size={11}
          strokeWidth={3}
        />
      </span>

      {label}
    </div>
  );
}
