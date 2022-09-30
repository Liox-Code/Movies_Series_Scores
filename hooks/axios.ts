import axios from 'axios'

const axiosFetch = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Content-Type': 'application/json'
  },
  params: {
    api_key: '62ee113e14ae125e3f29bfa76cda3bc3'
  }
})

export default axiosFetch
