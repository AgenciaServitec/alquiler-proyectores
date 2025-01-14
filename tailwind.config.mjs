/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    mode: "jit",
    extend: {
      colors: {
        primary: "#FFF100",
        secondary: "#0A0A0A",
        tertiary: "#131313",
        quaternary: "#0B0E10",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      gridTemplateColumns: {
        fill: "repeat(auto-fill, minmax(280px, 1fr))",
      },
    },
  },
  plugins: [],
};
