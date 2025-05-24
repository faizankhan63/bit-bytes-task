module.exports = {
  content: ["./src/**/*.{js,jsx}"],  
  theme: {
    extend: {
      colors: {
        border: "var(--border)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
      },
      screens: {
        xs: "480px", // Extra small devices
        sm: "640px", // Small devices
        md: "770px", // Medium devices
        lg: "1025px", // Large devices
        xl: "1280px", // Extra large devices
        "2xl": "1536px", // 2X Large devices
      },
    },
  },
  plugins: [],
};