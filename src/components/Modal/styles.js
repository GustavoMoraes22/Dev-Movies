import styled from 'styled-components'

export const Background = styled.div`
  height: 100vh;
  width: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.6);

  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  max-width: 1200px;
`
export const IconClose = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  .iconClose {
    cursor: pointer;
    transition: 6ms;

    &:active {
      opacity: 0.6;
    }
  }
`
export const Trailer = styled.div`
  width: 100%;
  padding: 10px 30px 30px 30px;
  iframe {
    border: none;
  }
`
