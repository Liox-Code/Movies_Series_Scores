import React, { useState } from 'react'
import useRequest from '@hooks/useRequest'
import axiosFetch from '@hooks/useAxios'
import { AxiosRequestConfig } from 'axios'

const erase = () => {
  const getPostPage = async (
    pageParams = 1,
    options: AxiosRequestConfig | undefined = {}
  ) => {
    const response = await axiosFetch.get(
      `/movie/popular?page=${pageParams}`,
      options
    )

    return response.data
  }

  const [pageNum, setPageNum] = useState(1)

  const { results, isLoading, isError, error, hasNextPage } = useRequest(
    getPostPage,
    pageNum
  )

  if (isError) return <p>Error: {error.message}</p>

  const content = results.map((post, i) => {
    if (results.length === i + 1) {
      return <p key={post.id}>{post.original_title}</p>
    }
    return <p key={post.id}>{post.original_title}</p>
  })

  const nextPost = () => {
    if (isLoading) return

    if (hasNextPage) {
      setPageNum(prev => prev + 1)
    }
  }

  return (
    <div>
      {content}
      <button type="button" onClick={nextPost}>
        lol
      </button>
    </div>
  )
}

export default erase
