import React from 'react'

// Components
import SearchInput from '@components-ui/SearchInput'
import Carrousel from '@components/Carrousel'
import CategoriesList from '@components/CategoriesList'

// Hooks
import axiosFetch from '@hooks/axios'

// Styles
import * as S from '../styles/index'

export const getStaticProps = async () => {
  try {
    const { data: trendsData } = await axiosFetch(`/trending/movie/week`)
    const { data: genresData } = await axiosFetch(`/genre/movie/list`)
    return {
      props: {
        trendsData: trendsData.results,
        genresData: genresData.genres
      }
    }
  } catch (error) {
    console.error(error)
    return {
      props: {
        trendsData: [],
        genresData: []
      }
    }
  }
}

interface IListMovies {
  id: number
  title: string
  poster_path: string
}
interface IListGenres {
  id: number
  name: string
}

type TIndex = {
  trendsData: IListMovies[]
  genresData: IListGenres[]
}

const index: React.FC<TIndex> = ({ trendsData, genresData }: TIndex) => {
  const onClick = () => {
    console.log('onClick')
  }
  return (
    <S.Container>
      <S.Title>Platzi Movies</S.Title>
      <SearchInput />
      <Carrousel title="Trends" listMovies={trendsData} onClick={onClick} />
      <CategoriesList
        title="Categories"
        listGenres={genresData}
        onClick={onClick}
      />
    </S.Container>
  )
}

export default index
