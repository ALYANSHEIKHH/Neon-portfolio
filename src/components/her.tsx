"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const Hero = () => {
  const { theme } = useTheme();

  useEffect(() => {
    // Add more animations or effects here if needed
  }, []);

  return (
    <section
      className={`relative w-full h-screen flex items-center justify-center text-white overflow-hidden ${
        theme === "dark" ? "bg-gradient-to-r from-[#1e1e2f] to-[#0f0f1f]" : "bg-gradient-to-r from-[#f9f9f9] to-[#1de5ff]"
      }`}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/path/to/your/image.jpg" // Replace with your image path
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20"></div>
      </div>

      {/* Hero Content */}
      <div className="text-center px-6 md:px-16">
        {/* Headline */}
        <h1
          className={`text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate__animated animate__fadeIn ${
            theme === "dark" ? "text-white" : "text-[#0f0f1f]"
          }`}
          style={{ letterSpacing: "0.1rem", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}
        >
          Hi, I&apos;m Alyan — Front-End Developer
        </h1>

        {/* Short Description */}
        <p
          className={`text-lg md:text-2xl font-light mb-6 animate__animated animate__fadeIn animate__delay-1s ${
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
              className={`relative px-8 py-3 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-110 shadow-2xl ${
                theme === "dark"
                  ? "bg-gradient-to-r from-[#1de5ff] to-[#ff00ff] text-white hover:shadow-[0px_0px_15px_#1de5ff]"
                  : "bg-gradient-to-r from-[#1e5aff] to-[#ff7db3] text-[#0f0f1f] hover:shadow-[0px_0px_15px_#ff7db3]"
              }`}
            >
              <span className="inline-flex items-center gap-2">
                Explore My Work <span className="animate-pulse">→</span>
              </span>
            </button>
          </a>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <svg
          className="w-12 h-12 text-white animate-bounce"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
