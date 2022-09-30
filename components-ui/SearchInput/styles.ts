import styled from 'styled-components'

export const Container = styled.label`
  display: grid;
  grid-template-columns: auto max-content;
`

export const SearchInputText = styled.input`
  height: 100%;
  width: 100%;
  padding: 4px 12px;
  background-color: var(--primary-op8);
  color: var(--white);
  font-size: 1.6rem;
`

export const SearchButton = styled.button`
  height: 40px;
  padding: 8px;
  background-color: var(--secondary-color);
  color: var(--black);
`
