import React from 'react'
import Section from './Section'
import styled from 'styled-components'

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="You need to try this Tesla Model S and buy it"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
        backgroundImg="model-s.jpg"
      />
      <Section
        title="Model Y"
        description="You need to try this Tesla Model Y and buy it"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
        backgroundImg="model-y.jpg"
      />
      <Section
        title="Model 3"
        description="You need to try this Tesla Model 3 and buy it"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
        backgroundImg="model-3.jpg"
      />
      <Section
        title="Model X"
        description="You need to try this Tesla Model X and buy it"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
        backgroundImg="model-X.jpg"
      />
      <Section
        title="Lowest cost solar panel in America"
        description="Money back guarantee"
        leftBtnText="Order it now"
        rightBtnText="Learn more"
        backgroundImg="solar-panel.jpg"
      />
      <Section
        title="Lowest cost solar roof in America"
        description="Money back guarantee"
        leftBtnText="Order it now"
        rightBtnText="Learn more"
        backgroundImg="solar-roof.jpg"
      />
      <Section
        title="Accessories"
        description=""
        leftBtnText="Shop now"
        backgroundImg="accessories.jpg"
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`