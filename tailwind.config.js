module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				background: '#EFF0F2',
				foreground: '#FFFFFF',
				primary: '#0F172A',
				secondary: '#27364E',
				accent: '#1655f4',
				dark_background: '#000000',
				dark_foreground: '#1a1a1a',
				dark_primary: '#FFFFFF',
				dark_secondary: '#CBD5E1',
				dark_accent: '#dad981',
			},
		},
	},
	plugins: [require('daisyui')],
}
