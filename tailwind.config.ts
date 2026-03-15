import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FF5D00',
          light: '#FFF5F0',
          dark: '#CC4700',
        },
        purple: {
          DEFAULT: '#8C0DC2',
          light: '#F5E6FF',
          dark: '#6B0A98',
        },
        blue: {
          DEFAULT: '#008FCD',
          light: '#E0F4FF',
          dark: '#0070A3',
        },
      },
      fontFamily: {
        syne: ['var(--font-syne)', 'Syne', 'sans-serif'],
        outfit: ['var(--font-outfit)', 'Outfit', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(-20px) translateX(-10px)' },
          '50%': { transform: 'translateY(20px) translateX(10px)' },
        },
        'pulse-ring': {
          '0%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.7)' },
          '70%': { boxShadow: '0 0 0 10px rgba(37, 211, 102, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        float: 'float 20s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2s infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-orange-purple': 'linear-gradient(135deg, #FF5D00 0%, #8C0DC2 100%)',
        'gradient-purple-blue': 'linear-gradient(135deg, #8C0DC2 0%, #008FCD 100%)',
        'gradient-tricolor': 'linear-gradient(90deg, #FF5D00 0%, #8C0DC2 50%, #008FCD 100%)',
      },
      boxShadow: {
        'glow-orange': '0 0 30px rgba(255, 93, 0, 0.3)',
        'glow-orange-lg': '0 0 40px rgba(255, 93, 0, 0.5)',
        'glow-purple': '0 0 30px rgba(140, 13, 194, 0.3)',
        'glow-purple-lg': '0 0 40px rgba(140, 13, 194, 0.5)',
        'glow-blue': '0 0 30px rgba(0, 143, 205, 0.3)',
        'glow-green': '0 0 30px rgba(37, 211, 102, 0.3)',
      },
    },
  },
  plugins: [],
}
export default config
