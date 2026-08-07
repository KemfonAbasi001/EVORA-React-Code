"use client";

import Link from "next/link";
import Image from "next/image";

import workplaceImg from "../../public/houseone.png";
import publicImg from "../../public/housetwo.png";
import homeImg from "../../public/housethree.png";
import fleetImg from "../../public/housefour.png";

import { CircleCheckBig } from 'lucide-react'

const solutions = [
  {
    image: workplaceImg,
    title: "Workplace Charging",
    desc: "Convenient charging for employees and fleet vehicles.",
    href: "/solutions/workplace",
    tag: <img className="w-8" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD6UlEQVR4nO2aXYgcRRCA+4yiUTHc3VTNXUwQ/yKJgmIQUdDLg3c3VbMRhcQkJiQx+uCDIGKeTUQEn4Q8ySHibdXuHZwRH0RFQYKKP48aowgSSMiDSjTkQckfyUpNdu7Gde5uZ3ZvZ5NcQUFPd091fdXV3UvPOrcAAlNDN4KGO0BoApR+RqETqHQehH4HpR9RuexLuLlPg5tct4kv/CwIHQflD0DoGV/Ce5aXn+h3UxuXeDo66GnpflR6DoU/ReWzqPQbKn0CGmxwNdfTMUdXTG1cihJsReH3UPgXUP4blE9bxAc0WNOUkQNDV2M1vM1TfgqVvkflGij9CcqHUOl9FH7Jl/W3tt150GAEhA6D8meWKv06epcvwzeg0JdWTk8peq0OespSCpQ/9zTY5fbsuWqmDx8arJY8mzWs0NMg/LYFBpW+9jR8pC3Oo9AwCp9EDZ9spr85BErfgPDrIBzgxHp/WTXsHSjzagOYzw6WSw/FM5Pb6d7JkZWgNAZCR2wxovKWuM2r8KMg/C0KnwPhv0DpTUuvuN1y25dhbGqgmuuJgCt8ny3yxAycR6UXczlvxmz3QOVXvDKtQuVf42n3quFaUPoOhHf2Tzy+3KLrV6jkV2hT5nGEf7JIN6qtKUtZl1dQ6AsQ2j79XKbn47I5moz2fHLLu0PXWfrEAeidemyZPz56t9kH4Q/rs3sWhA+C8lteOeCWdibLWZtCGzjru5YCXjW8M1ln+Y7KX4HQmbRoo/AxX/jB3A7/H4CO+Bquy/OubaW2U6VGWvhCPT3+sdSJDjyh7XfsC651Cy5ja6+xHQSEXphrYUW7VVqULzp+tK2Rnk0aB26sA6XJAQ0esHpQ2msalYVetUNtJjXoxMVIcxWVt+VJyfYB2HapdLR+8v5hh445noDaG9UJHfYqRK5IwRSAWKLfNWValXQ+CRHvNF0LYJLm/IzSG65BZu/LqepalfkMZnFg4J0AsgIMVkteIQAg/HBjXxDenRUAK/RyIQDJtmnnhc9lBtDoVN7daK/jADkcr81lr6MAMB7c3ioAJGx0HKDd6hYBEtKWQRZSrugZwMsJwDX5HjbR/8oCaEUKBfA1XNdqnhYKAEIHLlkAv8XoFw4ALUa/cIB2SatBwCbhFmTgywKgMMH/OvNR33h4c58GK6w8a5vwx105A72TIyvj+jrEdJs9x23WrysBXMPNcHynmWZoLoC0vqD8g90+D46Vrje1st1KN2O7OwAkvBeV9tntnmlUjuqKAKi5nqwAWdIEuxXAZaxfBMBFgEsUAHMsVmzHOZBXFwE0A4B9DkXl/dEpGP2FoHMAuVT4ZP3E3m8f1P8FqjOzWhHdSzUAAAAASUVORK5CYII=" alt="factory"/>,
  },
  {
    image: publicImg,
    title: "Public Charging",
    desc: "Accessible charging stations across the city.",
    href: "/solutions/public",
    tag: <img className="w-8" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADCklEQVR4nO2X30tUQRTHB8Ek6AepM2vlow/VQwn+AVFk3HMUK8K36h/I/Bf2D/BJDUMo0jNqsX9CjwmFT1YUllHgW9lb9lKgxsyduy3r3N3RO3edjf3CsNy7d873fu6ZH2cYSxFfwH5O+JxL/C4k7vpunOAbl/CM09Allpf4PN4VEv/kAWAB+i0k3vEPsYD9GoJwR0ic6VocPseKxTavJsVim4rLJT5SPhpmLrro1UMNJ/O1ZrwGTvNTMHFmlnwH1nNCZ4Ix1lsaPSokTnOCH56GkoozreKq+D3zeD6ZM8ynzJDaTYaTkPgwl/lBMKUNi8W2+Bp3yh+T4D5/ij3ZQIxROajETWM8mClwOV50XWdA4qbNkxOMGb+1TDDVINXXPlTLo0CDgkt8b+596loaOePdxJfqeRR8wIQA4gUmFJDMMCGBZIIJDURJrV4Vy7bbahYiiFLVPlQ/M8GDEKw5ZSZ0kILrnAkdhCVzxmSGE344Vbp20rlEUaVFI0qUNO15rxhmPb4PE3U7qErVuRDcV4PJLCBKBYKr8UeBDVavgy7jCabKxWPWMl7FIZhKynibp03WZ2YH2s1H2XbrkLPcQGBbPzM70O7UN1QQLmFDr1oLeKWpQYSECbN/rFfuH00H0imjE2qprd4Mmw5EybYZBgnCJbziEh/0TUYdac9Wbobl39BAxL8l+m3n3NBZJ5gQQTjBPSHxcwLjnJnQQBhj7PTicLcg/KiuuwnHa/WrPKfUDNoo7amjCG6bDK3st2/9P3JUtWfPk4ib4fVrv33r/5GjbJ7C8T1aIHmoBcJaIA0EIdzSK1fp8rFahaQ5WP10Cpq3bJ6cYCU+f8Bwer+hW/F+g6+dguYtm2c34bh5yXddj0eOW8t6CV/NxjnmFDRv2Tz7JqMOIeGNedEvYh5vKCDVBMHNBEIQrF4ojR4JFkSpU0a9CYy1EaymVskhgSSZUWcUNQ/0AkC4pc8tBGPWTIQKcmA1PQiX+CJ1LDa2LXv5KiE05gOEHaJEC6RC/9PQWj5sAN0IXh4E4C8dQ4egu21jbAAAAABJRU5ErkJggg==" alt="gas-station"/>,
  },
  {
    image: homeImg,
    title: "Home Charging",
    desc: "Safe and fast charging right at home.",
    href: "/solutions/home",
    tag: <img className="w-8" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACrUlEQVR4nO2Xz2sTQRSAR1tUVJQ2eS+pKAUpCF5EREQQg4J139vgQQgePIr+Cfai9OLBq8cKpeRNYiWgJz0oaNCKooeKB28iiqIoKoiCP6pWZrNp2tCa3ZhNNnQ+GAjszpv37b55O1HK0ph0gQdBqAyab5nfqhtJFfgAaH6HmmfNAE0fQNhRXcOsWoHCZ1DolychdM0bnhD9Rk1nzT0qzvRrZwNqulIR4D+o6bwaHV1pEgdxR+bkNF/fWHT7VBwBcXeg5mdeGQl/XKyM5pcbaHqZ1s5uFSdQnOOg+av/tKex6G5d6t6+yeEtIPSwIsPfUsIn5uLoyn6qH9EblDO9pnxqi5IMjGXXNpo2dMFZDcIX5zWCse2l3KqOiPRrZzMIP/Cf7Hcs0MmwMcwcb26lHL1Y8xOPXCRZ4P2o6a2/qV+lhPc0HSvv7ARNzxd7AxiZiNd96DQKz/gSNwaK2eT/hjUxTCyslpq4I14bj0KkvrWC0DlVyvW0bIFSrsfErLRtI0NXWy6S0Ie3gfBTX+Iz5PmoioikZheFPrV8s6cKdAyFv/ib+gnI8JCKGJDhIbNWVcTk0LLWCpoLKTm0TrWJwYnMGhQer2/RoYKkxx0wJ1a/lGa8zdchUNxTIPTDF5pKXDqyKdBEyDv7UPiN/4F7jfnsXtVhkkV3Fwi98CvjfUroYEN71PzTP7XegQlOq5gwUMwmQfPNBVVSf4qGUmY9aJpc0CnKmV4VN8pm39ZyBOHLJve56yD8qNpa23dQaw6sivi5gqb7tYvC91DosfledItIopLrNAjd/ueNKqZg0PysSJtAK7LcRHCJv6mNhhVpROQLtGsdtCJsRcKAViQgViQkaEUCYkVCglYkIFYkJGhFAmJFQoLLVgRjPlQAkalOJ4mNhtDdsG/SYlHN8RcZyKHOhIJvgwAAAABJRU5ErkJggg==" alt="home--v1"/>,
  },
  {
    image: fleetImg,
    title: "Fleet Solutions",
    desc: "Scalable solutions to power your entire fleet.",
    href: "/solutions/fleet",
    tag: <img className="w-8" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC+ElEQVR4nO2YO2sVQRTHV4wP8BHNvTP3RgRFbLRVQasLombPuTGJQsAiX0ATsbHXLlqKFgYClz0nEbxW+gVSiIlKNDYaU1j4iKKghUYUUSKzj8Q8Nruzu0lWmD9Msztz/vObMzM7s5ZlZGRkZGRkZGRkFCVRr2wWBDcF4WfJOL3sheCLYOgr0fFNVpYSDH0rArCw3MgWhLxMFBw4aK2AJNuHlZ9g/JRxYHRHKNOgq+EpDUhyGZC8gkiGD1G7m2D8KAlulx3cFyvo6oDEL4JxqkT2ybyCdEXWHazuEQR3fZgf0mk9smTQ5ehwaOd0PeudawVDvwcDr3fWTzSlD5qBwjz31zvXS8arkvB9xDS7Z01ba3ILIhVE3DVDeDG/IAST6nlpAFrD2hYHACTDH8n4a856yRUIx+uLJOj1s/KmebC1qNU4TyDWUKVBMt73rgV4R69xnkAsyyrVWnYLxp+qftGxK/8tiNLMlkw4mC8QwrfuYqfqmThxSgRHPRB4lSsQwXA5yfFFEvzOFYg1VGlwYfzM6JR8gSSQAclCBiQtyK5aZaNkuCAIHwuG724heCQYz++9Zm9IbB7pg1OCcEQQ9KiTcSqQwq22HZLh2RJb31iRW5rTgkT6MD5VdRKBqNEOggvC59LB9kJ/2xZVJEGHJBgPTMJGLA5IbB+CJ/N9YoGoqeMGZ3ixvX6scf579SwwEYznkoJo+RB0Lw4yextbcH8WDMPuOwfbwztVPeW1hwdxIMpsHwrMg58JOj6CcOQfiC4/U5OxbmUqxWEGTWxvTXSsSOwDXxdZp73+/FT3ZO92pmvgpl2js/5P8+uS8JJkeKfvA7Mgbp/hSuT6nEk5QUdoHQdP60yttD6CYVjfgKDHNxhfbBE21tq3ScYJb6TtswkY9H04/qYy9/cMwZhngi/VglNzVRV/hCbCtsVl8hm1+g6sS2TifqgCk5APlahhOSlEbB+CUd0P7wKpDUGlXzA8dI8Ns0eH7jSZiPKRhN/U2nOnU0Qm/gKKBxVS6OXRKAAAAABJRU5ErkJggg==" alt="truck--v1"/>,
  },
];

function Name() {
  return (
    <section className="w-full flex justify-center items-center py-20 bg-[#f9fafb]">
      <div className="w-[95%] flex flex-col gap-3">
        <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-end gap-10">
          <span>
            <h1 className="font-medium text-[25px] text-[#111827]">Smart Charging for Every Need</h1>
            <p className="text-[16px] text-normal text-[#374151]">
              Reliable, scalable and intelligent charging solutions.
            </p>
          </span>
          <Link href="/solutions" className="flex gap-1 text-[14px] font-medium text-[#16a34a]">
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
              <div className="relative">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-48 object-cover"
                />
                {solution.tag && (
                  <p className="bg-[rgba(209,213,219,1)] text-[#f9fafb] absolute top-3 left-4 text-[10px] py-2 px-3 rounded-xl uppercase">
                    {solution.tag}
                  </p>
                )}
              </div>
              <span className="flex flex-col gap-1 py-3 px-4">
                <h1 className="font-medium text-[16px] text-[#111827]">{solution.title}</h1>
                <p className="text-[15px] text-[#374151]">{solution.desc}</p>
                <Link href={solution.href} className="text-[14px] font-medium flex gap-1 text-[#16a34a]">
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

function LandingPage() {
  return (
    <section className="flex justify-center py-30" id="charge">
      <div className="w-[93%] flex flex-col lg:flex-row lg:justify-between items-center gap-12 lg:gap-0">
        <div className="gap-3 flex flex-col text-center lg:text-left items-center lg:items-start w-[40%]">
          <span className="text-[14px] flex text-[#f9fafb]">              
            <img className="w-5" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADtklEQVR4nNWZXYhVVRTHlx8ZqSDjvXudO2pBJhWBhORXggyIH2etc0d7cPIpJJQIfCh8MMSHKwThBwY+DiLOWWvuCBd9CIyCoAkMjMh6USMYPx4UgxSR8qP8GNnn7jMz3rlnvJjO7POD83T/57DX3f+99tp7ATxPal1TjNJPqDz4pMco3zFxtA58JJCws5Ug0ifopU3gI6j0bfJvC+3M0gRCq+qB0OW3al3TwDdMT/gaKj0wQv9iX2eQpUOhE/Vgo8/AR4zSl242NEtT0HVvJMEq/zMnfq8AvjGv1vWSEb5et0y4PEtnlLqdrQ6CjwTCW5IBCv2WpSkdDo0Ruo1C960NwUdQ6JckCwlvydZwxWWrY+AjGJffdXa5EciaGc00Cw6GL6LS1foa4hXgI0ZI3QAPZGlQaavT/Aw+0l4tF+0OjcIPizG93lQ0CJOM8FmXcrvAR4zQTmerb7I0xV4iV5JchP6OqeAdlcpko3TBlRrlLJlR+s6l5U/BR1Cj9W4DvGSLxaaaXlpobYfCN9tqq2eB53XVjmwNx25/2Qc+YtK6SvluIGuwmabQt35OUncJ32uPy6+Az3UVCvVkaVD5C5dyq+Aj80bUVSUNlzTTtHeXpxula0kiqEZLweu6SvnXLI0R2uY0P4CvoNBpt8g/HEPze4unxJPjO/p0gBour29udM1aLEtnhPpbPLefGd8IGuqq/5NOA+FltpS3Wa+o0UqYsLpK6QFWo/lP8w17RrezMKGHK5PWVUInnvobSp+ndZepdcx8tiNsdRBC51vyvVB/8/ejt1H5v6RkiaPVMFGg8skWM9HAqJf7O6YOZzs+BD6DSvtdIHtH/8a7nC2vzKpGbeAzxlmvENPixiugepLgQYx5A/hMUI2Wuv3lgj0RDv1QqUxOLTnWfZf3tkKl7S6Iv+x1EPiOaWKrQDpfReG/6zMVbgTfKWm4ZJSt7IWDO+Iaoa8gD6DQvkZbYUwfu1R73RzhEuQB02Cr2T3RXHtZlwQS8weQB0pNbGWt5Gboa8gL2GAro9Hm+sbHN9uOrn0Z8gIqD6S2smthqLUg0UeQF0oNtkKl4y5Lff/YppgnWxWV33dB3fK29/EkW9kWsxH60x2WPoE8UYhpcWorI9Tn9oxTWVen3oJKe1wg59Lmf6FafhPyBjpbDZ8KPW01t2Krocc2QLvfeQHyBirvHQ6C7xXjcBHkERxhK6O0G/JIYYSt7EK33VrII5jaSuh+1k18LkDlP7zuQEGLJO024R/HusAeLx4Bt8p74psGLpkAAAAASUVORK5CYII=" alt="lightning-bolt--v1"></img>
            Powering the Future
          </span>
          <h1 className="text-[38px] leading-12 lg:text-[53px] lg:leading-15 font-semibold text-[#f3f4f6]">
            Charging <span className="text-[#22c55e]">Solutions</span>
          </h1>
          <p className="text-[18px] text-[#f9fafb]">
            Power up anywhere with Evora charging network.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="text-[14px] text-[#f9fafb] items-center flex gap-1">
              <CircleCheckBig size={15}/>
              Ultra-fast
            </span>

            <span className="text-[14px] text-[#f9fafb] items-center flex gap-1">
              <CircleCheckBig size={15}/>
              Wide network coverage
            </span>

            <span className="text-[14px] text-[#f9fafb] items-center flex gap-1">
              <CircleCheckBig size={15}/>
              Smart charging management
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Charge() {
  return (
    <>
      <LandingPage />
      <Name />
    </>
  );
}