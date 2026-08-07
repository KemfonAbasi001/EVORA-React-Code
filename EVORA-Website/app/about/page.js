import Image from "next/image";

import personone from "../../public/person-one.png";
import persontwo from "../../public/person-two.png";
import personthree from "../../public/person-three.png";
import personfour from "../../public/person-four.png";

const leafIcon =
  "data:image/png;base64,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";

const lightIcon =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEH0lEQVR4nO1ZzY9URRBvdkHDV4zMVL/BbAQSInGDCZGEA4rLQdhXNbt7UCd68aD8G8IgatALBIMBEjY4VbOQvIRw46CB5SOAX1xQWeLBILsmRhIS0APIYU336/fcJYszs/P6ZZbsL+nkTb+eqv5VV1VX91NqHs1BM57XQt+ruQ4tNGmamuvQ80Q6DE8SkYua8YLqBIDgbhD8ujQcQl46S8MhgNBXwPhxZkI102njHsB0LQ8yJUOC6Zp1S6bTXgQ3IlOUgZeB8UNgHNWMYyD0t2n2mXHUvDNjstCVgZXwqppUC9KXk2oBSPiWZrqRBHfDxnQDGN98VI5mvOp99Y1gq4hxTFWrXaYv4ME1wHQlmSAI/qYZP4daub8g/esC3rbUNPNs+uw7plv/kcJLwbH+1VZBtdpljcH4Qz7x6KxYrNNrwHjbWfAWML6nokp3w/9Hle6ihO9rpvGYPP1pZKkpsnODI/HAWfWksXqrMiDqWwZCp2JD4IOUTF6I3cmthOC+tqxYrXYB4/5kZQIeXKNygQnsNCbwZBIrbcGQcSujBS/l4l42O7mYmI07PVZu1LdMC05Y2TV6Q3mFTY9xirWBnTECph3OXa8rnzAbWZJim8pOrSKqdKeZrE4blC8A0x7nxwd86dBCB52xdvvSoWzZEcdH6EtHsY7oMtgZn+fvX2Ii29f60lGQ/nVJCTMrAXZzYrw5Q110MRmjBe+ZvsLRoeXKEwpHh5Y7973X7LyaIzLlUARC901fb1R5yheRtQfCp51r3W92Xi3D7LxGSMDbdJaTn6bjGJVcev/DZ9ayOzrUwld96ShKeUu6w/uCZvzCLe0ubzoEdzodB33pUFrKQy79/uxLBwj+GLtvOKh8BmIaJyPlTVnLL46UN7r4uG10KZ/QTB+k6S/jKhXchquZqso3eqLKYnucjavUd7OSG3D5HUdifOWRgSUqDySlvGb6qyRhb7vyijV8QTPdtS5bx7dVngChQ0kp0RNtXzFbOc9Grz8DQj85WcMqb8SBj9+4Xfb8bILTVAjAeDa5YuqJKotVHnB3W1fMVab5rY8PBiD4qyu7T7QU/PGRecRlqZuF40PPmW4QvAxM33m900pvAAUvp/01elEz3mn1DGHGupW4MzXOgPHbXG4ZZ1JQrIV9mumhFvon4PL6RvJ0HV+y45keBlLe2oqutqCFzjUSrIU+c1XroUbygPGwq6c+nel9aRoZHG1v9tMnWTMntv+zTqlOq5q+93VtZW3g+QafFc5oxi9V3miViOpU6CYnOE8kDyRH1KSgNJtdo+8lqiNxZOOiqefpmAiOzT0iyp4gf3dpevPjxkAdX3Gpd0J1KjTj3mYzFjB9ojoVvbE77U1WZuaGE4aEzyulbDHat9B8I7eX0kzjIPiR6ctYyzxUp+JfE5sFKHgOReQAAAAASUVORK5CYII=";

const groupIcon =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEXklEQVR4nO1YXYwURRBuEPAPRdnpHjQk+gBqEJ4OE1/M+SC3UzX8+OAGFf9C1MhPiKLR3NO98W5i1IvIulV7KKPvGiIh4fwJKPBuosbfB42aCPiTAEeqp2dvb/dmZ/bnko3Ol3Syma7uqq7q+qp6lSpQoECBAgUKzKJ0cOsNmmDcMH6hGc/LsL8JxnU0ulwNM1ZxcI9h+NEwzsw7CH8o1WCjGkZ4NbjDMPzhDP1E18KyeNyOWlg2DJ/Gc/C7NxWuVcMGTfixGKgJ31PHR5e0CRwfXWIYIivDeFQNE0pTm+9yxv92c/TAijS5FdVtN0kERFYiphYUM2qR5vBJCX0jGe3VwMdlrlnUUPhsfM+BsrbVBOxkn+5VXy4YhmqHZHy7xahxN3cge188EEcLxnvVl8N4fMwtPCeeMoe3+LqKq0wdnom/4Yypw6MNefmeNwKM9dYImC715TiAY4waPNdmAAW7EqZpzQG5373kgOlSXyY0wwVZ5NMm0zon3xyTnJ+7Bo86z0apLET4vpP5qF99HdHLhsLtiXdtIhIGUpVleHUAzfBZwlSaxtb0q68jkpBK+FrnNONul1zTrXNSZaXapiWjJvzemwpHBqUvFYaCHc1JtZKDG2XMSSrGR+Zbaysvha9owlNWlvCcJjipCV72adP1g9aXCsN4KNWTDAfVgGEGrm9GLXL0Np140hCcEG/1VFiGTd9/Et5UuFYTviQ0qRm+SVoCTfC1YfjQ1OHFVgZaENxWHb3GhpPgiGb8VhP8JVQXGwXvSlVcF1WWJfI+hesN4weG4VJqO9AYcEnqgf9O+e5k/ZpXg6vlqkgna/XFui7Ib7FB5kQml/GWEQh/zjSE4Ce/DtsN4Qua8R+XbMLnhzQHD/nV8u23TG6+Tob81hRWpN8RZzhe/1vW+hQ+nFdfZyaaHFmqCd9qWvCllPYSl+8UI1ZHlWulZbClneBsm1cZX18dja3MctCttQdLmuDNeaJ1RvYWHaJLdIpu10qcaWKkyfZKHzOApbH4zuJTHTNfWl/3gDEMf3qMoeoSPgVbEo6XvbL0eRzsTCp2G62KwUkhkXdtlnL7RCS8LFfH4/C+bo1vHILD+zXBv/FewViWvOHgXvcngbTjT9iPEipN8Gt8gGBH1iZxwsXtgibYo/qER7gvefDnSVR54Lib8otcNSWhcWH8PI/C+NVk5U+piYnF/R5ARZWrDMHpOV7NsoHgpG3JOdgpzdKxbhbb5JbOsQ7b+zbeQdglIQ6VA2Kri8IxldypPAwS/3USP1ya60C/WBdVlnXz2BcmSwhEevHvGh7NuBLJ01ETHFYDhpYCOd9jvxUTE4uTiElhnU2i9NHowzXB3p4e2TlgZml8d9O36U62NUhEDiGnSamAJxob1mGDUF7M3+FWKX59Wz45stTUcJvrQC83txhpB7AtDcHenvRpxjey+52ex2tqwSG0x7DfEHxlCC72bTTBRbsXB88PhJYLFChQoMD/ClcAl6fcHbxbsowAAAAASUVORK5CYII=";

const values = [
  { icon: leafIcon, title: "Sustainability", desc: "Committed to reducing emissions and protecting our planet." },
  { icon: lightIcon, title: "Innovation", desc: "Pioneering smart solutions that shape the future of mobility." },
  { icon: groupIcon, title: "Integrity", desc: "Operating with transparency, trust, and a customer-first mindset." },
];

const linkedinIcon =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABxElEQVR4nO2ZvUoDQRDHVxQ7jTHZORQEC22s7W3EZCbR2AiiYGfpK9iI4EMIkpkTIQ9gp4n6IHaKHwT8qGwii2IRLtk7LW4v7h/+3ezc/Jjb291bpby8vH4lqFMNhFpa6B2EOmlaC71rxmbA5dVkEIJHaRcPvaCYDpN0ouOygxCrMbpBrbQLBWtX8NIOwvSWdqFgNb7G6UgnC1YeRAYKBO8DrmxO19cLxsDlbS30mDkQXa+UXPlcq7+ATEp5vDs+31jOZQ4kiNgimMUpcyCa8Ukz7kydVovG33PkIXMg4JCVB5EBAlExxsSIuTFrUf5sZWahsTFaOF4bK9RxEYT2teCz8yBm4dRM5X7Pzp3UJoDp3G0QXplTcdRcGgHGa2dBkig4Kc2C0If7II2NYVuIFgqdBdFCe8B0Z+K00C2EuNszZ4hbToIA43qS83fxtDLvKshVj7ytqPi8ZTOaJkg7Mi9jO3JARw25CfLHvOBBxINEyoOIByEPAh4kWuBB1D85s0OmQDgDFz1ML1YQc3uaeqHS31rowgpi/u+mXShYXBSqWEG+ukKH7nYDD2JB/HQmxKq5PXVizjC9mdcpdie8vLxUtz4BH43D3afcbPAAAAAASUVORK5CYII=";

const teamMembers = [
  { name: "James Carter", role: "Chief Executive Officer", image: personone },
  { name: "Sophia Lin", role: "Chief Technology Officer", image: persontwo },
  { name: "Daniel Brooks", role: "Chief Operating Officer", image: personthree },
  { name: "Olivia Bennett", role: "Chief Marketing Officer", image: personfour },
];

const milestones = [
  { year: "2018", desc: "Evora was founded with a vision for a cleaner future.", filled: false },
  { year: "2019", desc: "Launched our first EV charging network.", filled: true },
  { year: "2021", desc: "Expanded to 10+ countries across three continents.", filled: true },
  { year: "2023", desc: "Surpassed 500K+ customers and 1000+ stations.", filled: false },
  { year: "2024", desc: "Continuing to innovate for a sustainable world.", filled: true },
];

function ValueCards() {
  return (
    <div className="py-8 px-4 sm:px-8 lg:px-15 gap-8 sm:gap-10 lg:gap-12 w-full flex flex-col sm:flex-row items-center sm:items-start justify-center">
      {values.map((value) => (
        <span key={value.title} className="flex flex-col gap-3 items-center text-center max-w-xs">
          <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-[#e5e7eb] rounded-full shadow-md">
            <img className="w-8 h-8 sm:w-10 sm:h-10 object-contain" src={value.icon} alt={value.title} />
          </div>
          <h1 className="text-[#111827] text-[16px] sm:text-[17px] font-medium">{value.title}</h1>
          <p className="text-[14px] sm:text-[15px] text-[#374151]">{value.desc}</p>
        </span>
      ))}
    </div>
  );
}

function AboutIntro() {
  return (
    <section className="w-full flex justify-center items-center px-4 pt-20 bg-[#f3f4f6]">
      <div className="w-full sm:w-[95%] max-w-5xl flex flex-col items-center gap-9">
        <div className="flex gap-2 w-full sm:w-[80%] lg:w-[40%] flex-col justify-center items-center text-center">
          <span className="flex flex-col gap-2">
            <p className="text-[#16a34a] font-medium">Our Mission</p>
            <h1 className="font-medium text-[26px] sm:text-[30px] lg:text-[35px] text-[#111827] leading-8.5 sm:leading-10 lg:leading-11.25">
              Building a Sustainable Future for All
            </h1>
          </span>
          <p className="text-[14px] sm:text-[15px] text-[#374151]">
            We believe in a world where clean energy powers every journey. Through innovation,
            partnerships, and purpose-driven solutions, we're creating a greener tomorrow.
          </p>
        </div>
        <ValueCards />
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="w-full flex justify-center items-center px-4 pb-10 pt-20 bg-[#f3f4f6]">
      <div className="w-full sm:w-[95%] max-w-5xl flex flex-col items-center gap-9">
        <span className="flex flex-col w-full sm:w-[70%] lg:w-[40%] gap-2 items-center text-center">
          <p className="text-[#16a34a] font-medium">Our Journey</p>
          <h1 className="font-medium text-[26px] sm:text-[30px] lg:text-[35px] text-[#111827] leading-8.5 sm:leading-10 lg:leading-11.25">
            Milestones That Drive Us Forward
          </h1>
        </span>

        <div className="gap-8 sm:gap-6 lg:gap-5 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 py-9 border-t border-x-0 border-y-0 border-solid border-[#e5e7eb]">
          {milestones.map((item) => (
            <span
              key={item.year}
              className={`relative py-5 pl-5 pr-6 lg:pr-10 border-l-2 border-r-0 border-y-0 border-solid border-[#e5e7eb] after:content-[''] after:absolute after:left-[-4px] after:bottom-0 after:w-[7px] after:h-[7px] after:rounded-full ${
                item.filled ? "after:bg-[#16a34a]" : "after:bg-[#16a34a]"
              }`}
            >
              <h1 className="text-[22px] sm:text-[25px] text-[#111827] font-medium">{item.year}</h1>
              <p className="text-[#374151] text-[15px] sm:text-[16px]">{item.desc}</p>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function PeopleSection() {
  return (
    <section className="w-full flex justify-center items-center px-4 py-20 bg-[#f9fafb]">
      <div className="w-full sm:w-[95%] max-w-5xl flex flex-col items-center gap-9">
        <span className="flex flex-col w-full sm:w-[70%] lg:w-[40%] gap-2 items-center text-center">
          <p className="text-[#16a34a] font-medium">Leadership Team</p>
          <h1 className="font-medium text-[26px] sm:text-[30px] lg:text-[35px] text-[#111827] leading-8.5 sm:leading-10 lg:leading-11.25">
            The People Behind Evora's Progress
          </h1>
        </span>

        <div className="gap-6 sm:gap-8 lg:gap-12 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-[#f9fafb]">
          {teamMembers.map((person) => (
            <div key={person.name} className="flex flex-col shadow-md rounded-lg overflow-hidden">
              <div className="w-full aspect-square overflow-hidden bg-[#e5e7eb]">
                <Image
                  src={person.image}
                  alt={`${person.name} photo`}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="flex gap-0.5 flex-col p-3.5 bg-white">
                <h1 className="text-[16px] font-medium">{person.name}</h1>
                <p className="text-[14px]">{person.role}</p>
                <img className="w-6" src={linkedinIcon} alt="linkedin" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <AboutIntro />
      <TeamSection />
      <PeopleSection />
    </>
  );
}