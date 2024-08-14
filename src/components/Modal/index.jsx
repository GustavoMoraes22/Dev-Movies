import { useEffect, useState } from 'react'

import { mdiWindowClose } from '@mdi/js'
import Icon from '@mdi/react'

import { getMoviesTrailer } from '../../services/getData'
import { Container, Background, IconClose, Trailer } from './styles'

function Moldal({ movieId, setShowModal }) {
  const [movie, setMovie] = useState()

  useEffect(() => {
    // buscar os trailers dos filmes e series
    async function getMovies() {
      setMovie(await getMoviesTrailer(movieId))
    }
    getMovies()
  }, [])

  return (
    <Background onClick={() => setShowModal(false)}>
      {movie && (
        <Container>
          <IconClose>
            <Icon
              path={mdiWindowClose}
              size={1}
              color="white"
              className="iconClose"
            />
          </IconClose>
          <Trailer>
            <iframe
              src={`https://www.youtube.com/embed/${movie[0].key}`}
              title="Youtube Video Player"
              height="500px"
              width="100%"
            ></iframe>
          </Trailer>
        </Container>
      )}
    </Background>
  )
}
export default Moldal
