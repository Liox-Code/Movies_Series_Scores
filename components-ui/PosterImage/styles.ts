import styled from 'styled-components'

export const Container = styled.article`
  width: 100%;
  height: 100%;
  min-height: 200px;
`

export const ImageContainer = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
`

export const ImageSkeleton = styled.span`
  width: 100%;
  height: 100%;
  background-color: var(--gray);
`
