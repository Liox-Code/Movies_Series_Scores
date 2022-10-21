import styled from 'styled-components'

// Components
import Button from '@components-ui/Button'

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

export const ShowMoreButton = styled(Button)`
  grid-area: button;
  justify-self: end;
  width: 160px;
`

export const ContentContainer = styled.div`
  grid-area: content;
  height: 100%;
  width: 100%;
  overflow: auto;
`
