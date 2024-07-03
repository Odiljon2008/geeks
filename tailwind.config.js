/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Poppins: ' "Poppins" , sans-serif',
      },
      colors:{
          blue:{
            100:"#5347EA",
          
          }
      },
    },
    height: {
      u:{
        49: '588px'
      }
    }
  },
  plugins: [],
}

