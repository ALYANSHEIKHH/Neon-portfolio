"use client";
import Image from "next/image";

import { useTheme } from "next-themes";

const About = () => {
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className={`relative w-full h-screen flex items-center justify-center text-white ${
        theme === "dark"
          ? "bg-gradient-to-r from-[#1e1e2f] to-[#0f0f1f]"
          : "bg-gradient-to-r from-[#f9f9f9] to-[#1de5ff]"
      }`}
    >
      <div className="absolute inset-0 bg-opacity-60"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2
      className={`text-4xl md:text-5xl font-bold mb-6 relative animate-pulse transition-all duration-500 ${
        theme === "dark" ? "text-[#1de5ff]" : "text-[#1e1e2f]"
      }`}
    >
      About Me
      <style jsx>{`
        h2 {
          text-shadow: ${theme === "dark"
            ? "0 0 10px rgba(29, 229, 255, 0.8), 0 0 20px rgba(29, 229, 255, 0.6), 0 0 30px rgba(29, 229, 255, 0.4)"
            : "0 2px 4px rgba(30, 30, 47, 0.4)"};
          animation: glowEffect 2s ease-in-out infinite;
        }

        @keyframes glowEffect {
          0%,
          100% {
            text-shadow: ${theme === "dark"
              ? "0 0 10px rgba(29, 229, 255, 0.8), 0 0 20px rgba(29, 229, 255, 0.6), 0 0 30px rgba(29, 229, 255, 0.4)"
              : "0 2px 4px rgba(30, 30, 47, 0.4)"};
          }
          50% {
            text-shadow: ${theme === "dark"
              ? "0 0 20px rgba(29, 229, 255, 1), 0 0 30px rgba(29, 229, 255, 0.8), 0 0 40px rgba(29, 229, 255, 0.6)"
              : "0 4px 8px rgba(30, 30, 47, 0.6)"};
          }
        }
      `}</style>
    </h2>

        {/* Description */}
        <p className={`text-lg md:text-xl leading-tight mb-4 animate__animated animate__fadeIn ${
            theme === "dark" ? "text-white" : "text-[#0f0f1f]"
          }`}>
          I&apos;m Alyan, a passionate front-end developer focused on creating modern, responsive, and user-friendly websites. I specialize in HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS.
        </p>

        {/* About Content */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-10">
          {/* Profile Image */}
          <div
  className={`w-40 h-40 md:w-48 md:h-48 rounded-full border-4 overflow-hidden shadow-xl ${
    theme === "dark" ? "border-[#1de5ff]" : "border-[#0f0f1f]"
  }`}
>


            <Image
              src="/profile-pic.png"
              alt="Alyan's profile picture"
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bio Section */}
          <div
  className={`md:max-w-xl space-y-4 ${
    theme === "dark" ? "text-gray-300" : "text-gray-700"
  }`}
>
  <p className="leading-relaxed">
    I&apos;m a front-end developer with a strong focus on building highly interactive, fast, and responsive websites. I love to experiment with new web technologies and work on projects that challenge my skills and creativity.
  </p>
  <p className="leading-relaxed">
    Outside of web development, I am exploring the emerging fields of AI, Web 3.0, and the Metaverse. I believe that the future of the web lies in these technologies, and I am eager to contribute to their growth and development.
  </p>
</div>
        </div>

        {/* Call to Action */}
        <div className="mt-10">
          <a href="#contact">
            <button className="w-[200px] h-[50px] rounded-full bg-gradient-to-r from-[#1de5ff] to-[#ff00ff] text-white font-bold neon-effect hover:from-[#ffffff] hover:to-[#1de5ff] hover:text-[#0f0f1f] hover:shadow-neon transition duration-500">
              Get In Touch
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
