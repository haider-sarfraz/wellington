/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'radicalis': ['Radicalis', 'cursive'],
        'modern-sans': ['ModernSans', 'sans-serif'],
        'carla': ['CarlaSans', 'sans-serif'],
      },
      colors: {
        'sage': '#a8c5a8',
        'gold': '#d4af37',
      },
    },
  },
  plugins: [],
}
