import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        surface: '#121212',
        border: '#1f1f1f',
        text: { primary: '#fafafa', muted: '#888' },
        neon: {
          green: '#00ff88',
          purple: '#a855f7',
          glow: '#00ff8855',
        },
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite alternate',
        scroll: 'scroll 30s linear infinite',
      },
      keyframes: {
        glow: {
          from: { textShadow: '0 0 10px #00ff8855' },
          to: { textShadow: '0 0 20px #00ff88, 0 0 30px #00ff8888' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
