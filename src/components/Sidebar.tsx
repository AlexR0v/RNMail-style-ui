import BookList                        from '@/components/BookList'
import { Box, Text }                   from '@/ui'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import React, { FC, useCallback }      from 'react'
import { SafeAreaView }                from 'react-native'

const Sidebar: FC<DrawerContentComponentProps> = ({ navigation }) => {
  const handleBookListItemPress = useCallback(() => {
    navigation.closeDrawer()
  }, [navigation])
  return (
    <Box
      flex={1}
      bg='$sidebarBackground'
    >
      <SafeAreaView>
        <Text
          variant='sidebar'
          m='lg'
        >Hello</Text>
      </SafeAreaView>
      <BookList onPressItem={handleBookListItemPress} />
    </Box>
  )
}

export default Sidebar

