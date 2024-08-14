import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button'
import Moldal from '../../components/Modal'
import Slider from '../../components/Slider'
import {
  getMovieNowPlaying,
  getMoviePopular,
  getMovieUpcoming,
  getTopMovies
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Background, Container, Info, Poster, ContainerButton } from './styles'

function Movies() {
  const [moviesUpComing, setMoviesUpComing] = useState()
  const [showModal, setShowModal] = useState(false) // usado para visibilidade do modal
  const [moviesNowPlaying, setMoviesNowPlaying] = useState()
  const [topMovies, setTopMovies] = useState()
  const [moviesPopular, setMoviesPopular] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovieUpcoming(),
        getMovieNowPlaying(),
        getTopMovies(),
        getMoviePopular()
      ]).then(([upComing, nowplaying, topmovies, moviesPopular]) => {
        setMoviesUpComing(upComing)
        setMoviesNowPlaying(nowplaying)
        setTopMovies(topmovies)
        setMoviesPopular(moviesPopular)
      })
    }

    getAllData()
  }, [])

  return (
    <>
      {moviesUpComing && (
        <Background img={getImages(moviesUpComing[0].backdrop_path)}>
          {showModal && (
            <Moldal
              movieId={moviesUpComing[0].id}
              setShowModal={setShowModal}
            />
          )}
          <Container>
            <Info>
              <h1>{moviesUpComing[0].title}</h1>
              <p>{moviesUpComing[0].overview}</p>
              <ContainerButton>
                <Button
                  red
                  onClick={() => navigate(`/detalhe/${moviesUpComing[0].id}`)}
                >
                  Assista agora
                </Button>
                {/* quando o usuario clicar no botao ele sera redirecionado para a pagina de detalhe */}
                <Button onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </Button>
              </ContainerButton>
            </Info>
            <Poster>
              <img
                src={getImages(moviesUpComing[0].poster_path)}
                alt="poster-filme"
              />
            </Poster>
          </Container>
        </Background>
      )}
      {moviesUpComing && <Slider info={moviesUpComing} title={'Em breve'} />}
      {moviesNowPlaying && (
        <Slider info={moviesNowPlaying} title={'Em cartaz'} />
      )}
      {topMovies && (
        <Slider info={topMovies} title={'Filmes mais ranqueados'} />
      )}
      {moviesPopular && (
        <Slider info={moviesPopular} title={'Filmes populares'} />
      )}
    </>
  )
}

export default Movies
