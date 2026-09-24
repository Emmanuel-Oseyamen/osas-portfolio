// src/components/Hero.tsx

"use client";

import {
  ArrowUpRight,
  Check,
  Globe,
  Smartphone,
  Zap,
} from "lucide-react";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* Subtle background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-20%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-[120px]" />
        <div className="absolute bottom-0 right-[-10%] h-[400px] w-[400px] rounded-full bg-slate-100 blur-[100px]" />
      </div>

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-6 py-24">

        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">

          {/* =====================================================
              LEFT — MESSAGE
          ===================================================== */}

          <FadeIn>

            <div className="max-w-2xl">

              {/* Eyebrow */}

              <div className="mb-7 flex items-center gap-3">

                <span className="h-px w-10 bg-blue-600" />

                <p className="text-sm font-semibold uppercase tracking-[4px] text-blue-600">
                  Osas Web Studio
                </p>

              </div>

              {/* Main heading */}

              <h1 className="text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-slate-950 sm:text-6xl lg:text-7xl">

                Websites that make
                <span className="block text-blue-600">
                  your business
                </span>
                look the part.

              </h1>

              {/* Description */}

              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600 md:text-xl">
                I design and develop modern, high-performance websites
                that help businesses establish credibility, showcase what
                they offer, and turn visitors into customers.
              </p>

              {/* Industry positioning */}

              <p className="mt-5 text-sm font-medium leading-6 text-slate-500">
                Built for hotels, schools, clinics, restaurants,
                pharmacies and ambitious local businesses across Nigeria.
              </p>

              {/* CTA */}

              <div className="mt-10 flex flex-wrap items-center gap-4">

                <a
                  href="#portfolio"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-slate-950
                    px-7
                    py-4
                    font-semibold
                    text-white
                    shadow-lg
                    shadow-slate-950/10
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-blue-600
                    hover:shadow-xl
                  "
                >
                  Explore My Work

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

                <a
                  href="https://wa.me/2347079989263?text=Hi%20Osas,%20I%20need%20a%20website%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-slate-300
                    bg-white
                    px-7
                    py-4
                    font-semibold
                    text-slate-900
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-slate-400
                    hover:bg-slate-50
                  "
                >
                  Start a Project
                </a>

              </div>

              {/* Trust points */}

              <div className="mt-12 flex flex-wrap gap-x-7 gap-y-4 border-t border-slate-200 pt-7">

                <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  Custom Design
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  Mobile First
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  Fast & SEO Ready
                </div>

              </div>

            </div>

          </FadeIn>


          {/* =====================================================
              RIGHT — WORK SHOWCASE
          ===================================================== */}

          <FadeIn delay={0.2}>

            <div className="relative">

              {/* Main browser frame */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-slate-200
                  bg-white
                  shadow-[0_40px_100px_rgba(15,23,42,0.14)]
                "
              >

                {/* Browser header */}

                <div className="flex h-12 items-center border-b border-slate-200 bg-slate-50 px-5">

                  <div className="flex gap-2">

                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />

                  </div>

                  <div className="mx-auto hidden rounded-md bg-white px-12 py-1.5 text-[10px] text-slate-400 shadow-sm sm:block">
                    osaswebstudio.com
                  </div>

                </div>

                {/* Website preview */}

                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">

                  {/* Main preview image */}
                  <img
                    src="/projects/vnn-hotel.png"
                    alt="Website designed by Osas Web Studio"
                    className="
                      h-full
                      w-full
                      object-cover
                      object-top
                      transition
                      duration-700
                      hover:scale-[1.02]
                    "
                  />

                  {/* Preview overlay */}

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6">

                    <p className="text-xs font-semibold uppercase tracking-[3px] text-white/70">
                      Featured Project
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-white">
                      VNN Hotel & Suites
                    </h3>

                  </div>

                </div>

              </div>


              {/* Floating project card */}

              <div
                className="
                  absolute
                  -bottom-7
                  -left-6
                  hidden
                  w-64
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  shadow-[0_20px_50px_rgba(15,23,42,0.15)]
                  sm:block
                "
              >

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[2px] text-slate-400">
                      What I build
                    </p>

                    <p className="mt-2 font-bold text-slate-900">
                      Modern Business Websites
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                    <Globe
                      size={19}
                      className="text-blue-600"
                    />
                  </div>

                </div>

                <div className="mt-4 flex items-center gap-4 text-xs font-medium text-slate-500">

                  <span className="flex items-center gap-1">
                    <Zap size={13} className="text-blue-600" />
                    Fast
                  </span>

                  <span className="flex items-center gap-1">
                    <Smartphone size={13} className="text-blue-600" />
                    Responsive
                  </span>

                </div>

              </div>


              {/* Decorative glow */}

              <div
                className="
                  absolute
                  -inset-8
                  -z-10
                  rounded-[40px]
                  bg-blue-100/50
                  blur-3xl
                "
              />

            </div>

          </FadeIn>

        </div>

      </div>

    </section>
  );
}
