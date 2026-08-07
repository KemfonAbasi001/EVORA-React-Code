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
    <section className="w-full flex justify-center items-center lg:py-20 pt-20 pb-10 bg-[#f9fafb]">
      <div className="w-[95%] flex flex-col gap-3">
        <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-end gap-5 lg:gap-10">
          <span>
            <h1 className="font-medium text-[25px] text-[#111827]">Smart Charging for Every Need</h1>
            <p className="text-[16px] text-normal text-[#374151]">
              Reliable, scalable and intelligent charging solutions.
            </p>
          </span>
          <Link href="/solutions" className="flex gap-1 text-[18px] lg:text-[14px] font-medium text-[#16a34a]">
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
              <span className="flex flex-col gap-1 py-5 lg:py-3 px-4">
                <h1 className="font-medium text-[19px] lg:text-[16px] text-[#111827]">{solution.title}</h1>
                <p className="lg:text-[15px] text-[17px] text-[#374151]">{solution.desc}</p>
                <Link href={solution.href} className="lg:text-[14px] text-[17px] font-medium flex gap-1 text-[#16a34a]">
                  Learn More
                  <img className="w-6 lg:w-4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+0lEQVR4nO3YP04CURDH8VfpBZjZC1BRWlpbvBn+dDQSCpELcYSd2cp7WBEKGg5ARULtHwqVrInRBCwMCTLk90mm3nyTzex7mxIAAAAAwKkh02s2mX1O2b5JUZHLgl0/6iGTTWG5myIi0+VXSOgYruSWXd52YirppGjI5G5fDHu7l6JBTLSYIuICQMxfUKlDMln/fMAxh1xfyDSnQ7Qe+hdk8vxfEfwd83rQd6Y5yZfk8hQ+pMaWB2SyCv1qHVPD8yj80eXXCAu0fgvTe0ScAnYZhz9n8TlEUKlDNn0PvZ3O6qpLrvPwEbWGd67Y5ZFdp6F/BwEAAABACmcLFyT5NNBocPwAAAAASUVORK5CYII=" alt="right--v1" />
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
        <div className="lg:gap-4 gap-5 flex flex-col text-center lg:text-left items-center lg:items-start w-full">
          <span className="text-[17px] lg:text-[13px] rounded-[20px] py-1 px-3 items-center flex gap-1 border-[#16a34a] border font-medium text-[black] bg-[rgba(229,231,235,0.6)]">              
            <img className="w-4 h-4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABqklEQVR4nO3ZTSgEYRjA8T9LtBS1lJzIRcJBbhwlLnKR5LgcRS6cKG64CjcOUhx9HZSVopR8nCW5oESJ8m311By2aXZmDtPO+9T+6qk9zr93m3nnHcjKKgQOgF2UmwOSwAOKtQA/VsgmShUBV1aEzARKLaREyHSgUBvwlxIhv2MoUwLc2lZD/mLqrNgiZFZRpsshQmYERcqsZ4VTiNyG1VhPE/ENRFGiP02EzBlKVAJPLiGLKLHtEiETR4FBjwiZBgxXBbx4RLwBeRgsF9j3sRryHmK0YR8RMjMYrAZ49RnSg6EiwLHPCD+TCCtkPMAImcswIuqA9wAjfoHWTEfILfQ04NWYJwTTAUfcAaWZjmgCvgIO6SYEFwFHbBCSRIARz0AFBuv1GRLXciya9Nh35WC4Q4+ID6AWw0Ws7bpbyBgKNPrYhuSjwIBLhJzEN6PEkkvILIqcp4m4AYpRImodwDmFtKNIa5qIZZQZdYh4BMpRZs0hpA+Frm0ROygUs31ek6d7NQp12lZjCKUmUyJOrD2XSltWxCdQj2L3VsgUyu0BR0BB2BeShQH+AVEQhQDcYk4cAAAAAElFTkSuQmCC" alt="quick-mode-on--v1"></img>
            Powering the Future
          </span>
          <h1 className="text-[38px] leading-12 lg:text-[53px] lg:leading-15 font-semibold text-[#f3f4f6]">
            Charging <span className="text-[#22c55e]">Solutions</span>
          </h1>
          <p className="text-[18px] text-[#f9fafb]">
            Power up anywhere with Evora charging network.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="lg:text-[14px] text-[18px] text-[#f9fafb] items-center flex gap-1">
              <CircleCheckBig size={15} color="#16a34a"/>
              Ultra-fast
            </span>

            <span className="lg:text-[14px] text-[18px] text-[#f9fafb] items-center flex gap-1">
              <CircleCheckBig size={15} color="#16a34a"/>
              Wide network coverage
            </span>

            <span className="lg:text-[14px] text-[18px] text-[#f9fafb] items-center flex gap-1">
              <CircleCheckBig size={15} color="#16a34a"/>
              Smart charging management
            </span>
          </div>
          <button className="bg-[#22c55e] py-2.75 px-5 flex gap-1 rounded-md text-[15px] lg:text-[14px] text-[#f9fafb] font-medium">
            Find Charging Station
            <img className="w-4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA30lEQVR4nO3YvUoDURCG4an0fiytLSwSLyBi4c+tWkkKGy8gVcA62XlnVk84hShECwkkmfA9MPXywnJ2zpqJiIiIiBybiLj0yHmfIfPKqiLyjcjWxwncc2oVEbH4CikdA+PMiY+tmMyJVQPc/xrjeWPVKKZgzNSqUcx/wHjnxPvPB+xznBiGzGvbRWvtzIn1oSL4jvGdvjOttXMnVuVDOhhvIZalX619Ah7Kry5/Rnih4xd4VMQxAJ7K71mcRsTYN4XP0qfTSV11PfK1fEQHXDj57ORL6d9BIiIiImLlbAB4ffsS2bXx+QAAAABJRU5ErkJggg==" alt="right--v1"></img>
            {/* <img className="w-4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+0lEQVR4nO3YP04CURDH8VfpBZjZC1BRWlpbvBn+dDQSCpELcYSd2cp7WBEKGg5ARULtHwqVrInRBCwMCTLk90mm3nyTzex7mxIAAAAAwKkh02s2mX1O2b5JUZHLgl0/6iGTTWG5myIi0+VXSOgYruSWXd52YirppGjI5G5fDHu7l6JBTLSYIuICQMxfUKlDMln/fMAxh1xfyDSnQ7Qe+hdk8vxfEfwd83rQd6Y5yZfk8hQ+pMaWB2SyCv1qHVPD8yj80eXXCAu0fgvTe0ScAnYZhz9n8TlEUKlDNn0PvZ3O6qpLrvPwEbWGd67Y5ZFdp6F/BwEAAABACmcLFyT5NNBocPwAAAAASUVORK5CYII=" alt="right--v1" />   */}
          </button>
        </div>
      </div>
    </section>
  );
}

function SubLand() {
  return (
    <section className="pt-5 flex justify-center bg-[#f9fafb]">
      <div className="w-[93%] lg:px-8 rounded-lg grid grid-cols-2 lg:grid-cols-4 lg:py-2 lg:gap-y-4 gap-1 lg:gap-x-4 justify-between shadow">

        <div className="flex flex-row gap-4 items-center py-2 px-4 border-solid border-y-0 border-l-0 border-r border-[#d1d5db]">
          <img className="w-11" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABqUlEQVR4nL2Vv0vDUBDHIzjppPZdo+jqH6A466DSuzq49S9wclCwTl38Nxyk9i7FRUHQpSh2cxAF/wsHoYvdHCKXtJgmafpqWx8cOV6+vU/vR95znP9apkouMF4awQcbA9VWybUGhMGpbQswQm0QrNpnwNhUU9+VwgbUittppu/i+qEAuXpxHYT8LMvJ3loUsFTbXzBMdX1G/VRAXopbQSAPTxIZ6J6Qr5oooPsbfUb9TEBC4PQGigJAqBL8KcbXwMJMK2PLwDA2gbEVmbBWoj+j9MDEGp46AKNMETA1gPGtGyssFTX6AoaZOkd9oVPNzDC9qHX8shVg7mp3BYSu42PXo29uTivEMH6GRmXdswIYpjtg+nIvCmaQPrMKaS/zHpbCxhaObfRDARbP92ZA8COsJz5pmXRv3ICbTnBfYQMBgs+J6RlEB8Gj4OPysBTXg+B7d3wN4yEwfRvBM2uANlYbDIz3afr4B2iYHvO8M2sN6J6M81JYTgf8ZpCr4arjO1OpwbNK1G/9+T6YiB48PNATMHoiWtzJrc6peZu4XNIA9ndxzGwAk1w/oCre2ZIcN3oAAAAASUVORK5CYII=" alt="external-charging-station-ecology-tanah-basah-basic-outline-tanah-basah"></img>
          <span className="flex flex-col">
            <h1 className="text-[22px] text-[#16a34a] font-semibold">1,200+</h1>
            <p className="text-[14px] font-normal text-[#374151]">Charging Stations</p>
          </span>
        </div>

        <div className="flex flex-row gap-4 items-center py-2 px-4 border-solid border-y-0 border-l-0 lg:border-r border-[#d1d5db]">
          <img className="w-11" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB2UlEQVR4nO2Wv0oDQRDGV7CwEEHJTmIhQko7S6s0oje7sVR8BZ9A0AewEKwt1JBdoihY6AMoGC1sUlpYCCLYBiwURIncHyWES3K55HJz534whAmzZH53386EMSMjI6NOAo13oEUjRFQZJUE4CCcYJUGIpgxIlGptyq/JIDWxC9IKEkQGJEp1s01i9gx0BUnInoEuP5oY60FaQaDHPGhN5EotSGqslRoQ6DkPtWeqBEGI7Bjo01q9Ngb/HgTC/1fytcKg88AaBAQpEBZShKwlUgByXRiN2hpDsRZXcjXuRqFNPlsqjAUGASVuqVqLK2sj0IFM2Zr3mzpkQDQ+2dYPcABLwxifYXPQopFVcr0jRO7Q4lyLD9D4TRkEtKh1BAGNW+7rE5dUrQVKvDo9luVy+5GrxItTXJaLVEG4kpvuJ175Fma0WPMu0wNrsBGqIFPamgCNdfeBFxf8CqvN440qCHPWA+64OZ63GblY52eF8eaD1ILZvR2vZLnCd3so5bQ110x75Nlqr/UNkQqFN7/9cYX7Xs8HzhfTlWLmb+RWZJ4lRFCReVD4BVp8Tp4szdhPftubAhcsYQKFp96V2GVc43Psluk78M322n38jfR9dx7jdoeRkREbjn4A4U4JCHhQc44AAAAASUVORK5CYII=" alt="city-block"/>
          <span className="flex flex-col">
            <h1 className="text-[22px] text-[#16a34a] font-semibold">300+</h1>
            <p className="text-[14px] font-normal text-[#374151]">Cities Covered</p>
          </span>
        </div>

        <div className="flex flex-row gap-4 items-center py-2 px-4 border-solid border-y-0 border-l-0 border-r border-[#d1d5db]">
          <img className="w-11" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADgElEQVR4nO1aS2gUQRDtSPygYkiy3RNDwAieco3gwc+KmGSqRoMXQVAv4tHo0WPEg59jRA8RZN2qxMPeBIk34w//GtGbgh+MUW8qKhijKzXbcTdx1E12djYT82Bgdnfm9XvT3VPV1avUHH5HgjuW6zTuNoxpTXhTMzzTDJ/tIec3DMFZw7hLrlUzCllVlWD0DONlw5idyqEJBhNpF4Wjoh502l2nGR7nxcFHTXBeM3Y5hGucVEfz8t4ti+WQc/kuQbhfrpFr84bwke6DtdE76G2drxkOGYIxXwjjc03ewdrM5ppiKXQmudQwHNAEL+xD+G4Yelb1uAvLK75AgCa45DdO+M0wHGvJbF8wbcLBZLU8BE3w1fbQtTp2l6lyojG9rd4w3s31ArxM9HutYXHXp2G1IXxl587tmn6vVpUFg8lqQ3g91xPwpKEPV4TdhJPqaDaMT20bV6XNsNtQhvG4HcvDOoUNqkyoP9fZaAhH7DA7Eiq5Q7DJEP4wjKNRvF0SfbjBzr/vDnsbw2HNqipNeMdO7m4VETThYTsXb4VCaAi2WRMjDrUtURFB596Ob6Vtpw+2lExoCK7YWNEVisKptM1wwL7FLpVE5FCbsUFvtCnTXqciRk2/V+vHF4KxhjOunjaRYdhrh9VAqAqnpuGiaEiwu2f6LIPJankSdew2qQqhjt0mvzfKEVNig5bM9gV+AJTARPC65HyqUjoMw7Hf1g8ER8uquhw6TD5FKCDAkbKqDkuHYdxVcB64ootCfCH+paNQsw/JZyS3KZZgxhgh/CZ5We5Td/c8Q3B/ktN4GGE/G38oHiQ5c4MviIsRzGp22yWXOhV3I4bghBgZir0RxgdKM76LvxF4owqqF7E1ogm+qvHFS5yNGAmSs2KOENyXDydjb4ShR+m01zEr4ojKRfZ7sTVCMORH9l91JMbRGBoZTbC3fuJN5O4slmDGGKG85mACfzU2mQCGoxAfqg5ZhQU8iXDrsFHoaJG1spDk1snDcnPF1uxUeR1zmFztlA0m2e5TcYYhHLCJ4T4VVxj2Om1S+D7y2vOEolpQHCiy0GbY69SMn+Qe2dKOzsHfimrBhiYU2lakkosc2rrSIW/H+HDKDSk8HbmJPwex4J7J77cH/Y4fZH+kYv+KKNqIjdDjRjTBF397muCCbCpVYj+mmGicnQmZQgnROLgn5iL0/4CfkygiCjfaWEUAAAAASUVORK5CYII=" alt="headset"/>
          <span className="flex flex-col">
            <h1 className="text-[22px] text-[#16a34a] font-semibold">24/7</h1>
            <p className="text-[14px] font-normal text-[#374151]">Support</p>
          </span>
        </div>

        <div className="flex flex-row gap-4 items-center py-2 px-4">
          <img className="w-11" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFU0lEQVR4nO1bS4gcZRDuGMHE15rZrn82cSAiEaME9SIIoosm2e2qXqMIe/OVaMzNm+9DPPo8CF6Cht2pmhEZ0Ih60ahxsyr4PIhksyYixPjAg9FEBbPGkerHPHvnsWY33T1T8MMw//9Xd31dj///q37LShAZwY+MULltY3zLSiMZoemOABAqW71E2YnRS4zQbE8CAOxebQR/CgT/sqcAMHl3k2H6LbD7qVWlTQM9A4Ap4HYjdFKFBaE3cqXxld7/qQegbC0DwSdCQUFwl7Vv+OywO9UADEzcepF+7UDl/7GZHmgck1oAoEDXGKHDvvB0IlvAsahxqQQAGO8CwT8D4Q9m2d0w39hUAZDlzecZpt0Ve2d6BUrD57ddLDHut5JORpzrKosbpjlg92GrF2jd8845RvBJdXLBlz+kYFi9QFl2N1RWc0z/aohrp/KpoIw4FxrGp4Hx70D470GckU7mGqYPO9gcTVuxpJ07z7LF2QaMP1dfFlnjfacsErs7HBLnWhD8uGZFdwDy7mi3fNoJGDsAhsS5UsOZ2niwjv/FCO2wSuPLF8IvMQCAv20tGcFTwUudBKbnulH35AFQGl8OebodGPdVj6tozjBO2kX3stPxiFgCYCadq4zQU8B0pLqKw780rJmie+np9OaxAGCdt3hxNnqhTOjr2pcGoe+A8aFcaSSzGN58SQEYfGnLBYPFsfV23hk2gvcZoRf0pBaE/mg4lf0VmF7MFugmDXWd8F6oIEsGgGHc3+rLANNXwPSsYdysGtE1//gDQG8HW9JZBQMYBYQeVIFXF8fs/80/7gAsNqUGANNZ9mY6xQDQknrz2AJgddnfB0D6AJRjBYBJiDNbRAAoEc5s0QGwluiF+gBIH4ByHwDpA1BeqnltyUivA8A0pweX3fanBgDI051G6I5u+1MDwEIpNQDkSiOZIG31uhYl6Lmfd/bn/94DjFsHiu6q1AGQK42vNEKPG6bfw8nzNzwGQo+snRheUXkg4w9G8GgiAciIkzOMX9Skp/eqFmg6S4XULM6gjF6uJWog9F7IHJg+HXx5yxrloeeDrc4IYwtARoUXPOoJJHjALtCN7ebY4t4AjN8GIBwJQWhFsQQgp2offnmhD6LydcH2uGn7q34gPDJXTag1h8QAYNTmPbXHb7TctLbPzjukZagVu1egCrhdCxZrHabO9UFoXcsTOwBy3sv7Dg8KeH1tX5adW2qyuXUNGB+tH4s3h46xVcY3dgDY4mzz7Z7eaZocmIWX8QkYheOjPH3oGEHcuxMDAGicFypnme6NEMjL+Q3tdqCWkWZytWS16WHs3h+A82piADBBLV5Uvj5KA1omT4tj6wM/MZMgAPC4DtDMb2Of1uM2+QDGKbuAGMVLeQQacDxxAKzeNXZuVD8wORoa650gnooqVvbK3ZIHAHkmoOo776AaRkbwmUATPm8cM5SnK/w+OpgcJyi0Zz4nWFt4HDKqOESmExHjdyTOCQLjVj904d7myf7SuBr66hziZxG83k9cGMz5CyHv4pGWvtRPxsfqbb/qA2wht36ss7FxIQRMb0bPj02bbhR0tm6PX7aWeZeTqvsEb6/QWNG5Jn/bYHibQwuiwv8r11ti3Cwl3cCoSvu2jVPzHHREXkQIhPdudALjJ+02Q3GhJtPITLoXa5V20HGo0RyimXhqf7ib7XBcKNI3ZBSEUBN8od5VE9AQqddXdKGjhyPq7UOHF375JAnf0jmunRheocdclRuZLRseU5sPy+K8EMn045m26659gBVB6geA6R5vncA4o3HfbzgDjK9pqGvc9upRmH8meOYF67BN/wesg4YW3mhqgQAAAABJRU5ErkJggg==" alt="external-increase-payment-2-kmg-design-detailed-outline-kmg-design" />
          <span className="flex flex-col">
            <h1 className="text-[22px] text-[#16a34a] font-semibold">99.9%</h1>
            <p className="text-[14px] font-normal text-[#374151]">Built for every journey</p>
          </span>
        </div>
      </div>
    </section>
  );
}


function CompareVehicles() {
  return(
    <section className="w-full flex justify-center items-center pt-15 bg-[#f9fafb]">
      <div className="w-[95%] flex flex-col gap-10 lg:flex-row justify-between py-10 rounded-2xl px-6 lg:px-12 lg:items-center" id="loud">
        <div className="flex gap-2 w-full lg:w-100 flex-col">
          <p className="text-[#16a34a] text-[13px] font-medium">WIDE NETWORK COVERAGE</p>
          <h1 className="text-[24px] leading-8 lg:text-[32px] lg:leading-11.25 font-semibold text-[#111827]">Charging where you need it</h1>
          <p className="lg:text-[15px] text-[16px] text-[#374151]">Our growing network ensures you're never far from a charge. Find stations across cities, highways, and destinations.</p>
          <div className="flex gap-2">
            <span className="flex justify-center items-center text-center py-3 flex-col gap-2">
              <img className="lg:w-8 w-10" src="data:image/png;base64,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" alt="place-marker--v1"></img>
              <p className="font-medium text-[14px] lg:text-[12px]">Real-time availability</p>
            </span>
            <span className="border-x border-y-o border-solid border-green-800 flex justify-center items-center text-center py-3 flex-col gap-2">
              <img className="lg:w-8 w-10" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACLUlEQVR4nO2YzU7jMBDH/QqweFqtlgPiWUD1VOy+DTwBEi+BgBkJ3gBOaBEVl90bHHgF4IbgwinIKUVAcGK3aTpN5y9ZlezpfPyScZwYo1KVCthdAWMWGAPT9vwg7DwftVQhOT8IOJIGIHZeXoAJpQBYAWQKgBVAFjsvL8CEUgBcc35whH+A8cIyPpcdKKoOIE2Psvx8LZbc3w71tipour1QgGXu/RrZLZ1srs664HHzs4S7ZVc+s+ReLLntH8e/f/p5S47zPxOe+iBD5+5s6NCRmbFi8vO1WOrv+Nr8/Apjv+AIGC+GAPo7nwIc9tYt432RpLvr0NaambFS8vO1vbXEecERED75xdGVLwZxJ5bxIR/kjv2cEaLY/Hxtb3fLo5G6q09bwTpBwEbW5FAAXwXaAqgAIACg4rtb4fubNPsaAGBSX0mzrw2ACSiUoBT7qDVQAKgAQAGgAjCJDhcKAAh5rKXa1wFgUBmQ3KVU+4kBtEkKgMdqASfqbK/vAtz8JpiVtUcoQSn2UWugAFABgAJABWASHS4UABDyWEu1rwPAoDKgvgvMhxQAj9UCTuzZviEAKHZTaxSAiXQ6bftJpAC45QAgbj9pMwCsLN4S/ms9APNB3f2etYTX+Rq5W3uA3YUB0I0pPhZAbF9N275MH22ji48AIPZs/02uuX1S8V4plCXrfaNjdzP67dAGRP/RzLm+3DXVVz61D+dmpBQf3YfzM/5H3fYqlcosul4B8UW4Tuw+vIAAAAAASUVORK5CYII=" alt="external-business-business-outline-others-phat-plus-15"></img>
              <p className="font-medium text-[14px] lg:text-[12px]">Easy booking & payments </p>
            </span>
            <span className="flex justify-center items-center text-center py-3 flex-col gap-2">
              <img className="lg:w-8 w-10" src="data:image/png;base64,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" alt="paper-plane--v1"></img>
              <p className="font-medium text-[14px] lg:text-[12px]">Route planning & optimization</p>
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
      <SubLand/>
      <CompareVehicles/>
      <Name />
    </>
  );
}