import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
    extend: {
      colors: {
        background:{
          DEFAULT:"#F3F2ED"
        },
        pallete:{
          red:"#800000",
          orange:"#982B1C",
          beige:"#DAD4B5",
          cream:"#F3F2ED"
        },
        
        foreground: "var(--foreground)",
      },
      fontFamily:{
        montserrat:"var(--font-motserrat)"
      },
    },
  },
  plugins: [],
};
export default config;
