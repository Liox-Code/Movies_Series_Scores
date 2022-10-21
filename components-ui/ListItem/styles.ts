import styled from 'styled-components'

export const Container = styled.article`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: max-content min-content;
  grid-gap: 12px;
`

export const Decorator = styled.div`
  width: 20px;
  height: 20px;
  background-color: var(--secondary-color);
  border-radius: 4px;
`

export const Text = styled.span`
  color: var(--white);
  font-size: 1.6rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: min-content;
`
