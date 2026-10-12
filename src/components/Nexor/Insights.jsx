import All from "../../assets/NexorImg";
const articles = [
  {
    image: All.img23,
    date: "Aug 9, 2026",
    category: "PRODUCT & UPDATES",
    title: "Five signs your business is ready to scale and how to prepare",
  },
  {
    image:
      All.img24,
    date: "Aug 9, 2026",
    category: "OPS & STRATEGY",
    title: "How to build a growth strategy that survives market uncertainty",
  },
  {
    image:
      All.img25,
    date: "Aug 9, 2026",
    category: "New Product Launches",
    title: "Top 10 business strategy books every company should read",
  },
];

function ArticleCard({ article }) {
  return (
    <article className="group min-w-0">
      <a href="#contact" className="block overflow-hidden rounded-xl">
        <img
          src={article.image}
          alt={article.title}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />
      </a>

      <div className="mt-5 flex flex-wrap items-center gap-3 text-xs sm:text-sm">
        <span className="text-gray-500">{article.date}</span>

        <span className="rounded-md bg-[#eeece4] px-2.5 py-2 text-xs text-[#343a35]">
          {article.category}
        </span>
      </div>

      <h3 className="mt-4 text-base font-semibold leading-7 text-[#17201c] transition group-hover:text-gray-500 sm:text-lg">
        <a href="#contact">{article.title}</a>
      </h3>
    </article>
  );
}

export default function Insights() {
  return (
    <section className="bg-[#f5f4ef] px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-black" />
            Insights
          </span>

          <h2 className="mt-6 font-serif text-4xl text-[#17201c] sm:text-5xl">
            Insights from the Nexor
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {articles.map((article) => (
            <ArticleCard key={article.title} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}