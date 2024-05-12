import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "2k": "1920px",
      "4k": "2560px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        md: "1.75rem",
        lg: "0.875rem",
        xl: "2.25rem",
        "2xl": "3rem",
        "2k": "1rem",
      },
    },
    fontFamily: {
      jos: ["Josefin Sans", "sans-serif"],
      pop: ["Poppins", "sans-serif"],
    },
    fontSize: {
      xs: [".75rem", "1.1rem"],
      sm: [".875rem", "1.356rem"],
      base: ["1rem", "1.45rem"],
      lg: ["1.125rem", "1.75rem"],
      xl: ["1.25rem", "1.875rem"],
      "22": ["1.375rem", "2.063rem"],
      "28": ["1.75rem", "2.375rem"],
      "2xl": ["1.5rem", "2.25rem"],
      "26": ["1.625rem", "2.25rem"],
      "3xl": ["1.875rem", "2.5rem"],
      "4xl": ["2.25rem", "2.75rem"],
      "5xl": ["3rem", "3.75rem"],
      "6xl": ["3.75rem", "5rem"],
      "7xl": ["4.375rem", "5.625rem"],
    },
    extend: {
      height: {
        "1/12": "calc(100% / 12)",
        "2/12": "calc(100% / 12 * 2)",
        "3/12": "calc(100% / 12 * 3)",
        "4/12": "calc(100% / 12 * 4)",
        "5/12": "calc(100% / 12 * 5)",
        "6/12": "calc(100% / 12 * 6)",
        "7/12": "calc(100% / 12 * 7)",
        "8/12": "calc(100% / 12 * 8)",
        "9/12": "calc(100% / 12 * 9)",
        "10/12": "calc(100% / 12 * 10)",
        "11/12": "calc(100% / 12 * 11)",
      },
      colors: {
        goldie: {
          primary: {
            DEFAULT: "#E4AF3D",
          },
          secondary: {
            DEFAULT: "#E4AF3D",
          },
          dander: "#EB4340",
          grayLight: "#FAFAFA",
          gray: "#969FB3",
          dark: "#444444",
          black: "#010715",
        },
      },
      boxShadow: {
        one: "0px 0px 20px #0000000D",
      },
      keyframes: {
        zoom: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
      animation: {
        zoom: "zoom 1s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
