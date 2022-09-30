import React from 'react'

// Components
import Navbar from '@components/Navbar'

// Styles
import * as S from './styles'

type TLayoutProps = {
  children: JSX.Element | JSX.Element[]
}

const Layout: React.FC<TLayoutProps> = ({ children }: TLayoutProps) => {
  return (
    <S.Container>
      <S.TopBar>
        <Navbar />
      </S.TopBar>
      {children}
      <S.BottomBar>Hecho por @Liox 😊</S.BottomBar>
    </S.Container>
  )
}

export default Layout
