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
        anton: ["Anton", "sans-serif"]
      },
      backgroundImage: {
        'custom-bg': "url('https://photoshop-kopona.com/uploads/posts/2018-02/1519019783_noise2_2.jpg')", // Añade tu imagen de fondo personalizada aquí
      },
    },
  },
  plugins: [],
};