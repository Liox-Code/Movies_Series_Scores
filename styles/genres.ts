import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  grid-gap: 20px;
  justify-items: start;
  padding: 28px 20px;
  background-color: var(--black);
`

export const Title = styled.h1`
  color: var(--complementary-02-color);
  font-size: 2.4rem;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  grid-auto-rows: 200px;
  grid-gap: 12px;
  width: 100%;
`
