import React from 'react'
import Link from 'next/link'

// Components
import ListItem from '@components-ui/ListItem'
import Section from '@components/Section'

// Styles
import * as S from './styles'

interface IListGenres {
  id: number
  name: string
}

type TCarrousel = {
  title: string
  listGenres: IListGenres[]
  onClick?: () => void
}

const CategoriesList: React.FC<TCarrousel> = ({
  title,
  listGenres,
  onClick
}: TCarrousel) => {
  return (
    <Section title={title} onClick={onClick}>
      <S.ListContainer>
        {listGenres.map(({ id, name }) => {
          return (
            <Link
              href={{ pathname: `/genres/${id}`, query: { genreName: name } }}
              key={id}
              passHref
            >
              <S.AnchorListItem>
                <ListItem text={name} />
              </S.AnchorListItem>
            </Link>
          )
        })}
      </S.ListContainer>
    </Section>
  )
}

export default CategoriesList
