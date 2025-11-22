export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vim: {
          bg: '#1e1e2e',
          bg2: '#181825',
          fg: '#cdd6f4',
          comment: '#6c7086',
          cyan: '#89dceb',
          green: '#a6e3a1',
          orange: '#fab387',
          pink: '#f5c2e7',
          purple: '#cba6f7',
          red: '#f38ba8',
          yellow: '#f9e2af',
          blue: '#89b4fa',
          selection: '#313244',
          border: '#45475a',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        }
      },
      animation: {
        blink: 'blink 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
