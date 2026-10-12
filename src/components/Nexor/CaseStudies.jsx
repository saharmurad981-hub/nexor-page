
import All from "../../assets/NexorImg"
const projects = [
  {
    name: "Meridian",
    title: "How we increased Meridian revenue by $1.2M in 6 months",
    image: All.img18,
    logo: "✣",
    layout: "md:col-span-5",
  },
  {
    name: "Horizon",
    title: "They didn't just consult — they co-created. Every meeting left us lighter.",
    image:
      All.img19,
    logo: "◩",
    layout: "md:col-span-7",
  },
  {
    name: "Summit",
    title: "Every step felt understood, supported, and confidently directed.",
    image:
      All.img20,
    logo: "✳",
    layout: "md:col-span-7",
  },
  {
    name: "Vista",
    title: "Working with them felt like being heard, then gently guided toward clarity.",
    image:
      All.img21,
    logo: "◈",
    layout: "md:col-span-5",
  },
];

function ProjectCard({ project }) {
  return (
    <article
      className={`group relative isolate min-h-[390px] overflow-hidden rounded-2xl ${project.layout}`}
    >
      {/* Background image */}
      <img
        src={project.image}
        alt={`${project.name} case study`}
        className="absolute inset-0 -z-20 h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/15 to-black/25" />

      {/* Project logo */}
      <div className="absolute left-6 top-6 flex items-center gap-2 text-lg font-semibold text-white">
        <span className="text-2xl">{project.logo}</span>
        <span>{project.name}</span>
      </div>

      {/* Bottom content */}
      <div className="absolute inset-x-5 bottom-5 flex flex-col gap-5 sm:inset-x-6 sm:bottom-6 md:flex-row md:items-end md:justify-between">
        <h3 className="max-w-md font-serif text-2xl leading-tight text-white sm:text-3xl">
          {project.title}
        </h3>

        <a
          href="#contact"
          className="w-fit shrink-0 rounded-xl bg-[#efff79] px-5 py-3 text-sm font-semibold text-[#172019] transition duration-300 hover:bg-white"
        >
          Read Full Story
        </a>
      </div>
    </article>
  );
}

export default function CaseStudies() {
  return (
    <section className="bg-[#f5f4ef] px-5 py-16 text-[#17201c] sm:px-8 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-12 text-center sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-[#17201c]" />
            Case Studies
          </span>

          <h2 className="mx-auto mt-6 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
            We help companies achieve outcomes
          </h2>
        </div>

        {/* Asymmetrical project grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}