module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
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
