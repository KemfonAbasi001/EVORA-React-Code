// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// import neww from '../../app/houseone.png'
// import newww from '../../app/housetwo.png'
// import newwww from '../../app/housethree.png'
// import newwwww from '../../app/housefour.png'

// function Name() {
//     return(
//         <section className="w-full flex justify-center items-center py-20 bg-[#f9fafb]">
//             <div className="w-[95%] flex flex-col gap-6 ">
//                 <div className="w-full flex justify-between">
//                     <span>
//                         <h1 className="font-medium text-[25px] text-[#111827]">Smart Charging for Every Need</h1>
//                         <p className="text-[16px] text-normal text-[#374151]">Reliable, scalable and intelligent charging solutions.</p>
//                     </span>
//                     <a href="" className="text-[15px] text-[#10b981]">Explore All Solutions</a>
//                 </div>

//                 <div className="grid grid-cols-4 gap-5 py-4">
//                     <div className="rounded-lg overflow-hidden border-[#d1d5db] border">
//                         <div>
//                             <Image
//                                 src={neww}
//                                 alt="Electric vehicle"
//                                 className="w-[90%] sm:w-[65%] lg:w-full"
//                             />
//                         </div>
//                         <span className="flex flex-col gap-1 py-3 px-4 bg-[#d1d5db]">
//                             <h1 className="font-medium text-[16px] ">Workplace Charging</h1>
//                             <p className="text-[15px]">Convenient charging for employees and fleet vehicles.</p>
//                             <a href="" className="text-[15px] text-[#10b981]">Learn More</a>
//                         </span>
//                     </div>

//                     <div>
//                         <div>
//                             <Image
//                                 src={newww}
//                                 alt="Electric vehicle"
//                                 className="w-[90%] sm:w-[65%] lg:w-full"
//                             />
//                             <p className="bg-[#10b981] text-[#f9fafb] absolute top-3 text-[13px] lg:text-[10px] py-1.25 rounded-xl px-2.5 left-4 uppercase">tag</p>
//                         </div>
//                         <span className="flex flex-col gap-1 py-3 px-4">
//                             <h1 className="font-medium text-[16px] ">Public Charging</h1>
//                             <p>Accessible charging stations across the city.</p>
//                             <a href="">Learn More</a>
//                         </span>
//                     </div>

//                     <div>
//                         <div>
//                             <Image
//                                 src={newwww}
//                                 alt="Electric vehicle"
//                                 className="w-[90%] sm:w-[65%] lg:w-full"
//                             />
//                         </div>
//                         <span className="flex flex-col gap-1 py-3 px-4">
//                             <h1 className="font-medium text-[16px] ">Home Charging</h1>
//                             <p>Safe and fast charging right at home.</p>
//                             <a href="">Learn More</a>
//                         </span>
//                     </div>

//                     <div>
//                         <div>
//                             <Image
//                                 src={newwwww}
//                                 alt="Electric vehicle"
//                                 className="w-[90%] sm:w-[65%] lg:w-full"
//                             />
//                         </div>
//                         <span className="flex flex-col gap-1 py-3 px-4">
//                             <h1 className="font-medium text-[16px] ">Fleet Solutions</h1>
//                             <p>Scalable solutions to power your entire fleet.</p>
//                             <a href="">Learn More</a>
//                         </span>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default function Charge() {
//   return (
//     <>
//       <Name/>
//     </>
//   );
// }


"use client";

import Link from "next/link";
import Image from "next/image";

import workplaceImg from "../../app/houseone.png";
import publicImg from "../../app/housetwo.png";
import homeImg from "../../app/housethree.png";
import fleetImg from "../../app/housefour.png";

const solutions = [
  {
    image: workplaceImg,
    title: "Workplace Charging",
    desc: "Convenient charging for employees and fleet vehicles.",
    href: "/solutions/workplace",
  },
  {
    image: publicImg,
    title: "Public Charging",
    desc: "Accessible charging stations across the city.",
    href: "/solutions/public",
    tag: "New",
  },
  {
    image: homeImg,
    title: "Home Charging",
    desc: "Safe and fast charging right at home.",
    href: "/solutions/home",
  },
  {
    image: fleetImg,
    title: "Fleet Solutions",
    desc: "Scalable solutions to power your entire fleet.",
    href: "/solutions/fleet",
  },
];

function Name() {
  return (
    <section className="w-full flex justify-center items-center py-20 bg-[#f9fafb]">
      <div className="w-[95%] flex flex-col gap-6">
        <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3">
          <span>
            <h1 className="font-medium text-[25px] text-[#111827]">Smart Charging for Every Need</h1>
            <p className="text-[16px] text-normal text-[#374151]">
              Reliable, scalable and intelligent charging solutions.
            </p>
          </span>
          <Link href="/solutions" className="text-[15px] text-[#10b981]">
            Explore All Solutions
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-4">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="rounded-lg overflow-hidden border border-[#d1d5db] bg-white"
            >
              <div className="relative">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-48 object-cover"
                />
                {solution.tag && (
                  <p className="bg-[#10b981] text-[#f9fafb] absolute top-3 left-4 text-[10px] py-1 px-2.5 rounded-xl uppercase">
                    {solution.tag}
                  </p>
                )}
              </div>
              <span className="flex flex-col gap-1 py-3 px-4">
                <h1 className="font-medium text-[16px] text-[#111827]">{solution.title}</h1>
                <p className="text-[15px] text-[#374151]">{solution.desc}</p>
                <Link href={solution.href} className="text-[15px] text-[#10b981]">
                  Learn More
                </Link>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Charge() {
  return (
    <>
      <Name />
    </>
  );
}