import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Includes all pages
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Includes all components
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Includes the app directory
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Dynamic background color based on CSS variables
        foreground: "var(--foreground)", // Dynamic foreground color
      },
      animation: {
        "spin-slow": "spin 5s linear infinite", // Custom slow rotation animation
      },
    },
  },
  plugins: [],
} satisfies Config;
