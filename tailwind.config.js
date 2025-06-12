/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
      extend: {
        fontFamily: {
          pre: ['Pretendard',  'sans-serif'],
        },
        colors: {
          darkBg: "#1C1E31",
          darkMint : "#47B8A8",
          lightMint: "#1FFFE1",
        },
        keyframes: {
          fadeInTitle: {
            "0%": {
              transform: "translateY(-70px)",  opacity: "0",
            },
            "50%": {
              transform: "translateY(-70px)",  opacity: "0",
            },
            "100%": {
              transform: "translateY(-70px)",opacity: "1"
            },
          },
          popInUpFade: {
            "0%": { transform: 'translateY(200px) scale(0.8)', opacity: "0" },
            "50%": { transform: 'translateY(0) scale(1.3)', opacity: "1" },
            "80%": { transform: 'translateY(0) scale(1)', opacity: "1" },
            "100%": { opacity: '1' },
          }
        },
        animation: {
          popInUpFade: "popInUpFade 2.5s ease-in-out forwards",
          fadeInTitle: "fadeInTitle 3s",
        },
    },
  },
  plugins: [],
}

