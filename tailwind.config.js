/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add the Berkshire Swash font here
        f: ['Berkshire Swash', 'cursive'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
