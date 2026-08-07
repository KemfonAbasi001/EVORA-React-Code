
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



function LandingPage() {
  return (
    <section className="flex justify-center py-30" id="love">
      <div className="w-[93%] flex flex-col lg:flex-row lg:justify-between items-center gap-12 lg:gap-0">
        <div className="gap-5 flex flex-col text-center lg:text-left items-center lg:items-start w-[40%] ">
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
      <div className="grid grid-cols-4 gap-9 w-[90%]">
        <div className="bg-[white] shadow text-[#111827] py-5 px-7 rounded-lg flex flex-col gap-4 items-center text-center">
          <img className="w-14" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEl0lEQVR4nO1ZTYgcVRDuRGNEV2Nmu95kdTUQNgbizb0IWR0xm92u12u8GPBiorCYgxfJQRF/NoIecvQSWH/Y7aqZiAPqxYOKGHQ1ooIgHjQByapRQw66JBEMrBmp/pntnume6Z7pnTVhCorp7ulX9X1d9V7V6zaMvvSlL33538uWNy1QjNOKcU4RfqYITwHhT4rwT1FgfVGxrmVRdwz54z1bpxThp64PxmnxmQt4cPSjivF8VoDdK54Hwv3dPXm2dirC5d6D154SLhfnJ+/qmIBifWTNwHNdj3RBAD8IGXKKbN+/pay3bqrYm43qvmuMHGXT3EO3DB7be2uR8AFgXQ7NlY86J0D4gx/K+TzBpvLNSJ5v/WPnRkgvuU/BscaMHovpWKVgMndkoEh7bgzCOFydKBg9lqHKlFlPo2ppILMB08E7AwPG7OgGo8eys7rvusC/WbG3ZzZglvV9dQLHS9fmCW7kVWujYn0QGE94xUwvAekvgfBJAR66xyPgWKXMTopkPxIY2PzWxO3BdcX6ZMxSdzLJjlthV4rTOwW2hoH014rwfVlxCmzdPPjG3pvkWK4p1t+aPDmkKva2YJxgSQUaSL+iGP9SpJ9XjIdCAL8Bth6WwibGt86Vrpf7B3lyhyL9ITB+LxFrZ1/GAeFXivVzcf+pYw8WgfTrwPo7IRIifggYDwPj34Ix0cHatAw6c4vRIgL4chCBuMncax3kyR11bG4E9MWWEWgg80laR1Ith5ypOxTpy0bNWOdGs8WxVHNJPZXWPuHxVKBjq3AKFUDtQDceu4Q5ZTS6qcau1Ix10qf4e4I/Vi1tSP8uPsRXQDiTmBV7VNKhaTKTvgyEi0D4LNDESNBiBJr2qccdqxUfS2Lb84GLkf/8ySvYTJ66Oxa8D+yCO9ixx91WwrHH3fOooWkgfClvAsB42ItwJPcXFVu7o1hkozMxEkNAv+YOdOzx8HU5bwj1gmLrnvxTyBKbCw3XdsdhAcbZxIopVTFCrFoaiKYT/laYt2/LOwIFtoYV45lIBBqauBCW5sov6eMD3NMyAoTL0huFnedBwHBtNmxfk7KB9IU4Aq4xYPxZSLhs5VfOG8ItAJonWXdqeH1W4/q/mIQlkUAqZw0EcomA0UygHeGrmwA41hiUcVcaAquVQkpwlHGXYOmMQMzAOAJ5tBJG3gSiilVF+HYSAamQfoPWcTNnhAm4vrCa2xwA0o8B2wd6lULA9gEgfDwTgStaVFMJj6rsW4dmp27I84m3UqiWBpo6gOa0/mKFQJt0kP1u0oq0KgQca8xk+962aTczsz4g8HmvwOVGkvGEcdWJikml8IojIVNkPwGszwHZz+Tyhrom9kM2Z0c3+Dn+r4spLnWSdmvtCPiTfaGjV31txKzY2wP7uRJYyTn5DmY9VZ84qyEzM+vFR7tvbpkjYKyhqD6B2hVEAEj/ErmZ9K89R2xkxOTvM4/Kq0QgPAuEl/xJ+4+7yZYP26wdxfpFIHxaMb4gbwWA8F0g/bF8pI4o69OygiQsBKeb7he/rN8Tm2Ef8l3O841nPCzuFvOSj1Feex6V/ft/WIJ0p8hePowAAAAASUVORK5CYII=" alt="car"/>
          <span>
            <h2 className="font-medium text-[14px]">Fleet Management</h2>
            <p className="text-[13px]">Simplify operations and reduce costs.</p>
          </span>
        </div>

        <div className="bg-[white] shadow text-[#111827] py-5 px-7 rounded-lg flex flex-col gap-4 items-center text-center">
          <img className="w-14" src="data:image/png;base64,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" alt="get-cash"/>
          <span>
            <h2 className="font-medium text-[14px]">Logistics Solutions</h2>
            <p className="text-[13px]">Reliable EVs for last-mile deliveries.</p>
          </span>
        </div>

        <div className="bg-[white] shadow text-[#111827] py-5 px-7 rounded-lg flex flex-col gap-4 items-center text-center">
          <img className="w-14" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB2UlEQVR4nO2Wv0oDQRDGV7CwEEHJTmIhQko7S6s0oje7sVR8BZ9A0AewEKwt1JBdoihY6AMoGC1sUlpYCCLYBiwURIncHyWES3K55HJz534whAmzZH53386EMSMjI6NOAo13oEUjRFQZJUE4CCcYJUGIpgxIlGptyq/JIDWxC9IKEkQGJEp1s01i9gx0BUnInoEuP5oY60FaQaDHPGhN5EotSGqslRoQ6DkPtWeqBEGI7Bjo01q9Ngb/HgTC/1fytcKg88AaBAQpEBZShKwlUgByXRiN2hpDsRZXcjXuRqFNPlsqjAUGASVuqVqLK2sj0IFM2Zr3mzpkQDQ+2dYPcABLwxifYXPQopFVcr0jRO7Q4lyLD9D4TRkEtKh1BAGNW+7rE5dUrQVKvDo9luVy+5GrxItTXJaLVEG4kpvuJ175Fma0WPMu0wNrsBGqIFPamgCNdfeBFxf8CqvN440qCHPWA+64OZ63GblY52eF8eaD1ILZvR2vZLnCd3so5bQ110x75Nlqr/UNkQqFN7/9cYX7Xs8HzhfTlWLmb+RWZJ4lRFCReVD4BVp8Tp4szdhPftubAhcsYQKFp96V2GVc43Psluk78M322n38jfR9dx7jdoeRkREbjn4A4U4JCHhQc44AAAAASUVORK5CYII=" alt="city-block"/>
          <span>
            <h2 className="font-medium text-[14px]">Sustainable Cities</h2>
            <p className="text-[13px]">Building greener, smarter communities.</p>
          </span>
        </div>

        <div className="bg-[white] shadow text-[#111827] py-5 px-7 rounded-lg flex flex-col gap-4 items-center text-center">
          <img className="w-14" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEl0lEQVR4nO1ZTYgcVRDuRGNEV2Nmu95kdTUQNgbizb0IWR0xm92u12u8GPBiorCYgxfJQRF/NoIecvQSWH/Y7aqZiAPqxYOKGHQ1ooIgHjQByapRQw66JBEMrBmp/pntnume6Z7pnTVhCorp7ulX9X1d9V7V6zaMvvSlL33538uWNy1QjNOKcU4RfqYITwHhT4rwT1FgfVGxrmVRdwz54z1bpxThp64PxmnxmQt4cPSjivF8VoDdK54Hwv3dPXm2dirC5d6D154SLhfnJ+/qmIBifWTNwHNdj3RBAD8IGXKKbN+/pay3bqrYm43qvmuMHGXT3EO3DB7be2uR8AFgXQ7NlY86J0D4gx/K+TzBpvLNSJ5v/WPnRkgvuU/BscaMHovpWKVgMndkoEh7bgzCOFydKBg9lqHKlFlPo2ppILMB08E7AwPG7OgGo8eys7rvusC/WbG3ZzZglvV9dQLHS9fmCW7kVWujYn0QGE94xUwvAekvgfBJAR66xyPgWKXMTopkPxIY2PzWxO3BdcX6ZMxSdzLJjlthV4rTOwW2hoH014rwfVlxCmzdPPjG3pvkWK4p1t+aPDmkKva2YJxgSQUaSL+iGP9SpJ9XjIdCAL8Bth6WwibGt86Vrpf7B3lyhyL9ITB+LxFrZ1/GAeFXivVzcf+pYw8WgfTrwPo7IRIifggYDwPj34Ix0cHatAw6c4vRIgL4chCBuMncax3kyR11bG4E9MWWEWgg80laR1Ith5ypOxTpy0bNWOdGs8WxVHNJPZXWPuHxVKBjq3AKFUDtQDceu4Q5ZTS6qcau1Ix10qf4e4I/Vi1tSP8uPsRXQDiTmBV7VNKhaTKTvgyEi0D4LNDESNBiBJr2qccdqxUfS2Lb84GLkf/8ySvYTJ66Oxa8D+yCO9ixx91WwrHH3fOooWkgfClvAsB42ItwJPcXFVu7o1hkozMxEkNAv+YOdOzx8HU5bwj1gmLrnvxTyBKbCw3XdsdhAcbZxIopVTFCrFoaiKYT/laYt2/LOwIFtoYV45lIBBqauBCW5sov6eMD3NMyAoTL0huFnedBwHBtNmxfk7KB9IU4Aq4xYPxZSLhs5VfOG8ItAJonWXdqeH1W4/q/mIQlkUAqZw0EcomA0UygHeGrmwA41hiUcVcaAquVQkpwlHGXYOmMQMzAOAJ5tBJG3gSiilVF+HYSAamQfoPWcTNnhAm4vrCa2xwA0o8B2wd6lULA9gEgfDwTgStaVFMJj6rsW4dmp27I84m3UqiWBpo6gOa0/mKFQJt0kP1u0oq0KgQca8xk+962aTczsz4g8HmvwOVGkvGEcdWJikml8IojIVNkPwGszwHZz+Tyhrom9kM2Z0c3+Dn+r4spLnWSdmvtCPiTfaGjV31txKzY2wP7uRJYyTn5DmY9VZ84qyEzM+vFR7tvbpkjYKyhqD6B2hVEAEj/ErmZ9K89R2xkxOTvM4/Kq0QgPAuEl/xJ+4+7yZYP26wdxfpFIHxaMb4gbwWA8F0g/bF8pI4o69OygiQsBKeb7he/rN8Tm2Ef8l3O841nPCzuFvOSj1Feex6V/ft/WIJ0p8hePowAAAAASUVORK5CYII=" alt="car"/>
          <span>
            <h2 className="font-medium text-[14px]">Fleet Management</h2>
            <p className="text-[13px]">Simplify operations and reduce costs.</p>
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