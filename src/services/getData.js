import api from './api'

// chamado dos filmes mais populares
export async function getMovies() {
  const {
    data: { results }
  } = await api.get('/movie/popular')

  return results[0]
}

// chamada dos filmes mais bem ranqueados
export async function getTopMovies() {
  const {
    data: { results }
  } = await api.get('/movie/top_rated')

  return results
}

// chamada das series mais bem ranqueados
export async function getTopSeries() {
  const {
    data: { results }
  } = await api.get('/tv/top_rated')

  return results
}

// chamada das series mais populares
export async function getPopularSeries() {
  const {
    data: { results }
  } = await api.get('/tv/popular')

  return results
}

// chamada dos atores/atrizes mais populares
export async function getPopularPerson() {
  const {
    data: { results }
  } = await api.get('/person/popular')

  return results
}
// chamada dos trailers dos filmes
export async function getMoviesTrailer(movieId) {
  const {
    data: { results }
  } = await api.get(`/movie/${movieId}/videos`)

  return results
}

// chamada dos creditos dos filmes
export async function getMoviesCredits(movieId) {
  const {
    data: { cast }
  } = await api.get(`/movie/${movieId}/credits`)

  return cast
}

// chamada dos filmes similares
export async function getMovieSimilar(movieId) {
  const {
    data: { results }
  } = await api.get(`/movie/${movieId}/similar`)

  return results
}

// detalhes dos filmes
export async function getMovieById(movieId) {
  const { data } = await api.get(`/movie/${movieId}`)

  return data
}

// filme que serão lançados em breve
export async function getMovieUpcoming() {
  const {
    data: { results }
  } = await api.get(`/movie/upcoming`)

  return results
}

// filme que estão em cataz nos cinemas
export async function getMovieNowPlaying() {
  const {
    data: { results }
  } = await api.get(`/movie/now_playing`)

  return results
}

// filmes mais populares
export async function getMoviePopular() {
  const {
    data: { results }
  } = await api.get(`/movie/popular`)

  return results
}

export async function getSeriesOnTheAir() {
  const {
    data: { results }
  } = await api.get(`/tv/on_the_air`)

  return results
}
