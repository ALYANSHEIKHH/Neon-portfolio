"use client";

import { useState } from "react";

interface ContactPageProps {
  theme?: string;
}

const ContactPage: React.FC<ContactPageProps> = ({ theme = "light" }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const textClass = theme === "dark" ? "text-[#1de5ff]" : "text-[#0f0f1f]";
  const bgClass = theme === "dark" 
    ? "bg-gradient-to-r from-[#1e1e2f] to-[#0f0f1f]" 
    : "bg-gradient-to-r from-[#f9f9f9] to-[#1de5ff]";

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
    
      const { name, email, message } = formData;
    
      try {
        // Construct the mailto URL
        const subject = `Contact from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
        const mailtoLink = `mailto:alyansheikhh123@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
        // Debugging: Log the mailto link
        console.log("Generated mailto URL:", mailtoLink);
    
        // Set the mailto link
        window.location.href = mailtoLink;
    
        setTimeout(() => {
          setIsSubmitting(false);
          alert("Message sent successfully!");
        }, 2000);
      } catch (error) {
        // Debugging: Log the error
        console.error("Error setting mailto URL:", error);
        alert("Failed to send message. Please try again.");
        setIsSubmitting(false);
      }
    };
    

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <section id="contact" className={`relative w-full min-h-screen flex items-center justify-center text-white ${bgClass}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e1e2f] to-[#0f0f1f] opacity-60 z-0"></div>
      <div className="z-10 text-center px-6 py-16 sm:px-12 md:px-20 max-w-screen-lg mx-auto">
        <h2 className={`text-5xl font-extrabold mb-6 ${textClass}`}>Contact Me</h2>
        <p className="text-lg md:text-xl mb-8">
          Let&apos;s work together on something amazing! I am just a message away. 😊
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg mb-2 font-semibold">Full Name</label>
              <input id="name" type="text" value={formData.name} onChange={handleChange} 
                className="p-4 bg-transparent border-2 border-[#1de5ff] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#1de5ff] transition-all duration-300"
                placeholder="Enter your name" required />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg mb-2 font-semibold">Email Address</label>
              <input id="email" type="email" value={formData.email} onChange={handleChange} 
                className="p-4 bg-transparent border-2 border-[#1de5ff] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#1de5ff] transition-all duration-300"
                placeholder="Enter your email" required />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-lg mb-2 font-semibold">Message</label>
            <textarea id="message" rows={6} value={formData.message} onChange={handleChange} 
              className="p-4 bg-transparent border-2 border-[#1de5ff] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#1de5ff] transition-all duration-300"
              placeholder="Write your message here" required />
          </div>
          <div className="flex justify-center">
            <button type="submit" 
              className={`px-10 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 transform ${theme === "dark" ? "bg-[#1de5ff] text-[#1e1e2f] hover:bg-[#0f0f1f] hover:text-white hover:scale-105" : "bg-[#f9f9f9] text-[#1de5ff] hover:bg-[#1de5ff] hover:text-white hover:scale-105"}`}
              disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
