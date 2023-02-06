import React from 'react'
import { ThemeProvider } from 'styled-components'

type TTheme = {
  children: JSX.Element | JSX.Element[]
}

const theme = {
  color: {
    default: 'transparent',
    blue01: 'var(--secondary-color)',
    blue02: 'var(--complementary-02-color)',
    blue03: 'var(--complementary-03-color)',
    blue04: 'var(--complementary-04-color)',
    blue05: 'var(--complementary-05-color)',
    purple01: 'var(--complementary-10-color)',
    purple02: 'var(--complementary-09-color)',
    purple03: 'var(--complementary-08-color)',
    purple04: 'var(--complementary-07-color)',
    purple05: 'var(--complementary-06-color)',
    red01: 'var(--primary-color)',
    red02: 'var(--complementary-11-color)'
  }
}

const Theme: React.FC<TTheme> = ({ children }: TTheme) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme
