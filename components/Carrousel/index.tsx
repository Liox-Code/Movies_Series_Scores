import React from 'react'

// Components
import PosterImage from '@components-ui/PosterImage'
import Section from '@components/Section'

// Styles
import CarrouselContainer from './styles'

interface IListMovies {
  id: number
  title: string
  poster_path: string
}

type TCarrousel = {
  title: string
  onClick: () => void
  listMovies: IListMovies[]
}

const Carrousel: React.FC<TCarrousel> = ({
  title,
  onClick,
  listMovies
}: TCarrousel) => {
  const baseSrc = 'https://image.tmdb.org/t/p/w300'
  return (
    <Section title={title} onClick={onClick}>
      <CarrouselContainer>
        {listMovies.map(movie => {
          const { id, title: movieTitle, poster_path: posterPath } = movie
          return (
            <PosterImage
              key={id}
              src={`${baseSrc}${posterPath}`}
              title={movieTitle}
              path={`/movieDetails/${id}`}
            />
          )
        })}
      </CarrouselContainer>
    </Section>
  )
}

export default Carrousel
