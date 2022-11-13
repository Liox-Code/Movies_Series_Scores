import React, { ChangeEventHandler, MouseEventHandler } from 'react'

// Styles
import * as S from './styles'

type TSearchInput = {
  inputValue: string | string[]
  onChange?: ChangeEventHandler<HTMLInputElement>
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const SearchInput: React.FC<TSearchInput> = ({
  inputValue,
  onChange,
  onClick
}: TSearchInput) => {
  return (
    <S.Container>
      <S.SearchInputText
        name="SearchInputText"
        onChange={onChange}
        value={inputValue}
      />
      <S.SearchButton onClick={onClick} color="blue01">
        Buscar
      </S.SearchButton>
    </S.Container>
  )
}

export default SearchInput
