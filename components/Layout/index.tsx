import React from 'react'

// Components
import Navbar from '@components/Navbar'
import Theme from '@components/Theme'

// Styles
import * as S from './styles'

type TLayoutProps = {
  children: JSX.Element | JSX.Element[]
}

const Layout: React.FC<TLayoutProps> = ({ children }: TLayoutProps) => {
  return (
    <Theme>
      <S.Container>
        <S.TopBar>
          <Navbar />
        </S.TopBar>
        <S.MiddleContainer>{children}</S.MiddleContainer>
        <S.BottomBar>Hecho por @Liox 😊</S.BottomBar>
      </S.Container>
    </Theme>
  )
}

export default Layout
