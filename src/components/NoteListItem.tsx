import NoteListItemActionView from '@/components/NoteListItemActionView'
import SwipeableView from '@/components/SwipeableView'
import { Note } from '@/types'
import { Box, Text, TouchableOpacity } from '@/ui'
import React, { FC, useCallback } from 'react'

interface INoteListItem extends Note {
  onPress: (noteId: string) => void
  onSwipeLeft?: (noteId: string, done: () => void) => void
}

const NoteListItem: FC<INoteListItem> = ({ body, title, id, onPress, onSwipeLeft }) => {

  const handlePress = useCallback(() => {
    onPress(id)
  }, [onPress, id])

  const handleSwipeLeft = useCallback(
    done => {
      onSwipeLeft && onSwipeLeft(id, done)
    },
    [id, onSwipeLeft]
  )

  const renderBackView = useCallback(
    ({ progress }) => <NoteListItemActionView progress={progress} />,
    []
  )

  return (
    <SwipeableView
      bg='yellow'
      onSwipeLeft={handleSwipeLeft}
      backView={renderBackView}
    >
      <Box bg='$background'>
        <TouchableOpacity
          bg='$background'
          px='lg'
          py='sm'
          onPress={handlePress}
        >
          <Text
            ellipsizeMode='tail'
            numberOfLines={1}
            fontWeight='bold'
            mb='xs'
          >
            {title}
          </Text>
          <Text
            ellipsizeMode='tail'
            numberOfLines={2}
            fontSize={14}
            opacity={0.7}
          >
            {body}
          </Text>
        </TouchableOpacity>
      </Box>
    </SwipeableView>
  )
}

export default NoteListItem


