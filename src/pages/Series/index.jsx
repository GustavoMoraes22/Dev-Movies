import { useState, useEffect } from 'react'

import Slider from '../../components/Slider'
import {
  getPopularSeries,
  getSeriesOnTheAir,
  getTopSeries
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Background, Title } from './styles'

function Series() {
  const [topseries, setTopSeries] = useState()
  const [seriesPopulars, setSeriesPopulars] = useState()
  const [seriesOnTheAir, setSeriesOnTheAir] = useState()

  useEffect(() => {
    async function getAllData() {
      Promise.all([getTopSeries(), getPopularSeries(), getSeriesOnTheAir()])
        .then(([topseries, seriesPopular, onTheAir]) => {
          setTopSeries(topseries)
          setSeriesPopulars(seriesPopular)
          setSeriesOnTheAir(onTheAir)
        })
        .catch((error) => console.error(error))
    }

    getAllData()
  }, [])

  return (
    <>
      {topseries && (
        <Background Background img={getImages(topseries[0].backdrop_path)}>
          <Title>{topseries[0].name}</Title>
        </Background>
      )}
      {topseries && <Slider info={topseries} title="Séries mais vistas" />}
      {seriesPopulars && (
        <Slider info={seriesPopulars} title="Séries mais populares" />
      )}
      {seriesOnTheAir && <Slider info={seriesOnTheAir} title="No ar" />}
    </>
  )
}

export default Series
