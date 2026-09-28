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
        ink: {
          50: "#faf9f7",
          100: "#f5f3ef",
          200: "#e8e4dd",
          300: "#d4cdc2",
          400: "#a8a094",
          500: "#7a736a",
          600: "#4a4540",
          700: "#2d2a26",
          800: "#1a1816",
          900: "#0f0e0d",
        },
        gold: {
          DEFAULT: "#c9a96e",
          light: "#dcc59a",
          dark: "#a0854a",
        },
        vermilion: {
          DEFAULT: "#a63a2b",
          light: "#c55447",
        },
      },
      fontFamily: {
        serif: ['"Noto Serif"', '"Source Han Serif"', 'Georgia', 'serif'],
        sans: ['"Inter"', '"Noto Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.3em',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
