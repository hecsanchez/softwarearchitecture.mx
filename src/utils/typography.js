import Typography from "typography"

const typography = new Typography({
  baseFontSize: '21px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Frank Ruhl Libre Black', 'Georgia', 'serif'],
  bodyFontFamily: ['Frank Ruhl Libre', 'Georgia', 'serif'],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
