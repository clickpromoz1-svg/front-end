/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F8F7FF",
        textMain: "#0F0A2E",
        primary: "#7C3AED",
        "primary-dark": "#5B21B6",
        "primary-light": "#EDE9FE",
        accent: "#F97316",
        "accent-light": "#FFF7ED",
        success: "#10B981",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "float-delay": "float 7s ease-in-out 2s infinite",
        "slide-up": "slideUp 0.7s ease-out both",
        "slide-up-delay": "slideUp 0.7s ease-out 0.2s both",
        "slide-up-delay2": "slideUp 0.7s ease-out 0.4s both",
        "fade-in": "fadeIn 0.8s ease-out both",
        "fade-in-delay": "fadeIn 0.8s ease-out 0.5s both",
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "bounce-badge": "bounceBadge 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        slideUp: {
          "0%": { transform: "translateY(32px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(124,58,237,0.25)" },
          "50%": { boxShadow: "0 0 45px rgba(124,58,237,0.55)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        bounceBadge: {
          "0%, 100%": { transform: "translateY(0) rotate(-3deg)" },
          "50%": { transform: "translateY(-10px) rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
};
