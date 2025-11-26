import aspectRatio from '@tailwindcss/aspect-ratio';
import typography from '@tailwindcss/typography';

export default {
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
        },
        text: {
          DEFAULT: '#F3F4F6',
          grayLight: '#9CA3AF',
          grayMedium: '#6B7280',
        },
        purple: {
          DEFAULT: '#7C3AED',
          dark: '#6D28D9',
        },
        outline: 'rgba(255,255,255,0.2)',
        glowBlue: 'rgba(60,80,255,0.25)',
        glowPurple: 'rgba(140,80,255,0.25)',
      },
    },
  },
  plugins: [typography, aspectRatio],
};
