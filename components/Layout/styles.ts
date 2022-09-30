import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: max-content auto max-content;
  min-height: 100vh;
`

export const TopBar = styled.div`
  display: grid;
  height: 40px;
  background-color: var(--primary-color);
`

export const BottomBar = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  height: 40px;
  background-color: var(--primary-color);
  color: var(--white);
  font-size: 1.6rem;
`
