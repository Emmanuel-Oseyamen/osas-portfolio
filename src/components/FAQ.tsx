"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much does a website cost?",
    answer:
      "The cost depends on the features you need. Simple business websites are affordable, while advanced websites with booking systems or custom features cost more.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Most websites are completed within 3 to 14 days depending on the size and requirements of the project.",
  },
  {
    question: "Will my website work on mobile phones?",
    answer:
      "Yes. Every website I build is fully responsive and works perfectly on all devices including smartphones, tablets, and desktops.",
  },
  {
    question: "Can I update my website myself?",
    answer:
      "Yes. I can build your website in a way that allows you to easily update text, images, and content without technical knowledge.",
  },
  {
    question: "Do you help with hosting and domain?",
    answer:
      "Yes. I can guide you through buying a domain and setting up hosting, or handle the entire setup for you.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6">

        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600">
            Everything you need to know before getting started
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border bg-gray-50"
            >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <span className="font-medium text-gray-900">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={18}
                />
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}