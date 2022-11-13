import React, { useEffect, useState, useRef, Ref } from 'react'
import Link from 'next/link'

// Components
import useObserver from '@hooks/useObserver'
import useCombinedRefs from '@hooks/useCombinedRefs'

// Styles
import * as S from './styles'

type IPosterImage = {
  src: string
  title: string
  path: string
  className?: string
}

const PosterImage = React.forwardRef<HTMLElement | null, IPosterImage>(
  (props: IPosterImage, ref: React.ForwardedRef<HTMLElement | null>) => {
    const { src, title, path, className } = props
    const [show, setShow] = useState(false)
    const [srcImage, setSrcImage] = useState<string>(src)
    const [observer, element, entry] = useObserver({
      threshold: 0,
      root: null,
      rootMargin: '50%'
    })

    useEffect(() => {
      if (entry?.isIntersecting) {
        setShow(true)
      }
    }, [observer, entry])

    const combineRef = useCombinedRefs(ref, element)

    return (
      <S.Container className={className} ref={combineRef}>
        {srcImage && title && path && (
          <Link href={path} passHref>
            <a>
              {show ? (
                <S.ImageContainer
                  src={srcImage}
                  alt={title}
                  onError={() => {
                    setSrcImage('/images/astronaut.jpg')
                  }}
                />
              ) : (
                <S.ImageSkeleton />
              )}
            </a>
          </Link>
        )}
      </S.Container>
    )
  }
)

export default PosterImage
