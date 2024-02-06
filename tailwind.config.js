/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'restaurant': "url('./resources/sdbgimg.jpg')",
        
    },
    backgroundSize: {
      '50': '90%',
    },
    },
  },
  plugins: [],
}

