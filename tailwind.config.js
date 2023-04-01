/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'palenight-background': ' #292D3E',
        'palenight-foreground': ' #A6ACCD',
        'palenight-text': ' #676E95',
        'palenight-contrast': ' #202331',
        'palenight-green': ' #c3e88d',
        'palenight-error': ' #ff5370',
        'highlight-yellow': '#FFFF00',
        'highlight-green': '#90EE90',
        'highlight-blue': '#ADD8E6'
      }
    }
  },
  plugins: []
};
