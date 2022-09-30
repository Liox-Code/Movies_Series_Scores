import React from 'react'

// Styles
import * as S from './styles'

type TListItem = {
  text: string
}

const ListItem: React.FC<TListItem> = (props: TListItem) => {
  const { text } = props

  return (
    <S.Container>
      <S.Decorator />
      <S.Text>{text}</S.Text>
    </S.Container>
  )
}

export default ListItem
