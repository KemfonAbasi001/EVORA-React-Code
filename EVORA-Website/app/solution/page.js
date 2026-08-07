
"use client";

import Link from "next/link";
import Image from "next/image";

import workplaceImg from "../../public/solnone.png";
import publicImg from "../../public/solntwo.png";
import homeImg from "../../public/solnthree.png";
import fleetImg from "../../public/solnfour.png";

const solutions = [
  {
    image: workplaceImg,
    title: "EV Fleet Management",
    desc: "Complete fleet visibility, real-time tracking and smart analytics.",
    href: "/solutions/workplace",
    tag: "New",
  },
  {
    image: publicImg,
    title: "Last-Mile Delivery",
    desc: "Efficient electric solutions for faster and cleaner deliveries.",
    href: "/solutions/public",
    tag: "New",
  },
  {
    image: homeImg,
    title: "Charging Infrastructure",
    desc: "Scalable charging networks for businesses and public spaces.",
    href: "/solutions/home",
    tag: "New",
  },
  {
    image: fleetImg,
    title: "Sustainable Cities",
    desc: "Supporting cities in building a cleaner, healthier future.",
    href: "/solutions/fleet",
    tag: "New",
  },
];

function Name() {
  return (
    <section className="w-full flex justify-center items-center py-20 bg-[#f9fafb]">
      <div className="w-[95%] flex flex-col gap-2">
        <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3">
          <h1 className="font-medium text-[27px] text-[#111827]">Solutions Built for Impact</h1>
          <Link href="/solutions" className="text-[14px] font-medium text-[#16a34a] flex gap-1">
            Explore All Solutions
            <img className="w-4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+0lEQVR4nO3YP04CURDH8VfpBZjZC1BRWlpbvBn+dDQSCpELcYSd2cp7WBEKGg5ARULtHwqVrInRBCwMCTLk90mm3nyTzex7mxIAAAAAwKkh02s2mX1O2b5JUZHLgl0/6iGTTWG5myIi0+VXSOgYruSWXd52YirppGjI5G5fDHu7l6JBTLSYIuICQMxfUKlDMln/fMAxh1xfyDSnQ7Qe+hdk8vxfEfwd83rQd6Y5yZfk8hQ+pMaWB2SyCv1qHVPD8yj80eXXCAu0fgvTe0ScAnYZhz9n8TlEUKlDNn0PvZ3O6qpLrvPwEbWGd67Y5ZFdp6F/BwEAAABACmcLFyT5NNBocPwAAAAASUVORK5CYII=" alt="right--v1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-4">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="rounded-lg overflow-hidden border border-[#d1d5db] bg-white"
            >
              <div className="">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <span className="flex flex-col gap-1 py-3 px-4">
                <h1 className="font-medium text-[14px] text-[#111827]">{solution.title}</h1>
                <p className="text-[13px] text-[#374151]">{solution.desc}</p>
                <Link href={solution.href} className="text-[12px] font-medium text-[#16a34a] flex gap-1">
                  Learn More 
                  <img className="w-4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+0lEQVR4nO3YP04CURDH8VfpBZjZC1BRWlpbvBn+dDQSCpELcYSd2cp7WBEKGg5ARULtHwqVrInRBCwMCTLk90mm3nyTzex7mxIAAAAAwKkh02s2mX1O2b5JUZHLgl0/6iGTTWG5myIi0+VXSOgYruSWXd52YirppGjI5G5fDHu7l6JBTLSYIuICQMxfUKlDMln/fMAxh1xfyDSnQ7Qe+hdk8vxfEfwd83rQd6Y5yZfk8hQ+pMaWB2SyCv1qHVPD8yj80eXXCAu0fgvTe0ScAnYZhz9n8TlEUKlDNn0PvZ3O6qpLrvPwEbWGd67Y5ZFdp6F/BwEAAABACmcLFyT5NNBocPwAAAAASUVORK5CYII=" alt="right--v1" />
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