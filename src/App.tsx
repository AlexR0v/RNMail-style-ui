import StatusBar               from '@/components/StatusBar'
import { Navigations }         from '@/Nav'
import { activeThemeAtom }     from '@/states/activeTeme'
import light                   from '@/ui/theme/light'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider }       from '@shopify/restyle'
import { useAtom }             from 'jotai'
import React                   from 'react'
import { StyleSheet }          from 'react-native'

const App = () => {
  const [activeTheme] = useAtom(activeThemeAtom)
  return (
    <NavigationContainer>
      <ThemeProvider theme={activeTheme}>
        <StatusBar />
        <Navigations />
      </ThemeProvider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})

export default App
