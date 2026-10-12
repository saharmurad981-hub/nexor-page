import React from "react";

const avatars = [
  "photo-1500648767791-00dcc994a43e",
  "photo-1506794778202-cad84cf45f1d",
  "photo-1507003211169-0a1dd7228f2d",
  "photo-1519085360753-af0119f7cbe7",
  "photo-1504593811423-6dd665756598",
];

function RatingAvatars() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="flex -space-x-3">
        {avatars.map((avatar, index) => (
          <img
            key={avatar}
            src={`https://images.unsplash.com/${avatar}?auto=format&fit=crop&w=100&h=100&q=80`}
            alt={`Client ${index + 1}`}
            className="h-12 w-12 rounded-full border-2 border-[#f5f4ef] object-cover"
          />
        ))}
      </div>

      <p className="text-sm text-[#343a35]">
        <span className="mr-2">—</span>
        Rated 4.8/5
      </p>
    </div>
  );
}

function ImprovementsCard() {
  return (
    <article className="flex min-h-[480px] flex-col rounded-2xl bg-white p-6 sm:p-8">
      <p className="text-sm text-gray-600">Average Improvements</p>

      <h3 className="mt-5 font-serif text-5xl text-[#17201c]">
        121%
      </h3>

      {/* Purple analytics bars */}
      <div className="mt-16 flex h-14 items-end gap-1.5 overflow-hidden">
        {Array.from({ length: 23 }).map((_, index) => (
          <div
            key={index}
            className={`h-full min-w-1 flex-1 ${
              index === 0 ? "bg-[#c9b9ff]" : "bg-[#f0edfc]"
            }`}
          />
        ))}
      </div>

      <p className="mt-auto pt-12 text-sm leading-7 text-gray-500">
        Users can evaluate campaign results more quickly thanks to clearer
        analytics and structured reporting.
      </p>
    </article>
  );
}

function GrowthCard() {
  return (
    <article className="flex min-h-[480px] flex-col overflow-hidden rounded-2xl bg-white pt-6 sm:pt-8">
      <div className="px-6 sm:px-8">
        <p className="text-sm text-gray-600">Growth Increase</p>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <h3 className="font-serif text-5xl text-[#17201c]">99%</h3>

          <span className="rounded-full bg-[#17201c] px-3 py-1 text-sm font-semibold text-[#efff79]">
            +42%
          </span>
        </div>
      </div>

      {/* Growth chart */}
      <div className="mt-10">
        <div className="pr-6 text-right text-sm text-gray-500">
          Yearly
        </div>

        <svg
          viewBox="0 0 420 155"
          className="mt-2 w-full"
          fill="none"
          preserveAspectRatio="none"
          aria-label="Upward growth chart"
          role="img"
        >
          <defs>
            <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d5efa0" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#d5efa0" stopOpacity="0" />
            </linearGradient>
          </defs>

          <path
            d="M0 110 C35 95 55 120 80 126 S120 145 132 85 S165 30 192 40 S220 108 253 94 S284 10 316 12 S351 86 375 42 S400 0 420 2 L420 155 L0 155 Z"
            fill="url(#growthFill)"
          />

          <path
            d="M0 110 C35 95 55 120 80 126 S120 145 132 85 S165 30 192 40 S220 108 253 94 S284 10 316 12 S351 86 375 42 S400 0 420 2"
            stroke="#b8dc75"
            strokeWidth="2.5"
          />

          <circle
            cx="192"
            cy="40"
            r="5"
            fill="white"
            stroke="#b8dc75"
            strokeWidth="3"
          />
        </svg>
      </div>

      <p className="mt-auto px-6 pb-6 pt-8 text-sm leading-7 text-gray-500 sm:px-8 sm:pb-8">
        A unified workspace consolidates analytics, offers, and performance
        tasks.
      </p>
    </article>
  );
}

function TestimonialCard() {
  return (
    <article
      className="relative flex min-h-[480px] items-center justify-center overflow-hidden rounded-2xl p-6 sm:p-8"
      style={{
        backgroundColor: "#348800",
        backgroundImage:
          "repeating-linear-gradient(125deg, transparent 0px, transparent 24px, rgba(191,255,0,0.75) 29px, rgba(191,255,0,0.75) 34px, transparent 39px, transparent 64px)",
      }}
    >
      <div className="flex min-h-[350px] w-full flex-col rounded-2xl bg-[#f5f4ef] p-6 sm:p-7">
        <div className="flex gap-0.5 text-lg text-[#17201c]" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index}>★</span>
          ))}
        </div>

        <blockquote className="mt-5 text-base leading-6 text-[#343a35]">
          “Nexor replaced three tools and finally gave our teams a shared
          understanding of what’s happening.”
        </blockquote>

        <div className="mt-auto pt-12">
          <h4 className="font-semibold text-[#17201c]">Emma Clark</h4>
          <p className="mt-2 text-sm leading-6 text-gray-500">
            Head of Operations, Klea
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Results() {
  return (
    <section className="bg-[#f5f4ef] px-5 py-16 text-[#17201c] sm:px-8 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-[#17201c]" />
            Result
          </span>

          <h2 className="mt-7 max-w-5xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Measurable product impact driven by better decision-making and
            streamlined workflows
          </h2>

          <p className="mt-8 max-w-3xl text-sm leading-6 text-gray-500 sm:text-base sm:leading-7">
            We embed with your team to diagnose what’s slowing you down,
            build the systems that unlock momentum, and stay until the work
            is done. From strategy sprints to operational redesigns, we
            bring clarity to complex problems and deliver outcomes you can
            measure.
          </p>

          <div className="mt-10">
            <RatingAvatars />
          </div>
        </div>

        {/* Three result cards */}
        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          <ImprovementsCard />
          <GrowthCard />
          <TestimonialCard />
        </div>
      </div>
    </section>
  );
}