/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bio: {
          dark: '#030712',
          surface: '#080e21',
          card: 'rgba(13, 22, 45, 0.65)',
          border: 'rgba(0, 242, 254, 0.18)',
          glow: '#00f2fe',
          cyan: '#00d2ff',
          emerald: '#10b981',
          violet: '#8b5cf6',
          rose: '#f43f5e',
          amber: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'Space Grotesk', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      backgroundImage: {
        'biotech-gradient': 'radial-gradient(circle at 50% 0%, rgba(0, 242, 254, 0.15) 0%, rgba(139, 92, 246, 0.08) 35%, rgba(3, 7, 18, 1) 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.02) 100%)',
        'cyan-emerald': 'linear-gradient(135deg, #00f2fe 0%, #10b981 100%)',
        'violet-cyan': 'linear-gradient(135deg, #8b5cf6 0%, #00d2ff 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'dna-twist': 'dnaTwist 4s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'blur(20px)' },
          '50%': { opacity: '0.8', filter: 'blur(30px)' },
        },
        dnaTwist: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '100%': { transform: 'rotate(180deg) scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      backdropBlur: {
        xs: '2px',
        glass: '16px',
      }
    },
  },
  plugins: [],
}
