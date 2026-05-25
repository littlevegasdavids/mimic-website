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
          750: { value: "#2A2D30" }, // glass card base
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
    semanticTokens: {
      colors: {
        // Section backgrounds
        "bg.dark":      { value: "{colors.grey.900}" },
        "bg.surface":   { value: "{colors.grey.800}" },
        "bg.light":     { value: "{colors.grey.50}" },
        "bg.lightAlt":  { value: "{colors.grey.100}" },

        // Glass / overlay surfaces
        "bg.glass":      { value: "rgba(42,45,48,0.6)" },
        "bg.glassDense": { value: "rgba(42,45,48,0.8)" },

        // Foreground / text on dark
        "fg.muted":      { value: "rgba(250,251,252,0.7)"  },
        "fg.subtle":     { value: "rgba(250,251,252,0.5)"  },
        "fg.faint":      { value: "rgba(250,251,252,0.35)" },
        "fg.ghost":      { value: "rgba(250,251,252,0.22)" },
        "fg.ultraFaint": { value: "rgba(250,251,252,0.2)"  },

        // Accent overlays (blue.500 with alpha)
        "accent.ghostBg":  { value: "rgba(74,127,165,0.05)" },
        "accent.dimBg":    { value: "rgba(74,127,165,0.06)" },
        "accent.subtleBg": { value: "rgba(74,127,165,0.08)" },
        "accent.faintBg":  { value: "rgba(74,127,165,0.1)"  },
        "accent.glowBg":   { value: "rgba(74,127,165,0.12)" },
        "accent.lightBg":  { value: "rgba(74,127,165,0.2)"  },
        "accent.mediumBg": { value: "rgba(74,127,165,0.35)" },
        "accent.strongBg": { value: "rgba(74,127,165,0.6)"  },

        // Borders
        "border.accentFaint":  { value: "rgba(74,127,165,0.1)"  },
        "border.accentWeak":   { value: "rgba(74,127,165,0.15)" },
        "border.accent":       { value: "rgba(74,127,165,0.2)"  },
        "border.accentStrong": { value: "rgba(74,127,165,0.3)"  },
        "border.subtle":       { value: "rgba(92,92,92,0.08)"   },

        // Form inputs
        "input.bg":          { value: "rgba(255,255,255,0.04)" },
        "input.placeholder": { value: "rgba(250,251,252,0.22)" },
        "input.focusBg":     { value: "rgba(74,127,165,0.06)"  },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
