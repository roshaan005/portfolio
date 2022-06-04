module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    gridTemplateColumns: {
      // Simple 16 column grid
      '16': '1fr 1fr',
      

      // Complex site-specific column configuration
      'footer': '200px minmax(900px, 1fr) 100px',
    }

  },
  plugins: [],
}