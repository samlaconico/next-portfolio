import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "manrope": "var(--font-manrope)",
        "manrope-bold": "var(--font-manrope-bold)",
        "akshar": "var(--font-akshar)",
        "akshar-bold": "var(--font-akshar-bold)",
      },
      colors: {
        "superfami-green": "#008d45",
        "superfami-blue": "#0749b4",
        "superfami-yellow": "#fece15",
        "superfami-red": "#eb1a1d",
      },
    },
  },
  plugins: [],
};
export default config;
