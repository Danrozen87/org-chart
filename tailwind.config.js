/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './src/Svelte4/**/*.{html,js,svelte,ts}'
  ],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        org: {
          card: {
            bg: "hsl(var(--org-card-bg))",
            border: "hsl(var(--org-card-border))",
          },
          connector: {
            line: "hsl(var(--org-connector-line))",
          },
        },
      },
      keyframes: {
        "fade-in": {
          "0%": { 
            opacity: "0",
            transform: "translateY(10px)",
            filter: "blur(4px)"
          },
          "100%": { 
            opacity: "1", 
            transform: "translateY(0)",
            filter: "blur(0px)"
          },
        },
        "fade-out": {
          "0%": { 
            opacity: "1", 
            transform: "translateY(0)",
            filter: "blur(0px)"
          },
          "100%": { 
            opacity: "0", 
            transform: "translateY(10px)",
            filter: "blur(4px)"
          },
        },
        "org-expand": {
          "0%": { 
            opacity: "0",
            transform: "translateY(-8px) scale(0.95)",
            filter: "blur(2px)"
          },
          "100%": { 
            opacity: "1",
            transform: "translateY(0) scale(1)",
            filter: "blur(0px)"
          }
        },
        "line-grow-vertical": {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" }
        },
        "line-grow-horizontal": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" }
        }
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out",
        "fade-out": "fade-out 0.3s ease-out",
        "org-expand": "org-expand 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        "line-grow-vertical": "line-grow-vertical 0.3s ease-out",
        "line-grow-horizontal": "line-grow-horizontal 0.3s ease-out 1.25s"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}