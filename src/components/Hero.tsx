// src/components/Hero.tsx

import { Globe, Smartphone, Zap } from "lucide-react";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">
      <div className="grid w-full items-center gap-12 md:grid-cols-2">
        
        <FadeIn>
          {/* LEFT SIDE */}
          <div>
            <p className="mb-4 font-medium text-blue-600">
              Web Designer & Developer
            </p>

            <h1 className="mb-6 text-5xl font-bold leading-tight">
              Modern Websites That Help Businesses Get More Customers
            </h1>

            <p className="mb-8 text-lg text-gray-600">
              I design and build fast, professional websites for hotels, schools,
              clinics, restaurants, pharmacies and local businesses across Nigeria.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#portfolio"
                className="rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
              >
                View My Work
              </a>

              <a
                href="https://wa.me/2347079989263?text=Hi%20Osas,%20I%20need%20a%20website%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border px-6 py-3 transition hover:bg-gray-100"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Small trust points */}
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <Zap size={16} /> Fast Delivery
              </span>
              <span className="flex items-center gap-2">
                <Smartphone size={16} /> Mobile Friendly
              </span>
              <span className="flex items-center gap-2">
                <Globe size={16} /> SEO Ready
              </span>
            </div>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          {/* RIGHT SIDE (MOCK PREVIEW CARD) */}
          <div className="relative">
            <div className="rounded-2xl border bg-white p-6 shadow-xl">
            
              {/* Fake browser bar */}
              <div className="mb-4 flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
              </div>

              {/* Mock website content */}
              <div className="space-y-4">
                <div className="h-6 w-2/3 rounded bg-gray-200"></div>
                <div className="h-4 w-full rounded bg-gray-100"></div>
                <div className="h-4 w-5/6 rounded bg-gray-100"></div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="h-20 rounded-xl bg-blue-100"></div>
                  <div className="h-20 rounded-xl bg-blue-100"></div>
                  <div className="h-20 rounded-xl bg-blue-100"></div>
                  <div className="h-20 rounded-xl bg-blue-100"></div>
                </div>

                <div className="mt-6 h-10 w-1/2 rounded bg-blue-600"></div>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-blue-100 blur-2xl"></div>
          </div>
        </FadeIn>

        
      </div>
    </section>
  );
}