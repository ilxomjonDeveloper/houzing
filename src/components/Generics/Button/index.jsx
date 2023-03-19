import React from 'react'
import { Container } from './style'

const Button = ({children, type, onClick, width, height, minWidth}) => {
  return (
    <Container onClick={onClick} type={type} minWidth={minWidth} width={width} height={height}>
      {children || 'Generic Button'}
    </Container>
  )
}

export default Button