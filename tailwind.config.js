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
        'brittany': ['Brittany Signature', 'cursive'],
        'hatton': ['PP Hatton', 'serif'],
        'public-sans': ['Public Sans', 'sans-serif'],
      },
      colors: {
        // Brand colors from Figma palette
        'brand-black': '#000000',
        'brand-black-overlay': 'rgba(0, 0, 0, 0.34)',
        'brand-gold': '#AE7042',
        'brand-cyan-blue': '#556070',
        'brand-cyan-blue-v2': '#556D70', // Updated variant from latest Figma
        'brand-charcoal': '#545454',
        'brand-green-cyan': '#AFC4C0',
        'brand-bright-grey': '#B0A5A5',
        'brand-cool-grey': '#D9D9D9',
        'brand-cool-grey-v2': '#D7D7D7', // Updated variant from latest Figma
        'brand-super-white': '#F4F4F4',
        'brand-super-white-v2': '#FFFFFF', // Updated variant from latest Figma (pure white)
      },
    },
  },
  plugins: [],
}
