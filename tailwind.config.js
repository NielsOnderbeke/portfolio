/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      keyframes: {
        "fly": {
          // '0%': { transform: 'translateX(0%) translateY(-5%) rotateZ(-15deg)' },
          // '25%': { transform: 'translateX(5%) translateY(-15%) rotateZ(10deg)' },
          // '50%': { transform: 'translateX(15%) translateY(-10%) rotateZ(5deg)' },
          // '75%': { transform: 'translateX(10%) translateY(10%) rotateZ(-5deg)' },
          // '100%': { transform: 'translateX(0%) translateY(-5%) rotateZ(-15deg)' },
          '0%': { transform: 'translateX(0%) translateY(-5%) rotateZ(-15deg)' },
          '25%': { transform: 'translateX(5%) translateY(-15%) rotateZ(10deg)' },
          '50%': { transform: 'translateX(15%) translateY(-10%) rotateZ(5deg)' },
          '75%': { transform: 'translateX(10%) translateY(10%) rotateZ(-5deg)' },

        },
        "fly-reverse": {
          '0%': { transform: 'translateX(0%) translateY(-5%) rotateZ(-15deg)' },
          '25%': { transform: 'translateX(10%) translateY(10%) rotateZ(-5deg)' },
          '50%': { transform: 'translateX(15%) translateY(-10%) rotateZ(5deg)' },
          '75%': { transform: 'translateX(5%) translateY(-15%) rotateZ(10deg)' },
          '100%': { transform: 'translateX(0%) translateY(-5%) rotateZ(-15deg)' },
        },
        "typing":{
          "0%": { width: "0%", visibility: "visible" },
          "90%": { width: "100%", borderColor:  "white"},
          "100%": { borderColor: "transparent", visibility: "visible" }
        }
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'fly-slow': 'fly 6s linear infinite',
        'fly-medium': 'fly 4s linear infinite',
        'fly-reverse-slow': 'fly-reverse 6s linear infinite',
        'fly-reverse-medium': 'fly-reverse 4s linear infinite',
        'typing': 'typing 1s steps(20, end) 1.5s forwards'
      },
      fontFamily: {
        prompt: "Prompt",
        slickscreen: 'Silkscreen, cursive'
      }
    },
  },
  plugins: [],
}
