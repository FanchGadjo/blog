import React from 'react'

const LIGHT_COLORS = {
  background: 'hsl(0, 0%, 100%)',
  text: 'hsl(0, 0%, 10%)',
  accent: 'hsl(197, 60%, 50%)',
  accentDark: 'hsl(197, 60%, 40%)',
  accentDarker: 'hsl(197, 69%, 30%)',
  accentExtraDark: 'hsl(197, 78%, 19%)',
  accentLight: 'hsl(197, 60%, 60%)',
  accentExtraLight: 'hsl(197, 50%, 90%)',
  contra: 'hsl(347, 87%, 60%)',
  contraLight: 'hsl(347, 87%, 65%)',
  offset: 'hsl(190, 23%, 95%)',
  offsetMore: 'hsl(197, 12%, 75%)',
  error: 'hsl(347, 71%, 54%)',
}

const DARK_COLORS = {
  background: 'hsl(195, 60%, 4%)',
  text: 'hsl(0, 0%, 100%)',
  accent: 'hsl(197, 60%, 50%)',
  accentDark: 'hsl(197, 60%, 40%)',
  accentDarker: 'hsl(197, 69%, 30%)',
  accentExtraDark: 'hsl(197, 78%, 19%)',
  accentLight: 'hsl(197, 60%, 60%)',
  contra: 'hsl(347, 87%, 60%)',
  contraLight: 'hsl(347, 87%, 65%)',
  offset: 'hsl(197, 61%, 14%)',
  offsetMore: 'hsl(197, 61%, 28%)',
  error: 'hsl(347, 71%, 54%)',
}

const makeDefaultCSSVars = colors => ({
  '--colors-background': colors.background,
  '--colors-text': colors.text,
  '--colors-accent': colors.accent,
  '--colors-accentDark': colors.accentDark,
  '--colors-accentDarker': colors.accentDarker,
  '--colors-accentExtraDark': colors.accentExtraDark,
  '--colors-accentLight': colors.accentLight,
  '--colors-accentExtraLight': colors.accentExtraLight,
  '--colors-contra': colors.contra,
  '--colors-contraLight': colors.contraLight,
  '--colors-offset': colors.offset,
  '--colors-offsetMore': colors.offsetMore,
  '--colors-error': colors.error,
  '--colors-text-on-accent': 'var(--colors-background)',
  '--fonts-catamaran': 'Catamaran, sans-serif',
  '--components-announcementBanner-background': 'var(--colors-accent)',
  '--components-announcementBanner-text': 'var(--colors-background)',
  '--components-announcementBanner-links-text': '#f2f2f2',
  '--components-announcementBanner-links-hover-text':
    'var(--colors-background)',
  '--components-beard-strokes-button-bg': 'var(--colors-accentExtraDark)',
  '--components-beard-strokes-button-bg-hover': 'var(--colors-accentDarker)',
  '--components-beard-strokes-fill-default': 'var(--colors-offsetMore)',
  '--components-beard-strokes-fill-disabled': 'var(--colors-offset)',
  '--components-beard-strokes-fill-hover': 'var(--colors-background)',
  '--components-beard-strokes-fill-nonzero': 'var(--colors-background)',
  '--components-button-background': 'var(--colors-accent)',
  '--components-button-text': 'var(--colors-background)',
  '--components-button-hover-background': 'var(--colors-accentLight)',
  '--components-button-hover-text': 'var(--colors-background)',
  '--components-button-active-background': 'var(--colors-background)',
  '--components-button-active-text': 'var(--colors-text)',
  '--components-button-shadow-color': 'var(--colors-offsetMore)',
  '--components-footer-background': 'var(--colors-text)',
  '--components-footer-text': 'var(--colors-background)',
  '--components-inputs-background': 'var(--colors-background)',
  '--components-inputs-text': 'var(--colors-text)',
  '--components-lightBulb-fill': 'var(--colors-text)',
  '--components-newsletterCTA-background': 'var(--colors-accent)',
  '--components-newsletterCTA-text': 'var(--colors-background)',
  '--components-newsletterCTA-errorBox-background': 'var(--colors-error)',
  '--components-newsletterCTA-errorBox-text': 'var(--colors-background)',
  '--components-newsletterCTA-inputs-background': 'var(--colors-background)',
  '--components-newsletterCTA-inputs-text': 'var(--colors-text)',
  '--components-newsletterCTA-inputs-placeholderText':
    'var(--colors-offsetMore)',
  '--components-newsletterCTA-submitButton-background': 'var(--colors-offset)',
  '--components-newsletterCTA-submitButton-text': 'var(--colors-accent)',
  '--components-newsletterCTA-submitButton-hover-background':
    'var(--colors-background)',
  '--components-newsletterCTA-submitButton-hover-text': 'var(--colors-accent)',
  '--components-newsletterCTA-successBox-background': 'var(--colors-offset)',
  '--components-newsletterCTA-successBox-text': 'var(--colors-text)',
  '--components-pagination-normal-background': 'var(--colors-accent)',
  '--components-pagination-normal-text': 'var(--colors-background)',
  '--components-pagination-active-background': 'var(--colors-offset)',
  '--components-pagination-active-text': 'var(--colors-accent)',
  '--components-share-background': 'var(--colors-offset)',
  '--components-share-highlight': 'var(--colors-accent)',
  '--components-share-hover-background': 'var(--colors-offsetMore)',
  '--tags-code': 'var(--colors-offset)',
})

const LIGHT_VARS = {
  ...makeDefaultCSSVars(LIGHT_COLORS),
  '--components-share-hover-background': 'var(--colors-accentExtraLight)',
}

const DARK_VARS = {
  ...makeDefaultCSSVars(DARK_COLORS),
  '--colors-text-on-accent': 'var(--colors-text)',
  '--components-announcementBanner-text': 'var(--colors-text)',
  '--components-announcementBanner-links-hover-text': 'var(--colors-text)',
  '--components-beard-strokes-button-bg': 'var(--colors-accentExtraDark)',
  '--components-beard-strokes-button-bg-hover': 'var(--colors-accentDarker)',
  '--components-beard-strokes-fill-default': 'hsl(197, 12%, 80%)',
  '--components-beard-strokes-fill-disabled': 'hsl(197, 12%, 65%)',
  '--components-beard-strokes-fill-hover': 'var(--colors-text)',
  '--components-beard-strokes-fill-nonzero': 'var(--colors-text)',
  '--components-button-text': 'var(--colors-text)',
  '--components-button-hover-text': 'var(--colors-text)',
  '--components-footer-background': 'hsl(195, 30%, 8%)',
  '--components-footer-text': 'var(--colors-text)',
  '--components-newsletterCTA-text': 'var(--colors-text)',
  '--components-newsletterCTA-errorBox-text': 'var(--colors-text)',
  '--components-newsletterCTA-inputs-background': 'var(--colors-text)',
  '--components-newsletterCTA-inputs-text': 'var(--colors-background)',
  '--components-newsletterCTA-submitButton-background': '#f2f2f2',
  '--components-newsletterCTA-submitButton-hover-background':
    'var(--colors-text)',
  '--components-pagination-normal-text': 'var(--colors-text)',
  '--components-pagination-active-text': 'var(--colors-text)',
}

const makeCSSVarsString = obj =>
  Object.entries(obj).reduce((acc, [key, value]) => {
    return acc + `${key}:${value};`
  }, '')

const THEME_TO_CSS_VARS = {
  dark: DARK_VARS,
  light: LIGHT_VARS,
}

const getCSSVars = (theme = 'light') =>
  makeCSSVarsString(THEME_TO_CSS_VARS[theme]).replace(/\s/g, '')

const DEFAULT_THEME = 'light'
const THEME_STORAGE_KEY = 'kyleshevlin:theme'
const NEXT_THEME = {
  dark: 'light',
  light: 'dark',
}

const getInitialTheme = () => {
  try {
    const themeName = localStorage.getItem(THEME_STORAGE_KEY)

    if (!themeName) return DEFAULT_THEME

    if (Object.keys(NEXT_THEME).includes(themeName)) {
      return themeName
    }

    return DEFAULT_THEME
  } catch (err) {
    return DEFAULT_THEME
  }
}

const ThemeContext = React.createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState(getInitialTheme)

  const rotateTheme = React.useCallback(() => {
    setTheme(_theme => NEXT_THEME[_theme])
  }, [])

  React.useEffect(() => {
    const html = document.documentElement
    html.setAttribute('style', getCSSVars(theme))
    html.setAttribute('class', theme)
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ rotateTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => React.useContext(ThemeContext)
