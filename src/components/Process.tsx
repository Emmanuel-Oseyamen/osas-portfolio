import { MessageCircle, PencilRuler, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "1. Consultation",
    description:
      "We discuss your business goals, website needs, and the features you want.",
  },
  {
    icon: PencilRuler,
    title: "2. Design",
    description:
      "I create a clean, modern layout tailored to your brand and target customers.",
  },
  {
    icon: Code,
    title: "3. Development",
    description:
      "Your website is built using fast, responsive, and modern technologies.",
  },
  {
    icon: Rocket,
    title: "4. Launch",
    description:
      "Your website goes live and is ready to start attracting customers online.",
  },
];

export default function Process() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">
            How It Works
          </h2>
          <p className="mt-4 text-gray-600">
            A simple process to get your business online quickly
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="rounded-2xl border bg-white p-6 text-center shadow-sm transition hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Icon size={22} />
                </div>

                <h3 className="mb-2 text-lg font-semibold">
                  {step.title}
                </h3>

                <p className="text-sm text-gray-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}