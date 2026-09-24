"use client";

import {
  MessageCircle,
  PencilRuler,
  Code,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Consultation",
    description:
      "We start with a conversation about your business, your goals, your customers, and what the website needs to accomplish.",
  },
  {
    number: "02",
    icon: PencilRuler,
    title: "Strategy & Design",
    description:
      "I shape the visual direction, structure, and user experience around your brand so the website feels intentional from the first interaction.",
  },
  {
    number: "03",
    icon: Code,
    title: "Development",
    description:
      "The approved design is transformed into a fast, responsive, and polished website that works beautifully across phones, tablets, and desktops.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    description:
      "Once everything is ready, your website goes live and your business has a professional presence that customers can access from anywhere.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-slate-950 py-28 text-white"
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
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-blue-400">
            The Process
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            From idea to
            <span className="block text-slate-500">
              a website you're proud of.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            A straightforward process designed to keep things clear,
            collaborative, and focused on building something that works
            for your business.
          </p>
        </motion.div>


        {/* =====================================================
            PROCESS
        ===================================================== */}

        <div className="relative mt-20">

          {/* Connecting line */}

          <div className="absolute left-0 right-0 top-[38px] hidden h-px bg-slate-800 lg:block" />

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="group relative"
                >

                  {/* Number / icon */}

                  <div className="relative z-10 flex items-center justify-between">

                    <div
                      className="
                        flex
                        h-[76px]
                        w-[76px]
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-slate-700
                        bg-slate-950
                        text-slate-300
                        transition-all
                        duration-500
                        group-hover:border-blue-500
                        group-hover:bg-blue-600
                        group-hover:text-white
                      "
                    >
                      <Icon
                        size={27}
                        strokeWidth={1.7}
                      />
                    </div>

                    <span className="text-sm font-medium tracking-[3px] text-slate-600 lg:hidden">
                      {step.number}
                    </span>

                  </div>


                  {/* Content */}

                  <div className="mt-8">

                    <div className="mb-3 hidden text-xs font-semibold uppercase tracking-[3px] text-blue-400 lg:block">
                      {step.number}
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-7 text-slate-400">
                      {step.description}
                    </p>

                  </div>


                  {/* Arrow */}

                  {index < steps.length - 1 && (
                    <ArrowRight
                      size={18}
                      className="
                        absolute
                        right-0
                        top-7
                        hidden
                        text-slate-700
                        transition
                        group-hover:text-blue-500
                        lg:block
                      "
                    />
                  )}

                </motion.div>
              );
            })}

          </div>

        </div>


        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mt-24
            border-t
            border-slate-800
            pt-8
            md:flex
            md:items-center
            md:justify-between
          "
        >

          <p className="max-w-xl text-sm leading-6 text-slate-500">
            No complicated process. No unnecessary layers. Just a clear path
            from your idea to a professional website.
          </p>

          <a
            href="https://wa.me/2347079989263?text=Hi%20Osas,%20I'd%20like%20to%20start%20a%20website%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-white
              transition
              hover:text-blue-400
              md:mt-0
            "
          >
            Start your project
            <ArrowRight size={16} />
          </a>

        </motion.div>

      </div>
    </section>
  );
}
