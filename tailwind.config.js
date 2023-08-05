/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      width: {
        card: "20vw"
      },
      colors:{
        softBlue: "hsl(215, 51%, 70%)",
        cyan: "hsl(178, 100%, 50%)",
        darkBlueMainBG: "hsl(217, 54%, 11%)",
        darkBlueCardBG: "hsl(216, 50%, 16%)",
        darkBlueLine: "hsl(215, 32%, 27%)",
        white: "hsl(0, 0%, 100%)"
      },
      fontSize:{
        size_para: "18px"
      },
      fontFamily: {
        outFit: ["Outfit", "sans-serif"]
      }
    },
    screens: {
      xs: "480px",
      lg: "1440px"
    },
  },
  plugins: [],
}

