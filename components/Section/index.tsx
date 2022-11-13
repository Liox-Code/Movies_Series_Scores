import React from 'react'

// Styles
import * as S from './styles'

type TSection = {
  title: string
  children: JSX.Element | JSX.Element[]
  onClick?: () => void
}

const Section: React.FC<TSection> = ({
  title,
  children,
  onClick
}: TSection) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      {onClick && (
        <S.ShowMoreButton color="red01" onClick={onClick}>
          Show More
        </S.ShowMoreButton>
      )}
      <S.ContentContainer>{children}</S.ContentContainer>
    </S.Container>
  )
}

export default Section
