

// export default function FeatuerCard({img1 , img2}) {
//   return (
//     <div className='flex justify-between mt-7 '>
//         <div>
//         <img src={img1} alt="ppl" className="w-[80%] " />
//         </div>

//         <div>
//             <img src={img2} alt="green" className="w-full lg:w-1/2"/>
//         </div>

      
//     </div>
//   )
// }

export default function FeatuerCard({ img1, img2 }) {
  return (
    <div className="mt-7 flex flex-col items-center gap-5 px-4 sm:px-8 lg:flex-row lg:items-start lg:justify-between lg:gap-40 lg:px-0">

      {/* First Image */}
      <div className="w-full lg:w-[80%]">
        <img
          src={img1}
          alt="Feature"
          className="h-auto w-full rounded-2xl object-cover"
        />
      </div>

      {/* Second Image */}
  
<div className="w-full overflow-hidden rounded-2xl">
  <img
    src={img2}
    alt="Green abstract background"
    className="h-[200px] w-[90%] rounded-2xl object-cover sm:h-[380px] lg:h-[220px] "
  />
</div>
     

    </div>
  );
}