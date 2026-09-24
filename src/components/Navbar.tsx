"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">

      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* =====================================================
            BRAND
        ===================================================== */}

        <a
          href="/"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >

          {/* Logo mark */}

          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white transition duration-300 group-hover:bg-blue-600">
            O
          </div>

          {/* Brand */}

          <div className="leading-none">

            <p className="text-[15px] font-bold tracking-tight text-slate-950">
              Osas Web Studio
            </p>

            <p className="mt-1 text-[9px] font-medium uppercase tracking-[3px] text-slate-400">
              Web Design & Development
            </p>

          </div>

        </a>


        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

        <div className="hidden items-center gap-8 md:flex">

          <a
            href="#portfolio"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
          >
            Work
          </a>

          <a
            href="#services"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
          >
            Services
          </a>

          <a
            href="#process"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
          >
            Process
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
          >
            About
          </a>

        </div>


        {/* =====================================================
            DESKTOP CTA
        ===================================================== */}

        <div className="hidden md:block">

          <a
            href="https://wa.me/2347079989263?text=Hi%20Osas,%20I'd%20like%20to%20discuss%20a%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-slate-950
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-blue-600
            "
          >
            Let's Talk

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />

          </a>

        </div>


        {/* =====================================================
            MOBILE MENU BUTTON
        ===================================================== */}

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-slate-200
            text-slate-900
            transition
            hover:bg-slate-50
            md:hidden
          "
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

      </nav>


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      {open && (

        <div className="border-t border-slate-200 bg-white md:hidden">

          <div className="mx-auto max-w-7xl px-6 py-6">

            <div className="flex flex-col">

              <a
                href="#portfolio"
                onClick={closeMenu}
                className="border-b border-slate-100 py-4 text-base font-medium text-slate-800"
              >
                Work
              </a>

              <a
                href="#services"
                onClick={closeMenu}
                className="border-b border-slate-100 py-4 text-base font-medium text-slate-800"
              >
                Services
              </a>

              <a
                href="#process"
                onClick={closeMenu}
                className="border-b border-slate-100 py-4 text-base font-medium text-slate-800"
              >
                Process
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="border-b border-slate-100 py-4 text-base font-medium text-slate-800"
              >
                About
              </a>

            </div>


            {/* Mobile CTA */}

            <a
              href="https://wa.me/2347079989263?text=Hi%20Osas,%20I'd%20like%20to%20discuss%20a%20website."
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="
                mt-6
                flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-slate-950
                px-6
                py-4
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-blue-600
              "
            >
              Start a Project

              <ArrowUpRight size={17} />

            </a>

          </div>

        </div>

      )}

    </header>
  );
}
