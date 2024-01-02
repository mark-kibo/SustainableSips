import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode:"class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'white': '#ffffff',
        'gray': {
          50: "#f0f1f3",
          100: "#e0e7e9",
          200: "#dde7",
          300: "#989cAD",
          400: "#7a8d9d",
          500: "#667085",
          600: "#508679",
          700: "#485054",
          800: "#3834",
          900: "#362738"
        },
        'primary': {
          50: "#18f4ff",
          100: "#13e2ff",
          200: "#0da6ff",
          300: "#0291ff",
          400: "#007bff",
          500: "#0069d9",
          600: "#0057b7",
          700: "#00459e",
          800: "#003485",
          900: "#002873"
        },
        'success': {
          50: "#e1f8f0",
          100: "#b6f0e5",
          200: "#90ebda",
          300: "#5ce5c9",
          400: "#45d5b5",
          500: "#28a745",
          600: "#107604",
          700: "#006535",
          800: "#00552e",
          900: "#00402d"
        },
        'warning': {
          50: "#fef5ef",
          100: "#fef0e3",
          200: "#fde5c5",
          300: "#fcd0ab",
          400: "#f9b754",
          500: "#f79900",
          600: "#e88300",
          700: "#af6600",
          800: "#884105",
          900: "#683004"
        },
        'error': {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d"
        }
      }
    },
  },
  plugins: [],
}
export default config
