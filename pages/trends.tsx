import React from 'react'

// Components
import Button from '@components-ui/Button'
import PosterImage from '@components-ui/PosterImage'

// Hooks
import axiosFetch from '@hooks/useAxios'

// Styles
import * as S from '../styles/trends'

export const getStaticProps = async () => {
  try {
    const { data } = await axiosFetch('/trending/movie/week')
    return {
      props: {
        data: data.results
      }
    }
  } catch (error) {
    console.error(error)
    return {
      props: {
        data: []
      }
    }
  }
}

interface IPosterImage {
  id: string
  title: string
  poster_path: string
}

type TTrends = {
  data: IPosterImage[]
}

const trends: React.FC<TTrends> = ({ data }: TTrends) => {
  return (
    <S.Container>
      <Button action="previousPage" color="red01">
        Volver
      </Button>
      <S.Title>Trends</S.Title>
      <S.Content>
        {data.map(movieData => {
          const { id, title, poster_path: posterPath } = movieData
          const baseSrc = 'https://image.tmdb.org/t/p/w300'
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
