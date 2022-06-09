import HeaderBar                                    from '@/components/HeaderBar'
import FeatherIcon                                  from '@/components/Icon'
import MoveNoteSheet                                from '@/components/MoveNoteSheet'
import NoteList                                     from '@/components/NoteList'
import ThemePicker, { ThemePickerType }             from '@/components/ThemePicker'
import useStickyHeader                              from '@/hooks/useStickyHeader'
import { HomeDrawerParamList, RootStackParamList }  from '@/Nav'
import { Box, Container, Text, TouchableOpacity }   from '@/ui'
import { DrawerScreenProps }                        from '@react-navigation/drawer'
import { CompositeScreenProps }                     from '@react-navigation/native'
import { NativeStackScreenProps }                   from '@react-navigation/native-stack'
import React, { FC, useCallback, useRef, useState } from 'react'

type MainScreenProps = CompositeScreenProps<DrawerScreenProps<HomeDrawerParamList, 'Main'>,
  NativeStackScreenProps<RootStackParamList>>

const MainScreen: FC<MainScreenProps> = ({ navigation }) => {

  const { handleNoteListLayout, handleScroll, headerBarStyle, headerBarHeight } = useStickyHeader()
  const refMoveNoteSheet = useRef<MoveNoteSheet>(null)
  const refThemePicker = useRef<ThemePickerType>(null)

  const [concealNoteListItem, setConcealNoteListItem] = useState<(() => void) | null>(null)

  const handleSidebarToggle = useCallback(() => {
    navigation.toggleDrawer()
  }, [navigation])

  const handleMenuToggle = useCallback(() => {
    const { current: menu } = refThemePicker
    if (menu) {
      menu.show()
    }
  }, [])

  const handleNoteListItemPress = useCallback((noteId: string) => {
    navigation.navigate('Detail', {
      noteId
    })
  }, [])

  const handleNoteListItemSwipeLeft = useCallback(
    (_noteId: string, conceal: () => void) => {
      const { current: menu } = refMoveNoteSheet
      if (menu) {
        menu.show()
        setConcealNoteListItem(() => conceal)
      }
    },
    []
  )

  const handleMoveNoteSheetClose = useCallback(() => {
    concealNoteListItem && concealNoteListItem()
    setConcealNoteListItem(null)
  }, [concealNoteListItem])

  return (
    <Container
      justifyContent='center'
      alignItems='center'
    >
      <NoteList
        contentInsetTop={headerBarHeight}
        onScroll={handleScroll}
        onItemPress={handleNoteListItemPress}
        onItemSwipeLeft={handleNoteListItemSwipeLeft}
      />
      <HeaderBar
        style={headerBarStyle}
        onLayout={handleNoteListLayout}
      >
        <TouchableOpacity
          m='xs'
          p='xs'
          rippleBorderless
          onPress={handleSidebarToggle}
        >
          <FeatherIcon
            name='menu'
            size={22}
          />
        </TouchableOpacity>
        <Box
          flex={1}
          alignItems='center'
        ><Text fontWeight='bold'>All Notes</Text></Box>
        <TouchableOpacity
          m='xs'
          p='xs'
          rippleBorderless
          onPress={handleMenuToggle}
        >
          <FeatherIcon
            name='more-vertical'
            size={22}
          />
        </TouchableOpacity>
      </HeaderBar>
      <MoveNoteSheet
        ref={refMoveNoteSheet}
        onClose={handleMoveNoteSheetClose}
      />
      <ThemePicker ref={refThemePicker} />
    </Container>
  )
}

export default MainScreen

