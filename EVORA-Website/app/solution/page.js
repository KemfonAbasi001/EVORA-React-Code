
"use client";

import Link from "next/link";
import Image from "next/image";

import neww from '../../public/solnbg.png'

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
    <section className="w-full flex justify-center items-center pt-20 pb-10 bg-[#f9fafb]">
      <div className="w-[95%] flex flex-col gap-2">
        <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3">
          <h1 className="font-medium text-[27px] text-[#111827]">Solutions Built for Impact</h1>
          <Link href="/solutions" className="lg:text-[14px] text-[18px] font-medium text-[#16a34a] flex gap-1">
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
              <span className="flex flex-col gap-1 py-5 lg:py-3 px-4">
                <h1 className="font-medium text-[19px] lg:text-[14px] text-[#111827]">{solution.title}</h1>
                <p className="lg:text-[13px] text-[16px] text-[#374151]">{solution.desc}</p>
                <Link href={solution.href} className="lg:text-[12px] text-[18px] font-medium text-[#16a34a] flex gap-1">
                  Learn More 
                  <img className="lg:w-4 w-6" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+0lEQVR4nO3YP04CURDH8VfpBZjZC1BRWlpbvBn+dDQSCpELcYSd2cp7WBEKGg5ARULtHwqVrInRBCwMCTLk90mm3nyTzex7mxIAAAAAwKkh02s2mX1O2b5JUZHLgl0/6iGTTWG5myIi0+VXSOgYruSWXd52YirppGjI5G5fDHu7l6JBTLSYIuICQMxfUKlDMln/fMAxh1xfyDSnQ7Qe+hdk8vxfEfwd83rQd6Y5yZfk8hQ+pMaWB2SyCv1qHVPD8yj80eXXCAu0fgvTe0ScAnYZhz9n8TlEUKlDNn0PvZ3O6qpLrvPwEbWGd67Y5ZFdp6F/BwEAAABACmcLFyT5NNBocPwAAAAASUVORK5CYII=" alt="right--v1" />
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
    <section className="flex justify-center py-30" id="love">
      <div className="w-[93%] flex flex-col lg:flex-row lg:justify-between items-center gap-12 lg:gap-0">
        <div className="lg:gap-5 gap-3 flex flex-col text-center lg:text-left items-center lg:items-start w-full lg:w-[40%] ">
          <h1 className="text-[38px] leading-12 lg:text-[53px] lg:leading-15 font-semibold text-[#f3f4f6]">
            Smart Mobility <span className="text-[#22c55e]">Solutions</span>
          </h1>
          <p className="text-[18px] text-[#f9fafb]">
            Tailored solutions for businesses, fleets and communities
          </p>
        </div>
      </div>
    </section>
  );
}

function Lower() {
  return(
    <section className="flex justify-center pt-13 bg-[#f9fafb]">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-9 w-[90%]">
        <div className="bg-[white] shadow text-[#111827] py-5 px-7 rounded-lg flex flex-col gap-4 items-center text-center">
          <img className="w-14" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEl0lEQVR4nO1ZTYgcVRDuRGNEV2Nmu95kdTUQNgbizb0IWR0xm92u12u8GPBiorCYgxfJQRF/NoIecvQSWH/Y7aqZiAPqxYOKGHQ1ooIgHjQByapRQw66JBEMrBmp/pntnume6Z7pnTVhCorp7ulX9X1d9V7V6zaMvvSlL33538uWNy1QjNOKcU4RfqYITwHhT4rwT1FgfVGxrmVRdwz54z1bpxThp64PxmnxmQt4cPSjivF8VoDdK54Hwv3dPXm2dirC5d6D154SLhfnJ+/qmIBifWTNwHNdj3RBAD8IGXKKbN+/pay3bqrYm43qvmuMHGXT3EO3DB7be2uR8AFgXQ7NlY86J0D4gx/K+TzBpvLNSJ5v/WPnRkgvuU/BscaMHovpWKVgMndkoEh7bgzCOFydKBg9lqHKlFlPo2ppILMB08E7AwPG7OgGo8eys7rvusC/WbG3ZzZglvV9dQLHS9fmCW7kVWujYn0QGE94xUwvAekvgfBJAR66xyPgWKXMTopkPxIY2PzWxO3BdcX6ZMxSdzLJjlthV4rTOwW2hoH014rwfVlxCmzdPPjG3pvkWK4p1t+aPDmkKva2YJxgSQUaSL+iGP9SpJ9XjIdCAL8Bth6WwibGt86Vrpf7B3lyhyL9ITB+LxFrZ1/GAeFXivVzcf+pYw8WgfTrwPo7IRIifggYDwPj34Ix0cHatAw6c4vRIgL4chCBuMncax3kyR11bG4E9MWWEWgg80laR1Ith5ypOxTpy0bNWOdGs8WxVHNJPZXWPuHxVKBjq3AKFUDtQDceu4Q5ZTS6qcau1Ix10qf4e4I/Vi1tSP8uPsRXQDiTmBV7VNKhaTKTvgyEi0D4LNDESNBiBJr2qccdqxUfS2Lb84GLkf/8ySvYTJ66Oxa8D+yCO9ixx91WwrHH3fOooWkgfClvAsB42ItwJPcXFVu7o1hkozMxEkNAv+YOdOzx8HU5bwj1gmLrnvxTyBKbCw3XdsdhAcbZxIopVTFCrFoaiKYT/laYt2/LOwIFtoYV45lIBBqauBCW5sov6eMD3NMyAoTL0huFnedBwHBtNmxfk7KB9IU4Aq4xYPxZSLhs5VfOG8ItAJonWXdqeH1W4/q/mIQlkUAqZw0EcomA0UygHeGrmwA41hiUcVcaAquVQkpwlHGXYOmMQMzAOAJ5tBJG3gSiilVF+HYSAamQfoPWcTNnhAm4vrCa2xwA0o8B2wd6lULA9gEgfDwTgStaVFMJj6rsW4dmp27I84m3UqiWBpo6gOa0/mKFQJt0kP1u0oq0KgQca8xk+962aTczsz4g8HmvwOVGkvGEcdWJikml8IojIVNkPwGszwHZz+Tyhrom9kM2Z0c3+Dn+r4spLnWSdmvtCPiTfaGjV31txKzY2wP7uRJYyTn5DmY9VZ84qyEzM+vFR7tvbpkjYKyhqD6B2hVEAEj/ErmZ9K89R2xkxOTvM4/Kq0QgPAuEl/xJ+4+7yZYP26wdxfpFIHxaMb4gbwWA8F0g/bF8pI4o69OygiQsBKeb7he/rN8Tm2Ef8l3O841nPCzuFvOSj1Feex6V/ft/WIJ0p8hePowAAAAASUVORK5CYII=" alt="car"/>
          <span>
            <h2 className="font-medium text-[15px] lg:text-[14px]">Fleet Management</h2>
            <p className="text-[14px] lg:text-[13px]">Simplify operations and reduce costs.</p>
          </span>
        </div>

        <div className="bg-[white] shadow text-[#111827] py-5 px-7 rounded-lg flex flex-col gap-4 items-center text-center">
          <img className="w-14" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFKklEQVR4nO1bXYhbRRSerqKtVuPu3pnsrsEFrfgD4h+KLzYi7ZpzbqjVJaKoSKGK1OpDFRFR8qIPlqLWnwehuM05iQ8BqW9WWyhV/Cvqlj7UVkWx/qEIVavog+7KuXcmG2PS3a3aZO7dDwbC3JnLnTPn/yNKLWABXiJTC/s1wRpN8IohPKAZf5Fhf2+TZ7JGJQ25emmJYXjYEP5oGKePPuCwZnxodCK/WCUBA1vDMw3B++6AmvF1w7B2kK87L0srT5UxWCueb6pwp2bY0VhHuGfwpVUjyv/D45f2UAeDKi6fbU9QKeQNwcdWCIe8FUJO1N7dPMHu+di2rDUEb8RCgPe8NAcjNm9vvvnwyzYXTg4I79MM7zonGP0mWH9hvXSSW5erjw0Yxk+sEB5UPiET3WDs8JrVPjIJhr0dHSDBpKxx67McXuMcY2bi+jOUL9AEa5zDa755d3ixbU0wPrhl1WkyDMFqCYVWEB82a4Im3Bm/K7xD+QLNuM3e3Fo3J2rvDi/q3T5HwENW5e9x84bCu+y7Xla+wDAelI+WUOfmxJnZw4132qcpLMW3DW+7uShExubxkfIFhvBIdJB6fmnrnKh8p30DXDg9Piz+5ObkHVYDfla+QEt6yzg9Ulk9OB8B9NdXZFoPO1wrBt4JwBBMRhGAw6tbTUAcXqd9AeNN1k+805ir4nK77wPlCzTDk9ajPzEzh/da9T7QLikSbXFZo+QEjX2Em6xQNilfEFQKl1pn9oUql/saYdBqRhwGw5LYvIzo5l3KTDDZCIP10gkzQgkvVj7BuJhfwRtbCqPJuSZCLipIbqB8g2Zc12rPArldUXGZjxwj4REJe62pcPQOwj2RACpwt/INoxP5xYbhq9gUCmPz3R9UCmh9xjdSWCkfEdjsT8zB+YI5oVzuE7VvzQr91AJyzq1w61z36Qre7pyll6VwMwzjbVYLvp1LRRdlgwRfW+d3i/Ie02qRYXzTCmHzbMsN47ONemBaLVJJQLYWXmkY/jQEf0iO0GldUAsvlzWydogLV6gkwRA845qdbR1iudwXhcZ4zdMqadD1/FLN+LltlKz7x3OC9Vb1P5NOsUoisgTXGsIpzfBrUAvPdfOmFp5tk6KpY8kZvIJhfNE6xLck149iPsFue/tbEk9B9Uc1v80QCR+Qjq/L+P71N+U8oaCyVSjG6o6/yZDfAWOYKgrKEDzfdCHPJZKCytXHBgIuXmaqcFGWVpq/PystkbAnpMjwC8VTEkNBjUhnh+FRx+o0D834vWF4VRM8Zji8YbhSPCtRFJQmGNeM3800OMQXwV5NuE8z/NDOF+kJHEoEBWWEwCCcsia101TCFa0Z31AVR6VDpAkfNwzbozI5CRSU5sJYnOuLAGDDcStidA9QUHHnx9o74SMqbRRUlsKbrcD3qV35E1XaKChttbBdgZMKCsowfho54abiJlUUlJZUlnG6K7073QMUlAutKq0UlOmmAHqBguq6AHSXKaiuC2C0yxRU1wXQbQqqJwQw2kUKqicE0C0Kql1GmSoKaqiCF9h37FdppKA0wbgV+HaVRgrKMJAVwAaVNgoqI90ohsOxIMeWqbRRUIZgo3WAr6m0UVCGC1dpxt/Fh+gqXqJ6Ef3/EwUlrWx5h02enlK9jOx/TEEJydHoJzLsOO4tsG5RUJmYQNkYq33chfbmHxy5Y6CgJJJIkiMltmGsOG8f2byovQ833wkdewSzDFH5oyVX3sDM5cBx72B/xN5U4X69tXBOt797AQtQDfwF7FZauNnw7oQAAAAASUVORK5CYII=" alt="external-attention-address-outline-others-phat-plus-12"></img>
          <span>
            <h2 className="font-medium text-[15px] lg:text-[14px]">Logistics Solutions</h2>
            <p className="text-[14px] lg:text-[13px]">Reliable EVs for last-mile deliveries.</p>
          </span>
        </div>

        <div className="bg-[white] shadow text-[#111827] py-5 px-7 rounded-lg flex flex-col gap-4 items-center text-center">
          <img className="w-14" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB2UlEQVR4nO2Wv0oDQRDGV7CwEEHJTmIhQko7S6s0oje7sVR8BZ9A0AewEKwt1JBdoihY6AMoGC1sUlpYCCLYBiwURIncHyWES3K55HJz534whAmzZH53386EMSMjI6NOAo13oEUjRFQZJUE4CCcYJUGIpgxIlGptyq/JIDWxC9IKEkQGJEp1s01i9gx0BUnInoEuP5oY60FaQaDHPGhN5EotSGqslRoQ6DkPtWeqBEGI7Bjo01q9Ngb/HgTC/1fytcKg88AaBAQpEBZShKwlUgByXRiN2hpDsRZXcjXuRqFNPlsqjAUGASVuqVqLK2sj0IFM2Zr3mzpkQDQ+2dYPcABLwxifYXPQopFVcr0jRO7Q4lyLD9D4TRkEtKh1BAGNW+7rE5dUrQVKvDo9luVy+5GrxItTXJaLVEG4kpvuJ175Fma0WPMu0wNrsBGqIFPamgCNdfeBFxf8CqvN440qCHPWA+64OZ63GblY52eF8eaD1ILZvR2vZLnCd3so5bQ110x75Nlqr/UNkQqFN7/9cYX7Xs8HzhfTlWLmb+RWZJ4lRFCReVD4BVp8Tp4szdhPftubAhcsYQKFp96V2GVc43Psluk78M322n38jfR9dx7jdoeRkREbjn4A4U4JCHhQc44AAAAASUVORK5CYII=" alt="city-block"/>
          <span>
            <h2 className="font-medium text-[15px] lg:text-[14px]">Sustainable Cities</h2>
            <p className="text-[14px] lg:text-[13px]">Building greener, smarter communities.</p>
          </span>
        </div>

        <div className="bg-[white] shadow text-[#111827] py-5 px-7 rounded-lg flex flex-col gap-4 items-center text-center">
          <img className="w-14" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEl0lEQVR4nO1ZTYgcVRDuRGNEV2Nmu95kdTUQNgbizb0IWR0xm92u12u8GPBiorCYgxfJQRF/NoIecvQSWH/Y7aqZiAPqxYOKGHQ1ooIgHjQByapRQw66JBEMrBmp/pntnume6Z7pnTVhCorp7ulX9X1d9V7V6zaMvvSlL33538uWNy1QjNOKcU4RfqYITwHhT4rwT1FgfVGxrmVRdwz54z1bpxThp64PxmnxmQt4cPSjivF8VoDdK54Hwv3dPXm2dirC5d6D154SLhfnJ+/qmIBifWTNwHNdj3RBAD8IGXKKbN+/pay3bqrYm43qvmuMHGXT3EO3DB7be2uR8AFgXQ7NlY86J0D4gx/K+TzBpvLNSJ5v/WPnRkgvuU/BscaMHovpWKVgMndkoEh7bgzCOFydKBg9lqHKlFlPo2ppILMB08E7AwPG7OgGo8eys7rvusC/WbG3ZzZglvV9dQLHS9fmCW7kVWujYn0QGE94xUwvAekvgfBJAR66xyPgWKXMTopkPxIY2PzWxO3BdcX6ZMxSdzLJjlthV4rTOwW2hoH014rwfVlxCmzdPPjG3pvkWK4p1t+aPDmkKva2YJxgSQUaSL+iGP9SpJ9XjIdCAL8Bth6WwibGt86Vrpf7B3lyhyL9ITB+LxFrZ1/GAeFXivVzcf+pYw8WgfTrwPo7IRIifggYDwPj34Ix0cHatAw6c4vRIgL4chCBuMncax3kyR11bG4E9MWWEWgg80laR1Ith5ypOxTpy0bNWOdGs8WxVHNJPZXWPuHxVKBjq3AKFUDtQDceu4Q5ZTS6qcau1Ix10qf4e4I/Vi1tSP8uPsRXQDiTmBV7VNKhaTKTvgyEi0D4LNDESNBiBJr2qccdqxUfS2Lb84GLkf/8ySvYTJ66Oxa8D+yCO9ixx91WwrHH3fOooWkgfClvAsB42ItwJPcXFVu7o1hkozMxEkNAv+YOdOzx8HU5bwj1gmLrnvxTyBKbCw3XdsdhAcbZxIopVTFCrFoaiKYT/laYt2/LOwIFtoYV45lIBBqauBCW5sov6eMD3NMyAoTL0huFnedBwHBtNmxfk7KB9IU4Aq4xYPxZSLhs5VfOG8ItAJonWXdqeH1W4/q/mIQlkUAqZw0EcomA0UygHeGrmwA41hiUcVcaAquVQkpwlHGXYOmMQMzAOAJ5tBJG3gSiilVF+HYSAamQfoPWcTNnhAm4vrCa2xwA0o8B2wd6lULA9gEgfDwTgStaVFMJj6rsW4dmp27I84m3UqiWBpo6gOa0/mKFQJt0kP1u0oq0KgQca8xk+962aTczsz4g8HmvwOVGkvGEcdWJikml8IojIVNkPwGszwHZz+Tyhrom9kM2Z0c3+Dn+r4spLnWSdmvtCPiTfaGjV31txKzY2wP7uRJYyTn5DmY9VZ84qyEzM+vFR7tvbpkjYKyhqD6B2hVEAEj/ErmZ9K89R2xkxOTvM4/Kq0QgPAuEl/xJ+4+7yZYP26wdxfpFIHxaMb4gbwWA8F0g/bF8pI4o69OygiQsBKeb7he/rN8Tm2Ef8l3O841nPCzuFvOSj1Feex6V/ft/WIJ0p8hePowAAAAASUVORK5CYII=" alt="car"/>
          <span>
            <h2 className="font-medium text-[15px] lg:text-[14px]">Fleet Management</h2>
            <p className="text-[14px] lg:text-[13px]">Simplify operations and reduce costs.</p>
          </span>
        </div>
      </div>
    </section>
  );
}

export default function Charge() {
  return (
    <>
      <LandingPage />
      <Lower/>
      <Name />

    </>
  );
}