"use client";

import { useState } from "react";
import Image from "next/image";

import one from '../../public/imgoneg.png'
import two from '../../public/imgtwo.png'
import four from '../../public/imgfourr.png'
import five from '../../public/hypeone.png'
import six from '../../public/hypetwoo.png'
import seven from '../../public/hypethree.png'
import eight from '../../public/hypefour.png'
import nine from '../../public/hyperone.png'
import ten from '../../public/hypertwo.png'
import eleven from '../../public/hyperthree.png'
import twelve from '../../public/hyperfour.png'
import thirteen from '../../public/hyperfive.png'
import fourteen from '../../public/hypersix.png'
import fifteen from '../../public/hyperseven.png'

const vehicles = [
  { name: "Evora Crossover", type: "Crossover EV", image: one, price: "$18,990", fig: "300", amount: "60" },
  { name: "Evora Keke", type: "Three Wheeler", image: two, price: "$6,490", fig: "80", amount: "7" },
  { name: "Evora City", type: "Compact EV", image: four, price: "$12,650", fig: "120", amount: "15" },
  { name: "Evora GT", type: "Performance EV", image: five, price: "$68,990", fig: "350", amount: "90" },
  { name: "Evora Racer", type: "Performance EV", image: six, price: "$72,990", fig: "360", amount: "95" },
  { name: "Evora Apex", type: "Performance EV", image: nine, price: "$75,990", fig: "370", amount: "100" },
  { name: "Evora Transit", type: "Bus", image: seven, price: "$120,000", fig: "250", amount: "150" },
  { name: "Evora Hauler", type: "Truck", image: eight, price: "$95,000", fig: "280", amount: "200" },
  { name: "Evora Sedan", type: "Crossover EV", image: thirteen, price: "$24,990", fig: "310", amount: "65" },
  { name: "Evora Grand", type: "Crossover EV", image: ten, price: "$32,990", fig: "320", amount: "75" },
  { name: "Evora Van", type: "Van", image: eleven, price: "$28,500", fig: "200", amount: "50" },
  { name: "Evora Pickup", type: "Pickup", image: twelve, price: "$34,990", fig: "290", amount: "70" },
  { name: "Evora Sport Bike", type: "Motorcycle", image: fourteen, price: "$9,990", fig: "150", amount: "10" },
  { name: "Evora Scooter", type: "Scooter", image: fifteen, price: "$3,490", fig: "60", amount: "3" },
];

const categories = ["All Vehicles", "Cars", "Three Wheeler", "Commercial", "Two Wheeler"];

const categoryKeywords = {
  "All Vehicles": null,
  "Cars": ["Compact EV", "Crossover EV", "Performance EV"],
  "Three Wheeler": ["Three Wheeler"],
  "Commercial": ["Bus", "Truck", "Van", "Pickup"],
  "Two Wheeler": ["Motorcycle", "Scooter"],
};

function VehicleCard({ name, type, image, price }) {
  return (
    <div className="h-full flex flex-col rounded-lg border border-solid border-[#9ca3af] hover:border-[#16a34a] py-7 px-6">
      <div className="relative w-full h-[180px] mb-4 lg:mb-3 ">
        <Image src={image} alt={name} fill className="object-contain" />
      </div>

      <span className="flex-1">
        <h1 className="font-medium text-[24px] lg:text-[21px] text-[#111827]">{name}</h1>
        <p className="lg:text-[13px] text-[19px] text-medium text-[#374151]">{type}</p>
      </span>

      <span className="flex justify-between mt-2">
        <p className="text-[#111827] text-[20px] lg:text-[16px] font-medium">
          From <span className="font-semibold">{price}</span>
        </p>
        <a href="" className="text-[#16a34a] text-[18px] lg:text-[14px] font-medium flex justify-center items-center gap-1">
          View Details
          <img
            className="lg:w-4 w-6"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+0lEQVR4nO3YP04CURDH8VfpBZjZC1BRWlpbvBn+dDQSCpELcYSd2cp7WBEKGg5ARULtHwqVrInRBCwMCTLk90mm3nyTzex7mxIAAAAAwKkh02s2mX1O2b5JUZHLgl0/6iGTTWG5myIi0+VXSOgYruSWXd52YirppGjI5G5fDHu7l6JBTLSYIuICQMxfUKlDMln/fMAxh1xfyDSnQ7Qe+hdk8vxfEfwd83rQd6Y5yZfk8hQ+pMaWB2SyCv1qHVPD8yj80eXXCAu0fgvTe0ScAnYZhz9n8TlEUKlDNn0PvZ3O6qpLrvPwEbWGd67Y5ZFdp6F/BwEAAABACmcLFyT5NNBocPwAAAAASUVORK5CYII=" 
            alt="right--v1"
          />
        </a>
      </span>
    </div>
  );
}

function OurVehicles() {
  const [activeCategory, setActiveCategory] = useState("All Vehicles");

  const filteredVehicles =
    activeCategory === "All Vehicles"
      ? vehicles
      : vehicles.filter((vehicle) => categoryKeywords[activeCategory].includes(vehicle.type));

  return (
    <section className="w-full flex justify-center items-center py-8 lg:py-10 bg-[#f9fafb]">
      <div className="w-[95%] flex flex-col gap-9">
        <div className="flex flex-col gap-10">
          <div className="flex lg:grid lg:grid-cols-5 gap-3 w-full lg:w-fit overflow-x-auto pb-2 lg:pb-0 -mx-1 px-1 lg:mx-0 lg:px-0 scrollbar-hide">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
            {filteredVehicles.length > 0 ? (
              filteredVehicles.map((vehicle, index) => (
                <VehicleCard key={index} {...vehicle} />
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
  return (
    <section className="w-full flex justify-center items-center py-30 bg-[#f9fafb]" id="two">
      <div className="w-[95%]">
        <h1 className="font-medium text-[34px] lg:text-[45px] text-[#111827]">Our Vehicles</h1>
        <p className="lg:text-[17px] text-[17px] text-[#374151] lg:w-[40%]">Electric vehicles for every lifestyle and business.</p>
      </div>
    </section>
  );
}

export default function Vehicles() {
  return (
    <>
      <CompLanding />
      <OurVehicles />
    </>
  );
}