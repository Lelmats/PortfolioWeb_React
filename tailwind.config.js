import taos from 'taos/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: {
      relative: true,
      transform: (content) => content.replace(/taos:/g, ''),
      files : [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        JetBrains: ['"JetBrains Mono"', "sans-serif"],
        RobotoCondensed: ['"Roboto Condensed"', "sans-serif"],
        RobotoSlab: ['"Roboto Slab"', "sans-serif"]
      },
      colors: {
        'backgroundPrimary': '#334155',
        'secondaryColor': '#9992D6',
        'YellowBorder': '#f9f871',
        'OrangeBorder': '#ffcf72',
        'SalmonBorder': '#ffab91',
        'PurpleBorder': '#dd92d2',
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'spin-slow-1': 'spin-counterclockwise 25s linear infinite',
        'spin-slow-2': 'spin 35s linear infinite',
      },
      keyframes: {
        'spin-counterclockwise': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        }
      }
    },

  },
  plugins: [
    taos
    
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  
}