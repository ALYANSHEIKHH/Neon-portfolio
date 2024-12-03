"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const Hero = () => {
  const { theme } = useTheme();

  useEffect(() => {
    // You can add animations or other effects here if needed
  }, []);

  return (
    <section
      className={`relative w-full h-screen flex items-center justify-center text-white ${
        theme === "dark" ? "bg-gradient-to-r from-[#1e1e2f] to-[#0f0f1f]" : "bg-gradient-to-r from-[#f9f9f9] to-[#1de5ff]"
      }`}
    >
      {/* Background Image (Optional, if you'd like a custom background) */}
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/path/to/your/image.jpg" // Replace with your image path
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
        />
      </div>

      {/* Hero Content */}
      <div className="text-center px-6 md:px-16">
        {/* Headline */}
        <h1
          className={`text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate__animated animate__fadeIn ${
            theme === "dark" ? "text-white" : "text-[#0f0f1f]"
          }`}
        >
          Hi, I&apos;m Alyan — Front-End Developer
        </h1>

        {/* Short Description */}
        <p
          className={`text-xl md:text-2xl font-light mb-6 animate__animated animate__fadeIn animate__delay-1s ${
            theme === "dark" ? "text-[#f9f9f9]" : "text-[#0f0f1f]"
          }`}
        >
          I specialize in crafting visually appealing, responsive websites using React, Next.js, Tailwind CSS, and more.
          I am also diving into AI, Web 3.0, and the Metaverse to stay ahead in the future of web development.
        </p>

        {/* Call to Action Button */}
        <div className="mt-6">
          <a href="#projects">
            <button
              className={`px-8 py-3 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105 shadow-xl ${
                theme === "dark"
                  ? "bg-gradient-to-r from-[#1de5ff] to-[#ff00ff] text-white hover:bg-[#ffffff] hover:text-[#1e1e2f]"
                  : "bg-gradient-to-r from-[#1e5aff] to-[#ff7db3] text-[#0f0f1f] hover:bg-[#ffffff] hover:text-[#1e1e2f]"
              }`}
            >
              Explore My Work
            </button>
          </a>
        </div>
      </div>

      {/* Optional Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center animate-bounce">
          <span className="text-white text-xl">↓</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
