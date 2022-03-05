module.exports = {
  mode: "jit",
  purge: ["pages/**/*.vue"],
  plugins: [require("daisyui")],
  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: ['cyberpunk'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    darkTheme: "cyberpunk",
  },
};