import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.2,
  headerFontFamily: [
    "Roboto Slab",
    "serif",
  ],
  headerColor: "hsla(100,100%,100%,0.9)",
  bodyColor: "hsla(100,100%,100%,0.7)",
  bodyFontFamily: ["Hind Siliguri", "sans-serif"],
  googleFonts: [
      {
          name: "Roboto Slab",
          styles: [
              "700"
          ]
      },
      {
        name: "Hind Siliguri",
        styles: [
            "400",
            "700"
        ]
    }
  ]
})
export default typography