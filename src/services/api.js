import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'be423874740ff99d44f7010aa07f3180',
    language: 'pt-br',
    page: 1
  }
})

export default api
