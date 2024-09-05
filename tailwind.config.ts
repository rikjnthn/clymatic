import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        page: "#2D97E5",
        gray: "#4D4D4D",
        primary: {
          base: "#00529E",
        },
        secondary: {
          base: "#007ca3",
          light: "#0090bd",
          dark: "#015b78",
        },
        "dark-gray": "#6A6A6A",
      },
      screens: {
        xs: "430px",
      },
      spacing: {
        "15": "3.875rem",
        "45": "11.25rem",
      },
      fontSize: {
        "6.5xl": "4rem",
      },
      borderRadius: {
        "2.5xl": "1.25rem",
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
export default config;
