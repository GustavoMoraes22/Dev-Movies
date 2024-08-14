import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Logo from '../../assets/logo.png'
import { Container, Menu, Li } from './styles'

function Header() {
  // usado para saber em qual pagina esta o usuario no momento
  const { pathname } = useLocation()
  const [positionScroll, setPositionScroll] = useState(false)

  // vai informar quando o usuario usar o scroll
  window.onscroll = () => {
    // se o positionScroll for false e o window.pageYOffset maior que 157 vai salva true
    if (!positionScroll && window.pageYOffset > 157) {
      // o pageYOffset é a positição que o scroll esta na pagina no eixo y
      setPositionScroll(true)
    }
    // se o positionScroll for verdadeito e o window.pageYOffset menor ou igual a 157 vai salva false
    if (positionScroll && window.pageYOffset <= 157) {
      setPositionScroll(false)
    }
  }

  return (
    <Container isScroll={positionScroll}>
      <img src={Logo} alt="logo-dev" />
      <Menu>
        <Li isActive={pathname === '/'}>
          <Link to="/">Home</Link>
        </Li>

        <Li
          isActive={
            pathname.includes(
              'filmes'
            ) /* o includes verifica se pathname tem a string filmes e se tiver o isActive fica true */
          }
        >
          <Link to="/filmes">Filmes</Link>
        </Li>
        <Li isActive={pathname.includes('series')}>
          <Link to="/series">Séries</Link>
        </Li>
      </Menu>
    </Container>
  )
}

export default Header
