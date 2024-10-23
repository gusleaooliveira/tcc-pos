import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gold-gradient":
          "linear-gradient(129.32deg, #693E07 -30.1%, #855211 -19.04%, #B57310 1.13%, #F8D166 38.86%, #EAC84F 79.2%, #BB760C 96.12%)",
        "text-gradient":
          "radial-gradient(99.8% 275.79% at 39.3% 38.95%, #FFFFFF 0%, #999999 100%)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        bebasNeue: ["var(--font-bebas-neue)"],
      },
    },
  },
};
export default config;
