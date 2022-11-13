import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// Components
import Button from '@components-ui/Button'
import Carrousel from '@components/Carrousel'
import CategoriesList from '@components/CategoriesList'

// Hooks
import axiosFetch from '@hooks/useAxios'

// Styles
import * as S from '../../styles/movieDetails'

interface IListMovies {
  id: number
  title: string
  poster_path: string
}

interface IListGenres {
  id: number
  name: string
}

interface TMovieDetail {
  id: number
  poster_path: string
  title: string
  vote_average: string
  overview: string
  genres: IListGenres[]
}

const movieDetail = () => {
  const router = useRouter()
  const [details, setDetails] = useState<TMovieDetail | null>(null)
  const [similar, setSimilar] = useState<IListMovies[] | null>(null)
  const baseSrc = 'https://image.tmdb.org/t/p/w300'
  useEffect(() => {
    const { movieId } = router.query

    if (!router.isReady) return

    const getDetails = async () => {
      const { data, status } = await axiosFetch(`/movie/${movieId}`)
      if (status === 200) {
        setDetails(data)
      } else {
        setDetails(null)
      }
    }
    const getSimilarMovies = async () => {
      const { data, status } = await axiosFetch(`/movie/${movieId}/similar`)
      if (status === 200) {
        setSimilar(data.results)
      } else {
        setSimilar(null)
      }
    }
    getDetails()
    getSimilarMovies()
  }, [router?.query])
  return (
    <S.Container>
      {details && (
        <>
          <S.PortraitImageTop>
            <Button action="previousPage">Volver</Button>
          </S.PortraitImageTop>
          <S.PortraitImage
            key={details.id}
            src={`${baseSrc}${details.poster_path}`}
            title={details.title}
            path={`/movieDetails/${details.id}`}
          />
          <S.DescriptionContainer>
            <S.DescriptionTop>
              <S.Title>{details.title}</S.Title>
              <S.Score>{details.vote_average}</S.Score>
            </S.DescriptionTop>
            <S.Description>{details.overview}</S.Description>
            <CategoriesList title="Categories" listGenres={details.genres} />
            {similar && (
              <Carrousel title="Peliculas Similares" listMovies={similar} />
            )}
          </S.DescriptionContainer>
        </>
      )}
    </S.Container>
  )
}

export default movieDetail
