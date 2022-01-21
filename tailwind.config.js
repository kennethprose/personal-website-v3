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
				accent: '#4717F6',
				dark_background: '#0F172A',
				dark_foreground: '#1E293B',
				dark_primary: '#FFFFFF',
				dark_secondary: '#CBD5E1',
				dark_accent: '#66C7FF',
			},
		},
	},
	plugins: [require('daisyui')],
}
