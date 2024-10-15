/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {backgroundImage: {
      'footer': "url('src/assets/Footer/Footer.png')",
      'pantagon': "url('src/assets/Header/pantagon.jpg')",
    },
    content: {
      "['']": "''",
    },
  },
  },
  plugins: [
    require('daisyui'),
    require('tailwindcss-animated'),
  ],
}

