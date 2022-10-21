import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: max-content auto max-content;
  min-height: 100vh;
`

export const TopBar = styled.div`
  display: grid;
  grid-template-columns: minmax(320px, 1200px);
  justify-content: center;
  height: 40px;
  width: 100%;
  background-color: var(--primary-color);
`

export const MiddleContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(320px, 1200px);
  justify-content: center;
  width: 100%;
  background-color: var(--black);
`

export const BottomBar = styled.div`
  display: grid;
  grid-template-columns: minmax(320px, 1200px);
  justify-content: center;
  align-items: center;
  justify-items: center;
  height: 40px;
  background-color: var(--primary-color);
  color: var(--white);
  font-size: 1.6rem;
`
