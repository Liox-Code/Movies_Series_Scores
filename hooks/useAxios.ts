import axios from 'axios'

const axiosFetch = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Content-Type': 'application/json'
  },
  params: {
    api_key: process.env.NEXT_PUBLIC_API_KEY
  }
})

export default axiosFetch
