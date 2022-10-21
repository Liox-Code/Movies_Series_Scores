import React, { useState } from 'react'
import Link from 'next/link'

// Hooks
import useIfClickedOutside from '@hooks/useIfClickedOutside'

// Styles
import * as S from './styles'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const Links = [
    {
      id: 'lk-01',
      text: 'Home',
      path: '/'
    },
    {
      id: 'lk-02',
      text: 'Trends',
      path: '/trends'
    }
  ]

  const toggleNavbar = () => {
    setShowMenu(!showMenu)
  }

  const IfClickedOutside = useIfClickedOutside(() => {
    console.log('cerrar')
    setShowMenu(false)
  })

  return (
    <S.Container ref={IfClickedOutside}>
      {showMenu && (
        <S.Navbar>
          {Links.map(({ id, text, path }) => {
            return (
              <Link href={path} key={id} passHref>
                <S.Link>{text}</S.Link>
              </Link>
            )
          })}
        </S.Navbar>
      )}
      <S.ToggleButton onClick={toggleNavbar}>
        {showMenu ? 'CERRAR' : 'ABRIR'}
      </S.ToggleButton>
    </S.Container>
  )
}

export default Navbar
