import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";

export default function Footer({ theme }: { theme: string }) {
    return (
      <footer
        className={`relative w-full py-10 px-6 sm:px-12 md:px-20 ${
          theme === "dark" ? "bg-[#1e1e2f] text-white" : "bg-[#f9f9f9] text-[#0f0f1f]"
        }`}
      >
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-8 sm:space-y-0">
          {/* Logo & Description */}
          <div className="text-center sm:text-left">
            <h3 className="text-3xl font-bold mb-2">
              {theme === "dark" ? (
                <span className="text-[#1de5ff]">YourBrand</span>
              ) : (
                <span className="text-[#0f0f1f]">YourBrand</span>
              )}
            </h3>
            <p className="text-sm sm:text-base">
              Crafting digital experiences that bring your ideas to life.
            </p>
          </div>
  
          Social Media Links
          <div className="mt-20">
          <h3
            className={`text-3xl font-bold mb-5 ${
              theme === "dark" ? "text-[#1de5ff]" : "text-[#0f0f1f]"
            }`}
          >
            Connect With Me
          </h3>
          <div className="flex justify-center space-x-8">
            <a href="www.linkedin.com/in/muhammad-alyan-1a26262b4" target="_blank" rel="noopener noreferrer">
              <AiOutlineLinkedin className="text-2xl text-[#1de5ff] hover:text-[#0f0f1f] transition-all duration-300 transform hover:scale-110" />
            </a>
            <a href="https://github.com/AlyanSheikhh" target="_blank" rel="noopener noreferrer">
              <AiOutlineGithub className="text-2xl text-[#1de5ff] hover:text-[#0f0f1f] transition-all duration-300 transform hover:scale-110" />
            </a>
            <a href="https://wa.me/+923253508399" target="_blank" rel="noopener noreferrer">
              <AiOutlineWhatsApp className="text-2xl text-[#1de5ff] hover:text-[#0f0f1f] transition-all duration-300 transform hover:scale-110" />
            </a>
            <a href="https://www.instagram.com/aly_13388/" target="_blank" rel="noopener noreferrer">
              <AiOutlineInstagram className="text-2xl text-[#1de5ff] hover:text-[#0f0f1f] transition-all duration-300 transform hover:scale-110" />
            </a>
          </div>
        </div> 
  
          {/* Quick Links */}
          <div className="text-center sm:text-right space-y-2">
            <a
              href="#about"
              className="block text-sm sm:text-base hover:underline transition-all duration-200"
            >
              About
            </a>
            <a
              href="#projects"
              className="block text-sm sm:text-base hover:underline transition-all duration-200"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block text-sm sm:text-base hover:underline transition-all duration-200"
            >
              Contact
            </a>
          </div>
        </div>
  
        {/* Copyright */}
        <div
          className={`mt-8 text-center text-xs sm:text-sm border-t ${
            theme === "dark" ? "border-[#1de5ff]" : "border-[#0f0f1f]"
          } pt-4`}
        >
          © {new Date().getFullYear()} YourBrand. All rights reserved.
        </div>
      </footer>
    );
  }
  