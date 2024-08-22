module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
      extend: {
        animation: {
          'fade-in-down': 'fadeInDown 1s ease-out',
          'fade-in-up': 'fadeInUp 1s ease-out',
        },
        keyframes: {
          fadeInDown: {
            '0%': { opacity: '0', transform: 'translateY(-10px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          fadeInUp: {
            '0%': { opacity: '0', transform: 'translateY(10px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }