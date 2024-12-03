// components/ClientFooter.tsx
"use client";

import { useTheme } from "next-themes";
import Footer from "@/components/footer";

const ClientFooter = () => {
  const { theme } = useTheme(); // Access the theme

  return <Footer theme={theme || "light"} />;
};

export default ClientFooter;
