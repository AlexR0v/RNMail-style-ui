import { Book } from '@/types'
import { Text, TouchableOpacity } from '@/ui'
import { Theme } from '@/ui/theme'
import { ColorProps } from '@shopify/restyle'
import React, { useCallback } from 'react'

export type ListItemProps = Book &
  ColorProps<Theme> & {
  onPress: (bookId: string) => void
}

const BookListItem: React.FC<ListItemProps> = ({
  id,
  name,
  onPress,
  color
}) => {
  const handlePress = useCallback(() => onPress(id), [id])
  return (
    <TouchableOpacity
      px='lg'
      py='sm'
      onPress={handlePress}
    >
      <Text
        ellipsizeMode='tail'
        numberOfLines={1}
        mb='xs'
        color={color || '$sidebarForeground'}
      >
        {name}
      </Text>
    </TouchableOpacity>
  )
}

export default BookListItem
