import { Hotel, School, Stethoscope, ShoppingBag, RefreshCw, Globe } from "lucide-react";
import FadeIn from "./FadeIn";

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    description:
      "Professional websites that help your business build trust, attract customers, and look credible online.",
  },
  {
    icon: Hotel,
    title: "Hotel Websites",
    description:
      "Showcase rooms, prices, gallery, and enable booking inquiries via WhatsApp or contact forms.",
  },
  {
    icon: School,
    title: "School Websites",
    description:
      "Admission pages, announcements, school information, and parent contact systems.",
  },
  {
    icon: Stethoscope,
    title: "Clinic Websites",
    description:
      "Appointment booking, doctor profiles, services listing, and patient communication tools.",
  },
  {
    icon: ShoppingBag,
    title: "Restaurant & Pharmacy Websites",
    description:
      "Menus, product listings, ordering via WhatsApp, and customer engagement features.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    description:
      "Turn outdated websites into modern, fast, mobile-friendly experiences that convert better.",
  },
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">
            Services I Offer
          </h2>
          <p className="mt-4 text-gray-600">
            I build websites tailored for local businesses and service providers
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}