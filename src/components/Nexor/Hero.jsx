

import Button from "./Button";

export default function Hero({
  label,
  labell,
  title,
  description,
  image,
}) {
  return (
    <section className="mt-10 px-4 sm:mt-14 sm:px-8 lg:mt-20 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 lg:flex-row lg:gap-12">

        {/* Left Content */}
        <div className="w-full lg:w-1/2">

          <Button
            text={label}
            bgColor="bg-white"
            textColor="text-black"
            hoverColor="hover:bg-gray-100"
            padding="px-4 py-3"
            rounded="rounded-3xl"
          />

          <h1 className="mt-6 w-full font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-5 w-full max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            {description}
          </p>

          <div className="mt-6">
            <Button
              text={labell}
              bgColor="bg-black"
              textColor="text-white"
              hoverColor="hover:bg-gray-700"
              padding="px-5 py-3"
              rounded="rounded-xl"
            />
          </div>

        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={image}
            alt={title}
            className="h-auto max-h-[600px] w-full rounded-2xl object-cover sm:rounded-3xl"
          />
        </div>

      </div>
    </section>
  );
}
