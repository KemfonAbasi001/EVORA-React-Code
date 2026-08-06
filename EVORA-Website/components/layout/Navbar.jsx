"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { ChevronDown, Menu, X } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";

import logo from "../../app/faviconn.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#f9fafb] flex justify-center w-full relative">
      <nav className="flex items-center w-[90%] lg:w-[95%] justify-between py-3">
        <Link href="/" className="text-xl font-bold">
          <Image src={logo} alt="EVORA logo" className="w-[140px] lg:text-[16px]" />
        </Link>

        <button onClick={() => setIsOpen(true)} className="lg:hidden">
          <Menu className="text-black" />
        </button>

        <ul className="hidden lg:flex gap-8 text-sm font-medium text-black items-center">
          <Link href="/" className="hover:text-green-600 text-[#16a34a]">Home</Link>
          <Link href="/vehicles" className="flex items-center gap-0.75 hover:text-green-600">Vehicles <ChevronDown size={20} /></Link>
          <Link href="/about" className="flex items-center gap-0.75 hover:text-green-600">Charging <ChevronDown size={20} /></Link>
          <Link href="/about" className="flex items-center gap-0.75 hover:text-green-600">Solutions <ChevronDown size={20} /></Link>
          <Link href="/about" className="hover:text-green-600">About Us</Link>
          <Link href="/about" className="hover:text-green-600">Blog</Link>
          <Link href="/contact" className="hover:text-green-600">Contact</Link>
          <Link href="/contact" className="bg-[#10b981] flex py-2 px-4 rounded-lg text-white">Book a Test Ride</Link>
        </ul>
      </nav>

      {/* Mobile slide-out menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white z-[999] transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">
              <Image src={logo} alt="EVORA logo" className="w-[120px]" />
            </Link>
            <button onClick={() => setIsOpen(false)}>
              <X className="text-black" size={26} />
            </button>
          </div>

          <div className="flex flex-col gap-6 mt-8 text-[20px] font-medium text-black">
            <Link href="/">Home</Link>

            <Link href="/vehicles" className="flex justify-between items-center">
              Vehicles <ChevronDown size={18} />
            </Link>

            <Link href="/about" className="flex justify-between items-center">
              Charging <ChevronDown size={18} />
            </Link>

            <Link href="/about" className="flex justify-between items-center">
              Solutions <ChevronDown size={18} />
            </Link>

            <Link href="/about">About Us</Link>
            <Link href="/about">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <Link
            href="/contact"
            className="bg-[#10b981] text-white text-center py-3 rounded-xl font-medium mt-8"
          >
            Book a Test Ride
          </Link>

          <div className="mt-auto pb-6">
            <p className="text-gray-500 text-sm mb-3">Follow Us</p>
            <div className="flex gap-3">
              <span className="w-9 h-9 rounded-full bg-black flex items-center justify-center">
                <FontAwesomeIcon icon={faFacebookF} className="text-white text-[14px]" />
              </span>
              <span className="w-9 h-9 rounded-full bg-black flex items-center justify-center">
                <FontAwesomeIcon icon={faInstagram} className="text-white text-[14px]" />
              </span>
              <span className="w-9 h-9 rounded-full bg-black flex items-center justify-center">
                <FontAwesomeIcon icon={faLinkedinIn} className="text-white text-[14px]" />
              </span>
              <span className="w-9 h-9 rounded-full bg-black flex items-center justify-center">
                <FontAwesomeIcon icon={faYoutube} className="text-white text-[14px]" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}