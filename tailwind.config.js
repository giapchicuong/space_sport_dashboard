/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4880FF',
        textColor: '#202224',
        stroke: '#B9B9B9',
        inputPlaceholder: '#F1F4F9',
        hoverInput: '#202224',
      },

    },
  },
  plugins: [],
}
