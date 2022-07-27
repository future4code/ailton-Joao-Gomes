
import React from 'react'
import LoadingGif from '../img/labexloading.gif'
import { ImgStyle, Container, PStyle } from './styled'

export default function Loading() {
  return (
    <Container>
      <ImgStyle src={LoadingGif}/>
      <PStyle>Coletando Amostras</PStyle>
    </Container>
  )
}
