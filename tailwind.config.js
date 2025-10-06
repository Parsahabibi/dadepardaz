/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#F0EFEF", 
          100: "#E3E3E3",
          200: "#D2D2D2",
          300: "#C5C5C5",
          400: "#B8B8B8",
          700: "#262425",
          800: "#262325", 
        },
        cyan: {
          300:"#8FDAE2",
          400: "#61C2D0",
          500: "#61C1CF",
          600: "#39B2B9",
          700: "#218E9C",
        },
        blue: {
          400: "#0BA9ED",
        },
        teal: {
          500: "#198D9E",
          600: "#4CCDD4",
        },
        red: {
          500: "#E15247",
        },
        orange: {
          500: "#FF7F26",
        },
        white: "#FFFFFF",
        black: "#000000",
      },
      boxShadow: {
        xs: "0 4px 4px rgba(0, 0, 0, 0.25)",
        md: "0 4px 4px rgba(0,0,0,0.25)",
      },
      borderRadius: {
        xs: "4px",
      },
      backgroundImage: {
        "gradient-cyan": "linear-gradient(90deg, #198D9E 0%, #4CCDD4 87%)",
      },
      fontSize: {
        "s":'0.5625rem',
        "3xl": "1.75rem",
      },
    },
  },
  plugins: [],
}
