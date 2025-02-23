import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "rgb(24,24,24)",
        darkGray: "rgb(66,66,66)",
        white: "rgb(255,255,255)",
      },
    },
  },
  plugins: [],
} satisfies Config;
