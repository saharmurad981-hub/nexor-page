import React from "react";
import All from "../../assets/NexorImg"
const impactFeatures = [
  {
    icon: "♧",
    title: "Creative Synergy",
    description:
      "Blending diverse perspectives to spark breakthrough solutions.",
    color: "bg-purple-200",
  },
  {
    icon: "ϟ",
    title: "Resilient Systems",
    description:
      "Building frameworks that adapt to shifting conditions.",
    color: "bg-emerald-200",
  },
];

export default function Impact() {
  return (
    <section className="bg-[#101c18] px-5 py-16 text-white md:px-10 lg:px-20 lg:py-24 w-full">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

        {/* Left image and statistic */}
        <div className="relative min-h-[480px] md:min-h-[620px]">
          <img
            src={All.img17}
            alt="Business team working together"
            className="absolute inset-0 h-full w-full rounded-2xl object-cover"
          />

          <div className="absolute bottom-0 left-4 w-56 rounded-t-2xl bg-white p-6 text-[#15201b] shadow-xl sm:left-5 sm:w-60">
            <h3 className="text-4xl font-serif">300+</h3>
            <p className="mt-16 text-sm leading-6 text-gray-600">
              Campaigns shipped with strategy
            </p>
          </div>
        </div>

        {/* Right content */}
        <div className="flex flex-col justify-between gap-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#263630] px-4 py-2 text-xs font-semibold uppercase tracking-wide">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Our Impact
            </span>

            <h2 className="mt-7 max-w-2xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
              Expert consulting tailored to your business success
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-300 sm:text-base">
              We bring clarity to complexity—offering hands-on strategic
              guidance, actionable frameworks, and measurable results
              that drive real business growth.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex rounded-xl bg-[#efff79] px-6 py-4 text-sm font-semibold text-[#172019] transition duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Book Free Meeting
            </a>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {impactFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl bg-[#263630] p-5 transition duration-300 hover:-translate-y-1 hover:bg-[#30423a] sm:p-6"
              >
                <div
                  className={`${feature.color} flex h-12 w-12 items-center justify-center rounded-xl text-2xl text-gray-900`}
                >
                  {feature.icon}
                </div>

                <h3 className="mt-12 text-lg font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>



  );
}