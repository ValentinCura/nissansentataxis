// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        abril: ["Abril Fatface", "sans-serif"],
      },
      backgroundImage: {
        'custom-bg': "url('https://img.freepik.com/vector-gratis/fondo-oscuro-lineas-doradas_23-2148077797.jpg?t=st=1724975074~exp=1724978674~hmac=8dffde1828746691c6cb8a25911e8aeccd038d5ba2a428623fc9f39510ddb3a9&w=1380')", // Añade tu imagen de fondo personalizada aquí
      },
    },
  },
  plugins: [],
};