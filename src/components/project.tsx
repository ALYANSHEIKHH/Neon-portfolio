"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function ProjectsSection({ theme }: { theme: string }) {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio showcasing skills and projects.",
      image: "/images/20241202_155629.jpg", // corrected path
      url: "https://portfolio--taupe.vercel.app/",
    },
    {
      title: "E-Commerce Platform",
      description: "An online shopping experience with modern features.",
      image: "/images/20241202_155403.jpg", // corrected path
      url: "https://e-commerce-website-go2o.vercel.app/",
    },
    {
      title: "Shopping Platform Design",
      description: "An online shopping experience with modern features.",
      image: "/images/ll.jpg", // corrected path
      url: "https://your-travel-agency-url.com/",
    },
    {
      title: "Travel Agency Website",
      description: "Plan trips seamlessly with interactive booking features.",
      image: "/images/20241202_155511.jpg", // corrected path
      url: "https://travel-two-ebon-88.vercel.app/",
    },
    {
      title: "Resume Builder App",
      description: "Create, download, and share stunning resumes effortlessly.",
      image: "/images/main.jpg", // corrected path
      url: "https://resume-builder-app-weld.vercel.app/",
    },
    // Other projects...
  ];

  const typescriptCliProjects = [
    {
      title: "Todo CLI App",
      description: "A simple command-line to-do list app that helps you organize tasks.",
      url: "https://github.com/ALYANSHEIKHH/todos",
    },
    {
      title: "Currency Converter",
      description: "Easily convert between different currencies quickly.",
      url: "https://github.com/ALYANSHEIKHH/currency_convertor",
    },
    {
      title: "Quiz App",
      description: "Test your knowledge and compete with friends in this thrilling quiz game!",
      url: "https://github.com/ALYANSHEIKHH/project09-quiz-system",
    },
    {
      title: "GIAIC 45-Assignment",
      description: "I successfully finished my assignment that consisted of 45 questions using TypeScript.",
      url: "https://github.com/ALYANSHEIKHH/45-Assignment-GIAIC-By-Alyan",
    },
    // Other CLI projects...
  ];

  return (
    <section
      id="projects"
      className={`relative py-20 px-4 ${
        theme === "dark"
          ? "bg-gradient-to-br from-[#1e1e2f] via-[#2b2b44] to-[#0f0f1f] text-white"
          : "bg-gradient-to-br from-[#f9f9f9] via-[#e3f2fd] to-[#1de5ff] text-gray-900"
      }`}
    >
      {/* Title Section */}
      <div className="text-center mb-16 animate-fadeIn">
        <h2
          className={`text-4xl font-extrabold mb-4 ${
            theme === "dark" ? "text-[#1de5ff]" : "text-[#0f0f1f]"
          }`}
        >
          My Projects
        </h2>
        <p className="text-lg md:text-xl">
          Explore my creative journey through these featured projects.
        </p>
        <div className="mt-4 h-1 w-16 mx-auto bg-gradient-to-r from-[#1de5ff] to-[#fca61f] rounded-full"></div>
      </div>

      {/* TypeScript CLI Projects */}
      <div className="mb-16">
        <h3
          className={`text-3xl font-bold text-center mb-8 ${
            theme === "dark" ? "text-[#1de5ff]" : "text-[#0f0f1f]"
          }`}
        >
          TypeScript CLI Projects
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {typescriptCliProjects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-gradient-to-br from-[#f9f9f9] to-[#e3f2fd] dark:from-[#2b2b44] dark:to-[#1e1e2f] shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
            >
              <h4
                className={`text-xl font-semibold mb-2 ${
                  theme === "dark" ? "text-[#1de5ff]" : "text-[#0f0f1f]"
                }`}
              >
                {project.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#1de5ff] to-[#fca61f] rounded-md shadow hover:bg-gradient-to-l hover:scale-105 transform transition-all duration-300"
              >
                View Project &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Web Development Projects */}
      <div className="text-center mb-16">
        <h3
          className={`text-3xl font-bold text-center mb-8 ${
            theme === "dark" ? "text-[#1de5ff]" : "text-[#0f0f1f]"
          }`}
        >
          Web Development Projects
        </h3>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="w-full max-w-4xl mx-auto"
        >
          {projects.map((project, index) => (
            <SwiperSlide
            key={index}
            className="rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-64 object-cover"
              priority={index === 0} // Prioritize the first image for faster LCP
            />
            <div className="p-6">
              <h4
                className={`text-xl font-semibold mb-2 ${
                  theme === "dark" ? "text-[#1de5ff]" : "text-[#0f0f1f]"
                }`}
              >
                {project.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#1de5ff] to-[#fca61f] rounded-md shadow hover:bg-gradient-to-l hover:scale-105 transform transition-all duration-300"
              >
                View Project &rarr;
              </a>
            </div>
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
