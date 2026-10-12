
import All from "../../assets/NexorImg"
const stats = [
  {
    number: "$2.4M",
    label: "Research budgets tracked in real time",
  },
  {
    number: "45%",
    label: "Research budgets tracked in real time",
  },
];

export default function CustomerStories() {
  return (
    <section className="bg-[#f5f4ef] px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-black" />
            Customers Stories
          </span>

          <h2 className="mx-auto mt-6 max-w-xl font-serif text-4xl leading-tight text-[#17201c] sm:text-5xl">
            Trusted by brands across industries
          </h2>
        </div>

        {/* Story card */}
        <div className="grid overflow-hidden rounded-2xl bg-[#101c18] p-4 text-white sm:p-6 lg:grid-cols-2 lg:gap-10 lg:p-5">
          <div className="min-h-[350px] overflow-hidden rounded-xl sm:min-h-[480px]">
            <img
              src={All.img22}
              alt="Consultants discussing business strategy"
              className="h-full min-h-[350px] w-full object-cover sm:min-h-[480px]"
            />
          </div>

          <div className="flex flex-col justify-center px-2 py-8 sm:px-6 lg:px-8 lg:py-12">
            <span className="text-4xl text-[#efff79]">”</span>

            <blockquote className="mt-2 max-w-lg text-lg font-semibold leading-8 sm:text-xl">
              “Working with them felt like being understood, then thoughtfully
              guided toward clarity.”
            </blockquote>

            <div className="mt-7">
              <p className="font-semibold">Emma Clark</p>
              <p className="mt-1 text-sm text-gray-300">
                Head of Operations, Klea
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat.number}
                  className="rounded-xl bg-[#263630] p-5 sm:p-4 lg:p-5"
                >
                  <h3 className="font-serif text-3xl sm:text-4xl">
                    <span className="text-[#efff79]">+</span>
                    {stat.number}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-gray-200">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}