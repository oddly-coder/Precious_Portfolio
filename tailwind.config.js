/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { navy: { DEFAULT: '#142A43', 700: '#1c3857', 900: '#0f2033' }, ivory: { DEFAULT: '#F5F1E8', 200: '#ece6d6' }, gold: { DEFAULT: '#B78B52', 300: '#d4b283' }, ink: '#303843' },
      fontFamily: { display: ['Manrope', 'system-ui', 'sans-serif'], sans: ['Inter', 'system-ui', 'sans-serif'] },
      keyframes: {
        rise: { '0%': { opacity: 0, transform: 'translateY(24px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        reveal: { '0%': { clipPath: 'inset(100% 0 0 0)' }, '100%': { clipPath: 'inset(0 0 0 0)' } },
        draw: { '0%': { transform: 'scaleX(0)' }, '100%': { transform: 'scaleX(1)' } },
        drop: { '0%': { opacity: 0, transform: 'translateY(-60px) rotate(-12deg)' } },
        pop: { '0%': { opacity: 0, transform: 'scale(.4)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
      },
      animation: { rise: 'rise .9s cubic-bezier(.2,.7,.2,1) both', reveal: 'reveal 1.1s cubic-bezier(.7,0,.2,1) .2s both', draw: 'draw .9s ease-out .9s both', drop: 'drop 1s cubic-bezier(.2,.8,.2,1) .2s backwards', pop: 'pop .6s cubic-bezier(.3,1.6,.5,1) 1.1s backwards', float: 'float 5s ease-in-out infinite' },
    },
  },
  plugins: [],
}
