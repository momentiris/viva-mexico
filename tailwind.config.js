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
        grey: '#6E7579',
        darkGrey: '#2F3738',
        lightGrey: '#E8E8E7',
        orange: '#CC4B00',
        beige: '#7C7050',
      },
      backgroundImage: {
        start: "url('/bg-start.svg')",
        fade: 'linear-gradient(180deg, rgba(255,255,255,1) 74%, rgba(255,255,255,0) 100%)',
      },
    },
  },
  plugins: [],
};
