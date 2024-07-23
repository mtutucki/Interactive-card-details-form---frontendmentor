/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-background': "url('./assets/background/bg-main-mobile.png')",
        'card-background': "url('./assets/card/bg-card-front.png')",
      },
      minHeight: {
        'calc-100vh-240px': 'calc(100vh - 240px)',
      },
    },
  },
  plugins: [],
};
