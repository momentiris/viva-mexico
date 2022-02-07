module.exports = {
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: [
        'National',
        '-apple-system, BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
      ],
    },
    extend: {
      colors: {
        green: '#3B746E',
        blue: '#016499',
        yellow: '#CE982A',
        red: '#C42F28',
        grey: '#818A8F',
        darkGrey: '#2F3738',
        lightGrey: '#E8E8E7',
        orange: '#FF7E33',
        beige: '#BDB199',
      },
      backgroundImage: {
        start: "url('/bg-start.svg')",
      },
    },
  },
  plugins: [],
};
