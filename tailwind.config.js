/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        search: 'hsla(230, 75%, 32%, .1)',
        input: 'hsl(230, 100%, 97%)',
      },
      backgroundImage: {
        'button-arrow':
          'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(24, 24, 27, .5) 100%)',
        'remove-bg-arrow':
          'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 100%)',
      },
      boxShadow: {
        'search-form': 'box-shadow: 0 8px 32px hsla(230, 75%, 15%, .2)',
      },
      keyframes: {
        bouncex: {
          '0%, 100%': {
            transform: 'translateX(25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateX(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      animation: {
        bouncex: 'bouncex 1.5s ease-in-out infinite',
      },
      screens: {
        tablet: '640px',

        laptop: '1024px',

        desktop: '1280px',
      },
    },
    fontFamily: {
      display: ['Poppins', 'sans-serif'],
      body: ['Lato', 'sans-serif'],
    },
    fontSize: {
      xs: ['16px', '24px'],
      sm: ['18px', '27px'],
      m: ['18px', '30px'],
      base: ['24px', '36px'],
      l: ['32px', '36px'],
      xl: ['40px', '52px'],
    },
  },
  plugins: [],
};
