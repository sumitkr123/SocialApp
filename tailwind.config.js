/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        redhatitalic: ['redhatdisplay_italic'],
        redhatregular: ['redhatdisplay_regular'],
        redhatblack: ['redhatdisplay_black'],
        redhatblackitalic: ['redhatdisplay_blackitalic'],
        redhatbold: ['redhatdisplay_bold'],
        redhatbolditalic: ['redhatdisplay_bolditalic'],
        redhatextrabold: ['redhatdisplay_extrabold'],
        redhatextrabolditalic: ['redhatdisplay_extrabolditalic'],
        redhatlight: ['redhatdisplay_light'],
        redhatlightitalic: ['redhatdisplay_lightitalic'],
        redhatmedium: ['redhatdisplay_medium'],
        redhatmediumitalic: ['redhatdisplay_mediumitalic'],
        redhatsemibold: ['redhatdisplay_semibold'],
        redhatsemibolditalic: ['redhatdisplay_semibolditalic'],
      },
    },
  },
  plugins: [],
};
