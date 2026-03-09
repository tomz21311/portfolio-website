import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: '#0f766e',
        accent: '#ea580c',
        'bg-dark': '#0b1120',
        'bg-light': '#f7fafc',
        'surface-dark': '#111a30',
        'surface-light': '#ffffff',
      },
      fontFamily: {
        sans: ['Schibsted', 'Avenir Next', 'Segoe UI', 'sans-serif'],
      },
      borderRadius: {
        lg: '22px',
        md: '14px',
      },
    },
  },
  plugins: [],
}

export default config
