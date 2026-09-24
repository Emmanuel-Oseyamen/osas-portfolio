"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "How much does a website cost?",
    answer:
      "Every project is different. Pricing depends on the number of pages, design complexity, functionality, and integrations required. After understanding your business and goals, I'll recommend the right approach and provide a clear quote before development begins.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Most projects are completed within 3–14 days. Smaller business websites can move quickly, while larger projects with custom functionality, animations, booking systems, or integrations may require more time.",
  },
  {
    question: "Will my website work on mobile phones?",
    answer:
      "Yes. Every website is designed responsively from the beginning. Your website will adapt smoothly across smartphones, tablets, laptops, and large desktop screens.",
  },
  {
    question: "Can I update my website myself?",
    answer:
      "Yes. Depending on the project, I can build your website with an easy-to-manage content system so you can update text, images, products, or other content without needing to write code.",
  },
  {
    question: "Do you help with hosting and domain setup?",
    answer:
      "Absolutely. I can help you choose and purchase your domain, configure hosting, connect your website, set up SSL, and make sure everything is working correctly before launch.",
  },
  {
    question: "What happens after my website goes live?",
    answer:
      "Launch is only the beginning. I can help with updates, improvements, maintenance, performance optimization, and new features as your business grows.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-white py-28 sm:py-32">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-blue-50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-slate-50 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-600" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                FAQ
              </span>
            </div>

            <h2 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              Questions before we
              <span className="block text-gray-400">get started?</span>
            </h2>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <p className="text-base leading-7 text-gray-600 sm:text-lg">
              A few things clients usually want to know before starting a
              website project. If you have something else in mind, just ask.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16 border-t border-gray-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-gray-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center gap-5 py-6 text-left sm:py-7"
                >
                  {/* Number */}
                  <span
                    className={`hidden w-10 shrink-0 text-sm font-medium transition-colors sm:block ${
                      isOpen ? "text-blue-600" : "text-gray-400"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Question */}
                  <span
                    className={`flex-1 text-lg font-medium transition-colors sm:text-xl ${
                      isOpen
                        ? "text-gray-950"
                        : "text-gray-700 group-hover:text-gray-950"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Icon */}
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-gray-200 bg-white text-gray-500 group-hover:border-gray-400 group-hover:text-gray-900"
                    }`}
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: {
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        },
                        opacity: {
                          duration: 0.2,
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-7 pl-0 sm:pl-16 sm:pr-16">
                        <p className="max-w-3xl text-base leading-7 text-gray-600">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col justify-between gap-6 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:flex-row sm:items-center sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
              <MessageCircle size={19} className="text-blue-600" />
            </div>

            <div>
              <h3 className="font-semibold text-gray-950">
                Still have a question?
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Tell me what you need and I'll help you figure it out.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/2347079989263"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gray-950 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-600"
          >
            Let's Talk
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
