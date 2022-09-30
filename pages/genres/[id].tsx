import React from 'react'

// Components
import PosterImage from '@components-ui/PosterImage'

// Hooks
import axiosFetch from '@hooks/axios'

// Styles
import * as S from '../../styles/genres'

interface IGenres {
  id: string
}

interface IPathsData {
  data: {
    genres: IGenres[]
  }
}

export const getStaticPaths = async () => {
  try {
    const { data }: IPathsData = await axiosFetch(`/genre/movie/list`)
    const paths = data.genres.map(({ id }) => {
      return {
        params: {
          id: `${id}`
        }
      }
    })
    return {
      paths,
      fallback: false
    }
  } catch (error) {
    console.error(error)
    return {
      paths: [],
      fallback: false
    }
  }
}
export const getStaticProps = async () => {
  try {
    const { data } = await axiosFetch(`/discover/movie`)
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

type TCategoryPost = {
  data: IPosterImage[]
}

const categoryPost: React.FC<TCategoryPost> = ({ data }: TCategoryPost) => {
  return (
    <S.Container>
      <S.ReturnButton>Volver</S.ReturnButton>
      <S.Title>Titulo</S.Title>
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

export default categoryPost
