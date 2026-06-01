import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "VNN Hotel",
    type: "Hotel Website",
    description:
      "A modern hotel website with room showcase, booking inquiry system, and WhatsApp integration for fast reservations.",
    tags: ["Booking", "Gallery", "WhatsApp"],
  },
  {
    title: "Jehovah's Tree School",
    type: "School Website",
    description:
      "School website with admissions info, announcements, and easy parent contact system.",
    tags: ["Admissions", "News", "Contact"],
  },
  {
    title: "Ojumah Clinic",
    type: "Clinic Website",
    description:
      "Clinic website with appointment requests, services page, and doctor profiles.",
    tags: ["Appointments", "Doctors", "Services"],
  },
  {
    title: "Demek Pharmacy",
    type: "Pharmacy Website",
    description:
      "Online pharmacy presence with product showcase and prescription request via WhatsApp.",
    tags: ["Products", "WhatsApp", "Catalog"],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-6 py-24">
      
      {/* Header */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold">
          Featured Projects
        </h2>
        <p className="mt-4 text-gray-600">
          Realistic website concepts built for local businesses
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            {/* Top row */}
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="text-sm text-blue-600">
                  {project.type}
                </p>
              </div>

              <ExternalLink className="text-gray-400" size={18} />
            </div>

            {/* Description */}
            <p className="mb-6 text-gray-600">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}