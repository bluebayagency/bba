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
        // Palette is limited to blues, white, and light sand.
        navy: '#091E32',
        'soft-white': '#FFFFFF',
        sand: '#D9D6CE',
        // Deep slate blue for body copy (kept under the old key so existing pages inherit it)
        charcoal: '#2B3A42',
        accent: '#6D8CA3',
        'gray-border': '#DDE3E8',
        'french-blue': '#6D8CA3',
        'french-blue-light': '#EDF1F4',
        // Legacy accent keys, remapped into the blue family
        gold: '#6D8CA3',
        'gold-light': '#9DB2C2',
        'dusty-rose': '#6D8CA3',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        canela: ['var(--font-canela)', 'Georgia', 'serif'],
        'canela-deck': ['var(--font-canela-deck)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-up': 'fadeUp 0.9s ease-out forwards',
        'fade-up-delay': 'fadeUp 0.9s ease-out 0.2s forwards',
        'fade-up-delay-2': 'fadeUp 0.9s ease-out 0.4s forwards',
        'fade-up-delay-3': 'fadeUp 0.9s ease-out 0.6s forwards',
        'line-grow': 'lineGrow 1s ease-out 0.5s forwards',
        'marquee': 'marquee 35s linear infinite',
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
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
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
