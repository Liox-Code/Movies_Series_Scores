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
  onClick?: (() => void) | null
}

const CategoriesList: React.FC<TCarrousel> = ({
  title,
  listGenres,
  onClick = null
}: TCarrousel) => {
  return (
    <Section title={title} onClick={onClick}>
      <S.ListContainer>
        {listGenres.map(({ id, name }) => {
          return (
            <Link href={`/genres/${id}`} key={id} passHref>
              <a>
                <ListItem text={name} />
              </a>
            </Link>
          )
        })}
      </S.ListContainer>
    </Section>
  )
}

export default CategoriesList
