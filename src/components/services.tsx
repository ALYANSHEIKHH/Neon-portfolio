"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const Services = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <section
    id="services"
      className={`relative w-full py-16 px-6 ${
        theme === "dark"
          ? "bg-gradient-to-r from-[#1e1e2f] to-[#0f0f1f] text-white"
          : "bg-gradient-to-r from-[#f9f9f9] to-[#1de5ff] text-gray-900"
      } transition-colors duration-500`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              theme === "dark" ? "text-[#1de5ff]" : "text-[#0f0f1f]"
            }`}
          >
            Services & Skills
          </h2>
          <p className="text-lg">
            Discover the services I offer and the technical skills I excel in.
          </p>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "Web Development",
              description:
                "Building responsive, fast, and interactive websites tailored to your needs.",
              icon: "🌐",
            },
            {
              title: "UI/UX Design",
              description:
                "Crafting user-centric designs with a focus on functionality and aesthetics.",
              icon: "🎨",
            },
            {
              title: "Modern Frameworks",
              description:
                "Utilizing cutting-edge frameworks like React and Next.js to deliver robust solutions.",
              icon: "⚙️",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 bg-opacity-90 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-500"
              style={{
                background: theme === "dark" ? "#1e1e2f" : "#ffffff",
              }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3
                className={`text-2xl font-semibold mb-2 ${
                  theme === "dark" ? "text-[#1de5ff]" : "text-[#0f0f1f]"
                }`}
              >
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        
  {/* Section Heading */}
 {/* Skills Section */}
<div className="mt-16">
  <h3
    className={`text-3xl font-bold mb-8 ${
      theme === "dark" ? "text-[#1de5ff]" : "text-[#0f0f1f]"
    }`}
  >
    My Skills
  </h3>
  <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
    {[
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Tailwind",
      "React",
      "Next.js",
      "Git",
      "Vite",
      "GitHub",
    ].map((skill, index) => (
      <div
        key={index}
        className={`relative group w-24 h-24 bg-opacity-90 rounded-full shadow-lg flex items-center justify-center text-lg font-semibold ${
          theme === "dark"
            ? "bg-[#0f0f1f] text-[#1de5ff]"
            : "bg-white text-[#0f0f1f]"
        } hover:scale-110 hover:shadow-2xl transition-transform duration-500`}
      >
        {/* Skill Text */}
        <span
          className={`absolute z-10 transition-all duration-500 transform group-hover:scale-110 ${
            theme === "dark" ? "text-[#1de5ff]" : "text-[#0f0f1f]"
          }`}
        >
          {skill}
        </span>

        {/* Skill Background Animation */}
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-br ${
            theme === "dark"
              ? "from-[#1e1e2f] via-[#1de5ff] to-[#0f0f1f]"
              : "from-[#ffffff] via-[#1de5ff] to-[#f9f9f9]"
          } blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        ></div>

        {/* Rotating Effect */}
        <div
          className={`absolute inset-0 rounded-full border-2 ${
            theme === "dark" ? "border-[#1de5ff]" : "border-[#0f0f1f]"
          } opacity-0 group-hover:opacity-100 animate-spin-slow`}
        ></div>

        {/* Overlay Animation */}
        <div
          className={`absolute inset-0 rounded-full transition-transform duration-700 transform scale-75 group-hover:scale-100 ${
            theme === "dark"
              ? "bg-[#1de5ff] opacity-10"
              : "bg-[#0f0f1f] opacity-10"
          }`}
        ></div>
      </div>
    ))}
  </div>
</div>


      </div>
    </section>
  );
};

export default Services;
