import type { Config } from "tailwindcss";
import * as defaultTheme from "tailwindcss/defaultTheme";

export default {
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
    fontFamily: {
      script: ['"Sacramento"'],
    },
  },
  plugins: [],
} satisfies Config;
