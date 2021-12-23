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
        navbar: '#97d7fc',
        primary: '#0F172A',
        secondary: '#1E293B',
        accent: '#66C7FF',
        dark_background: '#0F172A',
        dark_foreground: '#3D4451',
        dark_navbar: '#1E293B',
        dark_primary: '#FFFFFF',
        dark_secondary: '#CBD5E1',
        dark_accent: '#66C7FF',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
