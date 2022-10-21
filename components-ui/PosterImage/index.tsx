import React from 'react'
import Link from 'next/link'

// Styles
import * as S from './styles'

type IPosterImage = {
  src: string
  title: string
  path: string
  className?: string
}

const PosterImage: React.FC<IPosterImage> = (props: IPosterImage) => {
  const { src, title, path, className } = props

  return (
    <S.Container className={className}>
      {src && title && path && (
        <Link href={path} passHref>
          <a>{src && <S.ImageContainer src={src} alt={title} />}</a>
        </Link>
      )}
    </S.Container>
  )
}

export default PosterImage
