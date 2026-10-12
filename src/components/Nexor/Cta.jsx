import All from "../../assets/NexorImg"

export default function CTA() {
  return (
    <section className="relative flex min-h-[480px] items-center justify-center overflow-hidden px-5 py-24 text-center sm:min-h-[560px]">
      {/* Background image */}
      <img
        src={All.img26}
        alt="Consulting team working together"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-2xl text-white">
        <p className="text-xs font-semibold uppercase tracking-wider sm:text-sm">
          Nexor® is a best agency based in UK
        </p>

        <h2 className="mt-7 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
          Ready to take a consultancy with us!
        </h2>

        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#efff79] px-6 py-4 text-sm font-semibold text-[#17201c] transition duration-300 hover:-translate-y-1 hover:bg-white"
        >
          Book Free Meeting
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}