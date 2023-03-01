/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    //  
    screens: {
      phone: '480px',
      tabllet: '768px',
      PC: '976px',
    },
    extend: {},
  },
  plugins: [],
}