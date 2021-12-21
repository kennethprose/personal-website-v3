module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        foreground: '',
        navbar: '#1E293B',
        primary: '#000000',
        secondary: '#83878B',
        accent: '#66C7FF',
        dark_background: '#0F172A',
        dark_foreground: '#3D4451',
        dark_navbar: '#1E293B',
        dark_primary: '#FFFFFF',
        dark_secondary: '#83878B',
        dark_accent: '#66C7FF',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
