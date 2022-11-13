import styled from 'styled-components'

const SCButton = styled.button`
  height: 100%;
  width: 100%;
  background-color: ${props => {
    const { color, theme } = props
    const getColor = color || 'default'
    return theme.color[getColor]
  }};
  color: var(--white);
  padding: 8px;
  border-radius: 8px;
  font-size: 2rem;
  cursor: pointer;
`

export default SCButton
