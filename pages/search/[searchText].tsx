import React, { useEffect, useState } from 'react'
import { AxiosRequestConfig } from 'axios'
import { useRouter } from 'next/router'

// Components
import Button from '@components-ui/Button'
import SearchInput from '@components-ui/SearchInput'
import PosterImage from '@components-ui/PosterImage'

// Hooks
import axiosFetch from '@hooks/useAxios'
import useRequest, { TGetRequestArgs } from '@hooks/useRequest'
import useObserver from '@hooks/useObserver'

// Styles
import * as S from '../../styles/search'

interface IListMovies {
  id: number
  title: string
  poster_path: string
}

const search = () => {
  const [listMovies, setListMovies] = useState<IListMovies[] | null>(null)
  const [searchTxt, setSearchTxt] = useState({ searchValue: '' })
  const router = useRouter()
  const getSearchResults = async (args: TGetRequestArgs) => {
    const { options, params } = args
    const { pageNum, searchText } = params
    const { data, status } = await axiosFetch('/search/movie', {
      ...options,
      params: { page: pageNum, query: searchText }
    })

    if (status === 200) {
      setListMovies(data.results)
    } else {
      setListMovies(null)
    }
  }

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

  useEffect(() => {
    // const { searchText } = router.query
    const searchText =
      typeof router.query.searchText === 'string'
        ? router.query.searchText
        : router.query.searchText[0]
    if (!router.isReady) return
    setSearchTxt({ searchValue: searchText as string })
    getSearchResults({ params: { pageNum: 1, searchText } })
  }, [router?.query])

  const Search = ({ searchValue }: { searchValue: string }) => {
    if (searchValue && searchValue.trim() !== '') {
      getSearchResults({ params: { pageNum: 1, searchText: searchValue } })
    }
  }

  const ChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e
    const { value: inputValue } = target
    setSearchTxt({ searchValue: inputValue })
    Search({ searchValue: inputValue })
  }

  const ClickSearch = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    Search(searchTxt)
  }

  // const [observer, lastElement, entry] = useObserver({
  //   threshold: 0,
  //   root: null,
  //   rootMargin: '50%'
  // })

  const { results, isLoading, hasNextPage } = useRequest(
    getSearchResults,
    pageNum,
    data
  )

  return (
    <S.Container>
      <Button action="previousPage" color="red01">
        Volver
      </Button>
      <SearchInput
        onClick={ClickSearch}
        onChange={ChangeText}
        inputValue={searchTxt.searchValue}
      />
      <S.Title>{searchTxt.searchValue}</S.Title>
      <S.Content>
        {listMovies?.map(movieData => {
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

export default search
