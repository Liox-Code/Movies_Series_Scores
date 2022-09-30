import React from 'react'
import Link from 'next/link'

// Styles
import * as S from './styles'

type IPosterImage = {
  src: string
  title: string
  path: string
}

const PosterImage: React.FC<IPosterImage> = (props: IPosterImage) => {
  const { src, title, path } = props

  return (
    <S.Container>
      {src && title && path && (
        <Link href={path} passHref>
          <a>{src && <S.ImageContainer src={src} alt={title} />}</a>
        </Link>
      )}
    </S.Container>
  )
}

export default PosterImage
