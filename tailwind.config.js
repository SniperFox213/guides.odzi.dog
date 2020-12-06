module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      height: {
        '300vh': '300vh',
        '200vh': '200vh',
        '100vh': '100vh',
        '85vh': '85vh',
        '75vh': '75vh',
        '70vh': '70vh',
        '65vh': '65vh',
        '55vh': '55vh'
      },

      fontSize: {
        'extra-xs': '0.65rem'
      },

      borderWidth: {
        '1': '1px'
      },

      padding: {
        "50per": "50%",
        "80per": "80%"
      },

      minHeight: {
        '2screen': '200vh'
      },

      minWidth: {
        'screen': '100vw',
      }
    },
  },
  variants: {},
  plugins: [],
}
