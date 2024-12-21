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
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#0f0f1f] to-[#1e1e2f] backdrop-blur-lg shadow-md">
      <div className="flex justify-between items-center h-20 px-6 md:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <h1 className="text-4xl font-bold text-[#ffffff] dark:text-[#fca61f] uppercase tracking-wide">
            AWS
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium text-[#f9f9f9]">
          {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-4 py-2 rounded-md transition hover:bg-[#1e1e2f] hover:text-[#1de5ff] dark:hover:text-[#ff00ff]"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Light/Dark Mode Toggle */}
        <button
          onClick={handleThemeToggle}
          className="hidden md:block p-3 rounded-full bg-gradient-to-r from-[#1de5ff] to-[#ff00ff] hover:from-[#ff00ff] hover:to-[#1de5ff] transition-all"
          aria-label="Toggle Light/Dark Theme"
        >
          {theme === "dark" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v2m0 14v2m8.485-10.485l-1.415 1.415M5.93 17.07l-1.415-1.415m12.122 0l1.415 1.415M5.93 6.93L4.515 5.515M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2a1 1 0 010 2 10 10 0 000 20 1 1 0 010 2 12 12 0 110-24z"
              />
            </svg>
          )}
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-3 text-white"
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="absolute top-20 left-0 w-full bg-[#0f0f1f] shadow-lg p-6 md:hidden">
          <ul className="space-y-4 text-lg font-medium text-center text-[#f9f9f9]">
            {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-2 rounded-md transition hover:bg-[#1e1e2f] hover:text-[#1de5ff] dark:hover:text-[#ff00ff]"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
