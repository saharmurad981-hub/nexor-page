import All from "../../assets/NexorImg"
import Button from './Button'


 const features = [
    {
      title: "Strategic Clarity",
      description:
        "Turning complex challenges into actionable roadmaps",
      icon: "✧",
      color: "bg-[#F0EDE5]",
    },
    {
      title: "Adaptive Growth",
      description:
        "Embracing change as a catalyst for progress, unlocking",
      icon: "↗",
      color: "bg-[#E4DEFF]",
    },
    {
      title: "Unified Purpose",
      description:
        "Bringing diverse perspectives together to build solutions",
      icon: "⚙",
      color: "bg-[#F0EDE5]",
    },
  ];

export default function About() {
  return (
    <div>
    <div className='flex justify-center'>
        <Button 
                 text="About Us"
                 bgColor="bg-white"
                 textColor="text-black"
                 hoverColor="hover:bg-black-700"
                 padding=" px-4 py-3"
                 rounded="rounded-3xl"
                />  
    </div>

<div className='text-center flex justify-center '>
     <p className='w-190 font-bold text-3xl '>A global consulting partner dedicated to building smarter
         solutions. We help startups make smarter decisions and grow with clarity.
         <br></br>
         <small className=' text-center   text-xl text-gray-500  '>We are a trusted b
  usiness consulting firm dedicated to helping organizations unlock their full potential.</small>
         </p>
</div>
<div className='flex justify-center mt-4'>
    <Button text="Learn More"
      bgColor="bg-black"
      textColor="text-white"
      hoverColor="hover:bg-black-700"
      padding=" px-4 py-3"
      rounded="rounded-xl"/>

    </div>



{/* cards  */}

    <section className="w-full bg-[#F7F5F0] px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1110px]">

        {/* Top Cards */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">

          {/* Rating Card */}
          <div
            className="relative flex min-h-[400px] flex-col justify-between overflow-hidden rounded-xl bg-cover bg-center p-7 text-white sm:p-8"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(5,25,13,0.97), rgba(28,65,0,0.42)), url(${All.img4})`,
            }}
          >
            {/* Logo Icon */}
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-lime-600/80 text-4xl shadow-lg">
              ✺
            </div>

            <div className="relative z-10 mt-10">
              <h2 className="mb-5 font-serif text-5xl">
                96 %
              </h2>

              <h3 className="mb-4 text-sm font-semibold">
                Positive rating on TrustPilot
              </h3>

              <p className="max-w-[370px] text-sm leading-6 text-white/85">
                A clear view of how structured execution translates
                into sustainable, measurable growth across revenue,
                teams, and markets.
              </p>
            </div>
          </div>

          {/* Experience Card */}
          <div className="relative min-h-[400px] overflow-hidden rounded-xl">
            <img
              src={All.img12}
              alt="Nexor team working together"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute bottom-3 right-3 flex h-[170px] w-[195px] flex-col justify-between rounded-xl bg-white p-4 sm:bottom-3 sm:right-3">
              <h2 className="font-serif text-4xl text-[#202823]">
                12 +
              </h2>

              <p className="text-sm text-gray-500">
                Years of Experience
              </p>
            </div>
          </div>
        </div>

        {/* Feature Items */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start gap-5"
            >
              <div
                className={`flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-xl ${feature.color}`}
              >
                <span className="text-2xl text-[#222820]">
                  {feature.icon}
                </span>
              </div>

              <div>
                <h3 className="mb-2 text-[15px] font-medium text-[#202823]">
                  {feature.title}
                </h3>

                <p className="max-w-[250px] text-sm leading-6 text-gray-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  


<hr className="mt-18  text-gray-400"></hr>


    </div>
  )
}
