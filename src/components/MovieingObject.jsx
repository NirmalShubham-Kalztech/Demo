import React from "react";
import Particles from "./Particles"; // your Particles file

export default function MovieingObject({
  background = "linear-gradient(90deg, #000428, #004e92)",
  particleCount = 300,
  particleColors = ["#ffffff", "#08fdd8", "#a29bfe"],
  spread = 10,
  speed = 0.08,
  size = 120,
  alphaParticles = false,
  hover = true,
  className = "",
  text = "We create super-rich experiences online!",   // <--  ADDED
  subText = "super-rich experiences online!", // <-- ADDED
}) {
  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{
        position: "relative",
        width: "100%",
        height: "400px",
        background,
      }}
    >
      {/* 🔵 PARTICLE LAYER */}
      <Particles
        particleCount={particleCount}
        particleSpread={spread}
        speed={speed}
        particleBaseSize={size}
        particleColors={particleColors}
        moveParticlesOnHover={hover}
        alphaParticles={alphaParticles}
        className="absolute inset-0"
      />

      {/* 🟣 FOREGROUND CONTENT WITH TEXT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
        <h1 className="text-white text-4xl font-bold drop-shadow-lg">
          {text}
        </h1>
        <p className="text-white text-lg mt-2 opacity-80">
          {subText}
        </p>
      </div>
    </div>
  );
}
