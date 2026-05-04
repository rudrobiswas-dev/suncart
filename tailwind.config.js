const daisyui = require("daisyui");

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        suncart: {
          primary: "#f97316",
          secondary: "#06b6d4",
          accent: "#22c55e",
          neutral: "#172554",
          "base-100": "#fffaf0",
          info: "#38bdf8",
          success: "#22c55e",
          warning: "#f59e0b",
          error: "#ef4444",
        },
      },
      "light"
    ]
  }
};

module.exports = config;
