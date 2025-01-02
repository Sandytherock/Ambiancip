import React from 'react'
import Container from './Container/Container'
import Title from './Title/Title'
import Description from './Description/Description'
import Button from './Button/Button'

function Pennai() {
  return (
    <Container>
      <Title>Introducing the Penn AI Council</Title>
      <Description>
        The Council consists of five faculty members collaborating to enhance visibility and impact of AI research across Penn.
      </Description>
      <Button href="#">FULL STORY</Button>
    </Container>
    )
}

export default Pennai