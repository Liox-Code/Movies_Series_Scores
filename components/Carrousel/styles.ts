import styled from 'styled-components'

const CarrouselContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 160px;
  grid-template-rows: 240px;
  overflow-x: auto;
  overflow-y: hidden;
  grid-gap: 40px;
`

export default CarrouselContainer
