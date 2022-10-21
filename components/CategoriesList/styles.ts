import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  grid-template-rows: repeat(2, max-content);
  grid-gap: 20px;
  padding: 20px 0;
`

export const Title = styled.h2`
  color: var(--secondary-color);
  font-size: 2rem;
`

export const ListContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-gap: 12px;
  width: 100%;
`

export const AnchorListItem = styled.a`
  text-decoration: none;
`
