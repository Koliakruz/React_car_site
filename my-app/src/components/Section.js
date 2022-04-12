import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({title, description, leftBtnText, rightBtnText, backgroundImg}) {
  return (
    <Wrap bgImage = {backgroundImg}>
      <Fade bottom>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton> }
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('/images/model-s.jpg');
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${props => `url("/images/${props.bgImage}")`};
`

const ItemText = styled.div`
  padding-top: 15vh;
`
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    flex-direction: column ;
  }
`

const LeftButton = styled.div`
  background-color: black;
  width: 256px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 100px;
  opacity: 0.7;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  margin: 8px;
`

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
  `

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`
const Buttons = styled.div``