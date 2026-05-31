/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: '#8fa882',
          light:   '#b8ccb0',
          pale:    '#e8f0e4',
          faint:   '#f2f7f0',
          line:    'rgba(100,140,90,0.15)',
        },
        gold: {
          DEFAULT: '#b8924e',
          light:   '#d4ae72',
          border:  'rgba(184,146,78,0.25)',
        },
        cream: {
          DEFAULT: '#fdfaf5',
          mid:     '#f7f2ea',
          dark:    '#ede8de',
        },
        linen:  '#fffef9',
        deep:   '#3a2e24',
        mid:    '#6b5c4a',
        soft:   '#9a8878',
        faint:  '#c4b4a2',
      },
      fontFamily: {
        serif:  ['"Cormorant Garamond"', 'serif'],
        sans:   ['Jost', 'sans-serif'],
      },
      fontSize: {
        'label': ['0.76rem', { letterSpacing: '0.2em' }],
      },
    },
  },
  plugins: [],
};
