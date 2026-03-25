// theme.ts
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        grey: {
          50: { value: "#F7F8F8" },
          100: { value: "#F0F1F2" },
          200: { value: "#D8DADC" },
          300: { value: "#B8BBBD" },
          400: { value: "#A0A2A4" },
          500: { value: "#7A7C7E" },
          600: { value: "#5C5C5C" }, // ← primary brand grey
          700: { value: "#3A3C3E" },
          800: { value: "#252729" },
          900: { value: "#1A1C1E" },
        },
        blue: {
          50: { value: "#F0F5F9" },
          100: { value: "#E4EDF4" },
          200: { value: "#BBCFDD" },
          300: { value: "#89B3CC" },
          400: { value: "#6496B8" },
          500: { value: "#4A7FA5" }, // ← primary accent
          600: { value: "#3A6480" },
          700: { value: "#2F5068" },
          800: { value: "#243D50" },
          900: { value: "#1B2E3C" },
        },
      },
      fonts: {
        heading: { value: `'Bebas Neue', sans-serif` },
        body: { value: `'DM Sans', sans-serif` },
        mono: { value: `'DM Mono', monospace` },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
