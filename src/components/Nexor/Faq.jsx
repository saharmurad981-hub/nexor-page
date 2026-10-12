import React, { useState } from "react";

const questions = [
  {
    question: "What does a typical business consultation involve?",
    answer:
      "Every engagement begins with a thorough assessment of your current operations, market position, and growth objectives. From there, we develop a tailored strategy that addresses your most pressing challenges, whether that means streamlining workflows, entering new markets, or improving profitability. You'll receive clear milestones.",
  },
  {
    question: "How long does an engagement usually last?",
    answer:
      "The timeline depends on your goals and the scope of the project. Some consultations take a few weeks, while more comprehensive engagements may continue for several months.",
  },
  {
    question: "What is the average duration of a consulting project?",
    answer:
      "A typical project can take between four and twelve weeks. After understanding your needs, we establish a timeline with clear deliverables and milestones.",
  },
  {
    question: "What are some popular engagement ring styles?",
    answer:
      "Our focus is business consulting, so we help organizations choose strategies and solutions that suit their goals, industry, and resources.",
  },
  {
    question: "How much should I budget for a consulting project?",
    answer:
      "The budget depends on the project's complexity, duration, and requirements. Contact our team to discuss your goals and receive a tailored estimate.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#f5f4ef] px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-3xl">
        {/* Heading */}
        <div className="mb-12 text-center sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-black" />
            FAQ's
          </span>

          <h2 className="mt-6 font-serif text-4xl text-[#17201c] sm:text-5xl">
            Questions? Answers
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                  isOpen
                    ? "border-transparent bg-white"
                    : "border-[#e6e4dd] bg-transparent"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                >
                  <span className="text-sm font-medium leading-6 text-[#242b27] sm:text-base">
                    {item.question}
                  </span>

                  <span className="shrink-0 text-2xl font-light text-[#17201c]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6">
                    <p className="text-sm leading-6 text-gray-500 sm:leading-7">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}