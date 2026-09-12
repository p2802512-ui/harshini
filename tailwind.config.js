/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0B0F19',
          900: '#0E1320',
          800: '#121827',
          700: '#1A2236',
          600: '#263247',
        },
        accent: {
          purple: '#8B5CF6',
          cyan: '#22D3EE',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'float-med': 'floatMed 4.5s ease-in-out infinite',
        'float-fast': 'floatFast 3.5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spinReverse 25s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        floatSlow: {
          '0%,100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(-1deg)' },
        },
        floatMed: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatFast: {
          '0%,100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-8px) translateX(4px)' },
        },
        pulseGlow: {
          '0%,100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
        gradientShift: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        spinReverse: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
