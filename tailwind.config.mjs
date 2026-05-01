import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f3f8f3',
          100: '#e3efe2',
          200: '#c6dec5',
          300: '#9bc59a',
          400: '#6ba56a',
          500: '#4a8849',
          600: '#386c37',
          700: '#2c552d',
          800: '#254325',
          900: '#1f371f',
          950: '#0f1e10',
        },
        wood: {
          50:  '#faf6f1',
          100: '#f3ead9',
          200: '#e6d2af',
          300: '#d6b47e',
          400: '#c79859',
          500: '#b87f3f',
          600: '#9c6533',
          700: '#7d4d2b',
          800: '#653e26',
          900: '#523321',
          950: '#2c1a10',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body':         theme('colors.slate.700'),
            '--tw-prose-headings':     theme('colors.brand.900'),
            '--tw-prose-links':        theme('colors.brand.700'),
            '--tw-prose-bold':         theme('colors.brand.900'),
            '--tw-prose-bullets':      theme('colors.brand.500'),
            '--tw-prose-quote-borders':theme('colors.brand.300'),
          },
        },
      }),
    },
  },
  plugins: [typography],
};
