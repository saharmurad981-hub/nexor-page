
import All from "../../assets/NexorImg";
const services = [
  {
    number: "01",
    category: "STRATEGY",
    title: "Financial Consulting",
    description:
      "Personalized strategies to grow, protect, and transfer your wealth across generations.",
    image: All.img13,
  },
  {
    number: "02",
    category: "SOLUTIONS",
    title: "Advanced Tech Advisory",
    description:
      "We assess, streamline, and guide your technology choices—ensuring your systems scale as fast as your ambition.",
    image: All.img14,
  },
  {
    number: "03",
    category: "DEVELOPMENT",
    title: "Business Development",
    description:
      "Build smarter strategies, discover new opportunities, and turn your business goals into measurable growth.",
    image: All.img15,
  },
  {
    number: "04",
    category: "TESTING",
    title: "Strategic Analysis",
    description:
      "Evaluate performance, uncover challenges, and make confident decisions with data-driven insights.",
    image: All.img16,
  },
];


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


export default function Services() {
  return (
    <section className="w-full bg-[#F7F5F0] px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1280px]">

        {/* Section Heading */}
        <div className="mb-10">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-[#202823]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#202823]" />
            SERVICES
          </span>

          <h2 className="max-w-[760px] font-serif text-4xl leading-[1.15] tracking-tight text-[#19211E] sm:text-5xl">
            Expert consultation to help your business grow and achieve goals.
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.number}
              className="group overflow-hidden rounded-xl bg-white p-2.5 transition-shadow duration-300 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative h-[260px] overflow-hidden rounded-xl sm:h-[320px]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Category Badge */}
                <span className="absolute left-3 top-3 rounded-full bg-[#F0FF72] px-4 py-3 text-xs font-medium text-[#202823]">
                  {service.number} / {service.category}
                </span>
              </div>

              {/* Card Content */}
              <div className="flex flex-col gap-5 px-1 pb-2 pt-6 sm:flex-row sm:items-end sm:justify-between sm:px-1">
                <div className="max-w-[390px]">
                  <h3 className="mb-3 font-serif text-2xl leading-tight text-[#202823]">
                    {service.title}
                  </h3>

                  <p className="text-sm leading-6 text-[#666B68]">
                    {service.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    alert(`You selected ${service.title}`)
                  }
                  className="shrink-0 self-start rounded-xl bg-[#F1EFE6] px-5 py-3 text-sm font-medium text-[#202823] transition-colors duration-300 hover:bg-[#F0FF72] sm:self-end"
                >
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>





  );
}

