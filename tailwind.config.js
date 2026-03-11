/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			radicalis: [
  				'Radicalis',
  				'cursive'
  			],
  			'modern-sans': [
  				'ModernSans',
  				'sans-serif'
  			],
  			carla: [
  				'CarlaSans',
  				'sans-serif'
  			],
  			'carla-light': [
  				'CarlaSansLight',
  				'sans-serif'
  			],
  			'carla-bold': [
  				'CarlaSansBold',
  				'sans-serif'
  			],
  			brittany: [
  				'Brittany Signature',
  				'cursive'
  			],
  			hatton: [
  				'PP Hatton',
  				'serif'
  			],
  			'public-sans': [
  				'Public Sans',
  				'sans-serif'
  			]
  		},
  		colors: {
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
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
