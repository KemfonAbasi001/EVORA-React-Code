import Link from "next/link";
import Image from "next/image";

import logo from "../../public/footer_logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [faFacebookF, faInstagram, faLinkedinIn, faYoutube];

const footerColumns = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Newsroom", "Partners"],
  },
  {
    title: "Products",
    links: ["All Vehicles", "Three Wheeler", "Compact EV", "Crossover EV"],
  },
  {
    title: "Solutions",
    links: [
      "Fleet Management",
      "Logistics",
      "Sustainable Cities",
      "Charging Solutions",
    ],
  },
  {
    title: "Support",
    links: ["Help Centre", "Contact Us", "Find a Dealer", "Privacy Policy"],
  },
];

export default function Footer() {
  return (
    <footer className="py-10 text-[#9ca3af] items-center flex gap-5 flex-col bg-[#111827]">
      <div className="flex flex-col w-[90%] lg:w-[95%] gap-8">
        <div className="flex flex-col w-[90%] lg:w-[95%] lg:flex-row justify-between gap-9">
          <div className="flex flex-col gap-5 justify-between w-full lg:w-[20%]">
            <Link href="/" className="text-xl font-bold">
              <Image src={logo} alt="EVORA logo" className="w-42" />
            </Link>
            <p className="text-[18px] lg:text-[13px]">
              Building a sustainable future with smart electric mobility solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((icon, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={icon}
                  className="text-[27px] lg:text-[16px]"
                />
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div
              key={column.title}
              className="flex flex-col gap-5 lg:gap-0 justify-between w-full lg:w-[20%]"
            >
              <h3 className="text-[20px] lg:text-[16px] font-medium">
                {column.title}
              </h3>
              {column.links.map((label) => (
                <Link
                  key={label}
                  href="/about"
                  className="text-[17px] lg:text-[13px]"
                >
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5 justify-between lg:flex-row border-x-0 border-b-0 border-t border-solid border-[#9ca3af] py-6 lg:py-3 w-full">
          <p className="text-[17px] lg:text-[13px]">
            {" "}
            © {new Date().getFullYear()} EVORA Mobility. All right reserved.
          </p>
          <span className="flex gap-4 text-[17px] lg:text-[13px]">
            <a href="">Privacy Policy</a>
            <a href="">Terms of Use</a>
          </span>
        </div>
      </div>
    </footer>
  );
}