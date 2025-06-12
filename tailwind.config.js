/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // src 以下の React コンポーネントに効くように
    "./public/index.html"          // もし public に直接書く場合も
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

