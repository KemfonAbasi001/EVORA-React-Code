"use client";

import { useState } from "react";
import Image from "next/image";

import one from '../../public/imgoneg.png'
import two from '../../public/imgtwo.png'
import four from '../../public/imgfourr.png'
import { MoveRight } from "lucide-react";


const vehicles = [
  { name: "Evora City", type: "Compact EV", image: one, price: "$12,650", fig: "120", amount: "40" },
  { name: "Evora Keke", type: "Electric Three Wheeler", image: two, price: "$12,650", fig: "80", amount: "50" },
  { name: "Evora Cab", type: "24/7 EV", image: four, price: "$12,650", fig: "420", amount: "80" },
];

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
          <h1 className="font-medium text-[26px] lg:text-[21px] text-[#111827]">{name}</h1>
          <p className="lg:text-[13px] text-[15.7px] text-medium text-[#374151]">{type}</p>
        </span>


        <span className="flex justify-between mt-2">
        <p className="text-[#111827] text-[18.7px] lg:text-[16px] font-medium">From <span className="font-bold">{price}</span></p>
        <a href="" className="text-[#16a34a] text-[15.8px] lg:text-[14px] font-medium flex justify-center items-center gap-1">
          View Details
          <img className="w-4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+0lEQVR4nO3YP04CURDH8VfpBZjZC1BRWlpbvBn+dDQSCpELcYSd2cp7WBEKGg5ARULtHwqVrInRBCwMCTLk90mm3nyTzex7mxIAAAAAwKkh02s2mX1O2b5JUZHLgl0/6iGTTWG5myIi0+VXSOgYruSWXd52YirppGjI5G5fDHu7l6JBTLSYIuICQMxfUKlDMln/fMAxh1xfyDSnQ7Qe+hdk8vxfEfwd83rQd6Y5yZfk8hQ+pMaWB2SyCv1qHVPD8yj80eXXCAu0fgvTe0ScAnYZhz9n8TlEUKlDNn0PvZ3O6qpLrvPwEbWGd67Y5ZFdp6F/BwEAAABACmcLFyT5NNBocPwAAAAASUVORK5CYII=" alt="right--v1" />
        </a>
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
                className={`lg:text-[14px] text-[15px] py-1.25 px-4 rounded-2xl border-2 whitespace-nowrap shrink-0 transition-colors ${
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


export default function Vehicles() {
  return (
    <>
      <CompLanding/>
      <OurVehicles />
    </>
  );
}