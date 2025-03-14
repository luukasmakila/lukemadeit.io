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
        dark: "rgb(20,20,20)",
        darkGray: "rgb(44,44,44)",
        lightGray: "rgb(222,222,222)",
        white: "rgb(255,255,255)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
  ],
} satisfies Config;
