/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'max': '640px'},  // Ensure 'sm' is set correctly if customized
      },
    },
  
  },
  plugins: [require("preline/plugin"), require('@tailwindcss/forms'),],
};
