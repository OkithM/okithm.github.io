/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				pitch: '#08080a',
				card: 'rgba(18, 18, 24, 0.75)',
				cardBorder: 'rgba(255, 51, 68, 0.15)',
				accentRed: {
					light: '#ff4d5d',
					DEFAULT: '#ff3344',
					dark: '#a80018',
					glow: 'rgba(255, 51, 68, 0.35)'
				}
			},
			fontFamily: {
				sans: ['Plus Jakarta Sans', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace']
			},
			backgroundImage: {
				'red-gradient': 'linear-gradient(135deg, #ff3344 0%, #a80018 100%)',
				'red-gradient-hover': 'linear-gradient(135deg, #ff4d5d 0%, #c4001e 100%)',
				'dark-card': 'linear-gradient(180deg, rgba(24, 24, 30, 0.8) 0%, rgba(12, 12, 16, 0.9) 100%)',
				'radial-glow': 'radial-gradient(circle at 50% 0%, rgba(255, 51, 68, 0.15) 0%, rgba(8, 8, 10, 0) 70%)'
			},
			boxShadow: {
				'red-glow': '0 0 25px rgba(255, 51, 68, 0.25)',
				'red-glow-lg': '0 0 45px rgba(255, 51, 68, 0.4)',
				glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
			}
		}
	}
};
