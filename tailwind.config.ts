import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#091c36',
        'soft-white': '#F7F8FA',
        sand: '#D9D6CE',
        charcoal: '#0A0A0A',
        gold: '#C6A56B',
        'gold-light': '#D4B882',
        'gray-border': '#E2E5EA',
        'french-blue': '#6c7e97',
        'french-blue-light': '#EBF1F8',
        'dusty-rose': '#C4A49A',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        canela: ['var(--font-canela)', 'Georgia', 'serif'],
        'canela-deck': ['var(--font-canela-deck)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-up': 'fadeUp 0.9s ease-out forwards',
        'fade-up-delay': 'fadeUp 0.9s ease-out 0.2s forwards',
        'fade-up-delay-2': 'fadeUp 0.9s ease-out 0.4s forwards',
        'fade-up-delay-3': 'fadeUp 0.9s ease-out 0.6s forwards',
        'line-grow': 'lineGrow 1s ease-out 0.5s forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        lineGrow: {
          '0%': { width: '0px' },
          '100%': { width: '48px' },
        },
      },
      letterSpacing: {
        widest: '0.25em',
      },
    },
  },
  plugins: [],
}
export default config
