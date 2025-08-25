/**
 * TailwindCSS configuration with a prefix to avoid class conflicts with MUI.
 */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  prefix: 'tw-',
  theme: {
    extend: {},
  },
  plugins: [],
}


