import { useEffect, useRef } from 'react'

const useClickOutside = (handler: () => void) => {
  const refElement = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (
        refElement &&
        refElement.current &&
        !refElement.current.contains(e.target as Node)
      ) {
        handler()
      }
    }
    document.addEventListener('mousedown', checkIfClickedOutside)
    return () =>
      document.removeEventListener('mousedown', checkIfClickedOutside)
  }, [])

  return refElement
}

export default useClickOutside
