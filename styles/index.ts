import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-auto-rows: minmax(100vh, max-content);
  background-color: var(--black);
`

export const Text = styled.span`
  font-size: 12rem;
  color: var(--white);
`
