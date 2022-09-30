import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  grid-template-rows: 120px max-content 60px auto;
  width: 100%;
  background-color: var(--black);
`

export const PortraitImageTop = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  padding: 20px;
  background: linear-gradient(180deg, var(--black) 10%, transparent);
  z-index: 1;
`

export const ReturnButton = styled.button`
  height: 40px;
  width: 80px;
  background-color: transparent;
  color: var(--white);
  font-size: 2rem;
`

export const PortraitImage = styled.button`
  grid-area: 1 / 1 / 4 / 2;
  width: 100%;
  max-height: 900px;
  max-width: 600px;
  z-index: 0;
`

export const DescriptionContainer = styled.div`
  grid-area: 3 / 1 / 5 / 2;
  display: grid;
  grid-auto-rows: max-content;
  grid-gap: 20px;
  min-height: 200px;
  z-index: 1;
  padding: 40px 20px;
  background-color: var(--black);
  border-radius: 20px 20px 0 0;
`
export const DescriptionTop = styled.div`
  display: grid;
  justify-content: space-between;
  grid-auto-flow: column;
  width: 100%;
`

export const Title = styled.h2`
  color: var(--complementary-03-color);
  font-size: 2rem;
  font-weight: 800;
`

export const Score = styled.span`
  justify-self: end;
  color: var(--complementary-03-color);
  font-size: 1.6rem;
  font-weight: 600;
`

export const Description = styled.p`
  color: var(--complementary-03-color);
  font-size: 1.6rem;
  text-align: justify;
`
