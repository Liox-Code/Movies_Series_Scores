import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  grid-template-areas:
    'title button'
    'content content';
  grid-gap: 20px;
  justify-content: space-between;
  justify-items: flex-start;
  padding: 20px 0;
`

export const Title = styled.h2`
  grid-area: title;
  color: var(--secondary-color);
  font-size: 2rem;
`

export const ShowMoreButton = styled.button`
  grid-area: button;
  justify-self: end;
  padding: 8px;
  border-radius: 8px;
  background-color: var(--primary-color);
  color: white;
`

export const ContentContainer = styled.div`
  grid-area: content;
  height: 100%;
  width: 100%;
  overflow: auto;
`
