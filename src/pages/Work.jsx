 import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

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
    {
      img: "https://i.ibb.co/T443wQ6/soul.jpg",
      title: "SOUL – Leadership Conclave",
      desc: "Design, Digital campaigns, graphics, Influencer Marketing, Performance Marketing, Social Media, Videos",
      categories: ["DESIGN", "DIGITAL CAMPAIGNS", "SOCIAL MEDIA", "VIDEOS"],
    },
    {
      img: "https://i.ibb.co/NYRc0F4/meta.jpg",
      title: "Meta – Mahindra Excellence in Theatre Awards",
      desc: "Design, Digital campaigns, graphics, Influencer Marketing, Performance Marketing, Social Media, Videos",
      categories: ["DESIGN", "DIGITAL CAMPAIGNS", "SOCIAL MEDIA", "VIDEOS"],
    },
    {
      img: "https://i.ibb.co/JR0vGFM/resmed.jpg",
      title: "Resmed – For the Love of Sleep Campaign",
      desc: "Design, Digital campaigns, graphics, Influencer Marketing, Performance Marketing, Social Media, Videos",
      categories: ["DESIGN", "DIGITAL CAMPAIGNS", "SOCIAL MEDIA", "VIDEOS"],
    },
    {
      img: "https://i.ibb.co/55Zt6WG/rajpusht.jpg",
      title: "RajPusht",
      desc: "Design, Digital campaigns, graphics, Performance Marketing, Social Media",
      categories: ["DESIGN", "DIGITAL CAMPAIGNS", "SOCIAL MEDIA"],
    },
    {
      img: "https://i.ibb.co/JHQwRwX/sleepyji.png",
      title: "ResMed – Sleepy Ji",
      desc: "Design , Digital campaigns , Social Media , Videos",
      categories: ["DESIGN", "DIGITAL CAMPAIGNS", "SOCIAL MEDIA", "VIDEOS"],
    },
    {
      img: "https://i.ibb.co/Z8jsWv1/amyr.png",
      title: "AMYR",
      desc: "Design , graphics , Videos , Websites",
      categories: ["DESIGN", "VIDEOS", "WEBSITES"],
    },
    {
      img: "https://i.ibb.co/2vCyY0P/indiaai.png",
      title: "INDIAai – The National AI Portal of India",
      desc: "Design , graphics , Social Media , Videos",
      categories: ["DESIGN", "SOCIAL MEDIA", "VIDEOS"],
    },
    {
      img: "https://i.ibb.co/DQWgnfK/graphictravel.png",
      title: "Graphic Travelogues",
      desc: "Design , Digital campaigns , Social Media , Videos",
      categories: ["DESIGN", "DIGITAL CAMPAIGNS", "SOCIAL MEDIA", "VIDEOS"],
    },
    {
      img: "https://i.ibb.co/4YVJ54p/kabira.png",
      title: "Mahindra Kabira Festival",
      desc: "Design , Digital campaigns , graphics , Social Media , Videos",
      categories: ["DESIGN", "DIGITAL CAMPAIGNS", "SOCIAL MEDIA", "VIDEOS"],
    },
    {
      img: "https://i.ibb.co/4KsJLv7/readwhere.png",
      title: "Readwhere Android App Video",
      desc: "Digital campaigns , graphics , Videos",
      categories: ["DIGITAL CAMPAIGNS", "VIDEOS"],
    },
    {
      img: "https://i.ibb.co/285mPw7/niryas1.png",
      title: "Niryas Foods – Friends Day Video",
      desc: "Digital campaigns , Social Media , Videos",
      categories: ["DIGITAL CAMPAIGNS", "SOCIAL MEDIA", "VIDEOS"],
    },
    {
      img: "https://i.ibb.co/Yt7xN5g/niryas2.png",
      title: "Creative animated posts for Niryas Foods",
      desc: "Digital campaigns , Social Media , Videos",
      categories: ["DIGITAL CAMPAIGNS", "SOCIAL MEDIA", "VIDEOS"],
    },
  ];

  const filteredData =
    active === "ALL"
      ? workData
      : workData.filter((item) => item.categories.includes(active));

  // 🔹 GSAP refs
  const titleRef = useRef(null);
  const btnRef = useRef([]);
  const cardsRef = useRef([]);

  // 🔹 Page load animation
  useEffect(() => {
    gsap.from(titleRef.current, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(btnRef.current, {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.6,
      delay: 0.4,
      ease: "power2.out",
    });
  }, []);

  // 🔹 Filter change animation
  useEffect(() => {
    if (!cardsRef.current) return;

    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 30,
      scale: 0.95,
      stagger: 0.12,
      duration: 0.6,
      ease: "power3.out",
    });
  }, [active]);

  return (
    <div className="px-6 md:px-20 py-12">
      {/* TITLE */}
      <h1
        ref={titleRef}
        className="text-5xl md:text-7xl font-extrabold text-center mt-10 mb-8 tracking-tight"
      >
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
            className="cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[300px] object-cover rounded shadow-md border"
            />

            <h3 className="text-xl font-bold mt-4">{item.title}</h3>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
