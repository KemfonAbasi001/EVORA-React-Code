// import Link from "next/link";
// import Image from "next/image";

// import one from '../../app/imgoneg.png'
// import two from '../../app/imgtwo.png'
// // import three from '../../app/imgthree.png'
// import four from '../../app/imgfourr.png'

// import neww from '../../app/imgten.png'

// import { ChevronRight, CircleGauge, MoveRight, Zap } from "lucide-react";




// const vehicles = [
//   { name: "Evora City", type: "Compact EV", image: one, price: "$12,650", fig: "120", amount: "40" },
//   { name: "Evora Keke", type: "Electric Three Wheeler", image: two, price: "$12,650", fig: "80", amount: "50" },
//   { name: "Evora Cab", type: "24/7 EV", image: four, price: "$12,650", fig: "420", amount: "80" },
//   // { name: "Evora Pro", type: "Crossover EV", image: three, price: "$12,650", fig: "36", amount: "120" },
// ];

// function VehicleCard({ name, type, image, price, fig, amount, selfHeight }) {
//   return (
//     <div
//       className={`rounded-lg border border-solid border-[#9ca3af] hover:border-[#16a34a] py-7 px-6 ${
//         selfHeight ? "self-start h-fit" : ""
//       }`}
//     >
//       <div className=" flex flex-col gap-3">

//         <Image src={image} alt={name} className="w-full" />
        
//         <span className="">
//           <h1 className="font-medium text-[26px] lg:text-[20px] text-[#111827]">{name}</h1>
//           <p className="lg:text-[12px] text-[15.7px] text-medium text-[#374151]">{type}</p>
//         </span>
        
//         <p className="text-[#111827] text-[18.7px] lg:text-[13px] font-medium">From <span className="font-bold">{price}</span></p>
//       </div>
//     </div>
//   );
// }


// function OurVehicles() {
//   return(
//     <section className="w-full flex justify-center items-center py-15 bg-[#f9fafb]">
//       <div className="w-[95%] flex flex-col gap-9">
//         <span>
//           <h1 className="font-medium text-[27px] lg:text-[32px] text-[#111827]">Our Vehicles</h1>
//           <p className="lg:text-[14px] text-[15px] text-[#374151]">Electric vehicles for every lifestyle and business.</p>
//         </span>

//         <div className="flex flex-col gap-10">
//           <div className="grid grid-cols-4 gap-3 w-full">
//             <button className="lg:text-[14px] text-[15px] py-1.25 px-4 rounded-2xl border border-[#16a34a]">All Vehicles</button>
//             <button className="lg:text-[14px] text-[15px] py-1.25 px-4 rounded-2xl border border-[#9ca3af]">Three Wheeler</button>
//             <button className="lg:text-[14px] text-[15px] py-1.25 px-4 rounded-2xl border border-[#9ca3af]">Compact</button>
//             <button className="lg:text-[14px] text-[15px] py-1.25 px-4 rounded-2xl border border-[#9ca3af]">Crossover</button>
//           </div>
//           <div className="grid girf-cols-1 lg:grid-cols-3 gap-5 items-stretch">
//             {vehicles.map((vehicle, index) => (
//               <VehicleCard
//                 key={index}
//                 {...vehicle}
//                 selfHeight={index === 0 || index === 2}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function CompareVehicles() {
//   return(
//     <section className="w-full flex justify-center items-center py-20 bg-[#f9fafb]">
//       <div className="w-[95%] flex justify-between bg-[#e5e7eb] py-8 rounded-2xl px-12 items-center">
//         <div className="flex gap-3 flex-col">
//           <h1 className="text-[18px] font-semibold">Compare Models</h1>
//           <p className="text-[15px]">Find the perfect EV for your needs</p>
//           <button className="bg-[#10b981] py-2.75 w-fit px-5 rounded-[6px] text-[15px] lg:text-[14px] text-[#f9fafb] font-medium">
//             Compare model
//           </button>
//         </div>
//         <Image
//           src={neww}
//           alt="Electric vehicle"
//           className="w-[90%] sm:w-[65%] lg:w-[30%]"
//         />
//       </div>
//     </section>
//   );
// }


// function TeamSection() {
//   return <section><h2>Our Team</h2></section>;
// }

// export default function About() {
//   return (
//     <>
//       <OurVehicles />
//       <CompareVehicles />
//     </>
//   );
// }




"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import one from '../../app/imgoneg.png'
import two from '../../app/imgtwo.png'
// import three from '../../app/imgthree.png'
import four from '../../app/imgfourr.png'

import CompareVehicles from "@/components/layout/CTA -Section";

import neww from '../../app/imgten.png'

import { ChevronRight, CircleGauge, MoveRight, Zap } from "lucide-react";


const vehicles = [
  { name: "Evora City", type: "Compact EV", image: one, price: "$12,650", fig: "120", amount: "40" },
  { name: "Evora Keke", type: "Electric Three Wheeler", image: two, price: "$12,650", fig: "80", amount: "50" },
  { name: "Evora Cab", type: "24/7 EV", image: four, price: "$12,650", fig: "420", amount: "80" },
  // { name: "Evora Pro", type: "Crossover EV", image: three, price: "$12,650", fig: "36", amount: "120" },
];

// Maps each filter button label to a keyword to match against a vehicle's `type`
const categoryKeywords = {
  "All Vehicles": null,
  "Three Wheeler": "Three Wheeler",
  "Compact": "Compact",
  "Crossover": "Crossover",
};

function VehicleCard({ name, type, image, price, fig, amount, selfHeight }) {
  return (
    <div
      className={`rounded-lg border border-solid border-[#9ca3af] hover:border-[#16a34a] py-7 px-6 ${
        selfHeight ? "self-start h-fit" : ""
      }`}
    >
      <div className=" flex flex-col gap-3">

        <Image src={image} alt={name} className="w-full" />

        <span className="">
          <h1 className="font-medium text-[26px] lg:text-[20px] text-[#111827]">{name}</h1>
          <p className="lg:text-[12px] text-[15.7px] text-medium text-[#374151]">{type}</p>
        </span>


        <span className="flex justify-between mt-2">
        <p className="text-[#111827] text-[18.7px] lg:text-[15px] font-medium">From <span className="font-bold">{price}</span></p>
        <a className="text-[#16a34a] text-[15.8px] lg:text-[13px] font-medium flex justify-center items-center  gap-1">View Details <MoveRight className="w-3 h-4" /></a>
        </span>
      </div>
    </div>
  );
}


function OurVehicles() {
  const categories = ["All Vehicles", "Three Wheeler", "Compact", "Crossover"];
  const [activeCategory, setActiveCategory] = useState("All Vehicles");

  const filteredVehicles =
    activeCategory === "All Vehicles"
      ? vehicles
      : vehicles.filter((vehicle) =>
          vehicle.type.toLowerCase().includes(categoryKeywords[activeCategory].toLowerCase())
        );

  return(
    <section className="w-full flex justify-center items-center py-8 lg:py-10 bg-[#f9fafb]">
      <div className="w-[95%] flex flex-col gap-9">
        <div className="flex flex-col gap-10">
          <div className="flex lg:grid lg:grid-cols-4 gap-3 w-full lg:w-fit overflow-x-auto pb-2 lg:pb-0 -mx-1 px-1 lg:mx-0 lg:px-0 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`lg:text-[14px] text-[15px] py-1.25 px-4 rounded-2xl border whitespace-nowrap shrink-0 transition-colors ${
                  activeCategory === category
                    ? "border-[#16a34a] text-[#111827]"
                    : "border-[#9ca3af] text-[#111827]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
            {filteredVehicles.length > 0 ? (
              filteredVehicles.map((vehicle, index) => (
                <VehicleCard
                  key={index}
                  {...vehicle}
                  selfHeight={index === 0 || index === 2}
                />
              ))
            ) : (
              <p className="text-[#374151] text-[14px] col-span-full">No vehicles found in this category.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


function CompLanding() {
  return(
    <section className="w-full flex justify-center items-center py-30 bg-[#f9fafb]" id="two">
      <div className="w-[95%]">
         <span className="w-full bg-amber-700">
            <h1 className="font-medium text-[27px] lg:text-[45px] text-[#111827]">Our Vehicles</h1>
            <p className="lg:text-[17px] text-[15px] text-[#374151] w-[40%]">Electric vehicles for every lifestyle and business.</p>
          </span>
      </div>
    </section>
  );
}



function TeamSection() {
  return <section><h2>Our Team</h2></section>;
}

export default function About() {
  return (
    <>
      <CompLanding/>
      <OurVehicles />
      {/* <CompareVehicles /> */}
    </>
  );
}