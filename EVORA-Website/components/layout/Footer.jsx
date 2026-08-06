import Link from "next/link";
import Image from "next/image";

import logo from "../../app/footer_logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
  return (
    <footer className="py-10 text-gray-500 items-center flex gap-5 flex-col bg-[#111827]">
      <div className="flex flex-col w-[90%] lg:w-[95%] lg:flex-row justify-between gap-9 ">
        <div className="flex flex-col gap-5 justify-between w-full lg:w-[20%]">
           <Link href="/" className="text-xl font-bold">
            <Image src={logo} alt="EVORA logo" className="w-42" />
          </Link>
          <p className="text-[18px] lg:text-[13px]">Building a sustainable future with smart electric mobility solutions.</p>
          <div className="flex gap-3">
            <FontAwesomeIcon icon={faFacebookF} className="text-[27px] lg:text-[16px]" />
            <FontAwesomeIcon icon={faInstagram} className="text-[27px] lg:text-[16px]" />
            <FontAwesomeIcon icon={faLinkedinIn} className="text-[27px] lg:text-[16px]" />
            <FontAwesomeIcon icon={faYoutube}  className="text-[27px] lg:text-[16px]"/>
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:gap-0 justify-between w-full lg:w-[20%]">
          <h3 className="text-[20px] lg:text-[16px] font-medium">Company</h3>
          <Link href="/about" className="text-[17px] lg:text-[13px]">About Us</Link>
          <Link href="/about" className="text-[17px] lg:text-[13px]">Careers</Link>
          <Link href="/about" className="text-[17px] lg:text-[13px]">Newsroom</Link>
          <Link href="/about" className="text-[17px] lg:text-[13px]">Partners</Link>
        </div>
        <div className="flex flex-col gap-5 lg:gap-0 justify-between w-full lg:w-[20%]">
          <h3 className="text-[20px] lg:text-[16px] font-medium">Products</h3>
          <Link href="/about" className="text-[17px] lg:text-[13px]">All Vehicles</Link>
          <Link href="/about" className="text-[17px] lg:text-[13px]">Three Wheeler</Link>
          <Link href="/about" className="text-[17px] lg:text-[13px]">Compact EV</Link>
          <Link href="/about" className="text-[17px] lg:text-[13px]">Crossover EV</Link>
        </div>
        <div className="flex flex-col gap-5 lg:gap-0 justify-between w-full lg:w-[20%]">
          <h3 className="text-[20px] lg:text-[16px] font-medium">Solutions</h3>
          <Link href="/about" className="text-[17px] lg:text-[13px]">Fleet Management</Link>
          <Link href="/about" className="text-[17px] lg:text-[13px]">Logistics</Link>
          <Link href="/about" className="text-[17px] lg:text-[13px]">Sustainable Cities</Link>
          <Link href="/about" className="text-[17px] lg:text-[13px]">Charging Solutions</Link>
        </div>
        <div className="flex flex-col gap-5 lg:gap-0 justify-between w-full lg:w-[20%]">
          <h3 className="text-[20px] lg:text-[16px] font-medium">Support</h3>
          <Link href="/about" className="text-[17px] lg:text-[13px]">Help Centre</Link>
          <Link href="/about" className="text-[17px] lg:text-[13px]">Contact Us</Link>
          <Link href="/about" className="text-[17px] lg:text-[13px]">Find a Dealer</Link>
          <Link href="/about" className="text-[17px] lg:text-[13px]">Privacy Policy</Link>
        </div>
        {/* <div className="flex flex-col gap-5 lg:gap-0 justify-between w-full lg:w-[20%]">
          <h3 className="text-[22px] lg:text-[16px] font-medium">Newsletter</h3>
          <p className="text-[19px] lg:text-[13px]">Subscribe for the latest updates and offers.</p>
          <div className="flex flex-col gap-5">
            <input type="email" placeholder="Enter your email" className="py-4 px-4 bg-amber-700"/>
            <button type="submit"></button>
          </div>
        </div> */}
      </div>
      <div className="flex flex-col gap-5">
        <p className=""></p>
        <span className=""></span>
      </div>
    </footer>
  );
}