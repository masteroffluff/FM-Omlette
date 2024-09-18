import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "var(--background)",
        "card-background": "var(--card-background)",
        "foreground": "var(--foreground)",
        "body-text": "var(--body-text)",
        "title-text":"var(--title-text)",
        "heading-text":"var(--heading-text)",
        "prepcard-title":"var(--prepcard-title)",
        "precard-background":"var(--precard-background)"
      },
    },
  },
  plugins: [],
};
export default config;
