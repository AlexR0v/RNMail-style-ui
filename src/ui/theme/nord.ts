import { createTheme }    from '@shopify/restyle'
import { StatusBarStyle } from 'react-native'
import light, { Theme }   from './light'

// Palette
const p = {
  // Polar Night
  nord0: '#2e3440',
  nord1: '#3b4252',
  nord2: '#434c5e',
  nord3: '#4c566a',

  // Snow Storm
  nord4: '#d8dee9',
  nord5: '#e5e9f0',
  nord6: '#eceff4',

  // Frost
  nord7: '#8fbcbb',
  nord8: '#88c0d0',
  nord9: '#81a1c1',
  nord10: '#5e81ac',

  // Aurora
  nord11: '#bf616a',
  nord12: '#d08770',
  nord13: '#ebcb8b',
  nord14: '#a3be8c',
  nord15: '#b48ead'
}

export const theme: Theme = createTheme({
  ...light,
  colors: {
    ...light.colors,
    $primary: p.nord10,
    $secondary: p.nord9,
    $windowBackground: p.nord0,
    $background: p.nord0,
    $foreground: p.nord4,
    $separator: p.nord3,
    $navbarBackground: p.nord0,
    $headerBarBackground: p.nord2,
    $sidebarBackground: p.nord0,
    $sidebarForeground: p.nord4,
    $sidebarSeparator: p.nord4 + '20'
  },
  statusBar: {
    barStyle: 'light-content' as StatusBarStyle
  },
  textVariants: {
    ...light.textVariants
  },
  barVariants: {
    headerBar: {
      bg: '$headerBarBackground',
      borderRadius: 'hg'
    }
  }
})

export default theme
