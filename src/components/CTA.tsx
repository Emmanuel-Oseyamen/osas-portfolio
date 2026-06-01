import { MessageCircle, ArrowRight } from "lucide-react";

export default function CTA() {
  const whatsappNumber = "234XXXXXXXXXX"; // 👈 replace with your number

  return (
    <section className="bg-blue-600 py-24 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold leading-tight">
          Ready to Build a Website for Your Business?
        </h2>

        <p className="mt-6 text-lg text-blue-100">
          Let’s discuss your project and create a professional website that helps you get more customers online.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-gray-100"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>

          <a
            href="#portfolio"
            className="flex items-center gap-2 rounded-xl border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-blue-600"
          >
            View My Work
            <ArrowRight size={18} />
          </a>

        </div>

        {/* Small trust line */}
        <p className="mt-8 text-sm text-blue-100">
          Fast response • Affordable pricing • Mobile-friendly websites
        </p>

      </div>
    </section>
  );
}