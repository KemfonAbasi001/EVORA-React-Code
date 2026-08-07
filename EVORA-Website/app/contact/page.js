"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { Mail, Phone, MapPin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";


function OurVehicles() {
  return(
    <section className="w-full flex justify-center items-center py-15 bg-[#f3f4f6] ">
    <div className="w-[95%] flex flex-col gap-9 py-8 px-2 rounded-xl bg-[white] shadow">
        <div className="w-full grid grid-cols-3 gap-3">
            <div className="flex flex-col gap-6 py-4 px-7">
                <h1 className="text-[19px] font-medium">Contact Information</h1>
                <div className="flex gap-3 items-start">
                    <div className="px-3 py-3 bg-[rgba(16,185,129,0.1)] rounded-full">
                        <Mail className="w-4 h-4" />
                    </div>
                    <span className="flex flex-col">
                        <h2 className="text-[14px] font-medium">Email</h2>
                        <p className="text-[13px] font-normal">hello@evora.com</p>
                    </span>
                </div>
                <div className="flex gap-3 items-start">
                    <div className="px-3 py-3 bg-[rgba(16,185,129,0.1)] rounded-full">
                        <Phone className="w-4 h-4" />
                    </div>
                    <span className="flex flex-col">
                        <h2 className="text-[14px] font-medium">Phone</h2>
                        <p className="text-[13px] font-normal">+1 (650) 123-4557</p>
                    </span>
                </div>
                <div className="flex gap-3 items-start">
                    <div className="px-3 py-3 bg-[rgba(16,185,129,0.1)] rounded-full">
                        <MapPin className="w-4 h-4" />
                    </div>
                    <span className="flex flex-col">
                        <h2 className="text-[14px] font-medium">Address</h2>
                        <p className="text-[13px] font-normal">123 Greenway Blvd,</p>
                        <p className="text-[13px] font-normal">San Francisco, CA 94107</p>
                        <p className="text-[13px] font-normal">United States</p>
                    </span>
                </div>
                <div className="flex gap-3 items-start flex-col">
                    <h2 className="text-[16px] font-medium">Follow Us</h2>
                    <div className="flex gap-3">
                        <div className="px-3 py-3.5 bg-[rgba(229,231,235,06)] flex justify-center items-center rounded-full">
                            <FontAwesomeIcon icon={faFacebookF} className="text-[20px] text-[#111827]" />
                        </div>

                        <div className="px-3 py-3.5 bg-[rgba(229,231,235,06)] flex justify-center items-center rounded-full">
                            <FontAwesomeIcon icon={faInstagram} className="text-[20px] rounded-full text-[#111827]" />
                        </div>

                        <div className="px-3 py-3.5 bg-[rgba(229,231,235,06)] flex justify-center items-center rounded-full">
                            <FontAwesomeIcon icon={faLinkedinIn} className="text-[20px] text-[#111827]" />
                        </div>

                        <div className="px-3 py-3.5 bg-[rgba(229,231,235,06)] flex justify-center items-center rounded-full">
                            <FontAwesomeIcon icon={faYoutube} className="text-[20px] text-[#111827]" />
                        </div>

                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-6 py-4 px-7 border-x border-y-0 border-solid border-[#e5e7eb]">
                <h1 className="text-[19px] font-medium">Send Us a Message</h1>
                <input type="name" placeholder="Your Name" className="w-full box-border px-3 py-2.5 border-[#d1d5db] text-[#111827] border rounded-lg text-[13px] outline-[#10b981]"/>
                <input type="email" placeholder="Email Address" className="w-full box-border px-3 py-2.5 border-[#d1d5db] text-[#111827] border rounded-lg text-[13px] outline-[#10b981]"/>
                <textarea typeof="message" placeholder="Message"className="w-full box-border px-3 py-2.5 border-[#d1d5db] text-[#111827] border rounded-lg text-[13px] outline-[#10b981] min-h-[170px]"/>
                <button className="w-full bg-[#10b981] py-2 text-[14px] rounded-lg text-[#f3f4f6]">Send Message</button>
            </div>
            <div className="flex flex-col gap-6 py-4 px-7">
                <h1 className="text-[19px] font-medium">Our Location</h1>
                <div className="w-full rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps?q=BYD+Pingshan+Plant,+No.+3009+BYD+Road,+Pingshan+District,+Shenzhen,+China&z=15&output=embed"
                    width="100%"
                    height="370"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="EVORA Location"
                  ></iframe>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}




function Accordion() {
  const faqs = [
    {
      question: "What is EVORA?",
      answer:
        "EVORA is an electric vehicle company offering a range of EVs, charging solutions, and financing options to make sustainable driving accessible.",
    },
    {
      question: "How long does it take to charge an EV?",
      answer:
        "Charging time depends on the charger type. A fast charger can reach 80% in about 30-40 minutes, while a standard home charger may take 6-8 hours for a full charge.",
    },
    {
      question: "How does EVORA charging work?",
      answer:
        "Simply plug your vehicle into any EVORA-compatible charging station. You can monitor charging progress and pay directly through the EVORA app.",
    },
    {
      question: "What types of vehicles does EVORA offer?",
      answer:
        "We offer a full lineup of electric sedans, SUVs, and compact cars designed for efficiency, comfort, and performance.",
    },
    {
      question: "Where can I find EVORA charging stations?",
      answer:
        "EVORA charging stations are located across major cities. Use the station locator in our app to find the nearest one to you.",
    },
    {
      question: "Do you offer financing options?",
      answer:
        "Yes, we offer flexible financing and leasing plans tailored to your budget. Visit our finance page or contact our sales team for details.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full flex justify-center items-center py-15 bg-[#f3f4f6]">
      <div className="w-[90%] flex flex-col gap-9">
        <span className="flex flex-col gap-2">
          <p className="text-[12px] font-medium text-[#16a34a]">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h1 className="text-[32px] font-medium text-[#111827]">How Can We Help?</h1>
        </span>

        <div className="w-full grid grid-cols-2 gap-x-6 gap-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-inherit border border-[#d1d5db] rounded-lg px-5 py-4 cursor-pointer"
                onClick={() => toggle(index)}
              >
                <div className="flex justify-between items-center gap-4">
                  <h2 className="text-[15px] font-medium text-[#111827]">
                    {faq.question}
                  </h2>
                  <ChevronDown
                    className={`w-4 h-4 text-[#111827] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div
                  className={`grid transition-all duration-200 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[13px] text-[#6b7280] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="self-center text-[14px] text-[#111827]">
          Still have a question?{" "}
          <a href="" className="text-[#16a34a] font-medium underline">
            Contact our support team
          </a>
        </p>
      </div>
    </section>
  );
}



export default function Contact() {
  return (
    <>
      <OurVehicles />
      <Accordion />
    </>
  );
}