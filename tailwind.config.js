module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      inset: ["hover", "group-hover"],
      transitionProperty: ['hover', 'group-hover'],
      translate: ['hover', 'group-hover'],
    },
  },
  plugins: [],
}
