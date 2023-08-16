/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        c_orange: {
          normal: '#ff7d1b',
          hover: '#ff8c1a'
        },
        c_dark: {
          high: '#989A9C',
          smoth: '#7b7e83',
          strong: '#202226'
        }
      },
      fontFamily: {
        kumbh: ['"Kumbh Sans"', 'sans-serif']
      }
    }
  },
  plugins: []
}
