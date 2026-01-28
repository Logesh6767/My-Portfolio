/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light SaaS Palette
        background: {
          DEFAULT: '#F8F9FC',      // Main background (soft gray-blue)
          secondary: '#EEF1F8',    // Section backgrounds
          accent: '#E8EDFA',       // Card backgrounds
        },
        foreground: {
          DEFAULT: '#0F172A',      // Primary text (near-black)
          secondary: '#475569',    // Secondary text (gray)
          muted: '#94A3B8',        // Muted text
        },
        primary: {
          DEFAULT: '#0F172A',      // Black for buttons/accents
          hover: '#1E293B',        // Slightly lighter on hover
        },
        accent: {
          blue: '#3B82F6',         // Blue accent
          purple: '#8B5CF6',       // Purple accent
          pink: '#EC4899',         // Pink accent
          gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        },
        glass: {
          DEFAULT: 'rgba(255, 255, 255, 0.8)',
          border: 'rgba(255, 255, 255, 0.5)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient': 'gradient 8s ease infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}