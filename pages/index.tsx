import React, { useState } from 'react'
import { useRouter } from 'next/router'

// Components
import SearchInput from '@components-ui/SearchInput'
import Carrousel from '@components/Carrousel'
import CategoriesList from '@components/CategoriesList'

// Hooks
import axiosFetch from '@hooks/useAxios'

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
  const router = useRouter()
  const [searchTxt, setSearchTxt] = useState({ searchValue: '' })

  const navigateTo = (pathName: string) => {
    router.push(pathName)
  }

  const Search = ({ searchValue }: { searchValue: string }) => {
    router.push({
      pathname: '/search/[searchText]',
      query: { searchText: searchValue }
    })
  }

  const ChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e
    const { value: inputValue } = target
    setSearchTxt({ searchValue: inputValue })
  }

  const ClickSearch = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    Search(searchTxt)
  }

  return (
    <S.Container>
      <S.Title>Platzi Movies</S.Title>
      <SearchInput
        onClick={ClickSearch}
        onChange={ChangeText}
        inputValue={searchTxt.searchValue}
      />
      <Carrousel
        title="Trends"
        listMovies={trendsData}
        onClick={() => {
          navigateTo('/trends')
        }}
      />
      <CategoriesList
        title="Categories"
        listGenres={genresData}
        onClick={null}
      />
    </S.Container>
  )
}

export default index
