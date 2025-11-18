import React from "react";
import Particles from "./Particles"; // your Particles file

export default function MovieingObject({
  background = "linear-gradient(90deg, #000428, #004e92)", // default bg
  particleCount = 300,
  particleColors = ["#ffffff", "#08fdd8", "#a29bfe"],
  spread = 10,
  speed = 0.08,
  size = 120,
  alphaParticles = false,
  hover = true,
  className = "",
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

      {/* 🟣 FOREGROUND CONTENT (optional) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Add your logo, text, CTA here */}
      </div>
    </div>
  );
}
