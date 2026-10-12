import All from "../../assets/NexorImg";

const logos = [
  { name: "logo1", image: All.logo1 },
  { name: "logo2", image: All.logo2 },
  { name: "logo3", image: All.logo3 },
  { name: "logo4", image: All.logo4 },
  { name: "logo5", image: All.logo5 },
  { name: "logo6", image: All.logo6 },
  { name: "logo7", image: All.logo7 },
  { name: "logo8", image: All.logo8 },
  { name: "logo9", image: All.logo9 },
  { name: "logo10", image: All.logo10 },
  { name: "logo11", image: All.logo11 },
];

export default function InfinteLogo() {
  return (
    <section className="w-full overflow-hidden py-12">
      <p className="mb-8 text-center text-sm text-gray-500">
        Trusted by innovative companies
      </p>

      <div className="logo-track flex w-max items-center gap-16">
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={`${logo.name}-${index}`}
            src={logo.image}
            alt={logo.name}
            className="h-10 w-auto max-w-none shrink-0 object-contain  grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
          />
        ))}
      </div>
    </section>
  );
}