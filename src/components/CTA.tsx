"use client";

import {
  ArrowUpRight,
  Check,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  const whatsappNumber = "2347079989263";

  const whatsappMessage =
    "Hi Osas, I'd like to discuss a website for my business.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section
      id="contact"
      className="
        relative
        isolate
        overflow-hidden
        bg-slate-950
        py-24
        text-white
        sm:py-28
        lg:py-36
      "
    >
      {/* =========================================================
          BACKGROUND ATMOSPHERE
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Blue glow */}
        <div
          className="
            absolute
            left-1/2
            top-[-180px]
            h-[500px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-blue-600/20
            blur-[130px]
          "
        />

        {/* Side glow */}
        <div
          className="
            absolute
            bottom-[-200px]
            right-[-100px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-indigo-600/15
            blur-[130px]
          "
        />

        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.35)_100%)]" />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative mx-auto max-w-5xl px-6 sm:px-8">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >

          {/* Eyebrow */}

          <div className="mb-7 flex items-center justify-center gap-3">

            <span className="h-px w-8 bg-blue-500" />

            <div className="flex items-center gap-2">
              <Sparkles
                size={14}
                className="text-blue-400"
              />

              <span className="text-xs font-bold uppercase tracking-[0.28em] text-blue-400">
                Start a Project
              </span>
            </div>

            <span className="h-px w-8 bg-blue-500" />

          </div>


          {/* Heading */}

          <h2
            className="
              mx-auto
              max-w-4xl
              text-4xl
              font-bold
              leading-[1.02]
              tracking-[-0.045em]
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            Your business deserves
            <span className="block text-blue-500">
              a better digital presence.
            </span>
          </h2>


          {/* Description */}

          <p
            className="
              mx-auto
              mt-7
              max-w-2xl
              text-base
              leading-7
              text-slate-400
              sm:text-lg
              sm:leading-8
            "
          >
            Whether you're launching something new or upgrading an
            outdated website, let's create an experience that makes
            your business look professional and gives customers a
            reason to choose you.
          </p>


          {/* =====================================================
              CTA BUTTONS
          ===================================================== */}

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">

            {/* WhatsApp */}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                w-full
                items-center
                justify-center
                gap-2.5
                rounded-full
                bg-white
                px-7
                py-4
                text-sm
                font-bold
                text-slate-950
                shadow-[0_15px_40px_rgba(255,255,255,0.08)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-blue-600
                hover:text-white
                hover:shadow-[0_18px_45px_rgba(37,99,235,0.3)]
                sm:w-auto
              "
            >
              <MessageCircle size={18} />

              Chat on WhatsApp

              <ArrowUpRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>


            {/* Portfolio */}

            <a
              href="#portfolio"
              className="
                group
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-white/15
                bg-white/[0.04]
                px-7
                py-4
                text-sm
                font-semibold
                text-white
                backdrop-blur
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white/30
                hover:bg-white/10
                sm:w-auto
              "
            >
              View My Work

              <ArrowUpRight
                size={17}
                className="
                  text-slate-400
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  group-hover:text-white
                "
              />
            </a>

          </div>


          {/* =====================================================
              TRUST / SERVICE POINTS
          ===================================================== */}

          <div
            className="
              mx-auto
              mt-12
              flex
              max-w-xl
              flex-wrap
              justify-center
              gap-x-6
              gap-y-3
              border-t
              border-white/10
              pt-7
            "
          >

            <TrustPoint label="Custom Design" />

            <TrustPoint label="Mobile First" />

            <TrustPoint label="Fast & SEO Ready" />

            <TrustPoint label="Direct Support" />

          </div>

        </motion.div>


        {/* =========================================================
            AVAILABILITY CARD
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="
            mx-auto
            mt-16
            flex
            max-w-2xl
            flex-col
            items-center
            justify-between
            gap-5
            rounded-2xl
            border
            border-white/10
            bg-white/[0.035]
            px-5
            py-5
            backdrop-blur-xl
            sm:flex-row
            sm:px-6
          "
        >

          <div className="flex items-center gap-3">

            {/* Status dot */}

            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>


            <div className="text-left">

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                Studio Status
              </p>

              <p className="mt-0.5 text-xs font-semibold text-white">
                Available for new projects
              </p>

            </div>

          </div>


          <p className="text-center text-xs text-slate-500 sm:text-right">
            Hotels · Restaurants · Schools · Businesses
          </p>

        </motion.div>

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
    <div className="flex items-center gap-2 text-xs font-medium text-slate-400">

      <span className="flex h-4.5 w-4.5 items-center justify-center rounded-full bg-blue-500/15 text-blue-400">
        <Check
          size={10}
          strokeWidth={3}
        />
      </span>

      {label}

    </div>
  );
}
