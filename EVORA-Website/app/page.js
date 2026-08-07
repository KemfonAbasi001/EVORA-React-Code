import Link from "next/link";
import Image from "next/image";

import one from '../public/imgone.png'
import two from '../public/imgtwo.png'
import three from '../public/imgthree.png'
import four from '../public/imgfour.png'

import gtwelve from '../public/gtwelve.png'
import gthirteen from '../public/gthirteen.png'

import neww from '../public/new.png'


import { Clock2 } from 'lucide-react'

const vehicles = [
  { name: "Evora City", type: "Compact EV", image: one, price: "$12,650", fig: "120", amount: "40" },
  { name: "Evora Keke", type: "Electric Three Wheeler", image: two, price: "$12,650", fig: "80", amount: "50" },
  { name: "Evora Cab", type: "24/7 EV", image: four, price: "$12,650", fig: "420", amount: "80" },
  { name: "Evora Pro", type: "Crossover EV", image: three, price: "$12,650", fig: "36", amount: "120" },
];




function LandingPage() {
  return (
    <section
      className="pt-24 sm:pt-28 lg:pt-20 pb-15 flex justify-center"
      id="run"
    >
      <div className="w-[93%] flex flex-col lg:flex-row lg:justify-between items-center gap-12 lg:gap-0">
        <div className="gap-2.5 flex flex-col text-center lg:text-left items-center lg:items-start">
          <p className="text-[#374151] flex gap-.75 justify-center items-center bg-[#f3f4f6] text-[14px] py-1 font-medium rounded-2xl px-3.25">
            <img className="w-5" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADPElEQVR4nO2ZS2hTQRSGR20VFRFt5qRGXelGwQcWRFEpLtR7zo1a0Sr4wIUPxJUgCMVF3RQEFXxrodXeOWnFbLoSu2pFRVdu3fhC6mvnwler1cokMzaJqdqaxDuSD4aEO5d7z8/c/8ycGSHKlPm/kIG/DhiTsaCuSrgKtHkLJdN7YBqMJmi1cJFZybXTgemxFiGZPs1ojk8SzpGsHweMN7WIdMMu4SJS0ckhEbp5h4RrQAK3GwGfrZDqgOYJl5DKXyQZPxhfXDK/z4Rr5pYKn6RGQWEbMB21goQz9NRWSIXdqcAV3Z97xpsAiu6mRAW0UbiCVHTaZKfX09v8mVPb/Wmg6ItU2F/VsmGKcAFg2mnNHWF/lb4WYdqaHh3sFi4gE7TYmhsSuM9eB8arRsgREXZiQV2VZHz6k6EHxRhQ+NKIWyAcMHdPWgTe0+a2XRGOL0lnLnqlRYkwA0znbLBVHRtiOX0m7WKLCDMyoF3W3DLwVub227Qr2dsiwkqE40ukwo8m1e7N7bdpFxQO6AlShBHoWB8FRb1mNM7nuyeawG2m/44IJc01lTq4H0E211Tmuw0UtWaven/TFA5IhQ0l0wFMF425e/XIDHufokZg/DoSMVJRU0lESPZ32yov2u4v/esH9tRWANOtfKm7aAB7yyRTX6rmVrSnoKmb0+syUWzkVaoGxhfmWz5brHVZ8c2t8Lbxxd35yfrxBV2XKX9/YQL93UsVNY0o+6Tbo1nJ+on5nlfd6knJ+Nz4orkkItJCsEGnxhFlH6a+qFoz+ZdFF+O9QoxuUYAADxjz3vyTokuEFWC6YUbk4E99yttRWnOPEv0p6fkFFH2bdm3t7OF2VEpm7tEC7G8y6fnBcDsqUuFlEXaA6Yox8bGc7dKuks7cf0Vj41ip8I0OWC/v7WWp6JQT5rbIBK4wAb+wJW3mdmmozZ0JMB43/rjgnLkzkYwPUz4I/HXOmdsi27w5Zh32Th/g2LMQN8ydASTwsPFHEhhPOGXuTIYKI+rUk6FT5s46G9Q7JVm1t0PmzlMcDTpn7kxA4fWhpbtj5s7eFsK3zprbAkF8ufmc+vV/4Sqx1FECdUqFm/91LGXKiMLyHZOTQPm6+gTzAAAAAElFTkSuQmCC" alt="flash-on"></img>
            100% Electric</p>
          <h1 className="text-[38px] leading-12 lg:text-[53px] lg:leading-15 font-semibold text-[#111827]">
            Drive the Future.
            <br />
            <span className="text-[#16a34a]">Sustain the World.</span>
          </h1>
          <p className="text-[18px] text-[#111827]">
            Smart. Connected. Sustainable.
            <br />
            Electric mobility for a cleaner tomorrow.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-5 mt-2">
            <button className="bg-[#10b981] py-2.75 px-5 rounded-md text-[15px] lg:text-[14px] text-[#f9fafb] font-medium">
              Explore Vehicles
            </button>
            <button className="py-2.75 px-5 border border-solid border-[#374151] text-[15px] lg:text-[14px] font-medium rounded-md text-[#111827]">
              Find a Dealer
            </button>
          </div>
        </div>
        <Image
          src={neww}
          alt="Electric vehicle"
          className="w-[90%] sm:w-[65%] lg:w-[48%]"
        />
      </div>
    </section>
  );
}


function SubLand() {
  return (
    <section className="pt-5 flex justify-center bg-[#f9fafb]">
      <div className="w-[93%] lg:px-8 rounded-lg grid grid-cols-2 lg:grid-cols-4 lg:py-2 lg:gap-y-4 gap-1 lg:gap-x-4 justify-between shadow">

        <div className="flex flex-row gap-4 items-center py-2 px-4 lg:bg-inherit bg-[white] rounded-lg">
          <img className="w-9" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFuUlEQVR4nO1ZeYiVVRS/Lq22oPPu/WbMssxo/aekLFuGypn5zvmeoti0YgUZSEHTJtHGFGMUiYEQgmXMfOe8pzFqYYZBBSOhGJZFChaGRS45LbbYZphOnPvdb3wzvHnbvKc+mB98vFnuPd/93XPuOb97nlJDGMIQeqEZH9AE3QnCh1Rr63BVbdAEXYaxJ3pgQ006eZGqJhiCPbJ4zfCz/ST4WzPOu6Sz+UR1vKNm6fTTDeFhzfjP2HBGjSHoOOIN/FoTzDquwyrBySvc7m+N/2YIGjThll4ihLsMwwIvBcnaFI7XnfWnCSkhnEgHF3iEkzWhr0OcbVLwmCZcaAjfMAydmvEdzfCBZnxfEyzTBPNlbNm8qylodmHzVp9/dDaP8AjvMwRfZnikfA/h75pheS37Vw6KgCF8xB3eRbm8JDtnCNdqwp2GYX/vIgi6xXt2lwnY7j7Do5qDe2RzEoyBCYOpHvnTTAhzrR3GTyRsnY3DmvBNkw4mlEQgeqGEEM5TRxFj2B+nGdo045/xZgjZog0ZBnIhdLc6BkhwU52EUkQC/hPvFWXAuo+xJ8F4qzqGMAwtEQEbznMKniiH17GfMehV9Khh9ikRmvBeF84HNOGUgiYZwhXRJP+WUl+csYCNhmG3YXy61DRpGBa4kN5RkA1N+Jr1QAruH9AowWZD8Lmmxol5bK3JSJPrpUgWzaCzeYS8y4VSS97xhuGliHHwRI6FbXJh9osh/648JKYYwq8ciRVFE1BK6TBocl74yaOGUbkJhDDXVeKlA42RndQEqzMK0TovhTcOaDMdTDCEf0Rjg5mlkDAMGxyJWTkHJji4PhqIG3MO7FHDJMw0448xEVvACB/3Opou7X94RaK7Md+NYf+MQRRYyjnwzHQw2jAckoIycZF/Uj7DooMMw1OacF+mNNCMP0QpGVqk8tYsmz7WELzrQmlt3lDI5sVoY/flzWz2kDL2eAQ3qQJRtyR5qtNRK0V+Z9M7onB7fybYIV4Z0xGcVeg7DOFvMjfvHEPwomO7UJWA8e31J+vQv04SgWFYFWkjPDCQkNMMf8mmacLXJffXpZOJbHY1w7ZoY3FyzgWIIozDoGwyt7V1uNfedK5mv1ETPChiUULJEGw/UnHjlGslxCqR2Zl3D0kWBUeGYfwsGhzcrioMjxpGSTq2abm/dwjX6HaslXGa8Qsrc9LBpAIIwBzn3m2qq35kpRYvGUkzvKIJ/u2XADYZwoO9+T8dXCWf8vvo5Y1n57e8ZNIJ1r15qnLJkDTMeIeTGj1xoTNh8pp4SCL0L48Tiq0j9s4A+wve0Ph2Zhh+rQuT55Rj3XKmRGdpho8zYn5zIoU3ZJ3QVT8yVshuLe8V9ULN+HZcbYsNpUhywF55qV0E4fo+cU64S7KOytMkENK9nmB8tSgCktIM4feOfXsx8jhSo9lSJ2yQsBzX2XxKwbZScK07D90S3kWRsGnVaRk5cMWQsF2LMGiScBS9FGeUUqAZttoNCIOpJUy2+dtmCgkHKVbqKMMQvOze/0KpBhricm4IPvUouExVEIkoC31kOJjer+WzumSjojRFx8RXPcPwrOigci5cIOEmnQkXtm19mm6EW9Sg24+Mi+Nejhwsw/7DtkM3WHTVj5SueKydpJMXyxmPpp3nCOxU5UAi9Ov7ZBpbbKBDDlkhUrw/DPs3x3LBPYszM460XOLKXBYCGUTQCq24uxZ3tAk/tL3PEGeLghQxJ/cN2WVJodLMivquMD9Wmi7N7s1286rhpgvd/3erSkAuHZrhuUgIwqHi+6OwxxA+M1Aoyia4cdtVpWFb8xzM1ATP206b6H3Gb6NGAB6MLj1SpXGdFXPsN+ar9PHlXiq6qkaYFNzpvLVSVSM0Q5s7X/NVNUK7Vo6XgttUNUIzfCMEakO8WFUbajK+u6vkDbFiMOxfHV9+VDVCd/jny9e+muDJY72WIags+B+jn7uIPYApoQAAAABJRU5ErkJggg==" alt="leaf"></img>
          <span className="flex flex-col">
            <h1 className="text-[14px] font-medium text-[#111827]">Zero Emission</h1>
            <p className="text-[13px] font-normal text-[#374151]">For a cleaner planet</p>
          </span>
        </div>

        <div className="flex flex-row gap-4 items-center py-2 px-4 lg:bg-inherit bg-[white] rounded-lg">
          <img className="w-9" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABzUlEQVR4nO1ZwU4CMRDtBQ7eO8Qr3rjyB160s175DhOjUdEz/8BNO+KBmz+AHCB+g//AkWDERE3BDYSw0q7TZRf7kqaHbmfmdbqv3VkhAgIC/heAsCUJ30yfxRg7pFbvQPhl+izG2GEcxS2LMXYUl0C7XgLCm2Vnv7V42n77ZA80DmznAamm8cUae63bKEuNL7ZBSK0+47kVrQ7tg8eYxJCVBGi8dQmg8qCe0mcAF5lIHTBhCzR+JBg+Y0+xQbtekhrP1/qcx2IvsZJwnLQyZjsJT6h1G+XEbUk4ZsmAr+BjsGRgFdsiIHJtNEtfsMEodKKq1OoZCKcWCmOe6cu744P8ECDsu8qkISx8EXB9iePLmCOBtRc37zK6yanF4ljbgqxkVGo1+VnViRcC2rOMAqlTIHw1PScBwQVOo7kkIO+jI6nVo+mLSYDUaP6iqdFfbcE2ZNS7Cukgo7jJ6TRXB9kqLM6BXgoCvcJe5maEO1E1NwQ4AYGA2IFPSrnLH/WS8MIHidqseBZd+pJR65JiklNT7HKSWcIr5rqoGjpr/VLaTbnRgfyAv3g2J9FMmwGHA+7aS+VvXSBZjLGj8ATkDvxiahX6J19AQIDIFb4BW9nQ6sv8uX4AAAAASUVORK5CYII=" alt="electronics"></img>
          <span className="flex flex-col">
            <h1 className="text-[14px] font-medium text-[#111827]">Smart Technology</h1>
            <p className="text-[13px] font-normal text-[#374151]">Intelligent & connected</p>
          </span>
        </div>

        <div className="flex flex-row gap-4 items-center py-2 px-4 lg:bg-inherit bg-[white] rounded-lg">
          <img className="w-9" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAALcklEQVR4nO1baZBcVRV+2XAJVkzS9/UMRuMSEaOgOG5xG3+QmXfOaxYtxwLZpFDUAv9ENBKrHAXBQtAQwjZW4kyf25NIKxhJJYGwTBUlSpWWSMQlAgpuSYiSAiSZDAljnbu8vv36dffrN92TUMWtmqrk9et7z733nO98Z2nPe3m8PI7IyA/3v1EU8VxBeK0gvMeXuFMQ7BYSD/gSJ3yCp32JjwqJ232JNwgZnj9/Y9/rvZfy6C4W3uBL/KYv8be+xMksf0LCH32J3+gq4WLvpTL8keAkQSDVzVY28h9BcLsvYYUgDHKj4VvnjYbzvbHe2UvLA8fwvxeOFk7IFQMUhJcKgk2+hH2Vw4DDgvDHPLd3tI7jimcsFBKGWFi1aYKDfBBCBn280ZYnLA/M4sMShKNC4rg6CMIXfQnDXesD4R1NQ8jgU4Jgr75tHFe2Poxd7Zp/wUj4OkGw2mDGpCD8L6/pHfEx1jvbl3CNvhmlqtvydOqbOrWcoL4lvoQ7HZy4wRvqmeMdibGoPPAq3rC9dZ/Ci3jzPgVns2A+4VYh4fds/z7BIYX0+u8v/BkfnCC4gG+31bUFwcWOWWzN0/K53nSO7qHCq4WEux2A2iwId2RCe9Yegt+wxxDl3mPTytAlg/cJiXuMDA9M3yGUB2bpG0xwW2ybBD8XFK5kRGfUVoA1ODiTkV6hvex/m09whpD4dV/CbT7hc84cX1BrTHoz0ojC3kRI/JvVhGkxB5/gu9Wb1mifKwFkQfsla4JXMNqzv19U7lvgF8NTtHrDMHuWlIdgNAHXep0cguACC3iMyELCDxbIYFE718jJ8KMR2kt8ShTxkynNQWFCR7zD0vLAMQrYKnZ7F5+810G0jzCG8M/pvgOXWDPsHi3k2idMufdY3rCz+a2M9lob4EZBMCYIHtd8XpGgtnF7xpHcaNhjgbeZiUVyEq732rV5IeGXMZvfO93cnsGTD1UQ/mrhutNe0wQPxpWZluDEKau90DeYsBnYx3ydeTvfEiM7C8nf6QS315wDHzMXcB+vUe9dX8Iac9gbp3QAvsS11benKO6o4vblgVnTze35QNm+zeaG6r3HoKy1AA5xROplGXnCC53NTwiCW9qJ9lm5fa6EH6scXnB2vff49o2mrWpNsrHe2YLw+y7g+aPhm2veGxyc6cvgg7wAkxkh8REDfBNCwvOC4Akh4UEhYV0j4MrC7Zksadng6YUbTjsu6R1FwrTWPpJ673laPtdka/StS/xy/B3WAk2E4J8pgW8iT8t9vVn4mpBwhf1/Zm4/6c3wCe43eCDrBmmEz/A7qTS3m7k9wZhRm12C8EO1sT7ezKzP2dxj7AZ9iWflisHJirUN9czhuRjl84QfYHCMhJbwrLHf5wXhdfPLp8zLyu27ivh2JQvhi9ZN1hyqxDvMIZ3XePdDPXMqpAP+FQltRp7CM1VEpz8/JAg2xA8ozRAUvktI/JkTOq+YCrevmCrclvi5xK+az9c0EQxW25uv2jzjgcSbXfYXP5wsI0/hO5kLRKbBEaAT/KTl9pxoVWG2hMP879p1glPNvu5sJMyZltezyrp+l0Nco0L7/RJ83uvA4AM1nmDL4uHeV7bK7ZVGabP6VtLc5hAfTfxy92ghV1Ht8KKYJ9Cbl/jUwiK8tx2bTdzAMHY5t73FVfk03J45iXnnD0n7s8w1eXEJ62way1VBq/Zq86OFE7wODzaJeirfjNvrUBr28zvxVBx/ZglczRdFCd+t6KjEcfeLkUkQ7O/kzccHm59V+ZzET7fC7a3r5oArIYJV5p3wJdhgVOfaWFpbm0SHbD4NwWFtcBMhzbg9A2pEopzBc1hwT0BPfIH9aE72d9vnEeIT3tWa4PA5y9ET/wh/kWqiSW9GhYhVXFczbm+ySdptJoEgwZ+qBSYcjLMotYgiFnCoFVfHZCZGjhIOAO5PO19+pP8dxjQPuNniRty+SwZLzToPuc9zEkOjUdurD0DC74x76Yvn+dg00gqrvlcsLDMb/bXXpqHCZG2el6fh9vOGT3+tkX13HSJ0TfQwz3l7U6uLghTO8hpu3yrDY5qZ5eAajVwx6DUyPslBVzNub3IFNWBnqXBV1CiKeK4R+Hb7TEd1mtunTUdH8xFeHr+tKQ+FBfCE9giF9zTl9kM9c2x0WO0BYB97jyrcEJY/l+Ar9pkOadUEN7Yqa8WbNAs4Wp0Xf6jnDVc24/aW8LAW22ecok80TSHxXnWynMM3QxUn9MtntSyohAfVd4uFZVk2Wndeo6k+wa3NuD2TtXj22F5MDWj6EneqA3BS2iqZwc+KwcmtClqVLa6kzv7Hebt8CQpexsEhrpnr4WbcntcxZriZ/8/ew2SxDtbUHQXBbn5ZNSdEz7QPT1OFqRPiqgNM+hME38lyAJwjtHS8GbcXBJe5a1ni5BOM1AosdQ7OzapaP94o09rK4DQV266dN4smJPH4etyea5GWQquCiloXDnOMUTOxSNhsuw8gmlcVP5XA97bzAFi9q9BeFVfhsDr4SmInGdCF4fquuk/FBBoNFsgA0bOZTcBRdwft98UJEtNtzitaQsTkKHFiwSUsBXhwfCMQ5MCE/a4qR01hWCzIDIKEO6JnRTg+DoK+xJ+aA/hJFDUW8fS6EwtT6WGeXOMGS/AZZ+ItRoDPekfgAHyJ59iNJaD9Pfx/JjhRHEL4glnrqlTVHkF4aRxFfYk3Vd6DFUbdttWfCx5oFOkZd5TJBHS3WR0iRHC92ctN1R4HNzetWAkZnm/sZJObjDDPHrdUWAmvT3WiXl7dprnrfR65p1ZB0KHCblLGoj2zTpVLrIpCYRuDZNruzUkFJPa0uMpD+A81eQk+HG2Q4NZGgY5ufNRxuFv6NmWvy6yArrmlbZBoFAxxzcEyWnPAd7gJ1aZD6BL1pCiG/dFmJV4Vz7oYijnBwJKX4cfj8+hbaJAI0fNd0crmtSxQjpMoy+2ZGFl8YrkE4ZXRIaVfAFUKiau0Vbdmsi5cdamJ9iTuSeoIUaUyFtjcjhHsOb6hVm++UjPQCRG37me1MWbz2QC6q4SLVYVH4rjLlU2Zi2/t7qqqEcF9FiPa3Q+UYPtj8YhPob2tG1Y2f12bsi6wuiopars/ivBF+1x1bhE8ZFWQyceUFq8rk6kDSNxTFasYj+Bo2NTb4fyR4CRlQ9zpRX1L7HPm00aIA/nR8P3uIVhNME0NLdbdm8hTLCyLKkFOV5gYCd7idp2z250qOYuGL/FHSfG17QZjbXDxQFeM4Nsm1Bzz2jQ4EWopely1qxsyuQ+5jd2gXesDEbWcEFwcK4ra9NNet2bIg3GjUaNS6zdvNw+bXCLD/QmO6q/tSBeooHDARl1ckKwqjtpDUGYSfKkDgHdJpPYEm3jNSK5i8JHIBRNe6HVy+Fbl465OtcJXGqXYtXEOvi21wAjtDeI7N6+boXTixpd4tdfxMdQzx9oaNyfE/b36MUSlc0O1t/ENtZRBnvRmaIbHJCf6RcnueBusIl+E/47QPks3WpaRp+VzVXBjNME1h6hRUeJa1x8LCX/l7jHOu3P4ym7U9gly7G5C2nPYjUVdH8ak+NbjMbsussAu88521ySm7xAo0oRxttHkdBdeKQj/3ogC16HFTzK9deuRDh5UmqQkbJv2zceKDGubNkUPDs5knqDSXpyMINxhfivArfMHdd8fPqw/C1cqjUrg7DqHZwqiunfo6kw/sOrMj6DQdGWq3v01bW2U1O1211uSozEm/IR3NI1uzsERro9+H8A3K2GjosIZbomxgaM6U7SYqIAq3OJS36Nu+CU4UQmtOrIi03iGeQJnabhiw+htQZDNqLpZmhskmVO4zdJ8AEBH9Q8hk5MpsKpRISTdj6NgVUejyukYC3RDxXnKjnV5bGcEgtrN7eLODJWEJfgeu8rMndttHP8Hqblr9jFAEvQAAAAASUVORK5CYII=" alt="expensive-2"></img>
          <span className="flex flex-col">
            <h1 className="text-[14px] font-medium text-[#111827]">Lower Running Cost</h1>
            <p className="text-[13px] font-normal text-[#374151]">More savings, more miles</p>
          </span>
        </div>

        <div className="flex flex-row gap-4 items-center py-2 px-4 lg:bg-inherit bg-[white] rounded-lg">
          <img className="w-9" src="data:image/png;base64,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" alt="shield"></img>         
          <span className="flex flex-col">
            <h1 className="text-[14px] font-medium text-[#111827]">Reliable & Safe</h1>
            <p className="text-[13px] font-normal text-[#374151]">Built for every journey</p>
          </span>
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
      <div className="overflow-hidden w-full relative h-50 shrink-0">
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


function Trending() {
  return (
    <section className="w-full flex justify-center items-center py-13 bg-[#f9fafb]">
      <div className="w-[95%] flex flex-col gap-6">
        <span>
          <h1 className="font-medium text-[27px] lg:text-[32px] text-[#111827]">Trending Insights</h1>
          <p className="lg:text-[14px] text-[15px] text-[#374151]">Stay updated with the latest in electric mobility.</p>
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
          {trendingPosts.map((post) => (
            <TrendingCard key={post.rank} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VehicleCard({ name, type, image, price, fig, amount, selfHeight }) {
  return (
    <div
      className={`rounded-lg border border-solid border-[#9ca3af] hover:border-[#16a34a] py-7 px-6 ${
        selfHeight ? "self-start h-fit" : ""
      }`}
    >
      <div className=" flex flex-col gap-3">
        <span>
          <h1 className="font-medium text-[26px] lg:text-[20px] text-[#111827]">{name}</h1>
          <p className="lg:text-[12px] text-[15.7px] text-medium text-[#374151]">{type}</p>
        </span>
        <Image src={image} alt={name} className="w-full" />
        <div className="flex justify-between ">
          <div className="flex gap-1 text-[#111827]">
            <img className="w-7" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADPElEQVR4nO2ZS2hTQRSGR20VFRFt5qRGXelGwQcWRFEpLtR7zo1a0Sr4wIUPxJUgCMVF3RQEFXxrodXeOWnFbLoSu2pFRVdu3fhC6mvnwler1cokMzaJqdqaxDuSD4aEO5d7z8/c/8ycGSHKlPm/kIG/DhiTsaCuSrgKtHkLJdN7YBqMJmi1cJFZybXTgemxFiGZPs1ojk8SzpGsHweMN7WIdMMu4SJS0ckhEbp5h4RrQAK3GwGfrZDqgOYJl5DKXyQZPxhfXDK/z4Rr5pYKn6RGQWEbMB21goQz9NRWSIXdqcAV3Z97xpsAiu6mRAW0UbiCVHTaZKfX09v8mVPb/Wmg6ItU2F/VsmGKcAFg2mnNHWF/lb4WYdqaHh3sFi4gE7TYmhsSuM9eB8arRsgREXZiQV2VZHz6k6EHxRhQ+NKIWyAcMHdPWgTe0+a2XRGOL0lnLnqlRYkwA0znbLBVHRtiOX0m7WKLCDMyoF3W3DLwVub227Qr2dsiwkqE40ukwo8m1e7N7bdpFxQO6AlShBHoWB8FRb1mNM7nuyeawG2m/44IJc01lTq4H0E211Tmuw0UtWaven/TFA5IhQ0l0wFMF425e/XIDHufokZg/DoSMVJRU0lESPZ32yov2u4v/esH9tRWANOtfKm7aAB7yyRTX6rmVrSnoKmb0+syUWzkVaoGxhfmWz5brHVZ8c2t8Lbxxd35yfrxBV2XKX9/YQL93UsVNY0o+6Tbo1nJ+on5nlfd6knJ+Nz4orkkItJCsEGnxhFlH6a+qFoz+ZdFF+O9QoxuUYAADxjz3vyTokuEFWC6YUbk4E99yttRWnOPEv0p6fkFFH2bdm3t7OF2VEpm7tEC7G8y6fnBcDsqUuFlEXaA6Yox8bGc7dKuks7cf0Vj41ip8I0OWC/v7WWp6JQT5rbIBK4wAb+wJW3mdmmozZ0JMB43/rjgnLkzkYwPUz4I/HXOmdsi27w5Zh32Th/g2LMQN8ydASTwsPFHEhhPOGXuTIYKI+rUk6FT5s46G9Q7JVm1t0PmzlMcDTpn7kxA4fWhpbtj5s7eFsK3zprbAkF8ufmc+vV/4Sqx1FECdUqFm/91LGXKiMLyHZOTQPm6+gTzAAAAAElFTkSuQmCC" alt="flash-on"></img>
            <span>
              <p className="text-[19px] font-medium lg:text-[13px]">{fig} Km</p>
              <p className="lg:text-[12px] text-[15px]">Range</p>
            </span>
          </div>
          <div className="flex gap-1 text-[#111827]">
            <img className="w-8" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABlklEQVR4nO3XPUvDQBgH8Jv8CE/xA7i4iOhoB8eUWhzsKNLNIgq+FMEPoJOC/QiJi4IWrIMVR2s614KLgkOrVKgF36BRObmgIEK8u9gkd/T5w20X8vySXO45QjAYzL8DllEGK0Glhpk4I6pEuvivQVTJd0GiQUDPAoCzWGUBEPbi/uvGqVJOGDBRykWzuEHyScsGEMAJAjgBBHCCAFUA0KWRPF7RG5D6tfnhJ8QLAjgBBHDScwC7WaMjhQxdtLf1A1y2b+jAbtqd37+T1Atw99qiwwcz0qc1UAHw6LzQ8aM5X8dNiBrgfLzRqdM13+dliBqwZOc92wYtAGOHs54A9jdaON+iFw/X6gKqrSs6X950i/WCxItZdQE/4wVYruT1BUyerNLOu6MnIF7M0nbnSegaohpgaH+a1p/vha8hKgBY+8DmsnaCtRUyaKICgO0Jo4WM29CJBlQC+AkggBMEqAKoSCxM0djNWniAoAcJKjHTuA26+JhlNAIDgGlshPAG1gMDDO6l+1yEaTS6X7hRZ8Wze8gU9QkhX6c8XVXMmAAAAABJRU5ErkJggg==" alt="battery"></img>
            <span>
              <p className="text-[19px] font-medium lg:text-[13px]">{amount} KWh</p>
              <p className="lg:text-[12px] text-[15px]">Battery</p>
            </span>
          </div>
        </div>
        <span className="flex justify-between mt-2">
          <p className="text-[#111827] text-[18.7px] lg:text-[14px] font-medium">From <span className="font-semibold">{price}</span></p>
          <a href="" className="text-[#16a34a] text-[15.8px] lg:text-[12px] font-medium flex justify-center items-center gap-.75">
            View Details
            <img className="w-4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+0lEQVR4nO3YP04CURDH8VfpBZjZC1BRWlpbvBn+dDQSCpELcYSd2cp7WBEKGg5ARULtHwqVrInRBCwMCTLk90mm3nyTzex7mxIAAAAAwKkh02s2mX1O2b5JUZHLgl0/6iGTTWG5myIi0+VXSOgYruSWXd52YirppGjI5G5fDHu7l6JBTLSYIuICQMxfUKlDMln/fMAxh1xfyDSnQ7Qe+hdk8vxfEfwd83rQd6Y5yZfk8hQ+pMaWB2SyCv1qHVPD8yj80eXXCAu0fgvTe0ScAnYZhz9n8TlEUKlDNn0PvZ3O6qpLrvPwEbWGd67Y5ZFdp6F/BwEAAABACmcLFyT5NNBocPwAAAAASUVORK5CYII=" alt="right--v1" />
          </a>
        </span>
      </div>
    </div>
  );
}

function Explore() {
  return (
    <section className="w-full flex justify-center items-center py-13 bg-[#f9fafb]">
      <div className="w-[95%] flex flex-col gap-6">
        <div className="flex flex-col gap-5 lg:flex-row justify-between">
          <span>
            <h1 className="font-medium text-[27px] lg:text-[32px] text-[#111827]">Explore Our Vehicles</h1>
            <p className="lg:text-[14px] text-[15px] text-[#374151]">Built for every need. Designed for the future.</p>
          </span>
          <a href="" className="lg:text-[14px] text-[16px] self-end flex gap-1.5 font-medium text-[#16a34a] w-fit h-fit justify-center items-center">
            View All Vehicles
            <img className="w-2.5" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNElEQVR4nO2Wv0oDQRDGVzG24SQz29jYWNjmARJBNDOHWEhawSfwEWKltWXKm1GLA58hlZUPoSj4B8uIVfQkKoi5w8rZFckHU/92lm9mPuem+gsCSbsg9IhKdyC0G4ZauJkPKBdfRXn9JE3M2aD88B3MBQhfN7JOyxSMGW+B8tMkHJVeUPnA9Zs1M7iXzSVUOi/D3+uikdGyGdwNWnOgtI9Co/LX0zMq7dnBnXP+mFdR+Ka6ezpbzNcXzOBJvlYHodMq+Nh4XtO2sxQI7aDwsPQA4VdUOlrJu/P/1Hj9Zg2FDj9HbLL7IWTphh38B+OB0JUtWNN2JVj50oYY46t9DHNB6HFKYiwQH3xlDiIcCR/HQNypNJB1EEDh2/AXqNebLWeuUGFPaBuE7sf7Nly8ncr9rt4A1MJW0qxDfyYAAAAASUVORK5CYII=" alt="more-than"></img>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 items-stretch">
          {vehicles.map((vehicle, index) => (
            <VehicleCard
              key={index}
              {...vehicle}
              selfHeight={index === 0 || index === 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


function Why() {
  return (
    <section className="w-full flex justify-center items-center py-10 bg-[#f3f4f6]">
      <div className="w-[95%] flex flex-col gap-6">
        <span>
          <h1 className="font-medium text-[27px] lg:text-[30px] text-[#111827]">Why Choose Evora?</h1>
          <p className="lg:text-[14px] text-[15px] text-[#374151]">Advanced technology, Real world benefits.</p>
        </span>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 items-stretch">

            <div className="flex flex-row lg:gap-4 gap-2 items-center py-3 px-2 border-r border-[#d1d5db]">
              <img className="w-9" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEGElEQVR4nO1YW2hcZRD+m7aiqMS4O3O20uIVrFUsEhW8YHww2TNztimIC4IXBB998IL0ybJWlOIFFAUhak3OTNbQg1LRgngjPqh4Ax9EBUVBMYpYi5YqtZpGZjcJe052ze5m003kfPC/hD3/PzP/N998f5xLkSJFihTdxJaoeAKE/tUgdAcIP4FC+1HoExD+HIS+sYVCn4LS+6A0AcIPoPg3wZh/bteCzrwwfAYK3w1CkyD0JyrPtLfoBxBS1GDYCrG8UZdKPRjydhB+C5Wm2w+6wRI6iMpPgwyd1/HAIeRbQOmL+gfzsSpd+BlUuscTf1u2HPQbReymvNH8WbmQL8CwcEWFOkr3g9DLoHSgQSL/oFLkjeUvXHLsmZAuBaUP6gT9Nyq9BkK35vb40NbmM24NjvkXg9AuFPqq3hkg9HhfdF1ve40p/NgCqggdBOGHYJRzrsPIjvM1IPyq3WiiT35CocGmN7KrB+GPajexRrWrzzw3fKpbZngSXATKbySSmEah3W5yYN1/By98JQj/mqj6fk+2nb3cgScBIV+PQlMJWr0O0cAprh68cSqA0h/zVVc+gkp3Glddl7ChXMhWaBXvj489GcTYD3Pqb0Hlo7W8MyVp9qDe0e2nmfqg8sN2Y6ZYIPRLpSAmj0JTRksQLptS5dS/zEXFtU03u9LOWG8Ivxv7Dag/VJPh11gOzll046i4FtS/wSoEQn+1rvv8o01uK14zeXjCt1fVr0LrqQVZgtAOFHpkUVkslXpss4pF6MgA42Og/IpJ6qJJaHAtKI2YYrl2kA39S4yDdSzBNCq9B0IP2rTOlAube8tBn93Sxqh4knHWKweXg/BtKLwHhL+vO1uEnvRk8GTXcVR46N9VbewaeVX+2fjZNzG0qaX9SqUeqyIqRdXJG1O9L0GCrZ0L3rgu/Gw8cGtOvs+qu9TtM5o/36Z6ojCHQdjvSPyoJImh9mFTTd7yOXwzKh2qOetoSxO4Lkb61ydG+/P2N7dMyJQLm0Hp25rekiVvikqPVp0j7Wx1qJ05OnBiq99kNb8BlN8Gpe/aVpu2MNK/HsIgj8pPgdJns/5+Tl2mZh8/O6zKbkWhVOoBCYp1LXGDBUpvdlZpluBVUPmdxoHy4fnpWefhAsL3um5hYcPNzgWh3TBOV80PpBm3xnjtSXBjRfcXPEdJ7BaPewKo9FK8mrSrodVN+P3krWVDn93xRsUhzr3SwiDf0seTA+us2bHqg47Ym9l1A2a5rQ/a/R4k2GqP/s5GleJ/gL6JoU2o/GLV29AhUN5nps2tluAh+Y+B2WZv2XZ3A9XKN5rCFLmVDoxb4uSr63e3yhP4za10gPK+xgnQXrfSkbEn4pyVjjvQA6erv9GtHhmlyDhfXbR31QSfIkWKFK4V/Avft1ptPVrRnQAAAABJRU5ErkJggg==" alt="wifi--v1"></img>
              <span className="flex flex-col">
                <h1 className="text-[13px] font-medium text-[#111827]">Smart Connectivity</h1>
                <p className="text-[13px] font-normal text-[#374151]">Stay connected with real-time insights.</p>
              </span>
            </div>

            <div className="flex flex-row lg:gap-4 gap-2 items-center py-3 px-2 border-r border-[#d1d5db]">
              <img className="w-9" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADtklEQVR4nNWZXYhVVRTHlx8ZqSDjvXudO2pBJhWBhORXggyIH2etc0d7cPIpJJQIfCh8MMSHKwThBwY+DiLOWWvuCBd9CIyCoAkMjMh6USMYPx4UgxSR8qP8GNnn7jMz3rlnvJjO7POD83T/57DX3f+99tp7ATxPal1TjNJPqDz4pMco3zFxtA58JJCws5Ug0ifopU3gI6j0bfJvC+3M0gRCq+qB0OW3al3TwDdMT/gaKj0wQv9iX2eQpUOhE/Vgo8/AR4zSl242NEtT0HVvJMEq/zMnfq8AvjGv1vWSEb5et0y4PEtnlLqdrQ6CjwTCW5IBCv2WpSkdDo0Ruo1C960NwUdQ6JckCwlvydZwxWWrY+AjGJffdXa5EciaGc00Cw6GL6LS1foa4hXgI0ZI3QAPZGlQaavT/Aw+0l4tF+0OjcIPizG93lQ0CJOM8FmXcrvAR4zQTmerb7I0xV4iV5JchP6OqeAdlcpko3TBlRrlLJlR+s6l5U/BR1Cj9W4DvGSLxaaaXlpobYfCN9tqq2eB53XVjmwNx25/2Qc+YtK6SvluIGuwmabQt35OUncJ32uPy6+Az3UVCvVkaVD5C5dyq+Aj80bUVSUNlzTTtHeXpxula0kiqEZLweu6SvnXLI0R2uY0P4CvoNBpt8g/HEPze4unxJPjO/p0gBour29udM1aLEtnhPpbPLefGd8IGuqq/5NOA+FltpS3Wa+o0UqYsLpK6QFWo/lP8w17RrezMKGHK5PWVUInnvobSp+ndZepdcx8tiNsdRBC51vyvVB/8/ejt1H5v6RkiaPVMFGg8skWM9HAqJf7O6YOZzs+BD6DSvtdIHtH/8a7nC2vzKpGbeAzxlmvENPixiugepLgQYx5A/hMUI2Wuv3lgj0RDv1QqUxOLTnWfZf3tkKl7S6Iv+x1EPiOaWKrQDpfReG/6zMVbgTfKWm4ZJSt7IWDO+Iaoa8gD6DQvkZbYUwfu1R73RzhEuQB02Cr2T3RXHtZlwQS8weQB0pNbGWt5Gboa8gL2GAro9Hm+sbHN9uOrn0Z8gIqD6S2smthqLUg0UeQF0oNtkKl4y5Lff/YppgnWxWV33dB3fK29/EkW9kWsxH60x2WPoE8UYhpcWorI9Tn9oxTWVen3oJKe1wg59Lmf6FafhPyBjpbDZ8KPW01t2Krocc2QLvfeQHyBirvHQ6C7xXjcBHkERxhK6O0G/JIYYSt7EK33VrII5jaSuh+1k18LkDlP7zuQEGLJO024R/HusAeLx4Bt8p74psGLpkAAAAASUVORK5CYII=" alt="lightning-bolt--v1"></img>
              <span className="flex flex-col">
                <h1 className="text-[13px] font-medium text-[#111827]">Fast Charging</h1>
                <p className="text-[13px] font-normal text-[#374151]">Charge faster, get back on the road sooner.</p>
              </span>
            </div>

            <div className="flex flex-row lg:gap-4 gap-2 items-center py-3 px-2 border-r border-[#d1d5db]">
              <img className="lg:w-9 w-13" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABI0lEQVR4nM2VMU5DMQyGnxgYKsbaLVfgCAiEuj37denABCPcAaYeoFyAAZX6f1PHLpyEqQMCigQScIWiCFWCJ57SNI2KpQyJ/edzotjJMo+R6QdD538Ok88s1hg6X8W3OUCrlC5DZrXXgrohsya08Gds8kKm+6GJ0Sg/cBA/IOJeeRntZgH9/hZDT5MBuJTz6FdVF9S+yYmgb8kAbHLLkEESQBPFIUEeaXy0s3bA3vh4m0zvGUXPzQny/qPAptEAMrlkyF01jqATgl5EAxg6XWTssv9eK3ruVO500YCqb/e62yDoQ6vUzi/nugBkesWQYag2ACCvriaSARhytop2OYDlJ64fJQP47J8ATJ/d7xS6+aKd+ANLETJ9Cv2TnYZM8+qGX8PA8J8JTYhMAAAAAElFTkSuQmCC" alt="external-battery-charge-mobile-telephone-those-icons-lineal-those-icons"></img>
              <span className="flex flex-col">
                <h1 className="text-[13px] font-medium text-[#111827]">Battery Safety </h1>
                <p className="text-[13px] font-normal text-[#374151]">Advanced protection for complete peace.</p>
              </span>
            </div>

            <div className="flex flex-row lg:gap-4 gap-2 items-center py-3 px-2">
              <img className="w-9" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABK0lEQVR4nO3awUrDQBDG8X0FS3cu6k19lOJMX6v6HDqLSAk92b6VBa2nnpRNmoOIOkN2Q8XvD7mVGX7J9rYh/Ocm6fqMVBpKvKMk72WePItX04f55WiIqLItB/j8RJXt5G5+Wh3SfYl24VPJhXkWKa9bkPIy1K4/TjXe2snj7LyDyEuoXX8EfvnNbVTefz02vI8qN0PnjwdRefvpTz10fpEsi/Jb//6L8GLo/CLVXkSAOAPEGAHiDBBjBIgzQIwRIM4AMUaAOAPEGAHiDBBjBIgzQIwRIM4AMUaAOAPEGAHiDBBjBIgzQIwRIM4AOTqIymtelK9y/PELA7zqlvG6JKa9qJNkc4A0oXbTe76KiZ/7I1DjUk3U2UUYo8MFmGV/zIo8eZZKMxriWPsA3ytdV/+1vn8AAAAASUVORK5CYII=" alt="iphone14-pro"></img>
              <span className="flex flex-col">
                <h1 className="text-[13px] font-medium text-[#111827]">Mobile Control</h1>
                <p className="text-[13px] font-normal text-[#374151]">Control & monitor your vehicle anytime.</p>
              </span>
            </div>
        </div>
        
      </div>
    </section>
  );
}


export default function Home() {
  return (
    <>
      <LandingPage/>
      <SubLand/>
      <Explore />
      <Why />
      <Trending/>
    </>
  );
}