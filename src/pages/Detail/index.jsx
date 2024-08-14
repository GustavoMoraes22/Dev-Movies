import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Credits from '../../components/Credits'
import Slider from '../../components/Slider'
import SpanGenres from '../../components/SpanGenres'
import {
  getMovieById,
  getMoviesCredits,
  getMovieSimilar,
  getMoviesTrailer
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Container, Background, Cover, Info, ContainerMovies } from './styles'

function Detail() {
  const { id } = useParams()
  const [movie, setMovie] = useState()
  const [movieTrailer, setMovieTrailer] = useState()
  const [movieCredits, setMovieCredits] = useState()
  const [movieSimilar, setMoviesSimilar] = useState()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovieById(id),
        getMoviesTrailer(id),
        getMoviesCredits(id),
        getMovieSimilar(id)
      ])
        .then(([movie, trailer, credits, Similar, series]) => {
          setMovie(movie)
          setMovieTrailer(trailer)
          setMovieCredits(credits)
          setMoviesSimilar(Similar)
        })
        .catch((error) => console.error(error))
    }
    getAllData()
  }, [])

  return (
    <>
      {movie && (
        <>
          <Background image={getImages(movie.backdrop_path)} />
          <Container>
            <Cover>
              <img src={getImages(movie.poster_path)} alt="" />
            </Cover>
            <Info>
              <h2>{movie.title}</h2>
              <SpanGenres genres={movie.genres} />
              <p>{movie.overview}</p>
              <div>
                <Credits credits={movieCredits} />
              </div>
            </Info>
          </Container>

          <ContainerMovies>
            {movieTrailer &&
              movieTrailer.map((video) => (
                <div key={video.id}>
                  <h4>{video.name}</h4>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title="Youtube Video Player"
                    height="500px"
                    width="100%"
                  ></iframe>
                </div>
              ))}
          </ContainerMovies>
          {movieSimilar && (
            <Slider info={movieSimilar} title="Títulos semelhantes" />
          )}
        </>
      )}
    </>
  )
}

export default Detail
