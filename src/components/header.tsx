"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full h-20 bg-gradient-to-r from-[#0f0f1f] to-[#1e1e2f] backdrop-blur-lg bg-opacity-50 shadow-2xl transition-all duration-500 ease-in-out">
      <div className="flex justify-between items-center h-full px-6 md:px-12">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-2">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wider text-[#ffffff] dark:text-[#fca61f] transition-all duration-500 ease-in-out">
            AWS
          </h1>
          <style jsx>{`
            h1 {
              text-shadow: 0 6px 12px rgba(0, 255, 161, 0.8), 0 0 30px rgba(0, 255, 161, 0.6);
              animation: glow 1.5s ease-in-out infinite;
            }

            @keyframes glow {
              0%, 100% {
                text-shadow: 0 6px 12px rgba(0, 255, 161, 0.8), 0 0 30px rgba(0, 255, 161, 0.6);
              }
              50% {
                text-shadow: 0 10px 25px rgba(0, 255, 161, 1), 0 0 50px rgba(0, 255, 161, 0.8);
              }
            }
          `}</style>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-3 text-white hover:text-[#1de5ff] transition-all duration-300"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Links (Desktop) */}
        <nav className="hidden md:flex space-x-8 text-lg text-[#f9f9f9]">
          <Link
            href="/"
            className="transition duration-300 transform hover:scale-105 hover:text-[#1de5ff] dark:hover:text-[#ff00ff] hover:shadow-xl hover:bg-[#1e1e2f] px-4 py-2 rounded-md"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="transition duration-300 transform hover:scale-105 hover:text-[#1de5ff] dark:hover:text-[#ff00ff] hover:shadow-xl hover:bg-[#1e1e2f] px-4 py-2 rounded-md"
          >
            About
          </Link>
          <Link
            href="#services"
            className="transition duration-300 transform hover:scale-105 hover:text-[#1de5ff] dark:hover:text-[#ff00ff] hover:shadow-xl hover:bg-[#1e1e2f] px-4 py-2 rounded-md"
          >
            Services
          </Link>
          <Link
            href="#projects"
            className="transition duration-300 transform hover:scale-105 hover:text-[#1de5ff] dark:hover:text-[#ff00ff] hover:shadow-xl hover:bg-[#1e1e2f] px-4 py-2 rounded-md"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="transition duration-300 transform hover:scale-105 hover:text-[#1de5ff] dark:hover:text-[#ff00ff] hover:shadow-xl hover:bg-[#1e1e2f] px-4 py-2 rounded-md"
          >
            Contact
          </Link>
        </nav>

        {/* Light/Dark Mode Toggle */}
        <div
          onClick={handleThemeToggle}
          className="relative w-14 h-14 rounded-full cursor-pointer flex items-center justify-center bg-gradient-to-r from-[#1de5ff] to-[#ff00ff] hover:from-[#ff00ff] hover:to-[#1de5ff] neon-effect shadow-neon transition-all duration-500"
        >
          <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500">
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-7 h-7 text-[#ffffff]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v2m0 14v2m8.485-10.485l-1.415 1.415M5.93 17.07l-1.415-1.415m12.122 0l1.415 1.415M5.93 6.93L4.515 5.515M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-7 h-7 text-[#ffffff]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 2a1 1 0 010 2 10 10 0 000 20 1 1 0 010 2 12 12 0 110-24z"
                />
              </svg>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#0f0f1f] shadow-lg p-6 md:hidden">
          <nav className="flex flex-col space-y-4 text-lg text-center text-[#f9f9f9]">
            <Link
              href="/"
              className="transition duration-300 transform hover:scale-105 hover:text-[#1de5ff] dark:hover:text-[#ff00ff] hover:shadow-xl hover:bg-[#1e1e2f] px-4 py-2 rounded-md"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="transition duration-300 transform hover:scale-105 hover:text-[#1de5ff] dark:hover:text-[#ff00ff] hover:shadow-xl hover:bg-[#1e1e2f] px-4 py-2 rounded-md"
            >
              About
            </Link>
            <Link
              href="#services"
              className="transition duration-300 transform hover:scale-105 hover:text-[#1de5ff] dark:hover:text-[#ff00ff] hover:shadow-xl hover:bg-[#1e1e2f] px-4 py-2 rounded-md"
            >
              Services
            </Link>
            <Link
              href="#projects"
              className="transition duration-300 transform hover:scale-105 hover:text-[#1de5ff] dark:hover:text-[#ff00ff] hover:shadow-xl hover:bg-[#1e1e2f] px-4 py-2 rounded-md"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="transition duration-300 transform hover:scale-105 hover:text-[#1de5ff] dark:hover:text-[#ff00ff] hover:shadow-xl hover:bg-[#1e1e2f] px-4 py-2 rounded-md"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
