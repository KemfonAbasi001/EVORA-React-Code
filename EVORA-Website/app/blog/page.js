"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import gtwo from '../../public/gtwo.png'
import gthree from '../../public/gthree.png'
import gfour from '../../public/gfour.png'
import gfive from '../../public/gfive.png'
import gsix from '../../public/gsix.png'
import gseven from '../../public/gseven.png'
import geight from '../../public/geight.png'
import gnine from '../../public/gnine.png'
import gten from '../../public/gten.png'
import gtwelve from '../../public/gtwelve.png'
import gthirteen from '../../public/gthirteen.png'

import CompareVehicles from "@/components/layout/CTA -Section";

import { MoveRight, Search, Clock2 } from "lucide-react";



const categories = ["All", "Technology", "Charging", "Vehicles", "Company", "Sustainability", "Innovation", "Industry News"];

const blogPosts = [
  { image: gtwo, tag: "Technology", title: "Solid-State Batteries: What Makes Them a Game Changer?", readTime: "6 min read", date: "May 20, 2026" },
  { image: gthree, tag: "Charging", title: "Ultra-Fast Charging Networks Expanding Across Europe", readTime: "5 min read", date: "May 18, 2026" },
  { image: gfour, tag: "Vehicles", title: "Evora-Pro: Designed for Performance and Efficiency", readTime: "7 min read", date: "May 15, 2026" },
  { image: gfive, tag: "Company", title: "Evora Opens New R&D Center Focused on Battery Innovation", readTime: "4 min read", date: "May 12, 2026" },
  { image: gsix, tag: "Sustainability", title: "Building a Greener Tomorrow with Renewable Energy", readTime: "6 min read", date: "May 10, 2026" },
  { image: gseven, tag: "Industry News", title: "Global EV Market to Grow 35% by 2030, New Report Says", readTime: "5 min read", date: "May 8, 2026" },
  { image: geight, tag: "Innovation", title: "AI in EVs: Smarter, Safer and More Efficient", readTime: "6 min read", date: "May 5, 2026" },
  { image: gnine, tag: "Charging", title: "How Charging Solutions: Everything You need to Know", readTime: "6 min read", date: "May 3, 2026" },
  { image: gten, tag: "Technology", title: "Vehicle-to-Grid(V2G): Powering Homes with Your EV", readTime: "6 min read", date: "April 30, 2026" },
];



function BlogCard({ image, tag, title, readTime, date }) {
  return (
    <div className="border-[#d1d5db] border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer group flex flex-col h-full">
      <div className="overflow-hidden w-full relative h-[200px] shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <p className="bg-[#10b981] text-[#f9fafb] absolute top-3 text-[13px] lg:text-[10px] py-1.25 rounded-xl px-2.5 left-4 uppercase">
          {tag}
        </p>
      </div>
      <div className="py-4 px-4 flex gap-2.75 flex-col flex-1">
        <h1 className="font-medium lg:text-[16px] text-[18.7px] text-[#111827] line-clamp-2">{title}</h1>
        <span className="lg:text-[12px] text-[15.5px] text-normal flex justify-between mt-auto">
          <p className="flex gap-1 justify-center items-center text-[#374151]">
            <Clock2 className="w-3.5 h-3.5" /> {readTime} · {date}
          </p>
          <a href="" className="flex gap-.5 justify-center items-center text-[#16a34a] font-medium">
            Read More
            <img className="w-4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+0lEQVR4nO3YP04CURDH8VfpBZjZC1BRWlpbvBn+dDQSCpELcYSd2cp7WBEKGg5ARULtHwqVrInRBCwMCTLk90mm3nyTzex7mxIAAAAAwKkh02s2mX1O2b5JUZHLgl0/6iGTTWG5myIi0+VXSOgYruSWXd52YirppGjI5G5fDHu7l6JBTLSYIuICQMxfUKlDMln/fMAxh1xfyDSnQ7Qe+hdk8vxfEfwd83rQd6Y5yZfk8hQ+pMaWB2SyCv1qHVPD8yj80eXXCAu0fgvTe0ScAnYZhz9n8TlEUKlDNn0PvZ3O6qpLrvPwEbWGd67Y5ZFdp6F/BwEAAABACmcLFyT5NNBocPwAAAAASUVORK5CYII=" alt="right--v1" />
          </a>
        </span>
      </div>
    </div>
  );
}


function OurVehicles() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.tag === activeCategory);

  return(
    <section className="w-full flex justify-center items-center py-8 lg:py-10 bg-[#f9fafb]">
      <div className="w-[95%] flex flex-col gap-9">
        <div className="flex flex-col gap-8 lg:gap-15 w-full justify-center items-center">
          <div className="flex lg:grid justify-start lg:justify-center items-center lg:grid-cols-8 gap-3 w-full lg:w-fit overflow-x-auto pb-2 lg:pb-0 -mx-1 px-1 lg:mx-0 lg:px-0 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`lg:text-[13px] text-[14px] py-1 px-2 rounded-lg border whitespace-nowrap shrink-0 transition-colors ${
                  activeCategory === category
                    ? "bg-[#10b981] border-[#16a34a] text-white"
                    : "border-[#9ca3af] text-[#111827]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-6 w-full">
            <span className="w-full flex justify-between items-center">
              <h1 className="font-semibold lg:text-[20px] text-[23px]">Latest Articles</h1>
              <a href="" className="text-[#16a34a] text-[16px] lg:text-[13px] flex gap-1 justify-center items-center font-medium">
                View All Posts
                <img className="w-4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+0lEQVR4nO3YP04CURDH8VfpBZjZC1BRWlpbvBn+dDQSCpELcYSd2cp7WBEKGg5ARULtHwqVrInRBCwMCTLk90mm3nyTzex7mxIAAAAAwKkh02s2mX1O2b5JUZHLgl0/6iGTTWG5myIi0+VXSOgYruSWXd52YirppGjI5G5fDHu7l6JBTLSYIuICQMxfUKlDMln/fMAxh1xfyDSnQ7Qe+hdk8vxfEfwd83rQd6Y5yZfk8hQ+pMaWB2SyCv1qHVPD8yj80eXXCAu0fgvTe0ScAnYZhz9n8TlEUKlDNn0PvZ3O6qpLrvPwEbWGd67Y5ZFdp6F/BwEAAABACmcLFyT5NNBocPwAAAAASUVORK5CYII=" alt="right--v1" />
              </a>
            </span>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 items-stretch">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post, index) => (
                  <BlogCard key={index} {...post} />
                ))
              ) : (
                <p className="text-[#374151] text-[14px] col-span-full">No articles found in this category.</p>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}



const trendingPosts = [
  { rank: 1, image: gtwelve, title: "How Charging Infrastructure is Evolving Worldwide", readTime: "6 min read" },
  { rank: 2, image: gthirteen, title: "The Rise of Software Defined Vehicles", readTime: "6 min read" },
];


function TrendingCard({ rank, image, title, readTime }) {
  return (
    <div className="border-[#d1d5db] border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer group flex flex-col h-full">
      <div className="overflow-hidden w-full relative h-[200px] shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <p className="text-[#10b981] bg-[#f9fafb] absolute top-4 lg:text-[14px] text-[17px] py-1.25 rounded-[5px] font-semibold px-3 left-4">
          {rank}
        </p>
      </div>
      <div className="py-4 px-4 flex gap-2.75 flex-col flex-1">
        <h1 className="font-medium lg:text-[16px] text-[18.7px] text-[#111827] line-clamp-2">{title}</h1>
        <span className="lg:text-[12px] text-[15.5px] text-normal flex justify-between mt-auto">
          <p className="flex gap-1 justify-center items-center text-[#374151]">
            <Clock2 className="w-3.5 h-3.5" /> {readTime}
          </p>
        </span>
      </div>
    </div>
  );
}

function LatestUpdate() {
  return(
    <section className="w-full flex justify-center items-center py-8 lg:py-0 bg-[#f9fafb]">
      <div className="w-[95%] flex flex-col gap-9">
        <div className="flex flex-col gap-6 lg:gap-10 w-full justify-center items-center">

          <div className="flex flex-col gap-6 w-full">
            <span className="w-full flex justify-between items-center">
              <h1 className="font-semibold lg:text-[20] text-[23px] ">Trending Now</h1>
              <a href="" className="text-[#16a34a] text-[16px] lg:text-[13px] flex gap-.5 justify-center items-center font-medium">
                View All Posts
                <img className="w-4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+0lEQVR4nO3YP04CURDH8VfpBZjZC1BRWlpbvBn+dDQSCpELcYSd2cp7WBEKGg5ARULtHwqVrInRBCwMCTLk90mm3nyTzex7mxIAAAAAwKkh02s2mX1O2b5JUZHLgl0/6iGTTWG5myIi0+VXSOgYruSWXd52YirppGjI5G5fDHu7l6JBTLSYIuICQMxfUKlDMln/fMAxh1xfyDSnQ7Qe+hdk8vxfEfwd83rQd6Y5yZfk8hQ+pMaWB2SyCv1qHVPD8yj80eXXCAu0fgvTe0ScAnYZhz9n8TlEUKlDNn0PvZ3O6qpLrvPwEbWGd67Y5ZFdp6F/BwEAAABACmcLFyT5NNBocPwAAAAASUVORK5CYII=" alt="right--v1" />
              </a>
            </span>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 items-stretch">
              {trendingPosts.map((post, index) => (
                <TrendingCard key={index} {...post} />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}


function CompLanding() {
  const [searchQuery, setSearchQuery] = useState("");

  return(
    <section className="w-full flex justify-center items-center py-14 lg:py-30 bg-[#f9fafb]" id="two">
      <div className="w-[95%]">
         <span className="w-full flex flex-col">
            <h1 className="font-medium lg:text-[26px] text-[30px] lg:text-[45px] text-[#111827]">Latest Insights</h1>
            <p className="text-[17px] lg:text-[17px] text-[#374151] w-full lg:w-[40%]">News, innovation and stories shaping the future of electric mobility.</p>

            <div className="relative w-full max-w-[430px] mt-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9ca3af] w-4.75 h-4.75" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full py-2.75 bg-white pl-12 pr-4 rounded-xl border border-solid border-[#e5e7eb]  text-[14.7px] text-[#111827] placeholder:text-[#9ca3af] outline-none focus:border-[#16a34a] transition-colors"
              />
            </div>
          </span>
      </div>
    </section>
  );
}


// function CompareVehicles() {
//   return(
//     <section className="w-full flex justify-center items-center py-10 bg-[#f9fafb]">
//       <div className="w-[95%] flex flex-col gap-10 lg:flex-row justify-between py-10 rounded-2xl px-6 lg:px-12 lg:items-center" id="lau">
//         <div className="flex gap-3 w-full lg:w-[400px] flex-col">
//           <h1 className="text-[24px] leading-[32px] lg:text-[32px] lg:leading-[45px] font-semibold text-[#f9fafb]">Ready to Experience Sustainable Mobility?</h1>
//           <p className="text-[14px] lg:text-[15px] text-[#f3f4f6]">Book a test ride and discover the future of driving with EVORA.</p>
//           <button className="bg-[#10b981] py-2.75 w-fit px-5 rounded-[6px] text-[15px] lg:text-[14px] text-[#f9fafb] font-medium">
//             Book a Test Ride
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


function TeamSection() {
  return <section><h2>Our Team</h2></section>;
}

export default function About() {
  return (
    <>
      <CompLanding/>
      <OurVehicles />
      <LatestUpdate />
      {/* <CompareVehicles /> */}
    </>
  );
}