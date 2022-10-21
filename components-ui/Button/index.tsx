import React from 'react'
import { useRouter } from 'next/router'

// Styles
import SCButton from './styles'

type TButton = {
  children: JSX.Element | JSX.Element[] | string
  className?: string
  action?: string
  color?: string
  onClick?: () => void
}

const Button: React.FC<TButton> = (props: TButton) => {
  const { children, className, action, color, onClick } = props
  const router = useRouter()

  const ReturnPreviousPage = () => {
    router.back()
  }

  const listActions: { [key: string]: () => void } = {
    previousPage: ReturnPreviousPage
  }

  const EventOnClick = () => {
    if (action) {
      listActions[action]()
    }
    if (onClick) {
      onClick()
    }
  }

  return (
    <SCButton className={className} onClick={EventOnClick} color={color}>
      {children}
    </SCButton>
  )
}

export default Button
