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
        primary: {
          DEFAULT: "#6a49f2",
          dark: "#32236f",
        },
        secondary: {
          DEFAULT: "#212529",
        },
        tertiary: {
          DEFAULT: "#FF7438",
          light: "#FF8B59",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
