import React, { useState, useEffect } from 'react'
import { AxiosRequestConfig } from 'axios'

// Components
import PosterImage from '@components-ui/PosterImage'
import Button from '@components-ui/Button'

// Hooks
import axiosFetch from '@hooks/useAxios'
import useRequest from '@hooks/useRequest'
import useObserver from '@hooks/useObserver'

// Styles
import * as S from '../styles/trends'

export const getStaticProps = async () => {
  try {
    const { data } = await axiosFetch('/movie/popular')
    return {
      props: {
        data: data.results
      }
    }
  } catch (error) {
    return {
      props: {
        data: []
      }
    }
  }
}

interface IPosterImage {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

type TTrends = {
  data: IPosterImage[]
}

const trends: React.FC<TTrends> = ({ data }: TTrends) => {
  const [pageNum, setPageNum] = useState(2)

  // const lastElement = useRef<HTMLElement | null>(null)

  const [observer, lastElement, entry] = useObserver({
    threshold: 0,
    root: null,
    rootMargin: '50%'
  })

  const getMovieTrends = async (
    pageParams = 1,
    options: AxiosRequestConfig = {}
  ) => {
    const { data: newData } = await axiosFetch('/movie/popular', {
      ...options,
      params: { page: pageParams }
    })

    return newData
  }

  const { results, isLoading, hasNextPage } = useRequest(
    getMovieTrends,
    pageNum,
    data
  )

  useEffect(() => {
    const getMoreResponses = () => {
      if (isLoading) return

      if (hasNextPage) {
        setPageNum(prev => prev + 1)
      }
    }
    if (entry?.isIntersecting) {
      getMoreResponses()
    }
  }, [observer, entry, isLoading, hasNextPage])

  return (
    <S.Container>
      <Button action="previousPage" color="red01">
        Volver
      </Button>
      <S.Title>Trends</S.Title>
      <S.Content>
        {results.map((movieData, i) => {
          const { id, title, poster_path: posterPath } = movieData
          const baseSrc = 'https://image.tmdb.org/t/p/w300'

          if (i + 1 === results.length) {
            return (
              <PosterImage
                key={id}
                src={`${baseSrc}${posterPath}`}
                title={title}
                path={`/movieDetails/${id}`}
                ref={lastElement}
              />
            )
          }

          return (
            <PosterImage
              key={id}
              src={`${baseSrc}${posterPath}`}
              title={title}
              path={`/movieDetails/${id}`}
            />
          )
        })}
      </S.Content>
    </S.Container>
  )
}

export default trends
