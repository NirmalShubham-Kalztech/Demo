import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";
import work4 from "../assets/work4.png";
import work5 from "../assets/work5.png";
import work6 from "../assets/work6.png";
import work7 from "../assets/work7.png";
import work8 from "../assets/work8.png";
import work9 from "../assets/work9.png";
import work10 from "../assets/work10.png";
import work11 from "../assets/work11.png";
import work12 from "../assets/work12.png";

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const categories = [
    "ALL",
    "DESIGN",
    "DIGITAL CAMPAIGNS",
    "PRINT WORK",
    "SOCIAL MEDIA",
    "VIDEOS",
    "WEBSITES",
  ];

  const [active, setActive] = useState("ALL");

  const workData = [
    { img: work1, title: "SOUL – Leadership Conclave", desc: "Design, Digital campaigns, graphics, Influencer Marketing, Performance Marketing, Social Media, Videos", categories: ["DESIGN", "DIGITAL CAMPAIGNS", "SOCIAL MEDIA", "VIDEOS"] },
    { img: work2, title: "Meta – Mahindra Excellence in Theatre Awards", desc: "Design, Digital campaigns, graphics, Influencer Marketing, Performance Marketing, Social Media, Videos", categories: ["DESIGN", "DIGITAL CAMPAIGNS", "SOCIAL MEDIA", "VIDEOS"] },
    { img: work3, title: "Resmed – For the Love of Sleep Campaign", desc: "Design, Digital campaigns, graphics, Influencer Marketing, Performance Marketing, Social Media, Videos", categories: ["DESIGN", "DIGITAL CAMPAIGNS", "SOCIAL MEDIA", "VIDEOS"] },
    { img: work4, title: "RajPusht", desc: "Design, Digital campaigns, graphics, Performance Marketing, Social Media", categories: ["DESIGN", "DIGITAL CAMPAIGNS", "SOCIAL MEDIA"] },
    { img: work5, title: "ResMed – Sleepy Ji", desc: "Design , Digital campaigns , Social Media , Videos", categories: ["DESIGN", "DIGITAL CAMPAIGNS", "SOCIAL MEDIA", "VIDEOS"] },
    { img: work6, title: "AMYR", desc: "Design , graphics , Videos , Websites", categories: ["DESIGN", "VIDEOS", "WEBSITES"] },
    { img: work7, title: "INDIAai – The National AI Portal of India", desc: "Design , graphics , Social Media , Videos", categories: ["DESIGN", "SOCIAL MEDIA", "VIDEOS"] },
    { img: work8, title: "Graphic Travelogues", desc: "Design , Digital campaigns , Social Media , Videos", categories: ["DESIGN", "DIGITAL CAMPAIGNS", "SOCIAL MEDIA", "VIDEOS"] },
    { img: work9, title: "Mahindra Kabira Festival", desc: "Design , Digital campaigns , graphics , Social Media , Videos", categories: ["DESIGN", "DIGITAL CAMPAIGNS", "SOCIAL MEDIA", "VIDEOS"] },
    { img: work10, title: "Readwhere Android App Video", desc: "Digital campaigns , graphics , Videos", categories: ["DIGITAL CAMPAIGNS", "VIDEOS"] },
    { img: work11, title: "Niryas Foods – Friends Day Video", desc: "Digital campaigns , Social Media , Videos", categories: ["DIGITAL CAMPAIGNS", "SOCIAL MEDIA", "VIDEOS"] },
    { img: work12, title: "Creative animated posts for Niryas Foods", desc: "Digital campaigns , Social Media , Videos", categories: ["DIGITAL CAMPAIGNS", "SOCIAL MEDIA", "VIDEOS"] },
  ];

  const filteredData =
    active === "ALL"
      ? workData
      : workData.filter((item) => item.categories.includes(active));

  const titleRef = useRef(null);
  const btnRef = useRef([]);
  const cardsRef = useRef([]);

  // Page load animation
  useEffect(() => {
    gsap.from(titleRef.current, { y: 60, opacity: 0, duration: 1, ease: "power3.out" });
    gsap.from(btnRef.current, { opacity: 0, y: 20, stagger: 0.1, duration: 0.6, delay: 0.4, ease: "power2.out" });
  }, []);

  // Filter change animation + scroll parallax
  useEffect(() => {
    if (!cardsRef.current) return;

    gsap.from(cardsRef.current, { opacity: 0, y: 40, scale: 0.95, stagger: 0.12, duration: 0.6, ease: "power3.out" });

    cardsRef.current.forEach((card) => {
      gsap.to(card, {
        y: 30,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });
  }, [active]);

  return (
    <div className="px-6 md:px-20 py-12">
      {/* TITLE */}
      <h1 ref={titleRef} className="text-5xl md:text-7xl font-extrabold text-center mt-10 mb-8 tracking-tight">
        Our <span className="text-green-500">work.</span>
      </h1>

      {/* CATEGORY BUTTONS */}
      <div className="flex flex-wrap justify-center gap-6 text-lg font-semibold mb-12">
        {categories.map((cat, i) => (
          <button
            key={cat}
            ref={(el) => (btnRef.current[i] = el)}
            onClick={() => setActive(cat)}
            className={`transition-all ${
              active === cat
                ? "text-green-500 underline underline-offset-4"
                : "text-black hover:text-green-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* WORK GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {filteredData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="relative group cursor-pointer perspective-1000 transform transition-transform duration-300"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              const rotateY = ((x / rect.width) - 0.5) * 20;
              const rotateX = ((y / rect.height) - 0.5) * -20;

              gsap.to(e.currentTarget, {
                rotateY,
                rotateX,
                scale: 1.08,
                boxShadow: "0 20px 40px rgba(0,255,150,0.25), 0 0 60px rgba(0,255,150,0.15)",
                duration: 0.3,
                ease: "power2.out",
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                rotateY: 0,
                rotateX: 0,
                scale: 1,
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                duration: 0.4,
                ease: "power3.out",
              });
            }}
          >
            {/* IMAGE + Glow */}
            <div className="overflow-hidden rounded-lg">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[300px] object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 rounded-lg pointer-events-none bg-gradient-to-tr from-green-400/20 via-green-500/10 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500 mix-blend-screen"></div>
            </div>

            {/* FADE TEXT */}
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
