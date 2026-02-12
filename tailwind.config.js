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
        'brand-cyan-blue': 'rgba(85, 109, 112, 1)',
        'brand-cyan-blue-light': 'rgba(85, 109, 112, 0.6)',
        'brand-charcoal': '#545454',
        'brand-green-cyan': 'rgba(175,196,192,1)',
        'brand-green-cyan-light': 'rgba(175,196,192,0.6)',
        'brand-bright-grey': '#B0A5A5',
        'brand-cool-grey': '#D9D9D9',
        'brand-cool-grey-v2': '#D7D7D7',
        'brand-super-white': '#F0F0F0',
        'brand-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}
