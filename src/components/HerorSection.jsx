import { useEffect, useRef } from "react";
import LiquidEther from "./LiquidEther";

export default function HeroSection() {
  const textRef = useRef(null);

  const animateText = () => {
    const textEl = textRef.current;
    if (!textEl) return;

    const text = textEl.innerText;
    textEl.innerHTML = "";

    text.split("").forEach((char, i) => {
      const span = document.createElement("span");
      span.innerHTML = char === " " ? "&nbsp;" : char;
      span.className = "fall-letter";
      span.style.animationDelay = `${i * 0.04}s`;
      textEl.appendChild(span);
    });
  };

  useEffect(() => {
    animateText(); // initial animation

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateText(); // replay animation when section is in view
          }
        });
      },
      { threshold: 0.5 } // adjust threshold as needed
    );

    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* 🔥 LIQUID BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={["#2ECC71", "#F1C40F", "#ffffff"]}
          autoSpeed={0.4}
          autoIntensity={2}
        />
      </div>

      {/* 🔥 GLASS OVERLAY */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-md z-10" />

      {/* 🔥 HERO CONTENT */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 pt-40 text-black">
        {/* Zigzag */}
        <svg width="85" height="12" className="mb-6">
          <path
            d="M0 6 L10 0 L20 10 L30 0 L40 10 L50 0 L60 10 L70 0 L80 10"
            stroke="black"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        {/* ✅ FALLING TEXT */}
        <h1
          ref={textRef}
          className="text-4xl md:text-6xl font-black leading-snug tracking-tight"
        >
          We create <br />
          super-rich <br />
          experiences online! <br />
          Stunning interfaces <br />
          Engaging animations <br />
          Seamless interactions <br />
          Built for the future!
        </h1>

        {/* Zigzag */}
        <svg width="85" height="12" className="mt-6">
          <path
            d="M0 6 L10 0 L20 10 L30 0 L40 10 L50 0 L60 10 L70 0 L80 10"
            stroke="black"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* ✅ FALLING TEXT CSS */}
      <style>{`
        .fall-letter {
          display: inline-block;
          opacity: 0;
          animation: fallReveal 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes fallReveal {
          0% {
            opacity: 0;
            transform: translateY(-50px) rotateX(60deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0);
          }
        }
      `}</style>
    </section>
  );
}
