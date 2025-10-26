/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        header: "var(--color-bg-header)",
        content: "var(--color-bg-content)",
        alt: "var(--color-bg-alt)",
        "alt-hover": "var(--color-bg-alt-hover)",
        soft: "var(--color-bg-soft)",
        surface: "var(--color-bg-surface)",
        "c-black": "var(--color-black)",
        "c-blue": "var(--color-blue)",
        "c-green": "var(--color-green)",
        "c-green-hover": "var(--color-green-hover)",
        "c-pink": "var(--color-pink)",
        "c-pink-hover": "var(--color-pink-hover)",
        "c-muted": "var(--color-muted)",
      },
    },
  },
  plugins: [],
};
