import { useState, useEffect } from 'react'
import { AxiosRequestConfig } from 'axios'

type TGetRequest = {
  (pageNum: number, options: AxiosRequestConfig | undefined): Promise<any>
}

type TResults = {
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

const useRequest = (
  getRequest: TGetRequest,
  pageNum = 1,
  initialData: TResults[] = []
) => {
  const [results, setResults] = useState<TResults[]>(initialData)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState({ message: '' })
  const [hasNextPage, setHasNextPage] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setIsError(false)
    setError({ message: '' })

    const controller = new AbortController()
    const { signal } = controller

    getRequest(pageNum, { signal })
      .then(data => {
        setResults(prev => [...prev, ...data.results])
        setIsLoading(false)
      })
      .catch(e => {
        setIsLoading(false)
        if (signal.aborted) return
        setIsError(true)
        setError({ message: e.message })
      })
      .finally(() => {
        setHasNextPage(Boolean(pageNum <= 500))
      })

    return () => controller.abort()
  }, [pageNum])

  return { results, isLoading, isError, error, hasNextPage }
}

export default useRequest
