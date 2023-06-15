/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        smfont: ['SMFont', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        custom: '0px 0px 54px -8px rgba(0,0,0,0.75)',
        button: '0px 5px 16px 0px rgba(0,0,0,0.4);',
      },
    },
  },
  plugins: [],
};
