import type { Config } from "tailwindcss";
import { extendedConfig } from "./src/utils/extendedConfig";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      ...extendedConfig,
      colors: {
        ...extendedConfig.colors,
        brand: {
          base: "#071713",
          ink: "#0c211b",
          surface: "#112e25",
          elevated: "#193b30",
          primary: "#80e5bb",
          glow: "#b0f4d7",
          warm: "#e8bc80",
          text: "#f3faf5",
          soft: "#d7e5dc",
          muted: "#9eb9ac",
          border: "rgba(176, 244, 215, 0.13)",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        ...extendedConfig.maxWidth,
        content: "70rem",
      },
      boxShadow: {
        ...extendedConfig.boxShadow,
        "blue-glow": "0 16px 40px rgba(128, 229, 187, 0.2)",
        "warm-glow": "0 16px 40px rgba(232, 188, 128, 0.15)",
      },
      backgroundImage: {
        ...extendedConfig.backgroundImage,
        "hero-grid":
          "radial-gradient(circle at 20% 20%, rgba(128,229,187,0.15), transparent 40%), radial-gradient(circle at 80% 0%, rgba(232,188,128,0.2), transparent 45%)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
