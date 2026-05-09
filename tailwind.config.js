/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cinematic: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Lora"', 'Georgia', 'serif'],
        elegant: ['"Cormorant Garamond"', 'serif'],
      },
      colors: {
        cream: '#FDF8F3',
        parchment: '#F7EFE5',
        blush: '#F4C4D4',
        peach: '#FFBEA0',
        gold: '#C9973E',
        'gold-light': '#F8D998',
        'warm-brown': '#3D2B1F',
        'mid-brown': '#8B6345',
        'soft-brown': '#B8956A',
      },
      animation: {
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'float-medium': 'floatMedium 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%': { transform: 'translateY(-20px) translateX(8px)' },
          '66%': { transform: 'translateY(10px) translateX(-5px)' },
        },
        floatMedium: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
