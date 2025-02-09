/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts}", // Inclui todos os arquivos HTML e TypeScript no projeto
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["roboto", "serif"],
        skranji: ["Skranji", "serif"],
      },

      colors: {
        whatsapp: "#3d9a73",
      },
    },
  },
  plugins: [],
};
