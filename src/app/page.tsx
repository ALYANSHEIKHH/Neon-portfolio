// page.tsx
"use client";

import React from "react";
import { useTheme } from "next-themes";
import About from "@/components/about";
import ContactPage from "@/components/contact";
import Hero from "@/components/her";
import ProjectsSection from "@/components/project";
import Services from "@/components/services";

const Page = () => {
  const { theme } = useTheme();

  return (
    <div>
      <Hero />
      <About />
      <Services />
      <ProjectsSection  theme={theme || "light"} />

      <ContactPage theme={theme || "light"} />
    </div>
  );
};

export default Page;
