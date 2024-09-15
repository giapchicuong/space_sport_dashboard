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
        inputPlaceholderSecond: '#F5F6FA',
        primaryBg: '#F5F6FA',
        hoverInput: '#202224',
        iconDashboard1: '#8280FF',
        iconDashboard2: '#FEC53D',
        iconDashboard3: '#4AD991',
        iconDashboard4: '#FF9066',
        uptrend: '#00B69B',
        downtrend: '#F93C65',
        uptrendText: '#606060',
        bgBorder: '#D5D5D5'

      },

    },
  },
  plugins: [],
}
