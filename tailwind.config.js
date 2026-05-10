import aspectRatio from '@tailwindcss/aspect-ratio';
import typography from '@tailwindcss/typography';

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0a0a0a',
          alt: '#0c0c0c',
          light: '#F3F4F6',
          lightAlt: '#E5E7EB',
        },
        text: {
          DEFAULT: '#F3F4F6',
          grayLight: '#9CA3AF',
          grayMedium: '#6B7280',
          light: '#222',
        },
        navbar: {
          DEFAULT: 'rgba(0,0,0,0.2)',
          light: 'rgba(255,255,255,0.8)',
        },
        purple: {
          DEFAULT: '#7C3AED',
          dark: '#6D28D9',
        },
        outline: 'rgba(255,255,255,0.2)',
        glowBlue: 'rgba(60,80,255,0.25)',
        glowPurple: 'rgba(140,80,255,0.25)',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll: 'scroll 30s linear infinite',
      },
    },
  },
  plugins: [typography, aspectRatio],
};
