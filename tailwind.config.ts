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
          light: "#583bd3",
          dark: "#32236f",
          word: "#3e3f66",
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
    screens: {
      base: "500px",
      md: "700px",
      lg: "800px",
      xl: "970px",
      "2xl": "1108px",
      "3xl": "1200px",
      "4xl": "1500px",
    },
  },
  plugins: [],
} satisfies Config;
