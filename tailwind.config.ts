import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#080808",
        paper: "#fff7df",
        acid: "#f7ff00",
        riot: "#ff3b30",
        cobalt: "#005cff",
        mint: "#48ff91",
        blush: "#ff8fd9"
      },
      boxShadow: {
        brutal: "10px 10px 0 #080808",
        "brutal-sm": "5px 5px 0 #080808",
        "brutal-blue": "9px 9px 0 #005cff",
        "brutal-red": "9px 9px 0 #ff3b30"
      },
      fontFamily: {
        display: ["Arial Black", "Impact", "system-ui", "sans-serif"],
        body: ["Inter", "Arial", "system-ui", "sans-serif"]
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0) rotate(-2deg)" },
          "50%": { transform: "translateY(-16px) rotate(2deg)" }
        },
        wobble: {
          "0%, 100%": { transform: "rotate(-1deg) scale(1)" },
          "50%": { transform: "rotate(1deg) scale(1.03)" }
        },
        pop: {
          "0%": { transform: "scale(.92)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        }
      },
      animation: {
        marquee: "marquee 18s linear infinite",
        floaty: "floaty 5s ease-in-out infinite",
        wobble: "wobble 2.6s ease-in-out infinite",
        pop: "pop .55s cubic-bezier(.2,.9,.2,1) both"
      }
    }
  },
  plugins: []
};

export default config;
