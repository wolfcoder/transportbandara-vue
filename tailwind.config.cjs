/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Inter: ["Inter", "Cursive"],
        Poppins: ["Poppins", "Cursive"]
    },
      colors: {
        brandPrimary: '#1B96BC',
        brandSecondary: '#ECC92A',
        brandTertiary: '#77BCA0',
        brandWhatsApp: '#25D366',
      }
    },
  },
  plugins: [],
}
