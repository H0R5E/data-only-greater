import type { Config } from "tailwindcss";
import * as defaultTheme from "tailwindcss/defaultTheme";

export default {
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: [
        "Atkinson Hyperlegible",
        "sans-serif",
        ...defaultTheme.fontFamily.sans,
      ],
      serif: [
        "Atkinson Hyperlegible",
        "serif",
        ...defaultTheme.fontFamily.serif,
      ],
      mono: ["Fira Code", "font-mono", ...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [],
} satisfies Config;
