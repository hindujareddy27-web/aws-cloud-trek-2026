/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0A0F',
        cream: '#F5F1E8',
        'e-purple': '#8B5CF6',
        'e-violet': '#A855F7',
        lavender: '#C4B5FD',
      },
      fontFamily: {
        display: ['"Archivo Black"', 'system-ui', 'sans-serif'],
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        hard: '6px 6px 0px 0px #0B0A0F',
        'hard-sm': '4px 4px 0px 0px #0B0A0F',
        'hard-lg': '10px 10px 0px 0px #0B0A0F',
        'hard-xl': '14px 14px 0px 0px #0B0A0F',
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-2deg)' },
          '50%': { transform: 'translateY(-18px) rotate(2deg)' },
        },
        popIn: {
          '0%': { opacity: '0', transform: 'scale(0.6) rotate(-8deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        riseUp: {
          '0%': { opacity: '0', transform: 'translateY(60px) scale(0.85)' },
          '55%': { opacity: '1', transform: 'translateY(-8px) scale(1.04)' },
          '75%': { transform: 'translateY(4px) scale(0.99)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        ghostEntrance: {
          '0%': { opacity: '0', transform: 'translateY(50px) scale(0.8)' },
          '50%': { opacity: '1', transform: 'translateY(-6px) scale(1.05)' },
          '70%': { transform: 'translateY(3px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        wobble: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        blink: {
          '0%, 90%, 100%': { transform: 'scaleY(1)' },
          '95%': { transform: 'scaleY(0.1)' },
        },
        wink: {
          '0%, 100%': { transform: 'scaleY(1)' },
          '20%, 60%': { transform: 'scaleY(0.1)' },
          '80%': { transform: 'scaleY(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        ghostTilt: {
          '0%, 100%': { transform: 'rotate(-2deg) translateY(0)' },
          '50%': { transform: 'rotate(3deg) translateY(-6px)' },
        },
        ghostBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        ghostPeek: {
          '0%': { opacity: '0', transform: 'translateY(30px) rotate(-5deg)' },
          '100%': { opacity: '1', transform: 'translateY(0) rotate(0deg)' },
        },
      },
      animation: {
        floatY: 'floatY 5s ease-in-out infinite',
        popIn: 'popIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both',
        slideUp: 'slideUp 0.6s ease-out both',
        riseUp: 'riseUp 1s cubic-bezier(0.34, 1.56, 0.64, 1) both',
        ghostEntrance: 'ghostEntrance 1.1s cubic-bezier(0.34, 1.56, 0.64, 1) both',
        wobble: 'wobble 3s ease-in-out infinite',
        spinSlow: 'spinSlow 12s linear infinite',
        blink: 'blink 4s ease-in-out infinite',
        wink: 'wink 0.6s ease-in-out 1.1s both',
        fadeIn: 'fadeIn 0.5s ease-out both',
        ghostTilt: 'ghostTilt 4s ease-in-out infinite',
        ghostBounce: 'ghostBounce 3s ease-in-out infinite',
        ghostPeek: 'ghostPeek 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) both',
      },
    },
  },
  plugins: [],
};
